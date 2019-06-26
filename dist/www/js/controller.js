import { Model } from "./model/model.js";
import { Views } from "./views/views.js";

let calculateBTN = document.getElementById("calculateBTN");
let donateBtn = document.getElementById("donateBtn");
const radioElements = document.querySelectorAll('input[name=range-type]');
const sliderRangeElements = document.querySelectorAll("input[class=slider]");
const sliderTextElements = document.querySelectorAll("input[class=range-text]");

class Controller {

    constructor(model) {
        this.model = model;

        // Radio Controllers
        const radioClickListener = (e) => {
            this.model.selectRangeType(e.srcElement.getAttribute("value"));
        }
        let radioElement;
        for (radioElement of radioElements) {
            radioElement.addEventListener("click", radioClickListener);
        }

        // Range Slider Controllers
        const sliderListener = (e) => {
            let newValue = e.target.value;
            const rangeType = e.target.parentElement.getAttribute("id");
            this.updateRangeSlider(newValue, rangeType);
        };
        let sliderElement;
        for (sliderElement of sliderRangeElements) {
            sliderElement.addEventListener("input", sliderListener);
        }

        // Slider Text Controllers
        const sliderTextListener = (e) => {
            const rangeType = e.target.parentElement.parentElement.getAttribute("id");
            let newValue = e.target.value;
            newValue = newValue.replace(/[^0-9.]/g, "");
            this.updateRangeSlider(newValue, rangeType);
        };
        let sliderTextElement;
        for (sliderTextElement of sliderTextElements) {
            sliderTextElement.addEventListener("keyup", sliderTextListener);
        }
    }

    /**
     * Updates the ranges of the slider and text
     * @param newValue the new value
     * @param rangeType the ID of the parent div. "primary", "3bet", "secondary"
     */
    updateRangeSlider(newValue, rangeType) {
        const parentElement = document.getElementById(rangeType);
        let element;
        for (element of parentElement.children) {
            if (element.tagName === "P") {
                element.children.item(1).value = newValue;
            } else if (element.tagName === "INPUT") {
                element.value = newValue;
            }
        }

        this.model.updateRangeSlider(Number(newValue), rangeType);
    }

    run() {
        // Initialize Sliders:
        // controller.updateRangeSlider(0, "3bet");
        // controller.updateRangeSlider(0, "early");
        controller.updateRangeSlider(0, "late");

        this.model.running = true;
    }

    setRange(range) {
        controller.updateRangeSlider(range, "late");

        this.model.running = true;
    }
}

// Initialize MVC elements
const model = new Model();
const views = new Views(model);
const controller = new Controller(model, views);
controller.run();

donateBtn.addEventListener("click", function () {
    window.location.href = "donate.html";
})

calculateBTN.addEventListener("click", function () {
    let numOfPlayers = document.getElementById("numOfPlayers").value;
    let position = document.getElementById("position").value;
    let bigBlinds = document.getElementById("bigBlinds").value;
    let ante = document.querySelector('input[name="anteRadio"]:checked').value;

    if (ante == 10) {
        calculateRangeFor10Ante(numOfPlayers, position, bigBlinds);
    }
    if (ante == 12.5) {
        calculateRangeFor12_5Ante(numOfPlayers, position, bigBlinds);
    }

    $('#exampleModal').modal('hide');
})

function calculateRangeFor12_5Ante(numOfPlayers, position, bigBlinds) {
    if (numOfPlayers == 9) {
        calculateFor12_5AnteAnd9Player(position, bigBlinds);
    }
    if (numOfPlayers == 8) {
        calculateFor12_5AnteAnd8Player(position, bigBlinds);
    }
    if (numOfPlayers == 7) {
        calculateFor12_5AnteAnd7Player(position, bigBlinds);
    }
}

