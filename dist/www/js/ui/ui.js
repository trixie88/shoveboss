let numOfPlayers = document.getElementById("numOfPlayers");
let position = document.getElementById("position");
let bigBlinds = document.getElementById("bigBlinds");


for (let i = 15; i >= 1; i--) {
    bigBlinds.innerHTML += `<option>${i}</option>`
}

numOfPlayers.addEventListener("change", function (e) {
    let players = numOfPlayers.value;

    if (players == 9) {
        position.innerHTML = `
    <option>UTG</option>
    <option>UTG+1</option>
    <option>UTG+2</option>
    <option>LOWJACK</option>
    <option>HIGHJACK</option>
    <option>CUT OFF</option>
    <option>BUTTON</option>
    <option>SMALL BLIND</option>`;
    }

    if (players == 8) {
        position.innerHTML = `
    <option>UTG</option>
    <option>UTG+1</option>
    <option>LOWJACK</option>
    <option>HIGHJACK</option>
    <option>CUT OFF</option>
    <option>BUTTON</option>
    <option>SMALL BLIND</option>`;
    }

    if (players == 7) {
        position.innerHTML = `
    <option>UTG</option>
    <option>LOWJACK</option>
    <option>HIGHJACK</option>
    <option>CUT OFF</option>
    <option>BUTTON</option>
    <option>SMALL BLIND</option>`;
    }

    if (players == 6) {
        position.innerHTML = `
    <option>LOWJACK</option>
    <option>HIGHJACK</option>
    <option>CUT OFF</option>
    <option>BUTTON</option>
    <option>SMALL BLIND</option>`;
    }

    if (players == 5) {
        position.innerHTML = `
    <option>HIGHJACK</option>
    <option>CUT OFF</option>
    <option>BUTTON</option>
    <option>SMALL BLIND</option>`;
    }

    if (players == 4) {
        position.innerHTML = `
    <option>CUT OFF</option>
    <option>BUTTON</option>
    <option>SMALL BLIND</option>`;
    }

    if (players == 3) {
        position.innerHTML = `
    <option>BUTTON</option>
    <option>SMALL BLIND</option>`;
    }

    if (players == 2) {
        position.innerHTML = `
    <option>SMALL BLIND</option>`;
    }

})