// JS file for Feb 8 Homework Assignment
var userName = prompt('What\'s your name?');
console.log('Their name is ' + userName);
alert('Hello ' + userName + '. It\'s a pleasure to meet you. I\'m wedding planning bot.');
var colorScheme = prompt('What is your color scheme?');
console.log('Their color scheme is ' + colorScheme);
alert('I think ' + colorScheme + ' is a lovely choice.');
var favoriteFlowers = prompt('What are your favorite flowers?');
console.log('Their flowers are ' + favoriteFlowers);
alert('Hmmmmm. It might be difficult to find ' + favoriteFlowers + ' in ' + colorScheme + '.');
var outdoor = confirm('Will this be an outdoor wedding?');
console.log('Will it be outdoor: ' + outdoor);
if(outdoor) {
  alert('We\'ll have to plan for rain.');
}
else {
  alert('I have a lovely selection of indoor venues.');
};
var guests = prompt('How many guests will you have?');
console.log('They will have ' + guests + ' guests');
if(guests >= 60) {
  alert('A wedding with ' + guests + ' guests will be so grand.');
}else {
  alert ('A wedding with ' + guests + ' guests will be so intimate.')
}
var openBar = confirm('Do you want an open bar?');
console.log('They want an open bar: ' + openBar);
if(openBar) {
  alert('That is very generous, ' + userName);
}
else {
  alert('That can be for the best. Especially if your family likes to drink ;P');
}
