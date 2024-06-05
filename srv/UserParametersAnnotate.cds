using UserParametersSrv from './UserParametersSrv';

annotate UserParametersSrv.UserInfoHeaders with @(UI: {
  DeleteHidden   : true,
  CreateHidden   : true,

  HeaderInfo     : {
    $Type         : 'UI.HeaderInfoType',
    TypeName      : 'User Parameter',
    TypeNamePlural: 'User Parameters',
    Title         : {
      $Type: 'UI.DataField',
      Value: id
    },
    Description   : {
      $Type: 'UI.DataField',
      Value: userName
    }
  },
  SelectionFields: [id],
  LineItem       : [
    {
      $Type         : 'UI.DataField',
      Value         : id,
      @UI.Importance: #High
    },
    {
      $Type         : 'UI.DataField',
      Value         : userName,
      @UI.Importance: #High
    },
    {
      $Type         : 'UI.DataField',
      Value         : active,
      @UI.Importance: #High
    },
    {
      $Type         : 'UI.DataField',
      Value         : verified,
      @UI.Importance: #High
    },
    {
      $Type         : 'UI.DataField',
      Value         : origin,
      @UI.Importance: #High
    },
    {
      $Type         : 'UI.DataField',
      Value         : zoneId,
      @UI.Importance: #High
    },
    {
      $Type         : 'UI.DataField',
      Value         : passwordLastModified,
      @UI.Importance: #High
    }
  ],
});

annotate UserParametersSrv.UserInfoHeaders with {
  id                   @(
    title              : 'User ID',
    Common.FieldControl: #Mandatory
  );
  userName             @(
    title              : 'User Name',
    Common.FieldControl: #Mandatory
  );
  origin               @(
    title    : 'Origin IdP',
    UI.Hidden: true
  );
  zoneId               @(
    title              : 'Zone Id',
    Common.FieldControl: #Mandatory
  );
  passwordLastModified @(
    title              : 'Password Last Modified',
    Common.FieldControl: #Mandatory
  );
  active               @(title: 'Is Active');
  verified             @(title: 'Is Verified');
};

annotate UserParametersSrv.UserInfoHeaders with @(UI: {
  FieldGroup #General: {
    $Type: 'UI.FieldGroupType',
    Data : [
      {
        $Type: 'UI.DataField',
        Value: id,
      },
      {
        $Type: 'UI.DataField',
        Value: userName,
      }
    ]
  },
  Facets             : [
    {
      $Type : 'UI.ReferenceFacet',
      ID    : 'General',
      Label : 'General',
      Target: '@UI.FieldGroup#General',
    },
    {
      $Type : 'UI.ReferenceFacet',
      Label : 'User Parameters',
      ID    : 'UserParameters',
      Target: 'parameters/@UI.LineItem#Parameters',
    }
  ]
});

annotate UserParametersSrv.UserParameters with @(UI: {
  HeaderInfo          : {
    $Type         : 'UI.HeaderInfoType',
    TypeName      : 'User Parameter',
    TypeNamePlural: 'User Parameters',
    Title         : {
      $Type: 'UI.DataField',
      Value: parameterId
    },
    Description   : {
      $Type: 'UI.DataField',
      Value: parameterValue
    }
  },
  LineItem #Parameters: [
    {
      $Type: 'UI.DataField',
      Value: parameterId
    },
    {
      $Type: 'UI.DataField',
      Value: parameterValue
    },
    {
      $Type             : 'UI.DataFieldForAction',
      Label             : 'Create',
      Action            : 'UserParametersSrv.CreateParam',
      InvocationGrouping: #Isolated
    },
    {
      $Type             : 'UI.DataFieldForAction',
      Label             : 'Delete',
      Action            : 'UserParametersSrv.DeleteParam',
      InvocationGrouping: #Isolated
    },
    {
      $Type        : 'UI.DataFieldForAction',
      Action       : 'UserParametersSrv.EditParam',
      Label        : 'Edit',
      Inline       : true,
      IconUrl      : 'sap-icon://edit',
      Criticality  : #Positive,
      InvocationGrouping: #Isolated
    },
  ]
});

annotate UserParametersSrv.UserParameters @(Capabilities: {
  SearchRestrictions: {
    $Type     : 'Capabilities.SearchRestrictionsType',
    Searchable: false
  },
  Insertable        : true,
  Deletable         : true,
  Updatable         : true
});


annotate UserParametersSrv.UserParameters with {
  ID             @(
    title              : 'Parameter Key',
    Common.FieldControl: #Mandatory
  );
  parameterId    @(
    title              : 'Parameter Id',
    Common.FieldControl: #Mandatory
  );
  parameterValue @(
    title              : 'Parameter Value',
    Common.FieldControl: #Mandatory
  );
};