function calculateFor12_5AnteAnd7Player(position, bigBlinds) {
    if (position == "UTG") {
        if (bigBlinds == 1) {
            controller.setRange(100);
        }
        if (bigBlinds == 2) {
            controller.setRange(84.6);
        }
        if (bigBlinds == 3) {
            controller.setRange(49.6);
        }
        if (bigBlinds == 4) {
            controller.setRange(33.9);
        }
        if (bigBlinds == 5) {
            controller.setRange(29.1);
        }
        if (bigBlinds == 6) {
            controller.setRange(27);
        }
        if (bigBlinds == 7) {
            controller.setRange(24.3);
        }
        if (bigBlinds == 8) {
            controller.setRange(22.5);
        }
        if (bigBlinds == 9) {
            controller.setRange(21.3);
        }
        if (bigBlinds == 10) {
            controller.setRange(20.1);
        }
        if (bigBlinds == 11) {
            controller.setRange(17.8);
        }
        if (bigBlinds == 12) {
            controller.setRange(17.2);
        }
        if (bigBlinds == 13) {
            controller.setRange(16.3);
        }
        if (bigBlinds == 14) {
            controller.setRange(15.1);
        }
        if (bigBlinds == 15) {
            controller.setRange(13.7);
        }
    }
    if (position == "LOWJACK") {
        if (bigBlinds == 1) {
            controller.setRange(100);
        }
        if (bigBlinds == 2) {
            controller.setRange(84.6);
        }
        if (bigBlinds == 3) {
            controller.setRange(50.2);
        }
        if (bigBlinds == 4) {
            controller.setRange(39.1);
        }
        if (bigBlinds == 5) {
            controller.setRange(32.7);
        }
        if (bigBlinds == 6) {
            controller.setRange(30.6);
        }
        if (bigBlinds == 7) {
            controller.setRange(28.5);
        }
        if (bigBlinds == 8) {
            controller.setRange(27);
        }
        if (bigBlinds == 9) {
            controller.setRange(24.9);
        }
        if (bigBlinds == 10) {
            controller.setRange(22.2);
        }///
        if (bigBlinds == 11) {
            controller.setRange(22.2);
        }
        if (bigBlinds == 12) {
            controller.setRange(20.7);
        }
        if (bigBlinds == 13) {
            controller.setRange(19.2);
        }
        if (bigBlinds == 14) {
            controller.setRange(17.5);
        }
        if (bigBlinds == 15) {
            controller.setRange(16.9);
        }
    }

    if (position == "HIGHJACK") {
        if (bigBlinds == 1) {
            controller.setRange(100);
        }
        if (bigBlinds == 2) {
            controller.setRange(83.7);
        }
        if (bigBlinds == 3) {
            controller.setRange(50.8);
        }
        if (bigBlinds == 4) {
            controller.setRange(42.1);
        }
        if (bigBlinds == 5) {
            controller.setRange(37.3);
        }
        if (bigBlinds == 6) {
            controller.setRange(33.9);
        }
        if (bigBlinds == 7) {
            controller.setRange(33.3);
        }
        if (bigBlinds == 8) {
            controller.setRange(32.1);
        }
        if (bigBlinds == 9) {
            controller.setRange(29.7);
        }
        if (bigBlinds == 10) {
            controller.setRange(29.1);
        }
        if (bigBlinds == 11) {
            controller.setRange(26.7);
        }
        if (bigBlinds == 12) {
            controller.setRange(25.8);
        }
        if (bigBlinds == 13) {
            controller.setRange(24);
        }
        if (bigBlinds == 14) {
            controller.setRange(22.2);
        }
        if (bigBlinds == 15) {
            controller.setRange(22.5);
        }
    }

    if (position == "CUT OFF") {
        if (bigBlinds == 1) {
            controller.setRange(99.1);
        }
        if (bigBlinds == 2) {
            controller.setRange(74.4);
        }
        if (bigBlinds == 3) {
            controller.setRange(53.5);
        }
        if (bigBlinds == 4) {
            controller.setRange(46);
        }
        if (bigBlinds == 5) {
            controller.setRange(43.3);
        }
        if (bigBlinds == 6) {
            controller.setRange(41.2);
        }
        if (bigBlinds == 7) {
            controller.setRange(38.5);
        }
        if (bigBlinds == 8) {
            controller.setRange(35.1);
        }
        if (bigBlinds == 9) {
            controller.setRange(35.1);
        }
        if (bigBlinds == 10) {
            controller.setRange(33.6);
        }
        if (bigBlinds == 11) {
            controller.setRange(32.4);
        }
        if (bigBlinds == 12) {
            controller.setRange(32.1);
        }
        if (bigBlinds == 13) {
            controller.setRange(30.6);
        }
        if (bigBlinds == 14) {
            controller.setRange(29.7);
        }
        if (bigBlinds == 15) {
            controller.setRange(29.1);
        }
    }

    if (position == "BUTTON") {
        if (bigBlinds == 1) {
            controller.setRange(82.5);
        }
        if (bigBlinds == 2) {
            controller.setRange(64.7);
        }
        if (bigBlinds == 3) {
            controller.setRange(58.1);
        }
        if (bigBlinds == 4) {
            controller.setRange(54.4);
        }
        if (bigBlinds == 5) {
            controller.setRange(51.4);
        }
        if (bigBlinds == 6) {
            controller.setRange(49.9);
        }
        if (bigBlinds == 7) {
            controller.setRange(47.2);
        }
        if (bigBlinds == 8) {
            controller.setRange(46);
        }
        if (bigBlinds == 9) {
            controller.setRange(43.9);
        }
        if (bigBlinds == 10) {
            controller.setRange(41.5);
        }
        if (bigBlinds == 11) {
            controller.setRange(40.6);
        }
        if (bigBlinds == 12) {
            controller.setRange(38.2);
        }
        if (bigBlinds == 13) {
            controller.setRange(36.7);
        }
        if (bigBlinds == 14) {
            controller.setRange(36.3);
        }
        if (bigBlinds == 15) {
            controller.setRange(35.4);
        }
    }

    if (position == "SMALL BLIND") {
        if (bigBlinds == 1) {
            controller.setRange(100);
        }
        if (bigBlinds == 2) {
            controller.setRange(100);
        }
        if (bigBlinds == 3) {
            controller.setRange(91.6);
        }
        if (bigBlinds == 4) {
            controller.setRange(84.9);
        }
        if (bigBlinds == 5) {
            controller.setRange(81);
        }
        if (bigBlinds == 6) {
            controller.setRange(78.9);
        }
        if (bigBlinds == 7) {
            controller.setRange(76.5);
        }
        if (bigBlinds == 8) {
            controller.setRange(73.8);
        }
        if (bigBlinds == 9) {
            controller.setRange(71.9);
        }
        if (bigBlinds == 10) {
            controller.setRange(68.3);
        }
        if (bigBlinds == 11) {
            controller.setRange(66.8);
        }
        if (bigBlinds == 12) {
            controller.setRange(64.7);
        }
        if (bigBlinds == 13) {
            controller.setRange(62.6);
        }
        if (bigBlinds == 14) {
            controller.setRange(61.7);
        }
        if (bigBlinds == 15) {
            controller.setRange(60.8);
        }
    }
}

