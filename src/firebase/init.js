import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyCFQhLe6OTBaaA_VBLPJfb2u7Z0XhOqItM",
  authDomain: "vuejs-chat-4f01d.firebaseapp.com",
  databaseURL: "https://vuejs-chat-4f01d.firebaseio.com",
  projectId: "vuejs-chat-4f01d",
  storageBucket: "vuejs-chat-4f01d.appspot.com",
  messagingSenderId: "107183257504",
  appId: "1:107183257504:web:c7a5cc52dff776242a16c5",
  measurementId: "G-BD60W51F9L"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

firebaseApp.firestore().settings({
  timestampsInSnapshots: true
})

export default firebaseApp.firestore()
