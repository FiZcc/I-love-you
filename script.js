function handleYes() {
    const responseDiv = document.getElementById('response');
    responseDiv.innerHTML = `
        <div style="animation: fadeIn 0.5s ease-in;">
            <p>💚 Thank you for listening.</p>
            <p style="margin-top: 10px; font-size: 0.95em;">I promise to prove it to you, every day.</p>
        </div>
    `;
    
    // Add some visual celebration
    createConfetti();
}

function handleNo() {
    const responseDiv = document.getElementById('response');
    responseDiv.innerHTML = `
        <div style="animation: fadeIn 0.5s ease-in;">
            <p>I understand. I'm not giving up though.</p>
            <p style="margin-top: 10px; font-size: 0.95em;">I'll keep working on becoming someone worthy of your trust. 💙</p>
        </div>
    `;
}

function createConfetti() {
    const colors = ['💕', '💚', '💙', '✨', '⭐'];
    for (let i = 0; i < 30; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = '-10px';
        confetti.textContent = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.fontSize = Math.random() * 20 + 15 + 'px';
        confetti.style.opacity = '1';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '9999';
        document.body.appendChild(confetti);
        
        let top = -10;
        let left = parseFloat(confetti.style.left);
        const drift = (Math.random() - 0.5) * 4;
        
        const fall = setInterval(() => {
            top += Math.random() * 5 + 3;
            left += drift;
            confetti.style.top = top + 'px';
            confetti.style.left = left + 'px';
            confetti.style.opacity = 1 - (top / window.innerHeight);
            
            if (top > window.innerHeight) {
                clearInterval(fall);
                confetti.remove();
            }
        }, 30);
    }
}

// Add a subtle animation on page load
window.addEventListener('load', () => {
    console.log('💕 This site was made with all the love and sincerity in my heart for Belen.');
});