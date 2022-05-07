let link=document.getElementById("link");
let mega=document.getElementById("mega")

link.addEventListener("click",()=>mega.classList.replace("d-none","d-flex" ))
link.addEventListener("dblclick",()=>mega.classList.replace("d-flex","d-none" ))


let section =document.querySelector(".our-skills");
let spans=document.querySelectorAll(".our-skills .progress span")
console.log(spans)

window.onscroll = function () {
    if (window.scrollY >= section.offsetTop) {
        spans.forEach((span) => {
            span.style.width=span.dataset.width;
            console.log("soooo")
        });
    }
}