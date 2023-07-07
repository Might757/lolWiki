/*var logo = document.getElementById("navLogo");
var width = screen.width;
console.log(screen.width)
if (width < 601) {
    logo.classList.add('w3-right');
}
*/
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
