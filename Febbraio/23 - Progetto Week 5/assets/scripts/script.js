document.addEventListener('DOMContentLoaded', function() {
    
    const checkScrollAndUpdateStyles = () => {
        const heroSection = document.querySelector('.hero');
        const heroSectionBottom = heroSection.offsetHeight + heroSection.offsetTop;
        const header = document.querySelector('.site-header');
        const getStartedButton = document.querySelector('.main-btn');

        if (window.scrollY > heroSectionBottom) {
            header.style.backgroundColor = 'white';
            header.style.transition = 'background-color 0.5s ease';
            getStartedButton.style.backgroundColor = 'green';
            getStartedButton.style.transition = 'background-color 0.5s ease';
        } else {
            header.style.backgroundColor = '';
            getStartedButton.style.backgroundColor = '';
        }
    }

    window.addEventListener('scroll', checkScrollAndUpdateStyles);

    const toggleRandomM = () => {
        const ms = document.querySelectorAll('.hero-m-container .m');
        const randomIndex = Math.floor(Math.random() * ms.length);
        const randomM = ms[randomIndex];

        randomM.classList.toggle('hidden');

        const randomTime = Math.random() * 300 + 100;
        setTimeout(toggleRandomM, randomTime);
    }

    toggleRandomM();
})