function registerEvent(eventName){

let registeredEvents =
JSON.parse(localStorage.getItem("registeredEvents"))
|| [];

registeredEvents.push(eventName);

localStorage.setItem(
"registeredEvents",
JSON.stringify(registeredEvents)
);

alert("Successfully Registered!");

}