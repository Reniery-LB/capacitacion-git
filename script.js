// Homer's Donut Page - Interactive Script
// Git Training 2026

console.log("🍩 Welcome to Homer's Donut Shop!");
console.log("📚 Git Training - Unidad III");

// Donut click effect
const donuts = document.querySelectorAll('.donut');

donuts.forEach((donut, index) => {
    donut.addEventListener('click', () => {
        // Create sparkle effect
        createSparkles(event);

        // Random rotation
        const randomRot = Math.floor(Math.random() * 360);
        donut.style.transform = `rotate(${randomRot}deg) scale(1.5)`;

        // Reset after animation
        setTimeout(() => {
            donut.style.transform = 'rotate(0) scale(1)';
        }, 500);

        console.log(`🍩 Donut ${index + 1} was clicked!`);
    });
});

// Sparkle effect function
function createSparkles(event) {
    const colors = ['#ff6b6b', '#ffd93d', '#4ecdc4', '#667eea', '#764ba2'];

    for (let i = 0; i < 10; i++) {
        const sparkle = document.createElement('div');
        sparkle.textContent = '✨';
        sparkle.style.position = 'fixed';
        sparkle.style.left = event.clientX + 'px';
        sparkle.style.top = event.clientY + 'px';
        sparkle.style.fontSize = (Math.random() * 20 + 10) + 'px';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '9999';

        document.body.appendChild(sparkle);

        // Animate sparkle
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 100 + 50;
        const endX = Math.cos(angle) * distance;
        const endY = Math.sin(angle) * distance;

        sparkle.animate([
            { transform: 'translate(0, 0) scale(1)', opacity: 1 },
            { transform: `translate(${endX}px, ${endY}px) scale(0)`, opacity: 0 }
        ], {
            duration: 1000,
            easing: 'ease-out'
        });

        // Remove after animation
        setTimeout(() => sparkle.remove(), 1000);
    }
}

// Add new team member dynamically
function addTeamMember(name, role = 'Developer') {
    const teamList = document.getElementById('team-list');
    const li = document.createElement('li');
    li.className = 'team-member';
    li.innerHTML = `${name} - <em>${role}</em>`;
    teamList.appendChild(li);

    console.log(`✅ ${name} added to the team!`);
}

// Fun message on page load
window.addEventListener('load', () => {
    const messages = [
        "🍩 Mmm... code...",
        "💻 Commit early, commit often!",
        "🚀 Git push origin master!",
        "🎉 Welcome to the team!",
        "⚡ You're doing great!"
    ];

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    console.log(randomMessage);

    // Show welcome notification
    setTimeout(() => {
        alert("🍩 Welcome to Homer's Donut Shop!\n\n" +
              "📝 Tu tarea: Añade tu nombre al equipo editando este archivo HTML.\n\n" +
              "💻 Luego haz commit y push con Git Bash!");
    }, 1000);
});

// Easter egg: Konami code
let konamiCode = [];
const konamiSequence = [38, 38, 40, 40, 37, 37, 39, 39, 66, 65];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.keyCode);

    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }

    if (konamiCode.join(',') === konamiSequence.join(',')) {
        document.body.style.animation = 'rainbow 2s ease-in-out';
        alert('🎮 KONAMI CODE! 🍩\n\n¡Eres un maestro de Git!');
        konamiCode = [];
    }
});

// Add rainbow animation when konami code is entered
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);

console.log("💡 Tip: Click on the donuts for a surprise!");
