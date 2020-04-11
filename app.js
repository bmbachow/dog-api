// 'use strict';

function getDogImage() {
  fetch(`https://dog.ceo/api/breeds/image/random/${$('#numberOfImages').val()}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  let imageString = '';
  for (let i in responseJson.message){
    imageString+=`<img src="${responseJson.message[i]}" class="results-img"/>`;
  }
  console.log(imageString);
  $('.results-img').html('');
  $('.results-img').html(imageString);
  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});



