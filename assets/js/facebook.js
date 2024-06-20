
<script>
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '772407911757611',
      cookie     : true,
      xfbml      : true,
      version    : 'v20.0'
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

FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
});
{
    status: 'connected',
    authResponse: {
        accessToken: '...',
        expiresIn:'...',
        signedRequest:'...',
        userID:'...'
    }
}
// Add the Facebook SDK for Javascript
(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/fr_FR/sdk.js";
    js.onerror = function () {
        showError("Veuillez désactiver votre bloqueur de pubs pour permettre l'accès à Facebook.")
    };
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

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
