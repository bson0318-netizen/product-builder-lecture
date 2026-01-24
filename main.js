document.addEventListener('DOMContentLoaded', () => {
    const lottoNumbersContainer = document.getElementById('lotto-numbers-container');
    const generateButton = document.getElementById('generate-button');
    const themeToggle = document.getElementById('theme-toggle');

    const setTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        themeToggle.setAttribute(
            'aria-label',
            theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
        );
        themeToggle.querySelector('.theme-label').textContent =
            theme === 'dark' ? 'Light mode' : 'Dark mode';
        localStorage.setItem('theme', theme);
    };

    const initTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light' || savedTheme === 'dark') {
            setTheme(savedTheme);
            return;
        }

        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(prefersDark ? 'dark' : 'light');
    };

    const generateLottoNumbers = () => {
        lottoNumbersContainer.innerHTML = '';
        const numbers = new Set();
        while (numbers.size < 6) {
            numbers.add(Math.floor(Math.random() * 45) + 1);
        }

        const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

        sortedNumbers.forEach((number, index) => {
            setTimeout(() => {
                const ball = createLottoBall(number);
                lottoNumbersContainer.appendChild(ball);
            }, index * 300); // Staggered animation
        });
    };

    const createLottoBall = (number) => {
        const ball = document.createElement('div');
        ball.classList.add('lotto-ball');
        ball.textContent = number;
        ball.style.backgroundColor = getBallColor(number);
        return ball;
    };

    const getBallColor = (number) => {
        if (number <= 10) return '#f39c12'; // Orange
        if (number <= 20) return '#3498db'; // Blue
        if (number <= 30) return '#e74c3c'; // Red
        if (number <= 40) return '#95a5a6'; // Gray
        return '#2ecc71'; // Green
    };

    generateButton.addEventListener('click', generateLottoNumbers);
    themeToggle.addEventListener('click', () => {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        setTheme(isDark ? 'light' : 'dark');
    });

    // Initial generation on page load
    initTheme();
    generateLottoNumbers();
});
