function redirectWithQuizInfo() {
    const q1Options = document.getElementsByName("question1");
    let q1 = "";
    for (const option of q1Options) {
        if (option.checked) {
            q1 = option.value;
            break;
        }
    }

    const q2Options = document.getElementsByName("question2");
    const q2 = [];
    for (const option of q2Options) {
        if (option.checked) {
            q2.push(option.value);
        }
    }
    const q2String = q2.join("&question2=");

    const q3Options = document.getElementsByName("question3");
    let q3 = "";
    for (const option of q3Options) {
        if (option.checked) {
            q3 = option.value;
            break;
        }
    }

    const q4Options = document.getElementsByName("question4");
    let q4 = "";
    for (const option of q4Options) {
        if (option.checked) {
            q4 = option.value;
            break;
        }
    }

    const q5Options = document.getElementsByName("question5");
    let q5 = "";
    for (const option of q5Options) {
        if (option.checked) {
            q5 = option.value;
            break;
        }
    }

    const com = document.getElementById("comments").value.replace(/ /g, "+");

    window.location.href = `QuizResults.html?question1=${q1}&question2=${q2String}&question3=${q3}&question4=${q4}&question5=${q5}&comments=${com}`;
}
