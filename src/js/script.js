const tabs = document.getElementById('tabs-wrapper');
const contents = document.getElementById('personal-area__content-wrapper');


console.log(tabs)

const changeClass = (el, tabs) => {
    for (let i = 0; i < tabs.children.length; i++) {
        tabs.children[i].classList.remove('active');
    }
    el.classList.add('active');
}


const contentss = document.getElementById('personal-area__content-wrapperr');






const tabs3 = document.getElementById('bascet-stage-two__btns');
const contents3 = document.getElementById('bascet-stage-two__content');



const tabs3F=()=> tabs3.addEventListener('click', e => {
    const currTab = e.target.dataset.btn;
    changeClass(e.target, tabs3);
    for (let i = 0; i < contents3.children.length; i++) {
        contents3.children[i].classList.remove('active');
        if (contents3.children[i].dataset.content == currTab) {
            contents3.children[i].classList.add('active');
        }
    }
});

const tabsF=()=> tabs.addEventListener('click', e => {
    const currTab = e.target.dataset.btn;
    changeClass(e.target, tabs);
    for (let i = 0; i < contentss.children.length; i++) {
        contentss.children[i].classList.remove('active');
        if (contentss.children[i].dataset.content == currTab) {
            contentss.children[i].classList.add('active');
        }
    }
    for (let i = 0; i < contents.children.length; i++) {
        contents.children[i].classList.remove('active');
        if (contents.children[i].dataset.content == currTab) {
            contents.children[i].classList.add('active');
        }
    }
});
tabs!==null? tabsF():tabs3F()