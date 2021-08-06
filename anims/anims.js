'use strict';

const scroll = document.querySelectorAll('.scroll');

function elIn(el, x = 1) {
    const topElem = el.getBoundingClientRect().top;

    return (
        topElem <= (window.innerHeight || document.documentElement.clientHeight) / x
    );
};

function elOut(el) {
    const topElem = el.getBoundingClientRect().top;

    return (
        topElem > (window.innerHeight || document.documentElement.clientHeight)
    );
};

function show(el) {
    el.classList.add('scrolled');
};

function hide(el) {
    el.classList.remove('scrolled');
};

function onScrollEvent() {
    scroll.forEach(e => {
        if (elIn(e, 1.25)) {
            show(e)
        } else if (elOut(e)) {
            hide(e)
        }
    });
};

window.addEventListener('scroll', () => {
    onScrollEvent();
});

function stringToArray(str) {
    let arr = new Array();
    for (let i = 0; i < str.length; i++) {
        arr.push(str[i]);
    }
    return arr;
};

const arr = stringToArray("const website = new Coffee();");
let index = 0;
let content = "";
const time = 125;

function typing() {
    content += arr[index];
    if (arr[index] !== "<") document.getElementById('typing').innerHTML = content + "<span>|</span>";
    index++;
    if (index < arr.length) {
        setTimeout(() => {
            typing();
        }, time);
    }
};

setTimeout(() => {
    typing();
}, 1000);