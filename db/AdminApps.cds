    using {
        managed,
        User,
        cuid
    } from '@sap/cds/common';

    namespace bsci.btp.AdminApps;
    entity UserParameters : cuid, managed {
            Userid         : String;
            parameterId    : String;
            parameterValue : String;
            createdAt      : Timestamp  @cds.on.insert: $now;
            createdBy      : User       @cds.on.insert: $user;
            modifiedAt     : Timestamp  @cds.on.insert: $now   @cds.on.update: $now;
            modifiedBy     : User       @cds.on.insert: $user  @cds.on.update: $user;
    }
