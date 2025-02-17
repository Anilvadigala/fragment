sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("readwriteodata.controller.View1", {
        onInit() {
            var oModel = new sap.ui.model.odata.v2.ODataModel("https://cors-anywhere.herokuapp.com/https://services.odata.org/V2/(S(zqcbvco0qigzehbm4tjbv0fn))/OData/OData.svc");
        
            oModel.read("/Products", {
                success: function(oData) {
                    console.log(oData);
                },
                error: function(oError) {
                    console.error(oError);
                }
            });
        }
    });
});