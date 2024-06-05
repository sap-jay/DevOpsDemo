async function getData(req) {
    try {
        const scimService = await cds.connect.to('UserManagementSCIM');
        const scimResponse = await scimService.tx(req).get('/Users');
        const usrdataFromScim = scimResponse.resources;

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
     return UserData;
        
    } catch (err) {
        req.error(err.code, err.message);
    }
}