/**
 * Academy Quiz - Proper Access
 *
 * Verwerkt de meerkeuzevragen in de lessen van de Academy.
 *
 * De gegeven antwoorden gaan naar localStorage via academy-voortgang.js, zodat
 * ze na een verversing of een later bezoek nog staan. Dit bestand laadt dus na
 * academy-voortgang.js; zonder dat bestand werkt de quiz wel, maar dan vergeet
 * hij de antwoorden zodra de pagina sluit.
 */
(function () {
  "use strict";

  var quiz = document.querySelector(".academy-quiz");
  if (!quiz) return;

  var questions = quiz.querySelectorAll(".academy-quiz__question");
  // Ontbreekt academy-voortgang.js, of weigert de browser localStorage, dan
  // werkt de quiz zonder geheugen.
  var api = window.paAcademyVoortgang;
  var voortgang = api && typeof api.leesQuiz === "function" && typeof api.bewaarQuiz === "function" ? api : null;

  // Eén sleutel per quiz: het pad van de les plus het id van het quizblok.
  var sleutel = window.location.pathname + "#" + (quiz.id || "quiz");
  var bewaard = voortgang ? voortgang.leesQuiz(sleutel) : null;
  var antwoorden = bewaard && bewaard.antwoorden ? bewaard.antwoorden : {};

  function vraagNummer(q, index) {
    return q.getAttribute("data-question") || String(index + 1);
  }

  function goedAntwoord(q) {
    var feedbackWrap = q.querySelector(".academy-quiz__feedback");
    return feedbackWrap ? feedbackWrap.getAttribute("data-correct") : null;
  }

  // Zet de vraag in de stand "beantwoord": opties op slot, het goede antwoord
  // gemarkeerd en de uitleg open.
  function toonUitslag(q, gekozen) {
    var correctAnswer = goedAntwoord(q);
    var options = q.querySelectorAll(".academy-quiz__option");
    var isCorrect = gekozen === correctAnswer;
    var selectedOption = null;

    options.forEach(function (opt) {
      opt.classList.add("academy-quiz__option--disabled");
      var r = opt.querySelector('input[type="radio"]');
      if (r) {
        r.disabled = true;
        if (r.value === correctAnswer) {
          opt.classList.add("academy-quiz__option--correct-answer");
        }
        if (r.value === gekozen) {
          r.checked = true;
          selectedOption = opt;
        }
      }
    });

    if (selectedOption) {
      selectedOption.classList.add(
        isCorrect ? "academy-quiz__option--selected-correct" : "academy-quiz__option--selected-incorrect"
      );
    }

    var feedbackWrap = q.querySelector(".academy-quiz__feedback");
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
  }

  function telling() {
    var total = questions.length;
    var answeredCount = 0;
    var correctCount = 0;

    questions.forEach(function (q, index) {
      var gekozen = antwoorden[vraagNummer(q, index)];
      if (!gekozen) return;
      answeredCount++;
      if (gekozen === goedAntwoord(q)) correctCount++;
    });

    return { totaal: total, beantwoord: answeredCount, goed: correctCount };
  }

  function toonScore() {
    var t = telling();
    if (t.beantwoord !== t.totaal) return;
    if (quiz.querySelector(".academy-quiz__score")) return;

    var scoreDiv = document.createElement("div");
    scoreDiv.className = "academy-quiz__score";
    scoreDiv.setAttribute("role", "status");
    scoreDiv.innerHTML = "Je score: <strong>" + t.goed + " van " + t.totaal + "</strong> goed";
    quiz.appendChild(scoreDiv);
  }

  questions.forEach(function (q, index) {
    var nummer = vraagNummer(q, index);
    var radios = q.querySelectorAll('input[type="radio"]');

    radios.forEach(function (radio) {
      radio.addEventListener("change", function () {
        if (antwoorden[nummer]) return;

        antwoorden[nummer] = radio.value;
        toonUitslag(q, radio.value);

        if (voortgang) {
          var t = telling();
          voortgang.bewaarQuiz(sleutel, antwoorden, t.goed, t.totaal);
        }

        toonScore();
      });
    });
  });

  // De antwoorden van een vorige keer terugzetten. Dat gebeurt zonder animatie
  // en zonder iets op te slaan: de stand staat er al.
  var terug = false;
  questions.forEach(function (q, index) {
    var gekozen = antwoorden[vraagNummer(q, index)];
    if (!gekozen) return;
    toonUitslag(q, gekozen);
    terug = true;
  });
  if (terug) toonScore();
})();
