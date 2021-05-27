const scroll = document.querySelectorAll('.scroll');

const elIn = (el, x = 1) => {
    const topElem = el.getBoundingClientRect().top;

    return (
        topElem <= (window.innerHeight || document.documentElement.clientHeight) / x
    );
};

const elOut = (el) => {
    const topElem = el.getBoundingClientRect().top;

    return (
        topElem > (window.innerHeight || document.documentElement.clientHeight)
    );
};

const show = (el) => {
    el.classList.add('scrolled');
};

const hide = (el) => {
    el.classList.remove('scrolled');
};

const onScrollEvent = () => {
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