import React from 'react';
import Tweet from './Tweet.js';

const TwitterFeed = props => {
  let tweets = props.data.map(tweetx => {
    return(
      <Tweet
        key={tweetx.id}
        body={tweetx.body}
        username={tweetx.username}
        screenname={tweetx.screenname}
        image={tweetx.image}
        retweet_count={tweetx.retweet_count}
        favorite_count={tweetx.favorite_count}
        entities={tweetx.entities}
        favorited={tweetx.favorited}
        retweeted={tweetx.retweeted}
        timestamp={tweetx.timestamp}
      />
    );
  });

  return(
    <ul className="container">
      {tweets}
    </ul>
  );
}
export default TwitterFeed;
