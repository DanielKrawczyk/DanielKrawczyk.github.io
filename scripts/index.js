(() => {

    let isActive = false;
    document.getElementById('more-button').addEventListener('click', () => {
        const doc = document.querySelector('.text-more_txt');
        if (isActive === false) {
            doc.classList.add('active');

            setTimeout(() => {
                doc.classList.add('show');
            }, 100);

            isActive = true;
            document.getElementById('more-button').innerHTML = 'Pokaż mniej';
        } else {
            doc.classList.remove('show');

            setTimeout(() => {
                doc.classList.remove('active');
            }, 600);

            isActive = false;
            document.getElementById('more-button').innerHTML = 'Pokaż więcej';
        };
    });

    let itemActive = false;
    document.querySelectorAll('.list-item').forEach(el => el.addEventListener('click', ()=>{
        if (itemActive === false) {
            el.classList.add('active');

            setTimeout(() => {
                el.classList.add('show');
            }, 100);

            itemActive = true;
        } else {
            el.classList.remove('show');

            setTimeout(() => {
                el.classList.remove('active');
            }, 600);

            itemActive = false;
        };
    }));

    let navActive = false;
    const navCont = document.getElementById('nav-content');
    const navButton = document.getElementById('nav-button');
    document.getElementById('nav-button').addEventListener('click', () => {
        if (navActive === false) {
            navButton.classList.add('open');
            navCont.classList.add('active');
            navActive = true;
        } else {
            navButton.classList.remove('open');
            navCont.classList.remove('active');
            navActive = false;
        }
    });

    document.querySelectorAll('.nav-bar_item').forEach(el => el.addEventListener('click', () => {
        if (navActive === true) {
            navButton.classList.remove('open');
            navCont.classList.remove('active');
            navActive = false;
        }
    }));
})();
window.onscroll = () => onScroll();

function onScroll() {
    const navbar = document.getElementById('nav');
    const top = navbar.offsetTop;

    if (window.pageYOffset > top) {
        navbar.classList.add('active');
    } else {
        navbar.classList.remove('active');
    };
};