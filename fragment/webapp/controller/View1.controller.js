sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment"
], (Controller, Fragment) => {
    "use strict";

    return Controller.extend("fragment.controller.View1", {
        onInit() {
            console.log("onInit")
            // Any initial setup can go here
            //this.oModel = this.getOwnerComponent().getModel()
        },
        onBeforeRendering(){
            console.log("onBeforeRendering")
},
onAfterRendering(){
    console.log("onAfterRendering")
},
        onOpenDialog: function () {
            if (!this.pDialog) {
                this.pDialog = Fragment.load({
                    id: this.getView().getId(),
                    name: "fragment.Fragments.Table",
                    controller: this
                }).then(function (oDialog) {
                    this._oDialog = oDialog;
                    this.getView().addDependent(oDialog);
                    return oDialog;
                }.bind(this));
            }

            this.pDialog.then(function (oDialog) {
                oDialog.open();
                this.loaddata(oDialog);
                
            }.bind(this));
        },

        onCloseDialog: function () {
            this.byId("productDialog").close();
        },

        loaddata: function(oDialog) {
           
            var that = this;
            var sUrl = '/v2/northwind/northwind.svc/'
            var oModel = new sap.ui.model.odata.v2.ODataModel(sUrl)
            var oFilter = new sap.ui.model.Filter(
                "UnitPrice", sap.ui.model.FilterOperator.GT, 10
            )

            oModel.read("/Products", {
                filters:[oFilter],
                success: function(oData) {
                    console.log("right after success",oData)
                    var oJSONModel = new sap.ui.model.json.JSONModel(oData)
                    console.log("right after conver",oJSONModel)
                    that.getView().setModel(oJSONModel,"Products")
                },
                error: function(oError) {
                    // Handle error
                }
            });
        }
    });
});
