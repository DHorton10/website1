loadText = document.querySelector('.loading-)
bg = document.querySelector('.bg')

load = 90

int = setInterval(blurring, 10)

blurring()
blurring()
blurring()

function blurring() {
    load++

    if (load > 99){
        clearInterval(int)
    }
    loadText.style.opacity = 1
    loadText.innerText = '${load}%'


loadText.style.Opacity = 1 - load/100

bg.style.filter = "blur(${30-(load/100)*30}px)"
}
