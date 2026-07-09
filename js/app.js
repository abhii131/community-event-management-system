function registerEvent(eventName) {

    // Check if user is logged in
    let loggedIn = localStorage.getItem("loggedIn");

    if (!loggedIn) {
        alert("Please login first!");
        window.location.href = "login.html";
        return;
    }

    let registeredEvents =
        JSON.parse(localStorage.getItem("registeredEvents")) || [];

    // Prevent duplicate registration
    if (registeredEvents.includes(eventName)) {
        alert("You have already registered for this event!");
        return;
    }

    // Save registration
    registeredEvents.push(eventName);

    localStorage.setItem(
        "registeredEvents",
        JSON.stringify(registeredEvents)
    );

    alert("Successfully Registered for " + eventName + "!");

}