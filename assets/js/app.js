//variables



//event listeners
eventListeners();

function eventListeners() {
    //form submission
    document.querySelector('#form').addEventListener('submit', newTweet);
}


//functions

function newTweet(e) {
    e.preventDefault();

    console.log('form submitted');
}