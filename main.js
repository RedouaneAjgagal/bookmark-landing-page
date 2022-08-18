// burger menu
const burgerMenu = document.querySelector(".burgerMenu");
const navLinks = document.querySelector(".navLinks");
const bookmarkLogo = document.querySelector(".bookmark-logo");
const items = document.querySelectorAll(".items");
burgerMenu.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    burgerMenu.classList.toggle("close");
    document.body.classList.toggle("no-scroll");
    
    if(navLinks.classList.contains("open")) {
        bookmarkLogo.setAttribute("src", "./images/logo-bookmark-BackGround.svg");
        burgerMenu.setAttribute("aria-expanded", "true");
    } else {
        bookmarkLogo.setAttribute("src", "./images/logo-bookmark.svg");
        burgerMenu.setAttribute("aria-expanded", "false");
    }
    items.forEach(item => {
        item.addEventListener("click", () => {
            navLinks.classList.remove("open");
            burgerMenu.classList.remove("close");
            document.body.classList.remove("no-scroll");
            bookmarkLogo.setAttribute("src", "./images/logo-bookmark.svg");
        })
    })
})
// Features btn
const featuresBtn = document.querySelectorAll(".featuresBtn");
const featuresCtn = document.querySelectorAll(".features-content");
const backgroundColor = document.querySelector(".features-img");
const featureImg = document.querySelector(".feature-img");
for (let i = 0; i < featuresBtn.length; i++) {
    featuresBtn[i].addEventListener("click", () => {
        // hide all the content
        featuresCtn.forEach(featureCtn => {
            featureCtn.classList.add("hidden");
            featureCtn.setAttribute("aria-expanded", "false");
            featuresCtn[i].setAttribute("aria-expanded", "true");
        })
        featuresBtn.forEach(featureBtn => {
            featureBtn.classList.remove("focusBtn");
            featureBtn.setAttribute("aria-selected", "false");
            featuresBtn[i].setAttribute("aria-selected", "true");
        })
        // show the selected content based on the button that was pressed [i]
        featuresCtn[i].classList.remove("hidden");
        featuresBtn[i].classList.add("focusBtn");
        // Add backgound colors
        if (i === 0) {
            backgroundColor.classList.remove("cyanBackgound", "orangeBackgound");
            featureImg.setAttribute("src", "./images/illustration-features-tab-1.svg");
        } else if (i === 1) {
            backgroundColor.classList.remove("cyanBackgound");
            backgroundColor.classList.add("orangeBackgound");
            featureImg.setAttribute("src", "./images/illustration-features-tab-2.svg");
        } else {
            backgroundColor.classList.remove("orangeBackgound");
            backgroundColor.classList.add("cyanBackgound");
            featureImg.setAttribute("src", "./images/illustration-features-tab-3.svg");
        }
    });
}
// FAQs
const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");
const arrows = document.querySelectorAll(".arrows");
for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", () => {
        // hide the current answer if you click on the same question
        if (answers[i].classList.contains("active")) {
            answers[i].classList.remove("active");
            arrows[i].classList.remove("open");
            answers[i].style.maxHeight = answers[i].style.scrollHeight = "0";
        }
        // show the answer when you click on the question
        else {
            answers[i].classList.toggle("active");
            arrows[i].classList.toggle("open");
            answers[i].style.maxHeight = answers[i].style.scrollHeight = "15rem";
        }
    });
}
// email validation
const submit = document.getElementById("submit-email");
const email = document.getElementById("email");
const errMsg = document.querySelector(".errMsg");
submit.addEventListener("submit", (e) => {
    e.preventDefault();
    let emailReq = new RegExp (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    if (email.value === '' || email.value === null) {
        errMsg.innerHTML = "Email Can't be Blank";
    } else if (!emailReq.test(email.value)) {
        errMsg.innerHTML = "It looks like invalid Email";
    } else {
        errMsg.innerHTML = "";
    }
})
