
describe( 'PigLatin', function() {
  /*
   it("checks if is a triangle", function() {
      var testTriangle = new Triangle(12,12,12);
      expect(testTriangle.isTriangle( ) ).to.equal(true)
   });
   */

   it("Checks if word starts with vowel", function() {
     var testWord = new Word("Angular");
     expect( testWord.word.startsWithVowel( ) ).to.equal( true );
   });
   it("Adds an 'ay' to words that start with a vowel", function( ) {
     var testWord = new Word("Angular");
     expect( testWord.pigLatin( ) ).to.equal("Angularay");
   });
   it("shifts consonants from beginning to end and adds 'ay' after", function( ) {
     var testWord = new Word("Thread");
     expect( testWord.pigLatin( ) ).to.equal("eadThray");
   });
   it("Follows the above rules with a sentence", function( ) {
     var testSentence = new Word("shifts consonants from beginning");
     expect( testSentence.pigLatin( ) ).to.equal("iftsshay onsonantscay omfray eginningbay");
   });
   it("If the first consonants include 'qu', move the 'u' along with the 'q'.", function( ) {
     var testWord = new Word("Squeal");
     expect( testWord.pigLatin( ) ).to.equal("ealSquay");
   });
   it("For words that start with 'y', treat the 'y' as a consonant.", function( ) {
     var testWord = new Word("Yellow");
     expect( testWord.pigLatin( ) ).to.equal("ellowYay");
   });
   it("For words that have a 'y' in the middle, treat the 'y' as a vowel.", function( ) {
     var testWord = new Word("Fyodor");
     expect( testWord.pigLatin( ) ).to.equal("yodorFay");
   });

});
