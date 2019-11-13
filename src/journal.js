export function JournalEntry(title, entry) {
  this.title = title,
  this.entry = entry;
}

JournalEntry.prototype.wordCount = function() {
  var wordArray = this.entry.split(" ");
  return wordArray.length;
};

JournalEntry.prototype.numberOfVowels = function() {
  var letterArray = this.entry.split("");
  var vowels = ["a", "e", "i", "o", "u"];
  var numberOfVowels = 0;
  for (var i = 0; i < letterArray.length; i ++) {
    if (vowels.includes(letterArray[i].toLowerCase())) {
      numberOfVowels += 1;
    }
  }
  return numberOfVowels;
};

JournalEntry.prototype.numberOfConsonants = function() {
  var letterArray = this.entry.split("");
  var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
  var numberOfConsonants = 0;
  for (var i = 0; i < letterArray.length; i ++) {
    if (consonants.includes(letterArray[i].toLowerCase())) {
      numberOfConsonants += 1;
    }
  }
  return numberOfConsonants;
};

JournalEntry.prototype.getTeaser = function() {
  var wordArray = this.entry.split(" ");
  wordArray.splice(8);
  return wordArray.join(" ");
};
