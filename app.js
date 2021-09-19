

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password);



    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            // ..
        });
}

function logout() {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
}

function signup() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password);
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
        });
}

let popped = 0;


document.addEventListener('mouseover', function(game){
    
    if (game.target.className === "lv1"){
        
                game.target.style.backgroundColor = "white";
                game.target.textContent = "POP";
                popped++;
                removeEvent(game);
                checkAllPopped();
    } 
    else if (game.target.className === "wrong")  {
        game.target.style.backgroundColor = "#ededed";
        game.target.textContent = "FAIL";
        removeEvent(game);
        checkAllPopped();
    }
        

    
});

function removeEvent(game){
    game.target.removeEventListener('mouseover', function(){
        
    })
};


function checkAllPopped(){
    if (popped === 4){
        console.log('all popped!');
        let gallery = document.querySelector('#balloon');
        let message = document.querySelector('#congrats');
        gallery.innerHTML = '';
        message.style.display = 'block';
    }
   
};

