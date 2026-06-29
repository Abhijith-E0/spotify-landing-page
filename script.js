const authBox = document.getElementById("authBox");


const loginButtons = document.querySelectorAll(".loginbtn");

const signupButtons = document.querySelectorAll(".signUpBtn");

const para = document.querySelectorAll(".para");
const closeBtn = document.getElementById("closeBtn");


const loginForm = document.getElementById("loginForm");

const signupForm = document.getElementById("signupForm");


const showSignup = document.getElementById("showSignup");

const showLogin = document.getElementById("showLogin");

const instagram = document.querySelector(".instagram");
const facebook = document.querySelector(".facebook");
const twitter = document.querySelector(".twiter");


instagram.addEventListener("click", () => {

    window.open(
        "https://www.instagram.com/spotify/",
        "_blank"
    );

});


facebook.addEventListener("click", () => {

    window.open(
        "https://www.facebook.com/search/top?q=spotify/",
        "_blank"
    );

});


twitter.addEventListener("click", () => {

    window.open(
        "https://x.com/Spotify",
        "_blank"
    );

});


// open login

loginButtons.forEach(btn=>{

    btn.onclick=()=>{

        authBox.style.display="flex";

        loginForm.classList.remove("hide");

        signupForm.classList.add("hide");

    }

});



// open signup

signupButtons.forEach(btn=>{

    btn.onclick=()=>{

        authBox.style.display="flex";

        signupForm.classList.remove("hide");

        loginForm.classList.add("hide");

    }

});
para.forEach(btn=>{

    btn.onclick=()=>{

        authBox.style.display="flex";

        signupForm.classList.remove("hide");

        loginForm.classList.add("hide");

    }

});

authBox.onclick=(e)=>{

    if(e.target === authBox){

        authBox.classList.remove("active");

    }

}



// close popup

closeBtn.onclick=()=>{

    authBox.style.display="none";

};



// switch signup

showSignup.onclick=()=>{

    loginForm.classList.add("hide");

    signupForm.classList.remove("hide");

};



// switch login

showLogin.onclick=()=>{

    signupForm.classList.add("hide");

    loginForm.classList.remove("hide");

};