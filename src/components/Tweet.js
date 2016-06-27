import React from 'react';

const Tweet = props => {
  if (props.retweeted) {
    var retweeted = <i className="green fa fa-retweet" aria-hidden="true" />;
  } else{
    var retweeted = <i className="fa fa-retweet" aria-hidden="true" />;
  }

  if (props.favorited) {
    var favorited = <i className="red fa fa-heart" aria-hidden="true"/>;
  } else{
    var favorited = <i className="fa fa-heart" aria-hidden="true"/>;
  }

  if (props.entities.media) {
    var image = <img src={props.entities.media[0].media_url} />
  }


  var replied = <i className="fa fa-reply" aria-hidden="true" />;
  var more = <i className="fa fa-ellipsis-h" aria-hidden="true" />;

  let handleReplyClick = () => alert('reply');
  let handleRetweetClick = () => alert('retweet');
  let handleFavoriteClick = () => alert('like');
  let handleMoreClick = () => alert('favorite');

  return(
    <div className="row tweetContainer">
      <div className="small-2 columns">
        <img className="profilePic" src={props.image}/>
      </div>
      <div className="small-10 columns">
        <span className="userInfo">{props.username} </span>
        <span className="userInfo">@{props.screenname}</span>
        <span className="userInfo">{props.timestamp}</span>
        <br /><span>{props.body} {image}</span>
        <br /><span onClick={handleReplyClick}>{replied}</span>
        <span onClick={handleRetweetClick}> {retweeted} {props.retweet_count} </span>
        <span onClick={handleFavoriteClick}> {favorited} {props.favorite_count} </span>
        <span onClick={handleMoreClick}>{more}</span>
      </div>
    </div>
  );
}

export default Tweet;
