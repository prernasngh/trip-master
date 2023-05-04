  const firebaseConfig = {
    apiKey: "AIzaSyBuvDOtLCrCNIgecrj-zvnfNCtbOIICNv4",
    authDomain: "contactf-fda19.firebaseapp.com",
    databaseURL: "https://contactf-fda19-default-rtdb.firebaseio.com",
    projectId: "contactf-fda19",
    storageBucket: "contactf-fda19.appspot.com",
    messagingSenderId: "142413584827",
    appId: "1:142413584827:web:b3d9341f8b42b9ee2d4c9e"
  };
  firebase.initializeApp(firebaseConfig);

  var contactFormDB=firebase.database().ref("contactF");
  document.getElementById("contactF").addEventListener("submit",submitForm);
  function submitForm(e)
  {
    e.preventDefault();
    var name=getElementVal("name");
    var emailid=getElementVal("emailid");
    var subject=getElementVal("subject");
    var msgContent=getElementVal("msgContent");
    saveMessages(name,emailid,subject,msgContent);
    alert("Message sent successfully!");
    document.getElementById("contactF").reset();
  }
  const saveMessages=(name,emailid,subject,msgContent)=>{
     var newContactForm=contactFormDB.push();
     newContactForm.set({
         name:name,
         emailid:emailid,
         subject:subject,
         msgContent:msgContent,
     });
  };
  
  const getElementVal=(id)=>{
    return document.getElementById(id).value;
  };


let searchBtn=document.querySelector('#search-btn');
let searchBar=document.querySelector('.search-bar-container');

let formBtn=document.querySelector('#login-btn');
let loginForm=document.querySelector('.login-form-container');
let formClose=document.querySelector('#form-close');

let menu=document.querySelector('#menu-bar');
let navbar=document.querySelector('.navbar');

window.onscroll=()=>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    // loginForm.classList.remove('active');
}

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click',()=>{
    loginForm.classList.remove('active');
});
document.getElementById("bookB").addEventListener("submit",booked);
function booked()
{
    alert("Booked successfully!");
    document.getElementById("bookB").reset();
}
  
