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
