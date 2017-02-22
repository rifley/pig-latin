# _Pig Latin Translator_

#### BDD/ JS exercise for Epicodus, 2/22/17

### By Riley Watts & Chris Wainner

## Description

#### This page will take user input and translate it into Pig Latin.

### Specs

| Behavior |   Input   |   Output   |
|----------|:---------:|:----------:|
| Adds "ay" to the end of single-letter words beginning with a vowel | i | iay |
| Add "ay" to the end of a single-letter consonant | s | say |
| For words with one+ consecutive consonants, the consecutive consonants are moved to the end, and "ay" is added | test | esttay |
| If the word begins with "qu", move the u along with the q | quell | ellquay |
| If "qu" follows the first consonant, the qu is also moved along with the consonant | squeal | ealsquay |
| For words beginning with "y", "y" is treated as a consonant | yes | esyay |
| For words that do not begin with "y", "y" is treated as a vowel | myth | ythmay |
| Sentence or phrases are broken down into string of words for translation | "Hello I'm Jim" | "elloHay" "I'may" "imJay" |
