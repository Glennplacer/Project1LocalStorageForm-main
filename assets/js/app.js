//variables
const tweetList = document.getElementById('tweet-list');


//event listeners
eventListeners();

function eventListeners() {
    //form submission
    document.querySelector('#form').addEventListener('submit', newTweet);

    //remove tweet from the list
    tweetList.addEventListener('click', removeTweet);
}


//functions

function newTweet(e) {
    e.preventDefault();

    // read the text area value
    const tweet = document.getElementById('tweet').value;

    //create the remove button
    const removeBtn = document.createElement('a');
    removeBtn.classList = 'remove-tweet';
    removeBtn.textContent = 'X';

    //create an <li> element
    let li = document.createElement('li');
    li.textContent = tweet;
    tweetList.appendChild(li);

    //add the remove button to each tweet
    li.appendChild(removeBtn);

    //add to the list
    tweetList.appendChild(li);
}

//remove the tweets from the DOM
function removeTweet(e) {
    if(e.target.classList.contains('remove-tweet')) {
        e.target.parentElement.remove();
    } 
}