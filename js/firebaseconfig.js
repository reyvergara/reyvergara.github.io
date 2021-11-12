(function (window) {
    'use strict';
    var App = window.App || {};
    
/*       window.FirebaseConfig = {
        apiKey: "a string from Firestore",
        authDomain: "a string from Firestore",
        projectId: "a string from Firestore",
        storageBucket: "a string from Firestore",
        messagingSenderId: "a string from Firestore",
        appId: "a string from Firestore",
        measurementId: "a string from Firestore"
      };
     App.FirebaseConfig = FirebaseConfig;
     firebase.initilalizeApp(App.FirebaseConfig); */


     const firebaseConfig = {
        apiKey: "AIzaSyCSZBeeq05N8kd0DNONhvKmvs_RTGLWl3c",
        authDomain: "rpg-damage-tracker.firebaseapp.com",
        projectId: "rpg-damage-tracker",
        storageBucket: "rpg-damage-tracker.appspot.com",
        messagingSenderId: "375182791042",
        appId: "1:375182791042:web:faf131b3e92c3e3f79ff9b"
      };
    // Initialize Firebase
    App.FirebaseConfig = FirebaseConfig;
    firebase.initializeApp(App.FirebaseConfig);

    window.App = App;
  
  })(window);
