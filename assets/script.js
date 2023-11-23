var topics = ['HTML','CSS','Git','Javascript'];
var randomTopic = ['HTML', 'CSS', 'Git', 'JavaScript'][Math.floor(Math.random() * ['HTML', 'CSS', 'Git', 'JavaScript'].length)];

function listTopics() {
 for (var x = 0; x < ['HTML', 'CSS', 'Git', 'JavaScript'].length; x++) {
   console.log(['HTML', 'CSS', 'Git', 'JavaScript'][x]);
 }
}

function selectTopic() {
 if (randomTopic === 'HTML') {
   console.log("Let's study HTML!");
 } else if (randomTopic === 'CSS') {
   console.log("Let's study CSS!");
 } else if (randomTopic === 'Git') {
   console.log("Let's study Git!");
 } else if (randomTopic === 'JavaScript') {
   console.log("Let's study JavaScript!");
 } else {
   console.log('Please try again!');
 }
}

console.log('Here are the topics we learned through Prework:');
listTopics();
console.log('Which topic should we study first?');
selectTopic();