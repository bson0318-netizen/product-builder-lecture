class LottoBall extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const number = this.getAttribute('number');
        const color = this.getColor(number);

        const style = document.createElement('style');
        style.textContent = `
            :host {
                display: inline-block;
                width: 60px;
                height: 60px;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 1.5rem;
                font-weight: bold;
                color: white;
                background: radial-gradient(circle at 30% 30%, ${color}, #000);
                box-shadow: inset -5px -5px 10px rgba(0,0,0,0.5), 0 5px 15px rgba(0,0,0,0.5), 0 0 0 1px rgba(255, 255, 255, 0.1);
                animation: appear 0.5s ease-out forwards;
            }

            @keyframes appear {
                from {
                    opacity: 0;
                    transform: scale(0.5) rotate(360deg);
                }
                to {
                    opacity: 1;
                    transform: scale(1) rotate(0deg);
                }
            }
        `;

        const ball = document.createElement('div');
        ball.textContent = number;

        shadow.appendChild(style);
        shadow.appendChild(ball);
    }

    getColor(number) {
        const num = parseInt(number, 10);
        if (num <= 10) return '#fbc400';
        if (num <= 20) return '#69c8f2';
        if (num <= 30) return '#ff7272';
        if (num <= 40) return '#aaa';
        return '#b0d840';
    }
}

customElements.define('lotto-ball', LottoBall);


document.getElementById('generate-button').addEventListener('click', () => {
    const container = document.getElementById('lotto-numbers-container');
    container.innerHTML = ''; // Clear previous numbers

    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    sortedNumbers.forEach((number, index) => {
        setTimeout(() => {
            const lottoBall = document.createElement('lotto-ball');
            lottoBall.setAttribute('number', number);
            container.appendChild(lottoBall);
        }, index * 300); // Staggered animation
    });
});
