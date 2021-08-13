var mainDiv = document.querySelector('.main-first')
var text = document.querySelector('.text-cont')
var img = document.querySelector('.img-cont')

console.dir(text);

mainDiv.addEventListener('mousemove', () => {
    text.style.transform = 'translateX(0)'
    img.style.transform = 'translateX(0)'
    upBut.style.display = 'none'
})