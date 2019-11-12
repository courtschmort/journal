export function JournalEntry(title, entry) {
  this.title = title,
  this.entry = entry
}

JournalEntry.prototype.wordCount = function() {
  var newArray = this.entry.split(" ");
  return newArray.length;
};
