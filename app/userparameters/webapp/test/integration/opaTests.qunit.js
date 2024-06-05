sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/bsci/userparameters/test/integration/FirstJourney',
		'com/bsci/userparameters/test/integration/pages/UserInfoHeadersList',
		'com/bsci/userparameters/test/integration/pages/UserInfoHeadersObjectPage',
		'com/bsci/userparameters/test/integration/pages/UserParametersObjectPage'
    ],
    function(JourneyRunner, opaJourney, UserInfoHeadersList, UserInfoHeadersObjectPage, UserParametersObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/bsci/userparameters') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheUserInfoHeadersList: UserInfoHeadersList,
					onTheUserInfoHeadersObjectPage: UserInfoHeadersObjectPage,
					onTheUserParametersObjectPage: UserParametersObjectPage
                }
            },
            opaJourney.run
        );
    }
);