using {bsci.btp.AdminApps as admaps} from '../db/AdminApps';

service UserParametersSrv {
    entity UserInfoHeaders {
        key id                   : String;
            userName             : String;
            active               : Boolean;
            verified             : Boolean;
            origin               : String;
            zoneId               : String;
            passwordLastModified : DateTime;
            parameters           : Association to many UserParameters
                                       on parameters.Userid = $self.id;
    }

    type parameter : {
        ParameterKey   : UUID;
        ParameterID    : String;
        ParameterValue : String;
    };


    @Capabilities.SortRestrictions.NonSortableProperties: [
        createdAt,
        createdBy,
        modifiedAt,
        modifiedBy
    ]

    entity UserParameters as projection on admaps.UserParameters
        actions {
            @(
                cds.odata.bindingparameter.name: '_it',
                Common.SideEffects             : {TargetEntities: ['_it']}
            )
            @cds.odata.bindingparameter.collection

            action CreateParam(ParameterID : String, ParameterValue : String) returns UserParameters;
            
            action DeleteParam()                                              returns UserParameters;
            
            @cds.odata.bindingparameter.name: '_it'
            @Common.SideEffects             : {TargetEntities: ['_it']}
            action EditParam(
                             @UI.ParameterDefaultValue: _it.ID
                             ParameterKey : parameter:ParameterKey,
                             @UI.ParameterDefaultValue: _it.parameterId
                             ParameterID : parameter:ParameterID,
                             @UI.ParameterDefaultValue: _it.parameterValue
                             ParameterValue : parameter:ParameterValue)       returns UserParameters;
        };
}
