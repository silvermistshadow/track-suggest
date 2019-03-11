//Buisness logic
var langC = 0;
var langJava = 0;
var langRuby = 0;
var langPHP = 0;

var trackSuggestion = function(desiredJob, companyType, languageType) {
  if ((desiredJob === 0) || (desiredJob === 1)) {
    langC++;
    langJava++;
    $("#desiredJobError").hide();
  }
  else if (desiredJob === 2) {
    ++langPHP;
    $("#desiredJobError").hide();
  }
  else if (desiredJob === 3) {
    ++langRuby;
    $("#desiredJobError").hide();
  }
  else {
    $("#desiredJobError").show();
  }

  if ((companyType === 0) || (companyType === 1)) {
    ++langC;
    ++langJava;
    ++langPHP;
    $("#companyTypeError").hide();
  }
  else if ((companyType === 2) || (companyType === 3)) {
    ++langRuby;
    ++langPHP;
    ++langJava;
    $("#companyTypeError").hide();
  }
  else {
    $("#companyTypeError").show();
  }

  if (languageType === 0) {
    ++langRuby;
    ++langPHP;
    $("languageTypeError").hide();
  }
  else if (languageType === 1) {
    ++langC;
    $("languageTypeError").hide();
  }
  else if (languageType === 2) {
    ++langJava;
    $("languageTypeError").hide();
  }
  else {
    $("languageTypeError").show();
  }

  if ((langC > langJava) && (langC > langPHP) && (langC > langRuby)) {
      return "You should study C#!";
  }
  else if ((langJava > langC) && (langJava > langPHP) && (langJava > langRuby)) {
    return "You should study Java!";
  }
  else if ((langPHP > langC) && (langPHP > langJava) && (langPHP > langRuby)) {
    return "You should study PHP!";
  }
  else if ((langRuby > langC) && (langRuby > langJava) && (langRuby > langPHP)) {
    return "You should study Ruby!";
  }
  else if ((langC === langJava) && (langC > langPHP) && (langC > langRuby)) {
      return "You should study C# and Java!";
  }
  else if ((langC === langPHP) && (langC > langJava) && (langC > langRuby)) {
    return "You should study C# and PHP!";
  }
  else if ((langC === langRuby) && (langC > langJava) && (langC > langPHP)) {
    return "You should study C# and Ruby!";
  }
  else {
    return "There are several languages you may want to study.";
  }



}

//User interface
$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var yourName = $("input#yourName").val();
    var desiredJob = parseInt($("#desiredJob").val());
    var companyType = parseInt($("input:radio[name=companyType]:checked").val());
    var languageType = parseInt($("#languageType").val());
    
    var result = trackSuggestion(desiredJob, companyType, languageType);

    $("#suggestion").text(result);
    $("#suggestion").show();


  });

});
