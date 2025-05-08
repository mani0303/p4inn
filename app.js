let buttonMoved = false;
let serverResponse = "";
let serverResponseStatusCode = 0;
let serverResponceStatusText = "";

let infoCentre = new InfoCentre();
let requestCentre = new RequestCentre();
let scoreCentre = new ScoreCentre();

$(document).ready(function () {
    init();
});


$(function () {
    $("#submitButton").on({
        mouseover: function () {
            if (buttonMoved === false) {
                $(this).css({
                    left: 300 + "px"
                });
                buttonMoved = true;
            } else {
                $(this).css({
                    left: 0 + "px"
                });
                buttonMoved = false;
            }
        }
    });
});

$(function () {
    $("form").submit(function () {
        console.log("i have been clicked")
        //TODO add some complicated validation check here
    });
});

function checkUserName() {

    if (document.getElementById("exampleInputEmail1").value === "connectadmin@tesco.com" && checkPassword(document.getElementById("exampleInputPassword1").value) === true) {

        scoreCentre.scoreForAnswer(document.getElementById("exampleInputEmail1").value);
        infoCentre.achievementUnlock("Achievement Unlocked", "You logged in!",4000);
        localStorage.setItem("loggedIn", "true");
        window.location.replace("q1.html");
    } else {
        infoCentre.toast("error", "Error", "Incorrect Login Credentials", 2000)
    }

    buttonFixed();

}

function checkPassword(password = "empty") {

    let data = {
        username: "does not matter",
        password: password
    };
    //TODO UPDATE SERVER CALL WITH REAL TEAM
    if (requestCentre.jsonRequest("Post", "http://51.143.154.149:8080/code-group/"+ localStorage.getItem("team_id") +"/login", data) === 200) {
        return true
    }
}

function buttonFixed() {
     if (localStorage.getItem("button") !== "fixed") {
         localStorage.setItem("button", "fixed");
         scoreCentre.scoreForRogueButton();
         achievementUnlock("Achievement Unlocked!", "You fixed the rogue button", 4000);
     }

}

String.prototype.capitalize = function () {
    return this.replace(/(?:^|\s)\S/g, function (a) {
        return a.toUpperCase();
    });
};

function trollFace() {
    console.log("░░░░▄▄▄▄▀▀▀▀▀▀▀▀▄▄▄▄▄▄\n" +
        "░░░░█░░░░▒▒▒▒▒▒▒▒▒▒▒▒░░▀▀▄\n" +
        "░░░█░░░▒▒▒▒▒▒░░░░░░░░▒▒▒░░█\n" +
        "░░█░░░░░░▄██▀▄▄░░░░░▄▄▄░░░█\n" +
        "░▀▒▄▄▄▒░█▀▀▀▀▄▄█░░░██▄▄█░░░█\n" +
        "█▒█▒▄░▀▄▄▄▀░░░░░░░░█░░░▒▒▒▒▒█\n" +
        "█▒█░█▀▄▄░░░░░█▀░░░░▀▄░░▄▀▀▀▄▒█\n" +
        "░█▀▄░█▄░█▀▄▄░▀░▀▀░▄▄▀░░░░█░░█\n" +
        "░░█░░▀▄▀█▄▄░█▀▀▀▄▄▄▄▀▀█▀██░█\n" +
        "░░░█░░██░░▀█▄▄▄█▄▄█▄████░█\n" +
        "░░░░█░░░▀▀▄░█░░░█░███████░█\n" +
        "░░░░░▀▄░░░▀▀▄▄▄█▄█▄█▄█▄▀░░█\n" +
        "░░░░░░░▀▄▄░▒▒▒▒░░░░░░░░░░█\n" +
        "░░░░░░░░░░▀▀▄▄░▒▒▒▒▒▒▒▒▒▒░█\n" +
        "░░░░░░░░░░░░░░▀▄▄▄▄▄░░░░░█")
}

