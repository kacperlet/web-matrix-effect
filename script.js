const ALPHA = "ABCDEFGHIJKLMOPQRSTUVWXYZ"

document.querySelector("h1").onmouseover = event => {
    let iterations = 0;

    let interval = setInterval(() => {
        output = []
        for (i = 0; i < event.target.dataset.value.length; i++) {
            if (i < iterations) {
                output.push(event.target.dataset.value[i])
            }
            else {
                output.push(ALPHA[Math.floor(Math.random() * 26)]);
            }
        }
        event.target.innerHTML = output.join("");

        if (iterations > event.target.dataset.value.length) clearInterval(interval);
        iterations++;
    }, 50)
    
}

const hiddenTexts = [["COMPUTER-SCIENCE-STUDENT", 100], ["NEW-YORKER", 250], ["PROGRAMMER", 445]]

function matrixEffect() {
    const effect = document.getElementById("effect");
    let hover = false;

    effect.onmouseover = event => {
        hover = true;
    }

    effect.onmouseleave = event => {
        hover = false;
    }

    let interval = setInterval(() => {
        output = []
        for (i = 0; i < 600; i++) {
            let taken = false;
            for (let group of hiddenTexts) {
                let text = group[0]
                let index = group[1]
                if (hover && i >= index && i - index < text.length) {
                    output.push("<b>" + text[i-index] + "</b>");
                    taken = true;
                }
            }
            if (!taken) {
                output.push("<span>" + ALPHA[Math.floor(Math.random() * 25)] + "</span>"); 
            }

            
        }
        effect.innerHTML = output.join(" ");
    }, 50)
}

matrixEffect();

