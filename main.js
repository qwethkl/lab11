$(document).ready(function () {
    const WORDS = [
    { word: "Window", trans: "Вікно" },
    { word: "Chair", trans: "Стілець" },
    { word: "Book", trans: "Книга" },
    { word: "Sun", trans: "Сонце" },
    { word: "Water", trans: "Вода" },
    { word: "Tree", trans: "Дерево" },
    { word: "Road", trans: "Дорога" },
    { word: "Bird", trans: "Птах" },
    { word: "Music", trans: "Музика" },
    { word: "Smile", trans: "Посмішка" }
];
    let count = 0;
    let correct = 0;
    let wrong = 0;
    let index = null;


    function showNextWord() {
        if (count >= 10) return;

        index = Math.floor(Math.random() * WORDS.length);
        $(".card p").text(WORDS[index].word);
        count++;
        $(".cou").text(`${count}/10`);
        $("#answer").val("");
        $(".error").text("");
    }


    $(".nav p:last-child").on("click", function () {
        showNextWord();
    });


    $(".button").on("click", function () {
        if (index === null) {
            $(".error").text("Спочатку натисніть → для початку");
            return;
        }

        let answer = $("#answer").val().trim().toLowerCase();
        if (answer === "") {
            $(".error").text("Введіть відповідь");
            return;
        }

        $(".error").text("");

        if (answer === WORDS[index].trans.toLowerCase()) {
            correct++;
        } else {
            wrong++;
        }

        $(".correct").text(`Вірно: ${correct}`);
        $(".wrong").text(`Невірно: ${wrong}`);

        if (count >= 10) {
            let resultText = "";
            if (correct < 5) {
                resultText = "Поганий рівень";
            } else if (correct < 9) {
                resultText = "Задовільний рівень";
            } else {
                resultText = "Високий рівень";
            }

            $(".okno .info").text(resultText);
            $(".okno").fadeIn(300);
        }
    });
});
