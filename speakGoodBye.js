(function (window) {
  var speakGoodBye = {};
  var greeting = "Good Bye";

  speakGoodBye.speak = function (name) {
    console.log(greeting + " " + name);
  };

  window.speakGoodBye = speakGoodBye;

})(window);