function calculateFor12_5AnteAnd8Player(position, bigBlinds) {
    if (position == "UTG") {
        if (bigBlinds == 1) {
            controller.setRange(100);
        }
        if (bigBlinds == 2) {
            controller.setRange(89.1);
        }
        if (bigBlinds == 3) {
            controller.setRange(56.3);
        }
        if (bigBlinds == 4) {
            controller.setRange(34.8);
        }
        if (bigBlinds == 5) {
            controller.setRange(27);
        }
        if (bigBlinds == 6) {
            controller.setRange(24.6);
        }
        if (bigBlinds == 7) {
            controller.setRange(22.2);
        }
        if (bigBlinds == 8) {
            controller.setRange(19.5);
        }
        if (bigBlinds == 9) {
            controller.setRange(19.6);
        }
        if (bigBlinds == 10) {
            controller.setRange(17.6);
        }
        if (bigBlinds == 11) {
            controller.setRange(16.6);
        }
        if (bigBlinds == 12) {
            controller.setRange(14.6);
        }
        if (bigBlinds == 13) {
            controller.setRange(14.6);
        }
        if (bigBlinds == 14) {
            controller.setRange(13.3);
        }
        if (bigBlinds == 15) {
            controller.setRange(12.4);
        }
    }
    if (position == "UTG+1") {
        if (bigBlinds == 1) {
            controller.setRange(100);
        }
        if (bigBlinds == 2) {
            controller.setRange(89.1);
        }
        if (bigBlinds == 3) {
            controller.setRange(57.2);
        }
        if (bigBlinds == 4) {
            controller.setRange(37.6);
        }
        if (bigBlinds == 5) {
            controller.setRange(30.6);
        }
        if (bigBlinds == 6) {
            controller.setRange(27.9);
        }
        if (bigBlinds == 7) {
            controller.setRange(24.9);
        }
        if (bigBlinds == 8) {
            controller.setRange(23.4);
        }
        if (bigBlinds == 9) {
            controller.setRange(21.9);
        }
        if (bigBlinds == 10) {
            controller.setRange(20.4);
        }
        if (bigBlinds == 11) {
            controller.setRange(19.6);
        }
        if (bigBlinds == 12) {
            controller.setRange(17.5);
        }
        if (bigBlinds == 13) {
            controller.setRange(16.6);
        }
        if (bigBlinds == 14) {
            controller.setRange(15.4);
        }
        if (bigBlinds == 15) {
            controller.setRange(15.1);
        }
    }
    if (position == "LOWJACK") {
        if (bigBlinds == 1) {
            controller.setRange(100);
        }
        if (bigBlinds == 2) {
            controller.setRange(88.2);
        }
        if (bigBlinds == 3) {
            controller.setRange(57.8);
        }
        if (bigBlinds == 4) {
            controller.setRange(40.3);
        }
        if (bigBlinds == 5) {
            controller.setRange(33.3);
        }
        if (bigBlinds == 6) {
            controller.setRange(32.4);
        }
        if (bigBlinds == 7) {
            controller.setRange(30);
        }
        if (bigBlinds == 8) {
            controller.setRange(27.3);
        }
        if (bigBlinds == 9) {
            controller.setRange(25.2);
        }
        if (bigBlinds == 10) {
            controller.setRange(22.8);
        }
        if (bigBlinds == 11) {
            controller.setRange(22.5);
        }
        if (bigBlinds == 12) {
            controller.setRange(21);
        }
        if (bigBlinds == 13) {
            controller.setRange(20.4);
        }
        if (bigBlinds == 14) {
            controller.setRange(19.2);
        }
        if (bigBlinds == 15) {
            controller.setRange(18.9);
        }
    }

    if (position == "HIGHJACK") {
        if (bigBlinds == 1) {
            controller.setRange(100);
        }
        if (bigBlinds == 2) {
            controller.setRange(84.6);
        }
        if (bigBlinds == 3) {
            controller.setRange(58.4);
        }
        if (bigBlinds == 4) {
            controller.setRange(42.4);
        }
        if (bigBlinds == 5) {
            controller.setRange(39.1);
        }
        if (bigBlinds == 6) {
            controller.setRange(36.3);
        }
        if (bigBlinds == 7) {
            controller.setRange(33.3);
        }
        if (bigBlinds == 8) {
            controller.setRange(33);
        }
        if (bigBlinds == 9) {
            controller.setRange(31.5);
        }
        if (bigBlinds == 10) {
            controller.setRange(29.4);
        }
        if (bigBlinds == 11) {
            controller.setRange(28.2);
        }
        if (bigBlinds == 12) {
            controller.setRange(25.8);
        }
        if (bigBlinds == 13) {
            controller.setRange(24.9);
        }
        if (bigBlinds == 14) {
            controller.setRange(23.1);
        }
        if (bigBlinds == 15) {
            controller.setRange(22.2);
        }
    }

    if (position == "CUT OFF") {
        if (bigBlinds == 1) {
            controller.setRange(100);
        }
        if (bigBlinds == 2) {
            controller.setRange(80.7);
        }
        if (bigBlinds == 3) {
            controller.setRange(59.3);
        }
        if (bigBlinds == 4) {
            controller.setRange(47.8);
        }
        if (bigBlinds == 5) {
            controller.setRange(43.6);
        }
        if (bigBlinds == 6) {
            controller.setRange(41.5);
        }
        if (bigBlinds == 7) {
            controller.setRange(40.3);
        }
        if (bigBlinds == 8) {
            controller.setRange(36.7);
        }
        if (bigBlinds == 9) {
            controller.setRange(35.4);
        }
        if (bigBlinds == 10) {
            controller.setRange(34.2);
        }
        if (bigBlinds == 11) {
            controller.setRange(33);
        }
        if (bigBlinds == 12) {
            controller.setRange(32.4);
        }
        if (bigBlinds == 13) {
            controller.setRange(31.8);
        }
        if (bigBlinds == 14) {
            controller.setRange(30.6);
        }
        if (bigBlinds == 15) {
            controller.setRange(29.7);
        }
    }

    if (position == "BUTTON") {
        if (bigBlinds == 1) {
            controller.setRange(87.9);
        }
        if (bigBlinds == 2) {
            controller.setRange(69.2);
        }
        if (bigBlinds == 3) {
            controller.setRange(60.5);
        }
        if (bigBlinds == 4) {
            controller.setRange(54.8);
        }
        if (bigBlinds == 5) {
            controller.setRange(52.6);
        }
        if (bigBlinds == 6) {
            controller.setRange(50.8);
        }
        if (bigBlinds == 7) {
            controller.setRange(49.3);
        }
        if (bigBlinds == 8) {
            controller.setRange(46.3);
        }
        if (bigBlinds == 9) {
            controller.setRange(45.1);
        }
        if (bigBlinds == 10) {
            controller.setRange(43);
        }
        if (bigBlinds == 11) {
            controller.setRange(41.5);
        }
        if (bigBlinds == 12) {
            controller.setRange(40.6);
        }
        if (bigBlinds == 13) {
            controller.setRange(37.6);
        }
        if (bigBlinds == 14) {
            controller.setRange(37.3);
        }
        if (bigBlinds == 15) {
            controller.setRange(36.3);
        }
    }

    if (position == "SMALL BLIND") {
        if (bigBlinds == 1) {
            controller.setRange(100);
        }
        if (bigBlinds == 2) {
            controller.setRange(100);
        }
        if (bigBlinds == 3) {
            controller.setRange(92.5);
        }
        if (bigBlinds == 4) {
            controller.setRange(85.5);
        }
        if (bigBlinds == 5) {
            controller.setRange(81.9);
        }
        if (bigBlinds == 6) {
            controller.setRange(79.2);
        }
        if (bigBlinds == 7) {
            controller.setRange(76.5);
        }
        if (bigBlinds == 8) {
            controller.setRange(74.4);
        }
        if (bigBlinds == 9) {
            controller.setRange(72.9);
        }
        if (bigBlinds == 10) {
            controller.setRange(71);
        }
        if (bigBlinds == 11) {
            controller.setRange(68.3);
        }
        if (bigBlinds == 12) {
            controller.setRange(66.2);
        }
        if (bigBlinds == 13) {
            controller.setRange(64.7);
        }
        if (bigBlinds == 14) {
            controller.setRange(62.9);
        }
        if (bigBlinds == 15) {
            controller.setRange(60.8);
        }
    }
}

