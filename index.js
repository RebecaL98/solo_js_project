let homeScore = document.getElementById("homeScore")
let guestScore = document.getElementById("guestScore")

let scoreStartHome = 0
let scoreStartGuest = 0

function plusOneHome() {
    scoreStartHome += 1
    homeScore.textContent = scoreStartHome
}

function plusTwoHome() {
    scoreStartHome += 2
    homeScore.textContent = scoreStartHome
}

function plusThreeHome() {
    scoreStartHome += 3
    homeScore.textContent = scoreStartHome
}

function plusOneGuest() {
    scoreStartGuest += 1
    guestScore.textContent = scoreStartGuest
}

function plusTwoGuest() {
    scoreStartGuest += 2
    guestScore.textContent = scoreStartGuest
}

function plusThreeGuest() {
    scoreStartGuest += 3
    guestScore.textContent = scoreStartGuest
}
