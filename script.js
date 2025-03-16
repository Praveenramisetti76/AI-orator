const text = document.getElementById("textToConvert");
const convertBtn = document.getElementById("convertBtn");

convertBtn.addEventListener('click', function () {
    const speechSynth = window.speechSynthesis;
    const enteredText = text.value;
    const error = document.querySelector('.error-para');

    if (!speechSynth.speaking && !enteredText.trim().length) {
        error.textContent = `Write Something to Listen.`;
        return;
    }

    if (!speechSynth.speaking && enteredText.trim().length) {
        error.textContent = "";
        const newUtter = new SpeechSynthesisUtterance(enteredText);

        // When the speech finishes, reset the button text
        newUtter.onend = () => {
            convertBtn.textContent = "Play Converted Sound";
        };

        speechSynth.speak(newUtter);
        convertBtn.textContent = "Audio is Playing...";
    }
});
