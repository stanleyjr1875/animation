var female = document.querySelector('.female')
var headline1 = document.querySelector('.headline1')
var headline2 = document.querySelector('.headline2')
var subheadline = document.querySelector('.subheadline')
var learnmore = document.querySelector('.learnmore')
var logo = document.querySelector('.logo')
var replay = document.querySelector('.replay')

function fadeIn(element) {
    element.classList.remove("fade");
    element.classList.add("show");
}

function fadeOut(element) {
    element.classList.remove("show");
    element.classList.add("fade");
}

function slideIn(element) {
    element.classList.remove("slide-out")
    element.classList.add("slide-in")
}

function slideIn2(element) {
    
    element.classList.add("slide-in2")
}

function slideOut(element) {
    element.classList.remove("slide-in")
    element.classList.add("slide-out")
}

function slideRightIn(element) {
    element.classList.remove("slide-rightout")
    element.classList.add("slide-rightin")
}

function slideRightOut(element) {
    element.classList.remove("slide-rightin")
    element.classList.add("slide-rightout")
}

function replay2() {
    location.reload()
}

// function fadeIn(element) {
    
//     element.classList.add("fade")
// }


setTimeout(function(){
    fadeIn(female);

    setTimeout(function(){
        fadeOut(female);
        slideIn(headline1);

        
        setTimeout(function(){
            slideOut(headline1);
            slideRightIn(headline2);

            setTimeout(function(){
                fadeIn(subheadline);
                setTimeout(function(){
                    fadeIn(learnmore);
                    setTimeout(function(){
                        slideIn2(logo);
                        setTimeout(function(){
                            fadeIn(replay);
            
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 2000);

            
        }, 2000);
    }, 2000);
}, 1000); 



