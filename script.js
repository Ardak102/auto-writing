const text = 'Я хочу поскорее найти работу в IT хыхыхы';
const dom = document.querySelector('body')

let index = 0;

function writeText() {
    // Script
    document.body.innerText = text.slice(0, index)
    index++

    if(index > text.length - 1) {
        index = 0;
    }

    // Text Style
    dom.style.display = 'flex';
    dom.style.justifyContent = 'center';
    dom.style.alignItems = 'center';
    dom.style.marginTop = '300px';
}

setInterval(writeText, 100)


