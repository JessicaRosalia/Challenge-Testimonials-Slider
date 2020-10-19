let imgSlider = document.querySelector(".img-slider")

const iconPrev = document.querySelector(".icon-prev")
const iconNext = document.querySelector(".icon-next")

let indexImg = 0
let tam = testimonial.length

const paragraph = document.querySelector(".paragraph")
const person = document.querySelector(".name")
const profession = document.querySelector(".profession")



imgSlider.setAttribute("src", testimonial[indexImg].imgSrc)
paragraph.innerHTML = testimonial[indexImg].description
person.innerHTML = testimonial[indexImg].name
profession.innerHTML = testimonial[indexImg].profession

iconPrev.addEventListener("click", () => {

    if (imgSlider.getAttribute("src") == testimonial[indexImg].imgSrc) {
        indexImg++

        if (indexImg >= tam) {
            indexImg = 0
        }

        imgSlider.setAttribute("src", testimonial[indexImg].imgSrc)
        paragraph.innerHTML = testimonial[indexImg].description
        person.innerHTML = testimonial[indexImg].name
        profession.innerHTML = testimonial[indexImg].profession

    }
})



iconNext.addEventListener("click", () => {
    if (imgSlider.getAttribute("src") == testimonial[indexImg].imgSrc) {
        indexImg++

        if (indexImg >= tam) {
            indexImg = 0
        }

        imgSlider.setAttribute("src", testimonial[indexImg].imgSrc)
        paragraph.innerHTML = testimonial[indexImg].description
        person.innerHTML = testimonial[indexImg].name
        profession.innerHTML = testimonial[indexImg].profession
    }
})
