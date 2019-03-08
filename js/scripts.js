// Back-end logic

var trackSuggestion = function(langC, langJava, langPHP, langRuby) {
  if ((desiredJob === 0) || (desiredJob === 1)) {
    ++langC;
    ++langJava;
  }
  else if (desiredJob === 2) {
    ++langPHP;
  }
  else if (desiredJob === 3) {
    ++langRuby;
  }
  else {
    $("#desiredJobError").show();
  }

  if ((companyType === 0) || (companyType === 1)) {
    ++langC;
    ++langJava;
    ++langPHP;
  }
  else if ((companyType === 2) || (companyType === 3)) {
    ++langRuby;
    ++langPHP;
    ++langJava;
  }
  else {
    $("#companyTypeError").show();
  }

  if (languageType === 0) {
    ++langRuby
    ++langPHP
  }
  else if (languageType === 1) {
    ++langC
  }
  else if (languageType === 2) {
    ++langJava
  }

  if ((langC > langJava) && (langC > langPHP) && (langC > langRuby)) {
      return "You should study C#!"
  }
  else if ((langJava > langC) && (langJava > langPHP) && (langJava langRuby)) {
    return "You should study Java!"
  }
  else if ((langPHP > langC) && (langPHP > langJava) && (langPHP > langRuby)) {
    return "You should study PHP!"
  }
  else if ((langRuby > langC) && (langRuby > langJava) && (langRuby > langPHP)) {
    return "You should study Ruby!"
  }
  else if ((langC === langJava) && (langC > langPHP) && (langC > langRuby)) {
      return "You should study C# and Java!"
  }
  else if ((langC === langPHP) && (langC > langJava) && (langC > langRuby)) {
    return "You should study C# and PHP!"
  }
  else if ((langC === langRuby) && (langC > langJava) && (langC > langPHP)) {
    return "You should study C# and Ruby!"
  }
  else {
    return "There are several languages you may want to study."
  }

}





// User interface beyond this point


$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var yourName = $("input#yourName").val();
    var desiredJob = parseInt($("#desiredJob").val());
    var companyType = parseInt($("input:radio[name=companyType]:checked").val());
    var languageType = parseInt($("#languageType").val());


    var langC = 0;
    var langJava = 0;
    var langRuby = 0;
    var langPHP = 0;

  });

});
