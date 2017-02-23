var pigLatinTranslator = function(input){
  var result, temp;

  var tempArray = input.split(" ");
  console.log(tempArray);

  for(var i = 0; i < tempArray.length; i++){
    var word = tempArray[i];

    if(word.match(/^[aeiou]/i)){
      word += "ay";
    } else{
      for(var index = 0; index < word.length; index++){
        console.log(word);
          if(word.charAt(index+1).match(/[aeioy]/i) || (word.charAt(index).match(/[^q]/i) && word.charAt(index+1).match(/u/i))){
            temp = word.slice(0, index+1);
            word = word.slice(index+1) + temp;
            console.log(word);
            index = word.length;
          } else if(word.charAt(index).match(/[qu]/i)){
            temp = word.slice(0, index + 2);
            word = word.slice(index + 2) + temp;
            index = word.length;
          }
          console.log("found a consonant!" + word.charAt(index));
      }
      word += "ay";
    }
    tempArray[i] = word;
  }

  result = tempArray.join(" ");

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
