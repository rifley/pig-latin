var pigLatinTranslator = function(input){
  var result;

  result = input + "ay";

  return result;
}




$(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var input = $("#input").val();

    var output = pigLatinTranslator(input);

    $("#output").show();
    $("#output").text(output);
  })
})
