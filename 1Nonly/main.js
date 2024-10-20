document.addEventListener('DOMContentLoaded', function () {
    const progressBars = document.querySelectorAll('.progress-bar');

    function animateBars() {
        progressBars.forEach(bar => {
            const percent = bar.getAttribute('data-percent');
            bar.style.width = percent;  // Set the width based on percentage
            animatePercentage(bar, percent);
        });
    }

    function animatePercentage(bar, percent) {
        const span = bar.querySelector('span');
        let count = 0;
        const target = parseInt(percent, 10);
        const interval = setInterval(() => {
            if (count >= target) {
                clearInterval(interval);
            } else {
                count++;
                span.textContent = count + "%";
            }
        }, 15);
    }

    function isElementInView(element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
        return (rect.top <= windowHeight && rect.bottom >= 0);
    }

    window.addEventListener('scroll', () => {
        const skillsSection = document.querySelector('.skills-section');
        if (isElementInView(skillsSection)) {
            animateBars();
        }
    });

    window.addEventListener('load', () => {
        const skillsSection = document.querySelector('.skills-section');
        if (isElementInView(skillsSection)) {
            animateBars();
        }
    });
});