import * as firebase from 'firebase';



const firebaseConfig = {
    apiKey: "AIzaSyDHbGRS49qD2PN9Bl0aKxmt8l7EiTzS1Fc",
    authDomain: "react-expense-app-1ef5c.firebaseapp.com",
    databaseURL: "https://react-expense-app-1ef5c.firebaseio.com",
    projectId: "react-expense-app-1ef5c",
    storageBucket: "react-expense-app-1ef5c.appspot.com",
    messagingSenderId: "102081874459",
    appId: "1:102081874459:web:80a5eef527574ea8a346be",
    measurementId: "G-4QKSHVHX4Q"
};

   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   
    const database = firebase.database();

    export { firebase, database as default};
















    // //listens for child being removed from db
    // database.ref('expenses').on('child_removed', (snapshot) => {
    //     console.log(snapshot.key, snapshot.val());
    // });

    // //listens for child being changed in db
    // database.ref('expenses').on('child_changed', (snapshot) => {
    //     console.log(snapshot.key, snapshot.val());
    // });

    // database.ref('expenses').on('child_added', (snapshot) => {
    //     console.log(snapshot.key, snapshot.val());
    // });


    // database.ref('expense')
    // .once('value')
    // .then((snapshot) => {
    //     const expenses = [];

    //     snapshot.forEach((childSnapshot) => {
    //         expenses.push({
    //             id: childSnapshot.key,
    //             ...childSnapshot.val()
    //         });
    //     });

    //     console.log(expenses);
    // });

    // database.ref('expenses').on('value', (snapshot) => {
    //     const expenses = [];
    //         snapshot.forEach((childSnapshot) => {
    //             expenses.push({
    //                 id: childSnapshot.key,
    //                 ...childSnapshot.val()
    //             });
    //         });

    //         console.log(expenses);
    // });


    // database.ref('notes/-M8sAZrb9cgOkvmcZA7e').remove();

    // database.ref('expenses').push({
    //     description: 'Rent',
    //     note: '',
    //     amount: 109500,
    //     createdAt: 94541321344
    // });


//    const firebaseNotes = {
//     notes: {
//         1: {
//             title: 'First note!',
//             body: 'This is my note'
//         },
//         2: {
//             title: 'Another note',
//             body: 'This is my note'
//         }
//     }
//    };

//     const notes = [{
//         id: '12',
//         title: 'First note!',
//         body: 'This is my note'
//     }, {
//         id: '761ase',
//         title: 'Another note',
//         body: 'This is my note'
//     }]

//     database.ref('notes').set(notes);



