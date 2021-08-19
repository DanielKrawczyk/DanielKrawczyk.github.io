function getID(x: string): HTMLElement {
    return document.getElementById(x);
}
function getQuery(x: string): HTMLElement {
    return document.querySelector(x);
}
function getQueryAll(x: string): NodeListOf<HTMLElement> {
    return document.querySelectorAll(x);
}
const topEl: HTMLElement = getID('top'),
    topText: HTMLElement = getID('top-text'),
    aboutMe: HTMLElement = getID('aboutMe'),
    nav: HTMLElement = getQuery('.nav'),
    navSide: HTMLElement = getQuery('.side-nav'),
    navSideBtn: HTMLElement = getQuery('.side-nav_btn_abs'),
    footer: HTMLElement = getQuery('.upper'),
    sideLinks: HTMLElement = getQuery('.side-links'),
    navSideLinks: NodeListOf<HTMLElement> = getQueryAll('.side-nav_item');

function onScroll(): void {
    const win: number = window.pageYOffset;
    if (aboutMe.offsetTop !== null && win > aboutMe.offsetTop) {
        navSide.classList.add('active');
        topText.classList.remove('show');
    } else if (win <= nav.offsetTop) {
        topText.classList.add('show');
    } else {
        navSide.classList.remove('active');
        navSide.classList.remove('show');
    }
    if (win >= footer.offsetTop) {
        sideLinks.classList.remove('show');
    } else if (win < footer.offsetTop) {
        sideLinks.classList.add('show');
    }
}
/* -------------------- EVENTS ---------------------------- */
document.addEventListener('scroll', () => {
    const value: number = -document.scrollingElement.scrollTop * 0.3;
    topEl.style.backgroundPositionY = value + "px";
})
navSideBtn.addEventListener('click', (): void => {
    if (navSide.classList.contains('show')) navSide.classList.remove('show');
    else navSide.classList.add('show');
})
navSideLinks.forEach(item => {
    item.addEventListener('click', (): void => {
        navSide.classList.remove('show');
    })
})
window.onscroll = (): void => onScroll();