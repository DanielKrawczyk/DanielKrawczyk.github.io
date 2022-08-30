class Doc {
    doc: HTMLElement;

    constructor(name: string) {
        this.doc = document.querySelector(name);
    }

    moveBg(x: string): void {
        this.doc.style.backgroundPositionY = x;
    }
}

document.addEventListener('scroll', (e) => {
    const value = -document.scrollingElement.scrollTop * 0.2;
    new Doc('.gallery-top').moveBg(value + "px");
})