// Just some random class, nothing to see here
class Doc {
    doc: HTMLElement;

    constructor(name: string) {
        this.doc = document.querySelector(name);
    }

    changeBackground(arg: string): void {
        this.doc.style.background = arg;
    }

    setActive(): void {
        this.doc.classList.add('active');
    }

    unsetActive(): void {
        this.doc.classList.remove('active');
    }

    hide(): void {
        this.doc.style.transition = "all 2s ease-in-out";
        this.doc.style.opacity = "0";
    }

    show(): void {
        this.doc.style.transition = "none";
        this.doc.style.opacity = "1";
    }
}
// Defining variables
let x: number = 1;
let shouldTimeout: boolean = true;
const bg: Doc = new Doc('.main-background');
const main: Doc = new Doc('.main');
// Change background photo
function changePhoto(selected: number) {
    x = selected;
    if (x === 0) x = 5;
    else if (x === 6) x = 1;

    main.changeBackground(`url('/websites-test/images/photo-${x}.jpg') center no-repeat`);
    bg.hide();

    setTimeout(() => {
        bg.changeBackground(`url('/websites-test/images/photo-${x}.jpg') center no-repeat`);
        bg.show();
    }, 2000);

    new Doc('.slider-dots_item.active').unsetActive();
    new Doc(`.slider-dots_item.dot_${x}`).setActive();
}
// Completely cleared interval because of the Firefox issues
function resetInterval(): void {
    clearInterval(interval);
}
// After clicking side arrows
function changePhotoByOne(type: string) {
    resetInterval();
    switch(type) {
        case '+':
            changePhoto(x + 1);
            break;
        case '-':
            changePhoto(x - 1);
            break;
        default:
            break;
    }
}
// Clear interval after clicking bottom dots
document.querySelectorAll('.slider-dots_item').forEach(item => {
    item.addEventListener('click', () => {
        resetInterval();
    })
});
// Prepare interval for photo sliding
let interval = window.setInterval(() => {
    changePhoto(x + 1);
}, 7000);
interval;