function calculateFor12_5AnteAnd9Player(position, bigBlinds) {
    if (position == "UTG") {
        if (bigBlinds == 1) {
            controller.setRange(100);
        }
        if (bigBlinds == 2) {
            controller.setRange(90);
        }
        if (bigBlinds == 3) {
            controller.setRange(62);
        }
        if (bigBlinds == 4) {
            controller.setRange(37.3);
        }
        if (bigBlinds == 5) {
            controller.setRange(24.9);
        }
        if (bigBlinds == 6) {
            controller.setRange(22.5);
        }
        if (bigBlinds == 7) {
            controller.setRange(20.1);
        }
        if (bigBlinds == 8) {
            controller.setRange(18.7);
        }
        if (bigBlinds == 9) {
            controller.setRange(16.9);
        }
        if (bigBlinds == 10) {
            controller.setRange(15.7);
        }
        if (bigBlinds == 11) {
            controller.setRange(14.6);
        }
        if (bigBlinds == 12) {
            controller.setRange(13.7);
        }
        if (bigBlinds == 13) {
            controller.setRange(13.1);
        }
        if (bigBlinds == 14) {
            controller.setRange(12.5);
        }
        if (bigBlinds == 15) {
            controller.setRange(11.5);
        }
    }
    if (position == "UTG+1") {
        if (bigBlinds == 1) {
            controller.setRange(100);
        }
        if (bigBlinds == 2) {
            controller.setRange(90);
        }
        if (bigBlinds == 3) {
            controller.setRange(62);
        }
        if (bigBlinds == 4) {
            controller.setRange(38.8);
        }
        if (bigBlinds == 5) {
            controller.setRange(28.5);
        }
        if (bigBlinds == 6) {
            controller.setRange(24.6);
        }
        if (bigBlinds == 7) {
            controller.setRange(23.4);
        }
        if (bigBlinds == 8) {
            controller.setRange(20.4);
        }
        if (bigBlinds == 9) {
            controller.setRange(20.1);
        }
        if (bigBlinds == 10) {
            controller.setRange(17.5);
        }
        if (bigBlinds == 11) {
            controller.setRange(17.2);
        }
        if (bigBlinds == 12) {
            controller.setRange(15.4);
        }
        if (bigBlinds == 13) {
            controller.setRange(15.1);
        }
        if (bigBlinds == 14) {
            controller.setRange(14.6);
        }
        if (bigBlinds == 15) {
            controller.setRange(13.3);
        }
    }
    if (position == "UTG+2") {
        if (bigBlinds == 1) {
            controller.setRange(100);
        }
        if (bigBlinds == 2) {
            controller.setRange(90);
        }
        if (bigBlinds == 3) {
            controller.setRange(61.7);
        }
        if (bigBlinds == 4) {
            controller.setRange(40.6);
        }
        if (bigBlinds == 5) {
            controller.setRange(31.8);
        }
        if (bigBlinds == 6) {
            controller.setRange(28.2);
        }
        if (bigBlinds == 7) {
            controller.setRange(26.1);
        }
        if (bigBlinds == 8) {
            controller.setRange(24.6);
        }
        if (bigBlinds == 9) {
            controller.setRange(21.6);
        }
        if (bigBlinds == 10) {
            controller.setRange(21.3);
        }
        if (bigBlinds == 11) {
            controller.setRange(20.1);
        }
        if (bigBlinds == 12) {
            controller.setRange(17.8);
        }
        if (bigBlinds == 13) {
            controller.setRange(17.5);
        }
        if (bigBlinds == 14) {
            controller.setRange(15.7);
        }
        if (bigBlinds == 15) {
            controller.setRange(15.1);
        }
    }
    if (position == "LOWJACK") {
        if (bigBlinds == 1) {
            controller.setRange(100);
        }
        if (bigBlinds == 2) {
            controller.setRange(89.1);
        }
        if (bigBlinds == 3) {
            controller.setRange(61.4);
        }
        if (bigBlinds == 4) {
            controller.setRange(40.9);
        }
        if (bigBlinds == 5) {
            controller.setRange(34.8);
        }
        if (bigBlinds == 6) {
            controller.setRange(33);
        }
        if (bigBlinds == 7) {
            controller.setRange(30.6);
        }
        if (bigBlinds == 8) {
            controller.setRange(28.5);
        }
        if (bigBlinds == 9) {
            controller.setRange(27);
        }
        if (bigBlinds == 10) {
            controller.setRange(25.8);
        }
        if (bigBlinds == 11) {
            controller.setRange(23.1);
        }
        if (bigBlinds == 12) {
            controller.setRange(23.1);
        }
        if (bigBlinds == 13) {
            controller.setRange(20.4);
        }
        if (bigBlinds == 14) {
            controller.setRange(20.4);
        }
        if (bigBlinds == 15) {
            controller.setRange(18.3);
        }
    }

    if (position == "HIGHJACK") {
        if (bigBlinds == 1) {
            controller.setRange(100);
        }
        if (bigBlinds == 2) {
            controller.setRange(89.1);
        }
        if (bigBlinds == 3) {
            controller.setRange(60.8);
        }
        if (bigBlinds == 4) {
            controller.setRange(44.8);
        }
        if (bigBlinds == 5) {
            controller.setRange(40);
        }
        if (bigBlinds == 6) {
            controller.setRange(37);
        }
        if (bigBlinds == 7) {
            controller.setRange(33.6);
        }
        if (bigBlinds == 8) {
            controller.setRange(33.3);
        }
        if (bigBlinds == 9) {
            controller.setRange(32.1);
        }
        if (bigBlinds == 10) {
            controller.setRange(30.3);
        }
        if (bigBlinds == 11) {
            controller.setRange(29.4);
        }
        if (bigBlinds == 12) {
            controller.setRange(27);
        }
        if (bigBlinds == 13) {
            controller.setRange(25.8);
        }
        if (bigBlinds == 14) {
            controller.setRange(25.2);
        }
        if (bigBlinds == 15) {
            controller.setRange(23.1);
        }
    }

    if (position == "CUT OFF") {
        if (bigBlinds == 1) {
            controller.setRange(100);
        }
        if (bigBlinds == 2) {
            controller.setRange(81.9);
        }
        if (bigBlinds == 3) {
            controller.setRange(60.2);
        }
        if (bigBlinds == 4) {
            controller.setRange(49.9);
        }
        if (bigBlinds == 5) {
            controller.setRange(45.1);
        }
        if (bigBlinds == 6) {
            controller.setRange(43.6);
        }
        if (bigBlinds == 7) {
            controller.setRange(41.5);
        }
        if (bigBlinds == 8) {
            controller.setRange(39.7);
        }
        if (bigBlinds == 9) {
            controller.setRange(35.4);
        }
        if (bigBlinds == 10) {
            controller.setRange(35.1);
        }
        if (bigBlinds == 11) {
            controller.setRange(34.2);
        }
        if (bigBlinds == 12) {
            controller.setRange(33);
        }
        if (bigBlinds == 13) {
            controller.setRange(32.7);
        }
        if (bigBlinds == 14) {
            controller.setRange(31.2);
        }
        if (bigBlinds == 15) {
            controller.setRange(30.6);
        }
    }

    if (position == "BUTTON") {
        if (bigBlinds == 1) {
            controller.setRange(90);
        }
        if (bigBlinds == 2) {
            controller.setRange(71);
        }
        if (bigBlinds == 3) {
            controller.setRange(62.3);
        }
        if (bigBlinds == 4) {
            controller.setRange(56.9);
        }
        if (bigBlinds == 5) {
            controller.setRange(54.4);
        }
        if (bigBlinds == 6) {
            controller.setRange(52.9);
        }
        if (bigBlinds == 7) {
            controller.setRange(51.1);
        }
        if (bigBlinds == 8) {
            controller.setRange(47.5);
        }
        if (bigBlinds == 9) {
            controller.setRange(46.3);
        }
        if (bigBlinds == 10) {
            controller.setRange(44.2);
        }
        if (bigBlinds == 11) {
            controller.setRange(42.7);
        }
        if (bigBlinds == 12) {
            controller.setRange(40.6);
        }
        if (bigBlinds == 13) {
            controller.setRange(40.3);
        }
        if (bigBlinds == 14) {
            controller.setRange(37);
        }
        if (bigBlinds == 15) {
            controller.setRange(36.3);
        }
    }

    if (position == "SMALL BLIND") {
        if (bigBlinds == 1) {
            controller.setRange(100);
        }
        if (bigBlinds == 2) {
            controller.setRange(100);
        }
        if (bigBlinds == 3) {
            controller.setRange(94.6);
        }
        if (bigBlinds == 4) {
            controller.setRange(85.8);
        }
        if (bigBlinds == 5) {
            controller.setRange(82.2);
        }
        if (bigBlinds == 6) {
            controller.setRange(80.1);
        }
        if (bigBlinds == 7) {
            controller.setRange(77.1);
        }
        if (bigBlinds == 8) {
            controller.setRange(75.6);
        }
        if (bigBlinds == 9) {
            controller.setRange(73.2);
        }
        if (bigBlinds == 10) {
            controller.setRange(71.9);
        }
        if (bigBlinds == 11) {
            controller.setRange(70.1);
        }
        if (bigBlinds == 12) {
            controller.setRange(67.1);
        }
        if (bigBlinds == 13) {
            controller.setRange(64.4);
        }
        if (bigBlinds == 14) {
            controller.setRange(64.7);
        }
        if (bigBlinds == 15) {
            controller.setRange(61.7);
        }
    }
}

