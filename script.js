var contentOfQuiz = [ 
  {
    "Question": "Where does Liverpool F.C. (England) play?",
    "Answers": [ 
      {
        "Answer": "Anfield", 
        "Correct": true 
      },
      {
        "Answer": "Goodison Park", 
        "Correct": false 
      },
      {
        "Answer": "Old Trafford",
        "Correct": false
      },
      {
        "Answer": "Camp Nou", 
        "Correct": false 
      }
    ]
  },
  {
    "Question": "Where does Manchester United F.C. (England) play?", 
    "Answers": [ 
      {
        "Answer": "Allianz Arena",  
        "Correct": false
      },
      {
        "Answer": "Old Trafford",
        "Correct": true 
      },
      { 
        "Answer": "St James Park",
        "Correct": false},
      {
         "Answer": "Saint Marys Stadium",
        "Correct": false}
      
    ]
  },
  {
    "Question": "Which European stadium has the largest capacity?",
    "Answers": [
      {
        "Answer": "Camp Nou",
        "Correct": true
      },
      {
        "Answer": "Estadio Santiago Bernabeu",
        "Correct": false
      },
      {
        "Answer": "Signal Iduna Park",
        "Correct": false
      },
      {
         "Answer": "Wembley Stadium",
        "Correct": false
      }]},
      {
        "Question": "Which clubs play at San Siro?",
        "Answers": [
          {
            "Answer": "F.C. Barcelona and Real Madrid",
            "Correct": false
          },
          {
            "Answer": "Juventus F.C. and Torino F.C.",
            "Correct": false
          },
          {
            "Answer": "A.C. Milan and Inter Milan",
            "Correct": true
          },
          {
            "Answer": "Arsenal F.C. and Chelsea F.C.",
            "Correct": false
          }]},
          {
            "Question": "Which is the largest stadium in the United Kingdom (U.K.)?",
            "Answers": [
              {
                "Answer": "Celtic Park",
                "Correct": false
              },
              {
                "Answer": "Millenium Stadium",
                "Correct": false
              },
              {
                "Answer": "Old Trafford",
                "Correct": false
              },
              {
                "Answer": "Wembley Stadium",
                "Correct": true
              }]

  }
];

$(document).ready(function () { // executes once page loads
  $.each(contentOfQuiz, function (idx, val) { // .each walks through array objects; functions parameters are array index & items
    
    $("#questions").append(function () { // selects ID questions and adds function + below
      var finalHTML = "<li>" + val.Question + "<ul>"; // variable adds items into list
      $.each(val.Answers, function (i, v) { // walks through answers array
        finalHTML += "<li><input type='radio' name='q" + idx + "' value='" + (v.Correct ? 1 : 0) + "' class='answer' /> " + v.Answer + "</li>"; // add choices with radio buttons and tells which answer is correct
      });
      return finalHTML + "</ul></li>"; // closes list tags
    });
  });
  $("ol").append("<li>The End! :-) </li>");
  $("#total").text(contentOfQuiz.length); // gives total number amount of questions
  $("ol > li").hide();
  $("ol > li:first-child").show();
  $("input").click(function () { // when you select an answer
    var score = 0; // declare starting score
    $(".answer:checked").each(function () { // once you select an answer 
      score += +this.value; // adds to your score if select right answer
    });
    $("#current").text(score); // gives you how many you have right 
     var curQue = $("li:visible");
    curQue.fadeOut(function () {
      $(this).next("li").fadeIn();
    });
  });
});