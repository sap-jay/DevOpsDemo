const { EdmTypeField } = require('@sap-cloud-sdk/core');
const cds = require('@sap/cds');
const express = require('express');
const app = express();

module.exports = cds.service.impl(async function () {
    const { UserInfoHeaders, UserParameters } = this.entities;

    // connect to remote service
    const scimService = await cds.connect.to('UserManagementSCIM');
    let scimResponse;

    this.on('READ', UserInfoHeaders, async (req, res, next) => {
        // Fetch data from SCIM service 

        const filter = req.query
        const haveFilters = Object.keys(filter).length;
        console.log(req._query.$filter)

        if (req._query.$filter) {
            //const filter = `filter=(id eq '${id}')`;
            const filter = `filter=(${req._query.$filter})`;
            scimResponse = await scimService.tx(req).get(`/Users?${filter}`);
            console.log(scimResponse);
        }
        else if (req.data.id) {
            console.log(req.data.id);
            const id = req.data.id;
            const filter = `filter=(id eq '${id}')`;
            scimResponse = await scimService.tx(req).get(`/Users?${filter}`);
            console.log(scimResponse);
        }
        else {
            scimResponse = await scimService.tx(req).get('/Users');
        };

        const usrdataFromScim = scimResponse.resources;

        if (Array.isArray(scimResponse.resources)) {
            const UserData = [];
            usrdataFromScim.forEach(user => {
                UserData.push(
                    {
                        id: user.id,
                        userName: user.userName,
                        active: user.active,
                        verified: user.verified,
                        origin: user.origin,
                        zoneId: user.zoneId,
                        passwordLastModified: user.passwordLastModified,
                    }
                );
            });

            // If parameters are requested, fetch them from UserParameters
            if (req.query.SELECT.columns.some(({ expand, ref }) => expand && ref[0] === "parameters")) {
                console.log('expand called');
                await Promise.all(
                    UserData.map(async (userInfoHeader) => {
                        const parameters = await SELECT.from(UserParameters).where({ id: userInfoHeader.id });
                        userInfoHeader.parameters = parameters;
                    })
                );
            }

            if (req._query.$count) {
                // Handle $count query option 
                UserData.$count = UserData.length;
            }
            return UserData;
        } else {
            console.error('Expected an array but got:', scimResponse.resources);
        }
    });

    this.on('READ', UserParameters, async (req) => {
        let userParameters;

        let {from,columns,where,orderBy,limit} = req.query.SELECT;

        if (req.params && Object.keys(req.params).length > 0) {
            if (req.params[1]) {
                userParameters = await SELECT.from(UserParameters).where({ ID: req.params[1] });
            } else {
                userParameters = await SELECT.from(UserParameters).where({ Userid: req.params[0].id });
            }
            console.log(userParameters);
        } else if (where) {
            // Parse the where object and convert it into a format that your SELECT.from(UserParameters).where() function can understand
            let filter = {};
            for (let i = 0; i < where.length; i += 4) {
                filter[where[i].ref[0]] = where[i + 2].val;
            }
            userParameters = await SELECT.from(UserParameters).where(filter);
        } else {
            userParameters = await SELECT.from(UserParameters);
        };

        // if (req.params && Object.keys(req.params).length > 0) {
        //     if (req.params[1]) {
        //         userParameters = await SELECT.from(UserParameters).where({ ID: req.params[1] });
        //     } else {
        //         userParameters = await SELECT.from(UserParameters).where({ Userid: req.params[0].id });
        //     }
        //     console.log(userParameters);
        // } else {
        //     userParameters = await SELECT.from(UserParameters);
        // };

        if (req.query.SELECT.count == true) {
            userParameters.$count = userParameters.length;
        }

        // Check if any data is returned
        if (Array.isArray(userParameters)) {
            return userParameters;
        } else {
            console.error('Expected an array but got:', userParameters);
        }

    });

    this.on('CreateParam', async (req) => {
        try {

            const { ParameterID, ParameterValue } = req.data;
            const UserID = req.params[0].id; // Extract UserID from the request
            const UserParam = [];
            UserParam.push(
                {
                    Userid: UserID,
                    parameterId: ParameterID,
                    parameterValue: ParameterValue
                }
            );
            // Insert the data into the UserParameters table
            const inserted = await cds.tx(req).run(INSERT.into('bsci.btp.AdminApps.UserParameters').entries(UserParam));

            const updatedParameters = await SELECT.from(UserParameters).where({ Userid: req.params[0].id });;
            //console.log(updatedParameters);
            updatedParameters.$count = updatedParameters.length;

            req.info({
                code: 'Created',
                message: 'Parameter created successfully.',
                status: 201
            });
            return updatedParameters;
        } catch (error) {
            // Return a failure message
            req.error({
                code: 'Not-Created',
                message: `Failed to create parameter: ${error.message}`,
                status: 301
            });
        }
    });

    this.on('DeleteParam', async (req) => {
        // Access selected fields
        try {
            const selectedFields = req.params[1];
            console.log(selectedFields);

            // Perform deletion operation
            const deleted = await DELETE.from('bsci.btp.AdminApps.UserParameters').where({ ID: req.params[1] });
            console.log(`Deleted ${deleted} entries`);

            const updatedParameters = await SELECT.from('bsci.btp.AdminApps.UserParameters').where({ Userid: req.params[0].id });
            //console.log(updatedParameters);
            updatedParameters.$count = updatedParameters.length;

            req.info({
                code: 'Deleted',
                message: 'Parameter deleted successfully.',
                status: 202
            });
            return updatedParameters;
        } catch (error) {
            // Return a failure message
            req.error({
                code: 'Not-Created',
                message: `Failed to delete parameter: ${error.message}`,
                status: 301
            });
        }
    });

    this.on('EditParam', async (req) => {

        try {
            const { ParameterKey, ParameterID, ParameterValue } = req.data;
            const UserID = req.params[0].id; // Extract UserID from the request

            // Insert the data into the UserParameters table
            const updated = await cds.tx(req).run(
                UPDATE('bsci.btp.AdminApps.UserParameters')
                    .set({
                        parameterId: ParameterID,
                        parameterValue: ParameterValue
                    })
                    .where({
                        Userid: UserID,
                        ID: ParameterKey
                    })
            );

            const updatedParameters = await SELECT.from(UserParameters).where({ Userid: req.params[0].id });;

            console.log(updatedParameters);
            updatedParameters.$count = updatedParameters.length;

            req.info({
                code: 'Updated',
                message: 'Parameter Updated successfully.',
                status: 201
            });
            return updatedParameters;
        } catch (error) {
            // Return a failure message
            req.error({
                code: 'Not-Updated',
                message: `Failed to update parameter: ${error.message}`,
                status: 301
            });
        }
    });
});

