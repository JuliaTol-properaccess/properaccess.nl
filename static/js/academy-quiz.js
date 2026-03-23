/**
 * Academy Quiz — Proper Access
 * Handles multiple-choice quizzes in Academy lesson pages.
 */
(function () {
  "use strict";

  var quiz = document.querySelector(".academy-quiz");
  if (!quiz) return;

  var questions = quiz.querySelectorAll(".academy-quiz__question");

  questions.forEach(function (q) {
    var feedbackWrap = q.querySelector(".academy-quiz__feedback");
    var correctAnswer = feedbackWrap ? feedbackWrap.getAttribute("data-correct") : null;
    var options = q.querySelectorAll(".academy-quiz__option");
    var radios = q.querySelectorAll('input[type="radio"]');
    var answered = false;

    radios.forEach(function (radio) {
      radio.addEventListener("change", function () {
        if (answered) return;
        answered = true;

        var selected = radio.value;
        var isCorrect = selected === correctAnswer;

        // Disable all options
        options.forEach(function (opt) {
          opt.classList.add("academy-quiz__option--disabled");
          var r = opt.querySelector('input[type="radio"]');
          if (r) r.disabled = true;

          // Highlight the correct answer
          if (r && r.value === correctAnswer) {
            opt.classList.add("academy-quiz__option--correct-answer");
          }
        });

        // Highlight the selected option
        var selectedOption = radio.closest(".academy-quiz__option");
        if (isCorrect) {
          selectedOption.classList.add("academy-quiz__option--selected-correct");
        } else {
          selectedOption.classList.add("academy-quiz__option--selected-incorrect");
        }

        // Show feedback
        if (feedbackWrap) {
          feedbackWrap.hidden = false;
          var correctFeedback = feedbackWrap.querySelector(".academy-quiz__feedback--correct");
          var incorrectFeedback = feedbackWrap.querySelector(".academy-quiz__feedback--incorrect");

          if (isCorrect && correctFeedback) {
            correctFeedback.hidden = false;
          } else if (!isCorrect && incorrectFeedback) {
            incorrectFeedback.hidden = false;
          }
        }

        // Check if all questions answered, show score
        checkAllAnswered();
      });
    });
  });

  function checkAllAnswered() {
    var total = questions.length;
    var answeredCount = 0;
    var correctCount = 0;

    questions.forEach(function (q) {
      var selected = q.querySelector('input[type="radio"]:checked');
      if (selected) {
        answeredCount++;
        var feedbackWrap = q.querySelector(".academy-quiz__feedback");
        var correctAnswer = feedbackWrap ? feedbackWrap.getAttribute("data-correct") : null;
        if (selected.value === correctAnswer) {
          correctCount++;
        }
      }
    });

    if (answeredCount === total) {
      var existing = quiz.querySelector(".academy-quiz__score");
      if (existing) return;

      var scoreDiv = document.createElement("div");
      scoreDiv.className = "academy-quiz__score";
      scoreDiv.setAttribute("role", "status");
      scoreDiv.innerHTML = "Je score: <strong>" + correctCount + " van " + total + "</strong> goed";
      quiz.appendChild(scoreDiv);
    }
  }
})();
