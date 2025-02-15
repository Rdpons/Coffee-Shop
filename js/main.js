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
const header = document.getElementById("main-header");
    const homeSection = document.getElementById("home");

    window.addEventListener("scroll", function () {
        let homeBottom = homeSection.offsetTop + homeSection.offsetHeight;
        let scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (scrollTop < homeBottom) {
            header.style.top = "0";
        } else {
            header.style.top = "-100px";
        }
    });
    document.addEventListener("DOMContentLoaded", function () {
        const goTopButton = document.getElementById("go-top");
        const progressCircle = document.getElementById("progress");
    
        window.addEventListener("scroll", () => {
            let scrollTop = window.scrollY;
            let docHeight = document.documentElement.scrollHeight - window.innerHeight;
            let progress = (scrollTop / docHeight) * 138; 
    
            if (scrollTop > 100) {
                goTopButton.classList.remove("hidden");
            } else {
                goTopButton.classList.add("hidden");
            }
    
            progressCircle.style.strokeDashoffset = 138 - progress;
        });
    
            goTopButton.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    });
    document.querySelector("#learn-more").addEventListener("click", function(event) {
        event.preventDefault();
        document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
    });
    const products = [
        { id: 1, name: "Product 1", price: "TBA", image: "/image/image1.jpg" },
        { id: 2, name: "Product 2", price: "TBA", image: "/image/image2.jpg" },
        { id: 3, name: "Product 3", price: "TBA", image: "/image/image3.jpeg" },
        { id: 4, name: "Product 4", price: "TBA", image: "/image/image4.png" },
        { id: 5, name: "Product 5", price: "TBA", image: "/image/image5.jpg" },
    ];

    function generateProductCards() {
        const productList = document.getElementById('product-list');
        
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('bg-[#f8f8f8]', 'p-6', 'rounded-3xl', 'shadow-lg', 'relative', 'overflow-hidden', 'transition-all');
            productCard.setAttribute('id', `product-card-${product.id}`);

            const productHTML = `
                <img src="${product.image}" alt="${product.name}" class="h-48 w-full rounded-lg object-cover" id="product-image-${product.id}">
                <div class="p-4">
                    <div class="flex items-start justify-between mb-4">
                        <div>
                            <h3 class="font-bold text-lg text-[#2C1412]" id="product-name-${product.id}">${product.name}</h3>
                        </div>
                        <div class="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-300 transition duration-300 cursor-pointer preview-btn" data-product-id="${product.id}">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 text-gray-600">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 16l-4-4h8l-4 4z" />
                            </svg>
                        </div>
                    </div>
                    <div id="price-container-${product.id}" class="price-container opacity-0 transition-all">
                        <span id="price-${product.id}" class="text-lg font-bold text-[#a96631]">TBA</span>
                    </div>
                </div>
            `;
            
            productCard.innerHTML = productHTML;
            productList.appendChild(productCard);
        });
    }

    generateProductCards();

    document.addEventListener('click', function (event) {
        if (event.target && event.target.classList.contains('preview-btn')) {
            const productId = event.target.getAttribute('data-product-id');
            const priceContainer = document.getElementById(`price-container-${productId}`);
            const priceElement = document.getElementById(`price-${productId}`);

            if (priceContainer.classList.contains('opacity-0')) {
                priceContainer.classList.remove('opacity-0');
                priceContainer.classList.add('opacity-100');
                priceElement.textContent = products.find(p => p.id == productId).price;
            } else {
                priceContainer.classList.remove('opacity-100');
                priceContainer.classList.add('opacity-0');
                priceElement.textContent = "TBA";
            }
        }
    });







































    
    // <script type="module">
    //     import Chatbot from "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js"
    //     Chatbot.init({
    //         chatflowid: "6690bfb1-6f4b-49aa-b4d1-134e107de62b",
    //         apiHost: "https://ponsica-ponsica.hf.space",
    //         chatflowConfig: {},
    //         observersConfig: {},
    //         theme: {
    //             button: {
    //                 backgroundColor: '#a96631',
    //                 right: 20,
    //                 bottom: 20,
    //                 size: 50,
    //                 dragAndDrop: true,
    //                 iconColor: 'white',
    //                 customIconSrc: 'logo2.png',
    //                 autoWindowOpen: {
    //                     autoOpen: false, 
    //                     autoOpenOnMobile: false
    //                 }
    //             },
    //             customCSS: ``,
    //             chatWindow: {
    //                 showTitle: true,
    //                 showAgentMessages: true,
    //                 title: 'Chat Bot',
    //                 titleAvatarSrc: 'logo.png',
    //                 welcomeMessage: 'Hello! This is a custom welcome message',
    //                 errorMessage: 'This is a custom error message',
    //                 backgroundColor: '#ffffff',
    //                 backgroundImage: 'enter image path or link',
    //                 fontSize: 16,
    //                 starterPrompts: [
    //                     "What is a bot?",
    //                     "Who are you?"
    //                 ],
    //                 starterPromptFontSize: 15,
    //                 clearChatOnReload: false,
    //                 sourceDocsTitle: 'Sources:',
    //                 renderHTML: true,
    //                 botMessage: {
    //                     backgroundColor: '#f7f8ff',
    //                     textColor: '#303235',
    //                     showAvatar: true,
    //                     avatarSrc: 'logo2.png'
    //                 },
    //                 userMessage: {
    //                     backgroundColor: '#a96631',
    //                     textColor: '#ffffff',
    //                     showAvatar: true,
    //                     avatarSrc: 'https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png'
    //                 },
    //                 textInput: {
    //                     placeholder: 'Type your question',
    //                     backgroundColor: '#ffffff',
    //                     textColor: '#303235',
    //                     sendButtonColor: '#a96631',
    //                     maxChars: 50,
    //                     maxCharsWarningMessage: 'You exceeded the characters limit. Please input less than 50 characters.',
    //                     autoFocus: true
    //                 },
    //                 feedback: {
    //                     color: '#303235'
    //                 },
    //                 dateTimeToggle: {
    //                     date: true,
    //                     time: true
    //                 },
    //                 footer: {
    //                     textColor: '#303235',
    //                     text: 'Powered by',
    //                     company: 'Teleforce',
    //                     companyLink: 'https://teleforcespaces.com/'
    //                 }
    //             }
    //         }
    //     })
    // </script>
