(function (window){
    'use strict';
    var DAMAGE_DISPLAY = '[data-total-damage]';
    var FIREBASE_SERVER_URL = 'http://';
    var App = window.App;
    var FirebaseDataStore = App.FirebaseDataStore;
    
    var datastore = new FirebaseDataStore(FIREBASE_SERVER_URL);
    var global_damage_player = datastore.damage_global;
    print(global_damage_player)

})(window)