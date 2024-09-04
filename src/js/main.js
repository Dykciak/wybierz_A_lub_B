let ball;
let answer;
let errorInfo;
let selectedOption;

const answerArray = [
	"Przyjeżdzasz natychmiast i śpimy razem wtuleni🙄", // Dla opcji A
	"Przyjeżdzasz natychmiast i śpimy razem wtuleni🙄", // Dla opcji B
];

const main = () => {
	prepareDOMElements();
	prepareDOMEvents();
};

const prepareDOMElements = () => {
	ball = document.querySelector("img");
	answer = document.querySelector(".answer");
	errorInfo = document.querySelector(".error");
	selectedOption = null;
};

const prepareDOMEvents = () => {
	ball.addEventListener("click", shake);
	document.querySelectorAll(".option-btn").forEach((button) => {
		button.addEventListener("click", selectOption);
	});
};

const selectOption = (event) => {
	selectedOption = event.target.dataset.option;
	errorInfo.textContent = "";
	answer.textContent = `Wybrano odpowiedź ${selectedOption}`;
};

const shake = () => {
	ball.classList.add("shake-animation");
	setTimeout(() => {
		ball.classList.remove("shake-animation");
	}, 1100);

	if (selectedOption) {
		setTimeout(() => {
			displayAnswer();
		}, 1000);
	} else {
		setTimeout(() => {
			errorInfo.textContent = "Musisz wybrać odpowiedź A lub B.";
		}, 1000);
	}
};

const displayAnswer = () => {
	if (selectedOption === "A") {
		answer.textContent = answerArray[0];
	} else if (selectedOption === "B") {
		answer.textContent = answerArray[1];
	}
};

document.addEventListener("DOMContentLoaded", main);
