import { JournalEntry } from './journal';
import './styles.css';

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();

    var titleInput = $("#title").val();
    var entryInput = $("#entry").val();
    var entry1 = new JournalEntry(titleInput, entryInput);
    var wordCount1 = entry1.wordCount();
    var numberOfVowels1 = entry1.numberOfVowels();
    var numberOfConsonants1 = entry1.numberOfConsonants();


    if (entryInput === "") {
      alert("Please write an entry.");
    } else {
      $(".output").show();
      $(".titleOutput").text(titleInput);
      $(".entryOutput").text(entry1.getTeaser() + "...");
      $(".wordCount").text(wordCount1);
      $(".numberOfVowels").text(numberOfVowels1);
      $(".numberOfConsonants").text(numberOfConsonants1);
    }
  });
});
