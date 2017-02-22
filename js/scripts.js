var pigLatinTranslator = function(input){
  var temp;
  var result;

  if(input.match(/^[aeiou]/gi)){
    alert("Starts with a vowel!");
  } else{

  }

  for(var index = 0; index < input.length; index++){
    if(input.charAt(index).match(/[^aeiou]/gi)){
      if((input.charAt(index+1) === "a")|| (input.charAt(index+1) === "e") || (input.charAt(index+1) === "i") ||(input.charAt(index+1) === "o") || (input.charAt(index+1) === "u")){
        temp = input.slice(0, index+1);
        console.log(temp);
      }
      console.log("found a consonant!" + input.charAt(index));
    }
  }

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
