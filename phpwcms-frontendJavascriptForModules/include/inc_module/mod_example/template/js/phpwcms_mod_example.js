//loaded after phpwcms_mod.js

PHPWCMS_MODULE.createNamespace("GM");

(function( GM, undefined ) {

    //Private Property
    var abc = true;

    //Private Methods
    function myPrivateMethod( item ) {
        //do stuff
    }


    //Public Property
    GM.myproperty = "Google Maps Module";


    //Public Methods
    GM.Map = (function () {
    //call instance with; var myNewMap = new PHPWCMS_MODULE.GM.Map();

        var mapConstructor = {};

        mapConstructor.init = function (name) {
            //do stuff
        }();

        mapConstructor.getMap = function (item, cpid) {
            //do stuff
        };

        return mapConstructor;
    });

}( window.PHPWCMS_MODULE.GM = window.PHPWCMS_MODULE.GM || {} ));


//in new file
(function( GM ) {
    //do stuff
}( window.PHPWCMS_MODULE.GM || {}));


