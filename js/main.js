let inputs = document.querySelectorAll('input[data-rule]');

for(let input of inputs) {
    input.addEventListener('blur', function(){
        let rule = this.dataset.rule;
        let value =this.value;
        let check;

        switch(rule) {
            case 'mail': 
            check = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})/g.test(value);
        }
        this.classList.remove('invalid');
        this.classList.remove('valid');
        if (check) {
            this.classList.add('valid');
        } else {
            this.classList.add('invalid');
        } 
       
        
    });
}

// Smooth Scroll  
const links = document.querySelectorAll(".banner__arrow");
for (const link of links) {
link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
e.preventDefault();
const href = this.getAttribute("href");

document.querySelector(href).scrollIntoView({
    behavior: "smooth"
});
}



// Button Up

// window.onscroll = function(){scrollFunction()};

// const upbuttons = document.querySelectorAll(".button-up");

// for (const upbutton of upbuttons) {
//     upbutton.addEventListener("click", clickHandler);
// }

// function clickHandler(e) {
// e.preventDefault();
// const href = this.getAttribute("href");

// document.querySelector(href).scrollIntoView({
//     behavior: "smooth"
// });
// }

function scrollFunction(){
    if ( document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000){
        document.getElementById('btnUp').className = 'button-up visible';
    } else {
        document.getElementById('btnUp').className = 'button-up hidden';
    }
}

 // Menu

 function openModal() {
    document.getElementById("modal").style.top = "0px";
}

function closeModal() {
    document.getElementById("modal").style.top = "-400px";
}