function calculateRangeFor10Ante(numOfPlayers, position, bigBlinds) {

    if (numOfPlayers == 9) {
        calculateFor10AnteAnd9Player(position, bigBlinds);
    }
    if (numOfPlayers == 8) {
        calculateFor10AnteAnd8Player(position, bigBlinds);
    }
    if (numOfPlayers == 7) {
        calculateFor10AnteAnd7Player(position, bigBlinds);
    }


}

function calculateFor10AnteAnd7Player(position, bigBlinds) {
    if (position == "UTG") {
        if (bigBlinds == 1) {
            controller.setRange(100);
        }
        if (bigBlinds == 2) {
            controller.setRange(82.5);
        }
        if (bigBlinds == 3) {
            controller.setRange(44.8);
        }
        if (bigBlinds == 4) {
            controller.setRange(30.6);
        }
        if (bigBlinds == 5) {
            controller.setRange(27.9);
        }
        if (bigBlinds == 6) {
            controller.setRange(24.9);
        }
        if (bigBlinds == 7) {
            controller.setRange(23.4);
        }
        if (bigBlinds == 8) {
            controller.setRange(21.6);
        }
        if (bigBlinds == 9) {
            controller.setRange(20.1);
        }
        if (bigBlinds == 10) {
            controller.setRange(17.8);
        }
        if (bigBlinds == 11) {
            controller.setRange(16.9);
        }
        if (bigBlinds == 12) {
            controller.setRange(15.4);
        }
        if (bigBlinds == 13) {
            controller.setRange(15.5);
        }
        if (bigBlinds == 14) {
            controller.setRange(13.7);
        }
        if (bigBlinds == 15) {
            controller.setRange(13.7);
        }
    }
    if (position == "LOWJACK") {
        if (bigBlinds == 1) {
            controller.setRange(100);
        }
        if (bigBlinds == 2) {
            controller.setRange(80.4);
        }
        if (bigBlinds == 3) {
            controller.setRange(46.6);
        }
        if (bigBlinds == 4) {
            controller.setRange(35.4);
        }
        if (bigBlinds == 5) {
            controller.setRange(32.4);
        }
        if (bigBlinds == 6) {
            controller.setRange(29.1);
        }
        if (bigBlinds == 7) {
            controller.setRange(27);
        }
        if (bigBlinds == 8) {
            controller.setRange(24.9);
        }
        if (bigBlinds == 9) {
            controller.setRange(22.8);
        }
        if (bigBlinds == 10) {
            controller.setRange(22.2);
        }
        if (bigBlinds == 11) {
            controller.setRange(20.4);
        }
        if (bigBlinds == 12) {
            controller.setRange(19.2);
        }
        if (bigBlinds == 13) {
            controller.setRange(18.4);
        }
        if (bigBlinds == 14) {
            controller.setRange(16.6);
        }
        if (bigBlinds == 15) {
            controller.setRange(16);
        }
    }

    if (position == "HIGHJACK") {
        if (bigBlinds == 1) {
            controller.setRange(100);
        }
        if (bigBlinds == 2) {
            controller.setRange(76.5);
        }
        if (bigBlinds == 3) {
            controller.setRange(47.8);
        }
        if (bigBlinds == 4) {
            controller.setRange(39.7);
        }
        if (bigBlinds == 5) {
            controller.setRange(36);
        }
        if (bigBlinds == 6) {
            controller.setRange(33.3);
        }
        if (bigBlinds == 7) {
            controller.setRange(32.1);
        }
        if (bigBlinds == 8) {
            controller.setRange(30);
        }
        if (bigBlinds == 9) {
            controller.setRange(28.5);
        }
        if (bigBlinds == 10) {
            controller.setRange(27);
        }
        if (bigBlinds == 11) {
            controller.setRange(24.9);
        }
        if (bigBlinds == 12) {
            controller.setRange(24);
        }
        if (bigBlinds == 13) {
            controller.setRange(23.1);
        }
        if (bigBlinds == 14) {
            controller.setRange(21.3);
        }
        if (bigBlinds == 15) {
            controller.setRange(19.5);
        }
    }

    if (position == "CUT OFF") {
        if (bigBlinds == 1) {
            controller.setRange(96.4);
        }
        if (bigBlinds == 2) {
            controller.setRange(70.4);
        }
        if (bigBlinds == 3) {
            controller.setRange(49.9);
        }
        if (bigBlinds == 4) {
            controller.setRange(44.2);
        }
        if (bigBlinds == 5) {
            controller.setRange(41.8);
        }
        if (bigBlinds == 6) {
            controller.setRange(40);
        }
        if (bigBlinds == 7) {
            controller.setRange(36.7);
        }
        if (bigBlinds == 8) {
            controller.setRange(35.1);
        }
        if (bigBlinds == 9) {
            controller.setRange(34.2);
        }
        if (bigBlinds == 10) {
            controller.setRange(32.7);
        }
        if (bigBlinds == 11) {
            controller.setRange(32.1);
        }
        if (bigBlinds == 12) {
            controller.setRange(30.6);
        }
        if (bigBlinds == 13) {
            controller.setRange(29.4);
        }
        if (bigBlinds == 14) {
            controller.setRange(27.9);
        }
        if (bigBlinds == 15) {
            controller.setRange(26.4);
        }
    }

    if (position == "BUTTON") {
        if (bigBlinds == 1) {
            controller.setRange(77.4);
        }
        if (bigBlinds == 2) {
            controller.setRange(61.4);
        }
        if (bigBlinds == 3) {
            controller.setRange(55.7);
        }
        if (bigBlinds == 4) {
            controller.setRange(51.1);
        }
        if (bigBlinds == 5) {
            controller.setRange(49.9);
        }
        if (bigBlinds == 6) {
            controller.setRange(48.1);
        }
        if (bigBlinds == 7) {
            controller.setRange(45.7);
        }
        if (bigBlinds == 8) {
            controller.setRange(43.9);
        }
        if (bigBlinds == 9) {
            controller.setRange(42.4);
        }
        if (bigBlinds == 10) {
            controller.setRange(39.4);
        }
        if (bigBlinds == 11) {
            controller.setRange(37.6);
        }
        if (bigBlinds == 12) {
            controller.setRange(36.7);
        }
        if (bigBlinds == 13) {
            controller.setRange(36);
        }
        if (bigBlinds == 14) {
            controller.setRange(34.5);
        }
        if (bigBlinds == 15) {
            controller.setRange(34.2);
        }
    }

    if (position == "SMALL BLIND") {
        if (bigBlinds == 1) {
            controller.setRange(100);
        }
        if (bigBlinds == 2) {
            controller.setRange(100);
        }
        if (bigBlinds == 3) {
            controller.setRange(89.1);
        }
        if (bigBlinds == 4) {
            controller.setRange(81.3);
        }
        if (bigBlinds == 5) {
            controller.setRange(78.9);
        }
        if (bigBlinds == 6) {
            controller.setRange(75.9);
        }
        if (bigBlinds == 7) {
            controller.setRange(74.4);
        }
        if (bigBlinds == 8) {
            controller.setRange(72.9);
        }
        if (bigBlinds == 9) {
            controller.setRange(70.1);
        }
        if (bigBlinds == 10) {
            controller.setRange(67.1);
        }
        if (bigBlinds == 11) {
            controller.setRange(63.8);
        }
        if (bigBlinds == 12) {
            controller.setRange(63.5);
        }
        if (bigBlinds == 13) {
            controller.setRange(61.4);
        }
        if (bigBlinds == 14) {
            controller.setRange(60.5);
        }
        if (bigBlinds == 15) {
            controller.setRange(56.9);
        }
    }
}




