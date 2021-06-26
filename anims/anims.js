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
})