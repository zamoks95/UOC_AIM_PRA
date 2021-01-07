import firebase  from 'firebase';

// usad vuestros datos aquí:
var firebaseConfig = {
    apiKey: "AIzaSyD8KoKl_TzjkwHZHvAzuSNgFRZjDbXyGw0",
    authDomain: "uocify-a83c3.firebaseapp.com",
    databaseURL: "https://uocify.firebaseio.com",
    projectId: "uocify-a83c3",
    storageBucket: "uocify-a83c3.appspot.com",
    messagingSenderId: "1034068895866",
    appId: "1:1034068895866:web:1a808727c284c9083c33c3",
    measurementId: "G-L4N053PNXK",
};

const app = firebase .initializeApp(firebaseConfig);

export const db = app.database();