import React, { useRef, useState } from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';


firebase.initializeApp({
    apiKey: "AIzaSyD4DZVB1YC2IoHLP4n7jGd67pmswROFUpM",
  authDomain: "chatapp-7d171.firebaseapp.com",
  projectId: "chatapp-7d171",
  storageBucket: "chatapp-7d171.appspot.com",
  messagingSenderId: "793965761097",
  appId: "1:793965761097:web:88b0fa9539885a7a12e598",
  measurementId: "G-436VVH167K"
})

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();



function App() {

  const [user] = useAuthState(auth);
     
  
  return (
    <div className='App'>
          <header>
          <h1>⚛️🔥💬</h1>
            <SignOut />
          </header>

          <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
        </div>
  )
}


//add signin function
function SignIn() { 
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
      <p>Do not violate the community guidelines or you will be banned for life!</p>
    </>
  )
}
//add signout function
function SignOut() {
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
  )
}



export default App