function calculateFor10AnteAnd8Player(position, bigBlinds) {
    if (position == "UTG") {
        if (bigBlinds == 1) {
            controller.setRange(100);
        }
        if (bigBlinds == 2) {
            controller.setRange(83.7);
        }
        if (bigBlinds == 3) {
            controller.setRange(48.7);
        }
        if (bigBlinds == 4) {
            controller.setRange(30.6);
        }
        if (bigBlinds == 5) {
            controller.setRange(25.5);
        }
        if (bigBlinds == 6) {
            controller.setRange(23.1);
        }
        if (bigBlinds == 7) {
            controller.setRange(20.1);
        }
        if (bigBlinds == 8) {
            controller.setRange(18.7);
        }
        if (bigBlinds == 9) {
            controller.setRange(17.2);
        }
        if (bigBlinds == 10) {
            controller.setRange(16.6);
        }
        if (bigBlinds == 11) {
            controller.setRange(15.1);
        }
        if (bigBlinds == 12) {
            controller.setRange(13.7);
        }
        if (bigBlinds == 13) {
            controller.setRange(13);
        }
        if (bigBlinds == 14) {
            controller.setRange(12.4);
        }
        if (bigBlinds == 15) {
            controller.setRange(11.8);
        }
    }
    if (position == "UTG+1") {
        if (bigBlinds == 1) {
            controller.setRange(100);
        }
        if (bigBlinds == 2) {
            controller.setRange(82.8);
        }
        if (bigBlinds == 3) {
            controller.setRange(49);
        }
        if (bigBlinds == 4) {
            controller.setRange(31.8);
        }
        if (bigBlinds == 5) {
            controller.setRange(28.8);
        }
        if (bigBlinds == 6) {
            controller.setRange(26.1);
        }
        if (bigBlinds == 7) {
            controller.setRange(23.7);
        }
        if (bigBlinds == 8) {
            controller.setRange(21.6);
        }
        if (bigBlinds == 9) {
            controller.setRange(20.4);
        }
        if (bigBlinds == 10) {
            controller.setRange(17.9);
        }
        if (bigBlinds == 11) {
            controller.setRange(17.5);
        }
        if (bigBlinds == 12) {
            controller.setRange(16.6);
        }
        if (bigBlinds == 13) {
            controller.setRange(16);
        }
        if (bigBlinds == 14) {
            controller.setRange(13.7);
        }
        if (bigBlinds == 15) {
            controller.setRange(13.7);
        }
    }
    if (position == "LOWJACK") {
        if (bigBlinds == 1) {
            controller.setRange(100);
        }
        if (bigBlinds == 2) {
            controller.setRange(82.8);
        }
        if (bigBlinds == 3) {
            controller.setRange(49);
        }
        if (bigBlinds == 4) {
            controller.setRange(36);
        }
        if (bigBlinds == 5) {
            controller.setRange(32.7);
        }
        if (bigBlinds == 6) {
            controller.setRange(30);
        }
        if (bigBlinds == 7) {
            controller.setRange(28.2);
        }
        if (bigBlinds == 8) {
            controller.setRange(24.9);
        }
        if (bigBlinds == 9) {
            controller.setRange(24.6);
        }
        if (bigBlinds == 10) {
            controller.setRange(22.2);
        }
        if (bigBlinds == 11) {
            controller.setRange(20.7);
        }
        if (bigBlinds == 12) {
            controller.setRange(20.4);
        }
        if (bigBlinds == 13) {
            controller.setRange(18.3);
        }
        if (bigBlinds == 14) {
            controller.setRange(17.8);
        }
        if (bigBlinds == 15) {
            controller.setRange(16.6);
        }
    }

    if (position == "HIGHJACK") {
        if (bigBlinds == 1) {
            controller.setRange(100);
        }
        if (bigBlinds == 2) {
            controller.setRange(82.2);
        }
        if (bigBlinds == 3) {
            controller.setRange(49.9);
        }
        if (bigBlinds == 4) {
            controller.setRange(40);
        }
        if (bigBlinds == 5) {
            controller.setRange(37);
        }
        if (bigBlinds == 6) {
            controller.setRange(33.6);
        }
        if (bigBlinds == 7) {
            controller.setRange(33);
        }
        if (bigBlinds == 8) {
            controller.setRange(31.5);
        }
        if (bigBlinds == 9) {
            controller.setRange(30);
        }
        if (bigBlinds == 10) {
            controller.setRange(27.6);
        }
        if (bigBlinds == 11) {
            controller.setRange(25.8);
        }
        if (bigBlinds == 12) {
            controller.setRange(24.9);
        }
        if (bigBlinds == 13) {
            controller.setRange(23.1);
        }
        if (bigBlinds == 14) {
            controller.setRange(21.3);
        }
        if (bigBlinds == 15) {
            controller.setRange(21);
        }
    }

    if (position == "CUT OFF") {
        if (bigBlinds == 1) {
            controller.setRange(98.2);
        }
        if (bigBlinds == 2) {
            controller.setRange(72.2);
        }
        if (bigBlinds == 3) {
            controller.setRange(52);
        }
        if (bigBlinds == 4) {
            controller.setRange(44.5);
        }
        if (bigBlinds == 5) {
            controller.setRange(43);
        }
        if (bigBlinds == 6) {
            controller.setRange(40.3);
        }
        if (bigBlinds == 7) {
            controller.setRange(38.5);
        }
        if (bigBlinds == 8) {
            controller.setRange(35.4);
        }
        if (bigBlinds == 9) {
            controller.setRange(34.2);
        }
        if (bigBlinds == 10) {
            controller.setRange(32.7);
        }
        if (bigBlinds == 11) {
            controller.setRange(32.7);
        }
        if (bigBlinds == 12) {
            controller.setRange(30.9);
        }
        if (bigBlinds == 13) {
            controller.setRange(30.6);
        }
        if (bigBlinds == 14) {
            controller.setRange(29.4);
        }
        if (bigBlinds == 15) {
            controller.setRange(27.3);
        }
    }

    if (position == "BUTTON") {
        if (bigBlinds == 1) {
            controller.setRange(80.4);
        }
        if (bigBlinds == 2) {
            controller.setRange(62.6);
        }
        if (bigBlinds == 3) {
            controller.setRange(55.7);
        }
        if (bigBlinds == 4) {
            controller.setRange(54.4);
        }
        if (bigBlinds == 5) {
            controller.setRange(51.4);
        }
        if (bigBlinds == 6) {
            controller.setRange(48.7);
        }
        if (bigBlinds == 7) {
            controller.setRange(46.9);
        }
        if (bigBlinds == 8) {
            controller.setRange(46);
        }
        if (bigBlinds == 9) {
            controller.setRange(42.7);
        }
        if (bigBlinds == 10) {
            controller.setRange(41.5);
        }
        if (bigBlinds == 11) {
            controller.setRange(39.7);
        }
        if (bigBlinds == 12) {
            controller.setRange(37);
        }
        if (bigBlinds == 13) {
            controller.setRange(36.3);
        }
        if (bigBlinds == 14) {
            controller.setRange(36);
        }
        if (bigBlinds == 15) {
            controller.setRange(35.4);
        }
    }

    if (position == "SMALL BLIND") {
        if (bigBlinds == 1) {
            controller.setRange(100);
        }
        if (bigBlinds == 2) {
            controller.setRange(100);
        }
        if (bigBlinds == 3) {
            controller.setRange(90.3);
        }
        if (bigBlinds == 4) {
            controller.setRange(82.8);
        }
        if (bigBlinds == 5) {
            controller.setRange(81);
        }
        if (bigBlinds == 6) {
            controller.setRange(77.1);
        }
        if (bigBlinds == 7) {
            controller.setRange(75.3);
        }
        if (bigBlinds == 8) {
            controller.setRange(72.9);
        }
        if (bigBlinds == 9) {
            controller.setRange(70.1);
        }
        if (bigBlinds == 10) {
            controller.setRange(68.3);
        }
        if (bigBlinds == 11) {
            controller.setRange(65.9);
        }
        if (bigBlinds == 12) {
            controller.setRange(63.8);
        }
        if (bigBlinds == 13) {
            controller.setRange(62.6);
        }
        if (bigBlinds == 14) {
            controller.setRange(60.2);
        }
        if (bigBlinds == 15) {
            controller.setRange(59.3);
        }
    }
}

