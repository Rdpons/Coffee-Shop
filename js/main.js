window.onscroll = () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById('go-top').classList.remove('hidden');
    } else {
        document.getElementById('go-top').classList.add('hidden');
    }
};
document.getElementById('go-top').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

const burgerIcon = document.getElementById('burger-icon');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close-menu');
const menuLinks = document.querySelectorAll('#mobile-menu a');

burgerIcon.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
});

closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('show');
});

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('show');
    });
});

document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !burgerIcon.contains(e.target)) {
        mobileMenu.classList.remove('show');
    }
});
const backgrounds = [
    {image: 'url("bg.jpg")',},
    {image: 'url("https://i.pinimg.com/736x/a3/69/df/a369dfe059e9f517b75305b1e99378e3.jpg")',},
    {image: 'url("image2.jpg")',},
];

let currentIndex = 0;

const section = document.querySelector('#home');
const contactUsButton = document.querySelector('#contact-us');

const updateBackground = () => {
    section.classList.add('transition-all', 'duration-1000', 'ease-in-out');
    section.style.backgroundImage = backgrounds[currentIndex].image;
    
    setTimeout(() => section.classList.remove('transition-all', 'duration-1000', 'ease-in-out'), 1000);
};

setInterval(() => {
    currentIndex = (currentIndex + 1) % backgrounds.length; 
    updateBackground();
}, 5000); 

updateBackground();
