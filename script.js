// startMyDay function
var startMyDay = function () {
    return "Time for a coffee and a shower.";
};
console.log(startMyDay());

// favoriteCookie function
var favoriteCookie = function (cookie) {
    return `My favorite cookie is ${cookie}.`;
};
console.log(favoriteCookie("chocolate chip"));

// introduce function
var introduce = function (name, occupation) {
    return `My name is ${name} and my occupation is ${occupation}.`;
};
console.log(introduce("Jack", "Programmer"));
console.log(introduce("Henry", "Baseball Player"));

// hydrationFeedback function
var hydrationFeedback = function () {
    var numGlasses = Number(prompt("How many glasses of water did you have today?"));
    if (numGlasses >= 8) {
        console.log("Congratulations!");
    } else if (numGlasses < 8) {
        console.log("Not bad. Let's try for a bit more tomorrow!")
    }
};
hydrationFeedback();
    