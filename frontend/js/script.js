// ===== COUNTDOWN TIMER =====
const nextEventDate = new Date("2026-09-25T10:00:00").getTime(); // apni date daal do

function updateCountdown() {
    const now = new Date().getTime();
    const gap = nextEventDate - now;

    const days = Math.floor(gap / (1000 * 60 * 60 * 24));
    const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((gap % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}
setInterval(updateCountdown, 1000);

// ===== NUMBER COUNT-UP ANIMATION =====
function countUp(elementId, target) {
    let current = 0;
    const el = document.getElementById(elementId);
    const step = target / 50;
    const interval = setInterval(() => {
        current += step;
        if (current >= target) {
            el.innerText = target;
            clearInterval(interval);
        } else {
            el.innerText = Math.floor(current);
        }
    }, 30);
}
countUp("eventCount", 8);
countUp("studentCount", 234);
// ===== DUMMY EVENTS DATA =====
const dummyEvents = [
    {
        title: "AI/ML Workshop",
        category: "Departmental",
        date: "Sept 20, 2026",
        image: "https://via.placeholder.com/300x150"
    },
    {
        title: "Annual Cultural Fest",
        category: "Cultural",
        date: "Sept 25, 2026",
        image: "https://via.placeholder.com/300x150"
    },
    {
        title: "Inter-College Football",
        category: "Sports",
        date: "Oct 2, 2026",
        image: "https://via.placeholder.com/300x150"
    }
];

// ===== RENDER EVENTS =====
function renderEvents(events) {
    const container = document.getElementById("eventsContainer");
    container.innerHTML = "";

    events.forEach(event => {
        const card = document.createElement("div");
        card.classList.add("event-card");
        card.innerHTML = `
            <img src="${event.image}" alt="${event.title}">
            <div class="event-card-content">
                <span class="event-category">${event.category}</span>
                <h3>${event.title}</h3>
                <p>${event.date}</p>
            </div>
        `;
        container.appendChild(card);
    });
}

renderEvents(dummyEvents);