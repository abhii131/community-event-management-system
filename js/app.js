function registerEvent(eventName){

let events =
JSON.parse(localStorage.getItem("events")) || [];

events.push(eventName);

localStorage.setItem(
"events",
JSON.stringify(events)
);

alert("Registered Successfully!");
}