let el = 0;
window.addEventListener("scroll", (event) => {
    let element = document.querySelectorAll('.w-animate');
    let viewPortHeight = window.innerHeight;
    if (element.length - 1 >= el) {
        let scroll = this.scrollY;
        let addClassPosition = element[el].offsetTop - viewPortHeight + 50;
        console.log("addClass " + addClassPosition + "  scroll " + scroll + "   viewport " + viewPortHeight)
        if (addClassPosition < scroll) {
            element[el].classList.add("text-transform");
            el++;
        }
    }
});