function addEvent() {
    let eventInput = document.getElementById("eventInput");
    let eventName = eventInput.value.trim();

    if (eventName !== "") {
        let eventList = document.getElementById("eventList");

        let newEvent = document.createElement("div");
        newEvent.classList.add("event");

        let eventText = document.createElement("span");
        eventText.textContent = eventName;

        let editBtn = document.createElement("button");
        editBtn.textContent = "✏ Edit";
        editBtn.onclick = function() {
            editEvent(eventText);
        };

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌ Remove";
        deleteBtn.onclick = function() {
            removeEvent(newEvent);
        };

        newEvent.appendChild(eventText);
        newEvent.appendChild(editBtn);
        newEvent.appendChild(deleteBtn);
        eventList.appendChild(newEvent);

        eventInput.value = "";
        searchEvents();
    } else {
        alert("Please enter an event name.");
    }
}

function removeEvent(eventElement) {
    eventElement.style.opacity = "0";
    setTimeout(() => eventElement.remove(), 300);
}

function clearAllEvents() {
    document.getElementById("eventList").innerHTML = "";
}

function editEvent(eventText) {
    let newName = prompt("Edit event name:", eventText.textContent);
    if (newName !== null && newName.trim() !== "") {
        eventText.textContent = newName.trim();
    }
}

function searchEvents() {
    let searchValue = document.getElementById("searchInput").value.toLowerCase();
    let events = document.querySelectorAll(".event");

    events.forEach(event => {
        let eventName = event.querySelector("span").textContent.toLowerCase();
        event.style.display = eventName.includes(searchValue) ? "flex" : "none";
    });
}
