sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'zmpool/managecustomers/test/integration/FirstJourney',
		'zmpool/managecustomers/test/integration/pages/CustomersList',
		'zmpool/managecustomers/test/integration/pages/CustomersObjectPage',
		'zmpool/managecustomers/test/integration/pages/OrdersObjectPage'
    ],
    function(JourneyRunner, opaJourney, CustomersList, CustomersObjectPage, OrdersObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('zmpool/managecustomers') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheCustomersList: CustomersList,
					onTheCustomersObjectPage: CustomersObjectPage,
					onTheOrdersObjectPage: OrdersObjectPage
                }
            },
            opaJourney.run
        );
    }
);