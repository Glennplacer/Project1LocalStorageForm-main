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

    //add to local storage
    addTweetLocalStorage(tweet);
}

//remove the tweets from the DOM
function removeTweet(e) {
    if(e.target.classList.contains('remove-tweet')) {
        e.target.parentElement.remove();
    } 
}

//adds the tweets into the local storage
function addTweetLocalStorage(tweet) {
    let tweets = getTweetsFromStorage();

    //add the tweet into the array
    tweets.push(tweet);

    //convert tweet array into string
    localStorage.setItem('tweets', JSON.stringify(tweets) );
}

function getTweetsFromStorage() {
    let tweets;
    const tweetsLS = localStorage.getItem('tweets');
    //get the values, if null is returned then we create an empty array
    if(tweetsLS === null) {
        tweets = [];
    } else {
        tweets = JSON.parse( tweetsLS );
    }
    return tweets;
}