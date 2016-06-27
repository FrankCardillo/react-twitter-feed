import './main.scss';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import TwitterFeed from './components/TwitterFeed';
import data from './constants/data';

let dummyTweets = [

];

for (var i = 0; i < data.length; i++) {
  let date = new Date(parseInt(data[i].timestamp_ms)).toUTCString();

  let dummyObj = {
    id: data[i].id_str,
    body: data[i].text,
    username: data[i].user.name,
    screenname: data[i].user.screen_name,
    image: data[i].user.profile_image_url,
    retweet_count: data[i].retweet_count,
    favorite_count: data[i].favorite_count,
    entities: data[i].entities,
    favorited: data[i].favorited,
    retweeted: data[i].retweeted,
    timestamp: date,
  }
  dummyTweets.push(dummyObj);
}

ReactDOM.render(
  <TwitterFeed data={dummyTweets} />,
  document.getElementById('app')
);
