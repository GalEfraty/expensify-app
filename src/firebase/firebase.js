import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// db.ref('expenses').on('child_changed', (snapshot) => {
//     console.log('child_changed! ', snapshot.key, snapshot.val())
// })
// db.ref('expenses').on('child_changed', (snapshot) => {
//     console.log('child_changed! ', snapshot.key, snapshot.val())
// })
// db.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// db.ref("expenses")
//   .on("value", snapshot => {
//     const expenses = [];
//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   })

// db.ref("expenses/-LqGrqQh55r-joiB3yfF/amount").set(2400);

// db.ref('expenses').push({
//     description: 'rent',
//     amount: 2650,
//     note: 'month 9',
//     createdAt: 0
// })

// db.ref('notes').push({
//     title: 'study react',
//     body: 'include firebase and nodeJS'
// })
// db.ref('notes').push({
//     title: 'study nodeJS',
//     body: 'include mongoDB and nodeJS'
// })

// db.ref()
//   .set({
//     name: "Gal Efraty",
//     age: 26,
//     stressLevel: 6,
//     job: {
//       title: "web developer",
//       company: "google"
//     },
//     isSingle: true,
//     location: {
//       city: "Tel Aviv",
//       country: "Israel"
//     }
//   })
//   .then(() => console.log("data is saved"))
//   .catch(error => console.log("this is failed", error));

// db.ref().update({
//   stressLevel: 9,
//   "job/company": "amazon",
//   "location/city": "jaffa"
// });

// db.ref('location')
//   .once('value')
//   .then((snapshot) => {
//       const val = snapshot.val()
//       console.log(val)
//     })
//     .catch((error) => console.log('Error fetching data', error))

// const onValueChange =  db.ref().on("value", snapshot => {
//   console.log(snapshot.val());
// }), (error) => {
//     console.log('Error with data fetching: ', error)
// } ;

// setTimeout(() => {
//   db.ref("age").set(29);
// }, 3500);

// setTimeout(() => {
//   db.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//   db.ref("age").set(30);
// }, 10500);

// db.ref().on('value', (snapshot) => {
//     const val = snapshot.val()
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// })
