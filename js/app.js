function registerEvent(eventName){

let registeredEvents =
JSON.parse(localStorage.getItem("registeredEvents"))
|| [];

/* Check duplicate registration */

if(registeredEvents.includes(eventName)){
    alert("You have already registered for this event!");
    return;
}

/* Save registration */

registeredEvents.push(eventName);

localStorage.setItem(
    "registeredEvents",
    JSON.stringify(registeredEvents)
);

alert("Successfully Registered!");

}