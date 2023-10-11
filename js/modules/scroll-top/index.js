'use strict'


const scrollTopInit = (buttonId, scrollPixels) => {

    let mybutton = document.getElementById(buttonId)
    
    mybutton.addEventListener("click", () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;      
    })

    window.addEventListener("scroll", () => {

        if (document.body.scrollTop > scrollPixels || document.documentElement.scrollTop > scrollPixels) {
            mybutton.style.display = "block";   // reveal
          } else {
            mybutton.style.display = "none";    // hide
          }
    
    })
}
export {
    scrollTopInit
}
