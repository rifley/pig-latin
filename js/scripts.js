var pigLatinTranslator = function(input){
  var temp;
  var result;

  if(input.match(/^[aeiou]/gi)){
    return input + "ay";
  }

  for(var index = 0; index < input.length; index++){
    if(input.charAt(index).match(/[^aeiou]/gi)){
      if((input.charAt(index+1) === "a")|| (input.charAt(index+1) === "e") || (input.charAt(index+1) === "i") ||(input.charAt(index+1) === "o")){
        temp = input.slice(0, index+1);
        result = input.slice(index+1) + temp;
        console.log(result);
      } else if(input.charAt(index).match(/[qu]/i)){
        temp = input.slice(0, index + 2);
        result = input.slice(index + 2) + temp;
      } else if(input.charAt(index+1) === "u"){
        temp = input.slice(0, index+1);
        result = input.slice(index+1) + temp;
        console.log(result);
      }
      console.log("found a consonant!" + input.charAt(index));
    }
  }

  result = result + "ay";

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