function calculateFor10AnteAnd9Player(position, bigBlinds) {
    if (position == "UTG") {
        if (bigBlinds == 1) {
            controller.setRange(100);
        }
        if (bigBlinds == 2) {
            controller.setRange(84.6);
        }
        if (bigBlinds == 3) {
            controller.setRange(50);
        }
        if (bigBlinds == 4) {
            controller.setRange(29.7);
        }
        if (bigBlinds == 5) {
            controller.setRange(23.4);
        }
        if (bigBlinds == 6) {
            controller.setRange(20.4);
        }
        if (bigBlinds == 7) {
            controller.setRange(18.9);
        }
        if (bigBlinds == 8) {
            controller.setRange(16.9);
        }
        if (bigBlinds == 9) {
            controller.setRange(15.7);
        }
        if (bigBlinds == 10) {
            controller.setRange(14.3);
        }
        if (bigBlinds == 11) {
            controller.setRange(13.3);
        }
        if (bigBlinds == 12) {
            controller.setRange(13);
        }
        if (bigBlinds == 13) {
            controller.setRange(12.1);
        }
        if (bigBlinds == 14) {
            controller.setRange(11.3);
        }
        if (bigBlinds == 15) {
            controller.setRange(10.4);
        }
    }
    if (position == "UTG+1") {
        if (bigBlinds == 1) {
            controller.setRange(100);
        }
        if (bigBlinds == 2) {
            controller.setRange(84.6);
        }
        if (bigBlinds == 3) {
            controller.setRange(50);
        }
        if (bigBlinds == 4) {
            controller.setRange(30.9);
        }
        if (bigBlinds == 5) {
            controller.setRange(25.8);
        }
        if (bigBlinds == 6) {
            controller.setRange(23.4);
        }
        if (bigBlinds == 7) {
            controller.setRange(20.4);
        }
        if (bigBlinds == 8) {
            controller.setRange(19.2);
        }
        if (bigBlinds == 9) {
            controller.setRange(17.5);
        }
        if (bigBlinds == 10) {
            controller.setRange(16.9);
        }
        if (bigBlinds == 11) {
            controller.setRange(15.4);
        }
        if (bigBlinds == 12) {
            controller.setRange(14.6);
        }
        if (bigBlinds == 13) {
            controller.setRange(13.7);
        }
        if (bigBlinds == 14) {
            controller.setRange(13);
        }
        if (bigBlinds == 15) {
            controller.setRange(12.4);
        }
    }
    if (position == "UTG+2") {
        if (bigBlinds == 1) {
            controller.setRange(100);
        }
        if (bigBlinds == 2) {
            controller.setRange(84.6);
        }
        if (bigBlinds == 3) {
            controller.setRange(49.6);
        }
        if (bigBlinds == 4) {
            controller.setRange(34.2);
        }
        if (bigBlinds == 5) {
            controller.setRange(29.4);
        }
        if (bigBlinds == 6) {
            controller.setRange(27.6);
        }
        if (bigBlinds == 7) {
            controller.setRange(24.3);
        }
        if (bigBlinds == 8) {
            controller.setRange(22.5);
        }
        if (bigBlinds == 9) {
            controller.setRange(21.6);
        }
        if (bigBlinds == 10) {
            controller.setRange(20.1);
        }
        if (bigBlinds == 11) {
            controller.setRange(17.8);
        }
        if (bigBlinds == 12) {
            controller.setRange(17.5);
        }
        if (bigBlinds == 13) {
            controller.setRange(15.4);
        }
        if (bigBlinds == 14) {
            controller.setRange(14.6);
        }
        if (bigBlinds == 15) {
            controller.setRange(13.7);
        }
    }
    if (position == "LOWJACK") {
        if (bigBlinds == 1) {
            controller.setRange(100);
        }
        if (bigBlinds == 2) {
            controller.setRange(84.6);
        }
        if (bigBlinds == 3) {
            controller.setRange(50.5);
        }
        if (bigBlinds == 4) {
            controller.setRange(39.1);
        }
        if (bigBlinds == 5) {
            controller.setRange(32.7);
        }
        if (bigBlinds == 6) {
            controller.setRange(31.5);
        }
        if (bigBlinds == 7) {
            controller.setRange(29.4);
        }
        if (bigBlinds == 8) {
            controller.setRange(27);
        }
        if (bigBlinds == 9) {
            controller.setRange(24.9);
        }
        if (bigBlinds == 10) {
            controller.setRange(22.2);
        }
        if (bigBlinds == 11) {
            controller.setRange(22.2);
        }
        if (bigBlinds == 12) {
            controller.setRange(20.7);
        }
        if (bigBlinds == 13) {
            controller.setRange(19.2);
        }
        if (bigBlinds == 14) {
            controller.setRange(19.2);
        }
        if (bigBlinds == 15) {
            controller.setRange(16.9);
        }
    }

    if (position == "HIGHJACK") {
        if (bigBlinds == 1) {
            controller.setRange(100);
        }
        if (bigBlinds == 2) {
            controller.setRange(83.7);
        }
        if (bigBlinds == 3) {
            controller.setRange(50.8);
        }
        if (bigBlinds == 4) {
            controller.setRange(42.1);
        }
        if (bigBlinds == 5) {
            controller.setRange(37.6);
        }
        if (bigBlinds == 6) {
            controller.setRange(33.9);
        }
        if (bigBlinds == 7) {
            controller.setRange(33.3);
        }
        if (bigBlinds == 8) {
            controller.setRange(32.1);
        }
        if (bigBlinds == 9) {
            controller.setRange(30.3);
        }
        if (bigBlinds == 10) {
            controller.setRange(27.9);
        }
        if (bigBlinds == 11) {
            controller.setRange(27);
        }
        if (bigBlinds == 12) {
            controller.setRange(24.9);
        }
        if (bigBlinds == 13) {
            controller.setRange(24.9);
        }
        if (bigBlinds == 14) {
            controller.setRange(22.2);
        }
        if (bigBlinds == 15) {
            controller.setRange(21.6);
        }
    }

    if (position == "CUT OFF") {
        if (bigBlinds == 1) {
            controller.setRange(99.1);
        }
        if (bigBlinds == 2) {
            controller.setRange(74.4);
        }
        if (bigBlinds == 3) {
            controller.setRange(53.5);
        }
        if (bigBlinds == 4) {
            controller.setRange(46);
        }
        if (bigBlinds == 5) {
            controller.setRange(43);
        }
        if (bigBlinds == 6) {
            controller.setRange(41.2);
        }
        if (bigBlinds == 7) {
            controller.setRange(38.5);
        }
        if (bigBlinds == 8) {
            controller.setRange(36.3);
        }
        if (bigBlinds == 9) {
            controller.setRange(34.8);
        }
        if (bigBlinds == 10) {
            controller.setRange(33.9);
        }
        if (bigBlinds == 11) {
            controller.setRange(32.7);
        }
        if (bigBlinds == 12) {
            controller.setRange(32.1);
        }
        if (bigBlinds == 13) {
            controller.setRange(30.9);
        }
        if (bigBlinds == 14) {
            controller.setRange(29.7);
        }
        if (bigBlinds == 15) {
            controller.setRange(29.4);
        }
    }

    if (position == "BUTTON") {
        if (bigBlinds == 1) {
            controller.setRange(82.5);
        }
        if (bigBlinds == 2) {
            controller.setRange(64.7);
        }
        if (bigBlinds == 3) {
            controller.setRange(58.1);
        }
        if (bigBlinds == 4) {
            controller.setRange(54.4);
        }
        if (bigBlinds == 5) {
            controller.setRange(51.4);
        }
        if (bigBlinds == 6) {
            controller.setRange(49.9);
        }
        if (bigBlinds == 7) {
            controller.setRange(47.5);
        }
        if (bigBlinds == 8) {
            controller.setRange(46);
        }
        if (bigBlinds == 9) {
            controller.setRange(43.9);
        }
        if (bigBlinds == 10) {
            controller.setRange(42.4);
        }
        if (bigBlinds == 11) {
            controller.setRange(39.7);
        }
        if (bigBlinds == 12) {
            controller.setRange(38.2);
        }
        if (bigBlinds == 13) {
            controller.setRange(37);
        }
        if (bigBlinds == 14) {
            controller.setRange(36.3);
        }
        if (bigBlinds == 15) {
            controller.setRange(34.8);
        }
    }

    if (position == "SMALL BLIND") {
        if (bigBlinds == 1) {
            controller.setRange(100);
        }
        if (bigBlinds == 2) {
            controller.setRange(100);
        }
        if (bigBlinds == 3) {
            controller.setRange(92.5);
        }
        if (bigBlinds == 4) {
            controller.setRange(84.9);
        }
        if (bigBlinds == 5) {
            controller.setRange(81);
        }
        if (bigBlinds == 6) {
            controller.setRange(79.2);
        }
        if (bigBlinds == 7) {
            controller.setRange(76.2);
        }
        if (bigBlinds == 8) {
            controller.setRange(73.8);
        }
        if (bigBlinds == 9) {
            controller.setRange(71.9);
        }
        if (bigBlinds == 10) {
            controller.setRange(69.2);
        }
        if (bigBlinds == 11) {
            controller.setRange(66.8);
        }
        if (bigBlinds == 12) {
            controller.setRange(63.8);
        }
        if (bigBlinds == 13) {
            controller.setRange(63.5);
        }
        if (bigBlinds == 14) {
            controller.setRange(61.1);
        }
        if (bigBlinds == 15) {
            controller.setRange(60.8);
        }
    }
}


