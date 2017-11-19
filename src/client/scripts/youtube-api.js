// 2. This code loads the IFrame Player API code asynchronously.
    // 3. This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.
    var player;
    var playerContainer = document.getElementById('youtube-video-container');
    //var videoID = playerContainer.getAttribute('data-src');
    function onYouTubeIframeAPIReady() {
      player = new YT.Player('youtube-video-container', {
        videoId: 'tqT8zhqFplI',
        playerVars : { rel : 0 },
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });
    }

    // 4. The API will call this function when the video player is ready.
    function onPlayerReady(event) {
      //event.target.playVideo();
    }

    // 5. The API calls this function when the player's state changes.
    //    The function indicates that when playing a video (state=1),
    //    the player should play for six seconds and then stop.
    var done = false;
    function onPlayerStateChange(event) {
      if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 46000);
        done = true;
      }
    }
    function stopVideo() {
      player.stopVideo();
    }