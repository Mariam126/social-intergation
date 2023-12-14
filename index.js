let bttnn =document.getElementById('log');
//javascript callback function for intergating google login
function loginCallback(response){
    location.href='main.html'
  alert("congrats! you are successfully login to the website");
       console.log(response)
      }
      bttnn.onclick=function logOut(){
        google.accounts.id.revoke("enter your email here",()=>{
            location.href="index.html";
            alert("Log out is done successfully");
        })
        }
    