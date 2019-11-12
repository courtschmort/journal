import { JournalEntry } from './journal';
import './styles.css';

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();

    var titleInput = $("#title").val();
    var entryInput = $("#entry").val();
    var entry1 = new JournalEntry(titleInput, entryInput);
    var wordCount1 = entry1.wordCount();
    console.log(wordCount1);
  });
});
