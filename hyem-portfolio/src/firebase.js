import Firebase from 'firebase'
const firebaseApp = Firebase.initializeApp({
    apiKey: "AIzaSyAv23fBohWbN31uV5WvgwFR-eyQ9QqVZp8",
    authDomain: "hyem-portfolio.firebaseapp.com",
    databaseURL: "https://hyem-portfolio.firebaseio.com",
    projectId: "hyem-portfolio",
    storageBucket: "hyem-portfolio.appspot.com",
    messagingSenderId: "396579478380",
    appId: "1:396579478380:web:0640198cf0eda11dc53149",
    measurementId: "G-F6WG6TEZSQ"
})
const db = firebaseApp.database()
export default db