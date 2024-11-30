function startCountdown() {
    const auctionTime = new Date("November 30, 2024 21:00:00").getTime();

    function updateTimer() {
        const currentTime = new Date().getTime();
        const timeRemaining = auctionTime - currentTime;

        if (timeRemaining <= 0) {
            document.getElementById("countdown-timer").textContent = "Auction Started!";
            clearInterval(timerInterval);
        } else {
            const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
            document.getElementById("countdown-timer").textContent = `${hours}h ${minutes}m ${seconds}s`;
        }
    }
    const timerInterval = setInterval(updateTimer, 1000);
    updateTimer();
}
document.getElementById('sign-in-form').addEventListener('submit', function (event) {
    event.preventDefault(); 
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (email && password) {
        alert(`Thank you ${name} for signing in for the Auction`);
    } else {
        alert('Please enter both email and password');
    }
  document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
});
startCountdown();
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');
menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active'); 
});

