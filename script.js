const textElement = document.getElementById('animated');
        const fonts = ['Prata', 'Arial', 'Georgia', 'Courier New', 'Verdana', 'Times New Roman',];
        let currentFontIndex = 0;

        function animateFontFamily() {
            
            textElement.style.fontFamily = fonts[currentFontIndex];
            currentFontIndex = (currentFontIndex + 1) % fonts.length; 

            
            setTimeout(animateFontFamily, 150);
        }

        
        animateFontFamily();

// AOS.init();

// document.addEventListener('scroll', function() {
//     const transitionElement = document.querySelector('.transition');
//     const bannerHeight = document.querySelector('.banner').offsetHeight;
//     const scrollPosition = window.scrollY;

//     if (scrollPosition > bannerHeight * 0.8) {
//         transitionElement.classList.add('visible');
//     } else {
//         transitionElement.classList.remove('visible');
//     }
// });