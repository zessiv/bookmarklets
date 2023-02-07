// both long and short form can be used for the bookmarklet, what ever you prefer.

/**
 * Long form for understanding the code but can also be used as a bookmarklet.
 */
javascript:(function() {
  const videoId = window.location.href.split('/').pop();
  const youtubeWatchUrl = `https://www.youtube.com/watch?v=${videoId}`;
  window.location.href = youtubeWatchUrl;
})()

/**
 * Short form in case it is more prefered as a bookmarklet.
 */
javascript:(function(){window.location.href=`https://www.youtube.com/watch?v=${window.location.href.split('/').pop()}`})()
