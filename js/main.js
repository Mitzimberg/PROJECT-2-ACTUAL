const images = document.querySelectorAll('.hero-images img');
let currentIndex = 0;

function cycleImages() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}

setInterval(cycleImages, 6000); // Change image every 3 seconds

function showTab(tabId) {
    // I've got no real idea what any of this means, all of this was jacked
    const tabItems = document.querySelectorAll('.tab-item');
    tabItems.forEach(item => {
        item.classList.remove('active');
    });

    // Remove active class from all tabs
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    document.getElementById(tabId).classList.add('active');
    document.querySelector(`.tab[onclick*="${tabId}"]`).classList.add('active');
}

showTab('tab1');