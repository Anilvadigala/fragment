sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller,MessageToast) => {
    "use strict";

    return Controller.extend("customcontrol.controller.View1", {
        onRatingChanged:function(oEvent){
var ivalue = oEvent.getParameter("value")
MessageToast.show("Your new rating value is "+ivalue)
        }
    });
});