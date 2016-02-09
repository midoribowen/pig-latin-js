function Word( word ) {
  this.word = word;
}

Word.prototype.pigLatin = function( ) {
  var vowels = [ 'a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y' ];
  var words = [  ];

  if( this.word.includes(" ") ) {
    var sentence = this.word.split( " " );
    for (var i = 0; i < sentence.length; i++) {
      words.push(sentence[i]);
    }
  } else {
    words.push(this.word);
  }

var result = [  ];

for ( var x = 0; x < words.length; x++ ) {
  if( words[ x ].startsWithVowel( ) ) {
    return words[ x ] + "ay";
  } else {
    var consonantsFound = "";
    for ( var i = 0; i < words[ x ].length; i++ ) {
      var foundVowel = false;
      for ( var y = 0; y < vowels.length; y++ ) {
        if ( words[ x ][ i ] === vowels[ y ] ) {
          if ( (words[ x ][ i ] === "y" || words[ x ][ i ] === "Y") ) {
            if ( i > 0 ) {
              foundVowel  = true;
            }
          } else {
            foundVowel = true;
          }
        }
      }

      if ( foundVowel ) {
        var wordResult = words[ x ].slice(i, words[ x ].length);
        wordResult += consonantsFound + "ay";
        result.push(wordResult);
        break;
      } else {
        if ( (words[ x ][ i ] === "q" && words[ x ][ i + 1 ] === "u") || (words[ x ][ i ] === "Q" && words[ x ][ i + 1 ] === "u") ) {
          consonantsFound += "qu";
          i += 1;
        } else {
          consonantsFound += words[ x ][ i ];
        }
      }
    }
  }
}
return result.join( " " );
}

String.prototype.startsWithVowel = function( ) {
  var vowels = [ 'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U' ];
  for ( var i = 0; i < vowels.length; i++ ) {
    if( this[ 0 ] == vowels[ i ] ) {
      return true;
    }
  }
  return false;
}

$(document).ready(function() {
  $("form#latin").submit(function(event) {
    event.preventDefault();
    clearTranslation();

    var input = $("input#latin-input").val();
    var translatedInput = new Word(input).pigLatin();

    $("p#show-translation").append("<span class='translation'>" + translatedInput + "</span>");

  });

  function clearTranslation () {
    $("p#show-translation").empty();
  }

});
