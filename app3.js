let popped = 0;
document.addEventListener('mouseover', function(game){
    
    if (game.target.className === "lv3"){
        
                game.target.style.backgroundColor = "lightblue";
                game.target.textContent = "POP";
                popped++;
                removeEvent(game);
                checkAllPopped();
    } 
    else if (game.target.className === "wr3")  {
        game.target.style.backgroundColor = "red";
        game.target.textContent = "FAIL";
        
    }
        

    
});

function removeEvent(game){
    game.target.removeEventListener('mouseover', function(){
        
    })
};


function checkAllPopped(){
    if (popped === 0){
        console.log('all popped!');
        let gallery = document.querySelector('#balloon');
        let message = document.querySelector('#congrats3');
        gallery.innerHTML = '';
        message.style.display = 'block';
    }
   alert("congrats")
};