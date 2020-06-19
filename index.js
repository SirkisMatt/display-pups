'use strict';

function getDogImage() {
    let answer = document.getElementById("numDogs").value;
    for (let i = 0; i < answer; i++) {
    fetch(`https://dog.ceo/api/breeds/image/random`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
    }
}



function displayResults(responseJson) {
    console.log(responseJson);
    //Add number of images requested in the form
    $('.results-img').append(
      `<img src="${responseJson.message}" class="results-img" alt="random dog photo" width="200">`
    )
  }


function watchForm() {
  $('.dog-form').submit(event => {
    event.preventDefault();
    $('.results').removeClass('hidden');
    getDogImage();
  });
}


$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});