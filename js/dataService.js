angular.module('quoteBook').service('dataService', function(){

  var quotes = JSON.parse(localStorage.getItem("quotes"))
  if (!quotes) {
    quotes = [
      { text: 'Life isn\'t about getting and having, it\'s about giving and being.', author: 'Kevin Kruse'},
      { text: 'Whatever the mind of man can conceive and believe, it can achieve', author: 'Napoleon Hill'},
      { text: 'Strive not to be a success, but rather to be of value.', author: 'Albert Einstein'},
      { text: 'Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.', author: 'Robert Frost'},
      { text: 'The most difficult thing is the decision to act, the rest is merely tenacity.', author: 'Amelia Earhart'}
    ];
  }

  this.getQuotes = function() {
    return quotes;
  };

  this.addData = function(newQuote) {
    if (newQuote.text && newQuote.author) {
      quotes.push(newQuote);
      localStorage.setItem("quotes", JSON.stringify(quotes));
      return true;
    }
    return false;
  };

  this.removeData = function (textToRemove) {
    for (var i = 0; i < quotes.length; i++) {
      if (quotes[i].text.toLowerCase() === textToRemove.toLowerCase()) {
        quotes.splice(i--, 1);
      }
    }
    localStorage.setItem("quotes", JSON.stringify(quotes));
  };



});
