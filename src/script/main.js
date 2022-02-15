import { gsap } from "gsap";

// gsap.registerPlugin(SplitText);

document.addEventListener("DOMContentLoaded", () => {


    let width = window.innerWidth;
    let height = window.innerHeight;

    let hideContentEl = document.getElementById("hidecontent");
    hideContentEl.style.display = "block";
    let logo = document.getElementById("logo")
    let preloader = document.getElementById("preloader-text")
    let h1 = document.getElementsByTagName("h1")[0];
    let introText = document.querySelector(".intro-text")
    let buttons = document.querySelectorAll(".btn")
    let lines = document.querySelectorAll(".text-animation-wrapper")

    // let headlineSplitted = new SplitText(h1, { type: "words" })
    // let words = headlineSplitted.words;

    const hideDiv = () => {
        hideContentEl.style.display = "none"; 
    }


    gsap.set(h1,{
        opacity: 0,
        x: '-40%',
        y: '60%',
        scale: .6,
    })

    gsap.set(introText,{
        opacity: 0,
        x: 300,
        y: 30,
        scale: .6,
    })

    gsap.set(buttons, {
        y: 100,
        x: -60,
        opacity: 0
    })

    gsap.set(preloader, {
        scale: .6,
        y: 200
    })

    gsap.set(logo, {
        opacity: 0,
        x: (-1 * width/2 + 50),
        y: (height/2 - 150),
    })

    let tl =  new gsap.timeline({
        onComplete: hideDiv
    });

    tl.to(hideContentEl, {
        opacity: 0,
    })

    tl.to(logo, {
    opacity: 1,
    })


    tl.to(preloader, {
    duration: 2,
    opacity: 1,
    y: 0, 
    scale: 1,
    })

    tl.to(preloader, {
    duration: 1,
    opacity: 0,
    })
    tl.to(logo, {
        x: 0,
        y: 0,
    },"<")


    tl.to(h1, {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        duration: 1
    })
    tl.to(introText, {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1
    }, "< 0.2")

    tl.to(buttons, {
        stagger: .1,
        duration: .2,
        y: 0,
        x: 0,
        opacity: 1
    })
    tl.from(lines, {
        opacity: 1,
        y: 500,
        duration: 3
    })
})