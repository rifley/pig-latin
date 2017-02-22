# _Pig Latin Translator_

#### BDD/ JS exercise for Epicodus, 2/22/17

### By Riley Watts & Chris Wainner

## Description

#### This page will take user input and translate it into Pig Latin.

### Specs

| behavior |   input   |   output   |
|----------|:---------:|:----------:|
|Does nothing to non-alphabetical characters| 3 | 3 |
| Adds "ay" to the end of single-letter words beginning with a vowel | i | iay |
| For words with one+ consecutive consonants, the consecutive consonants are moved to the end, and "ay" is added | test | esttay |
| If the first consonants include "qu", move the u along with the q | quell | ellquay |
| for words beginning with "y", "y" is treated as a consonant | yes | esyay |
| Sentence or phrases are broken down into string of words for translation | "Hello I'm Jim" | "elloHay" "I'may" "imJay" |
