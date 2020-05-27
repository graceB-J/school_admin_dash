import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDyCv_Yyn_oinDd4Pwch0ChjZ_uuOHUkFM",
    authDomain: "school-admin-dash.firebaseapp.com",
    databaseURL: "https://school-admin-dash.firebaseio.com",
    projectId: "school-admin-dash",
    storageBucket: "school-admin-dash.appspot.com",
    messagingSenderId: "778087391619",
    appId: "1:778087391619:web:e74902557550beb0a316b6",
    measurementId: "G-44T5XSHV4C"
};
firebase.initializeApp(config);
export default firebase;