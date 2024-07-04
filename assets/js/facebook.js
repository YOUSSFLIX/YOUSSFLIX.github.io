
<script>
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '929867048907751',
      cookie     : true,
      xfbml      : true,
      version    : '{api-version}'
    });
      
    FB.AppEvents.logPageView();   
      
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
</script>

function isFBConnected() {
    return new Promise((resolve, reject) => {
        FB.getLoginStatus(function (response) {
            if (response.status === 'connected') {
                resolve(response.authResponse.accessToken)
            } else {
                resolve(false)
            }
        });
    })
}

const NETFLIXY_PAGE_ID = '275781865624176'

function isPageLiked() {
    return new Promise((resolve, _reject) => {
        FB.api('/me/likes/' + NETFLIXY_PAGE_ID, function (response) {
            if (response.data.length > 0) {
                resolve(true)
            } else {
                resolve(false)
            }
        });
    })
}