function clue1() {
    console.log("HA you thought it be that easy " + localStorage.getItem("antiHackerName") + "!?, fix it yourself!\n\n-SuperHACKERZZZZZZ2K19");
    trollFace();
}

function styleSwap(sheet) {
    if (sheet === "hacked") {
        document.getElementById("pageStyle").setAttribute("href", "public/styles/hacked.css");
        document.getElementById("tesco_logo").style.display = "none";
        document.getElementById("logo_text").style.display = "none";
        document.getElementById("home_icon").style.display = "none";
        document.getElementById("hacked_logo").style.display = "block";
    }
}

function init() {
    if (localStorage.getItem("pageStyle") === "hacked") {
        styleSwap("hacked");
    } else {
        intro(); //TODO remove this before launch

    }
    console.log("It looks like you've been hacked, Dont worry, the Hacker has left a trail\n\ncall clue1(); to begin getting your site back!\n\n- Not the Hacker... promise!");
}

$(function () {
    $(".glitch-img").mgGlitch({
        destroy: false,
        glitch: true,
        scale: true,
        blend: true,
        blendModeType: 'hue',
        glitch1TimeMin: 200,
        glitch1TimeMax: 400,
        glitch2TimeMin: 10,
        glitch2TimeMax: 100,

    });
});

function intro() {
    if (localStorage.getItem("team_id") === null){
        infoCentre.setUp();
    }
}

function achievementUnlock(title, text, timer) {
    infoCentre.achievementUnlock(title, text, timer);
}

function testhttp() {
    requestCentre.httpRequest("get", "/hello");
}

function forgotPassword() {
    infoCentre.toast("info", "Hint", "I wonder if any requests are being made when logging in? 🤔", 3000);
}

function forgotEmail() {
    infoCentre.toast("info", "Hint", "I wonder if there is any email validation in the code.. 🤔", 3000)
}

function loggedIn() {
    if (localStorage.getItem("loggedIn") !== "true") {
        window.location.replace("index.html")
    }
}

function q1check() {
    if (localStorage.getItem("q1") !== "complete") {
        window.location.replace("q1.html")
    }
}

function q2check() {
    if (localStorage.getItem("q2") !== "complete") {
        window.location.replace("q2.html")
    }
}

function q3check() {
    if (localStorage.getItem("q3") !== "complete") {
        window.location.replace("q3.html")
    }
}


function checkQ1Answer(answer) {
    //TODO UPDATE server call

    if (requestCentre.httpRequest("Put", "http://51.143.154.149:8080/code-group/" + localStorage.getItem("team_id") + "/answers/" + answer.capitalize()) === 200) {
        infoCentre.achievementUnlock("Achievement Unlocked", "That was an ugly baby!", 3000);
        localStorage.setItem("q1", "complete");
        window.location.replace("q2.html");
    } else {
        infoCentre.toast("error", "Error", "That's not the image", 3000);
    }

}

function checkQ2Answer(answer) {
    //TODO UPDATE SERVER CALL
    if (requestCentre.httpRequest("Put", "http://51.143.154.149:8080/code-group/" + localStorage.getItem("team_id") + "/answers/" + answer) === 200) {
        infoCentre.achievementUnlock("Achievement Unlocked", "Well that ain't big!", 3000);
        localStorage.setItem("q2", "complete");
        localStorage.setItem("pageStyle", "normal");
        window.location.replace("q3.html");
    } else {
        infoCentre.toast("error", "Error", "That's not the correct size", 3000);
    }
}

function checkQ3Answer(answer) {
    //TODO UPDATE SERVER CALL
    if (requestCentre.httpRequest("Put", "http://51.143.154.149:8080/code-group/" + localStorage.getItem("team_id") + "/answers/" + answer.capitalize()) === 200) {
        infoCentre.achievementUnlock("Achievement Unlocked", "Almost...", 3000);
        localStorage.setItem("q3", "complete");
        window.location.replace("complete.html");
    } else {
        infoCentre.toast("error", "Error", "That's not correct", 3000);
    }
}
