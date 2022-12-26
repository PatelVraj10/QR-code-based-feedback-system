import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword,  createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);


//   document.getElementById("reg-btn").addEventListener('click', function(){
//    document.getElementById("register-div").style.display="inline";
//    document.getElementById("login-div").style.display="none";
// });

// document.getElementById("log-btn").addEventListener('click', function(){
//  document.getElementById("register-div").style.display="none";
//  document.getElementById("login-div").style.display="inline";

// });

  document.getElementById("login-btn").addEventListener('click', function(){
   const loginEmail= document.getElementById("login-email").value;
   const loginPassword =document.getElementById("login-password").value;

  //  signInWithEmailAndPassword(auth, loginEmail, loginPassword)
  // .then((userCredential) => {
  //   const user = userCredential.user;
  //   document.getElementById("result-box").style.display="inline";
  //    document.getElementById("login-div").style.display="none";
  //   //  document.getElementById("result").innerHTML="Welcome Back<br>"+loginEmail+" was Login Successfully";
  //    window.location.href="index.html";
     
  // })
  signInWithEmailAndPassword(auth, loginEmail, loginPassword)
  .then((userCredential) => {
    const user = userCredential.user;
    document.getElementById("result-box").style.display="inline";
     document.getElementById("login-div").style.display="none";
     document.getElementById("result").innerHTML="Welcome Back<br>"+loginEmail+" was Login Successfully";

     let userEmail= document.getElementById("login-email").value;
     let userPassword =document.getElementById("login-password").value;
   
     let userData = {

      emailId : userEmail,
      password : userPassword,
     };

     let convertedUserData = JSON.stringify(userData);
     sessionStorage.setItem('user-login',convertedUserData);
     location.href="dashboard.php";
     
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    document.getElementById("result-box").style.display="inline";
     document.getElementById("login-div").style.display="none";
     document.getElementById("result").innerHTML="Sorry ! <br>"+errorMessage;

  });
});


//   document.getElementById("register-btn").addEventListener('click', function(){

//    const registerEmail= document.getElementById("register-email").value;
//    const registerPassword =document.getElementById("register-password").value;

//    createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
//   .then((userCredential) => {
//     const user = userCredential.user;
//     document.getElementById("result-box").style.display="inline";
//      document.getElementById("register-div").style.display="none";
//      document.getElementById("result").innerHTML="Welcome <br>"+registerEmail+" was Registered Successfully";
  // })
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   document.getElementById("result-box").style.display="inline";
  //    document.getElementById("register-div").style.display="none";
  //    document.getElementById("result").innerHTML="Sorry ! <br>"+errorMessage;

  // });
// });


document.getElementById("log-out-btn").addEventListener('click', function(){
  signOut(auth).then(() => {
     document.getElementById("result-box").style.display="none";
       document.getElementById("login-div").style.display="inline";
  })
  .catch((error) => {
     document.getElementById("result").innerHTML="Sorry ! <br>"+errorMessage;
  });

});
