document.addEventListener('DOMContentLoaded', () => {
    const lottoNumbersContainer = document.getElementById('lotto-numbers-container');
    const generateButton = document.getElementById('generate-button');

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

    // Initial generation on page load
    generateLottoNumbers();
});
