import * as firebase from 'firebase';

const config = {
 apiKey: "AIzaSyBWyOMuCRE2GOZmp4nreJ9jBA0d9lMUnow",
  authDomain: "goalcoach-466fe.firebaseapp.com",
  databaseURL: "https://goalcoach-466fe.firebaseio.com",
  projectId: "goalcoach-466fe",
  storageBucket: "",
  messagingSenderId: "328449558515"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');