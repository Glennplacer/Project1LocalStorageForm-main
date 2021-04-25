//variables
const tweetList = document.getElementById('tweet-list');


//event listeners
eventListeners();

function eventListeners() {
    //form submission
    document.querySelector('#form').addEventListener('submit', newTweet);

    //remove tweet from the list
    tweetList.addEventListener('click', removeTweet);

    //document
    document.addEventListener('DOMContentLoaded', localStorageOnLoad);
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

    //remove from storage
    removeTweetLocalStorage( e.target.parentElement.textContent );
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

//prints local storage tweets on load
function localStorageOnLoad() {
    let tweets = getTweetsFromStorage();

    //loop trough storage and then print the values
    tweets.forEach(function(tweet) {
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
    });
}

//removes the tweet from local storage

function removeTweetLocalStorage(tweet) {
    //get tweets from storage
    let tweets = getTweetsFromStorage();

    //remove the x from the tweet

    const tweetDelete = tweet.substring( 0, tweet.length -1 );
    
    //loop trough the tweets and remove the tweet thats equal
    tweets.forEach(function(tweetLS) {
        if(tweetDelete === tweetLS) {
            console.log('yes');
        }
    });
}