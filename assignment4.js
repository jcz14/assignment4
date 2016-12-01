// The anonymous function below will fire on page load

// Some things to consider
// $.ajax(); to make your requests a little easier. Or the vanilla js way, it's up to you.
// $.on(); for event handling
// Remember, selecting elements in jQuery is like selecting them in CSS
// You'll probably have to manipulate some strings
// some jQuery functions to help display results
// $.show(), $.hide(), $.slideup(), $.slidedown(), $.fadein(), $.fadeout()
// Add content from requests with something like
// $.html(), $.text(), etc.
// keyup events could be helpful to get value of field as the user types

// Global variable containing array with search terms
var searchTerms;

// Request data from API and store response in the global variable defined above
(function() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://www.mattbowytz.com/simple_api.json?data=all", false);
  xhr.send();
  var response = JSON.parse(xhr.response);
  var interests = response.data.interests;
  var programming = response.data.programming;
  searchTerms = interests.concat(programming);
})();

// This function fires when the user types into the search field
$(".flexsearch-input").keyup(function(){
  console.log($(this).val());
});
