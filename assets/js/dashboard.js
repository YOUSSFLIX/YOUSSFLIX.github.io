let accessNetflixBtn = document.getElementById("accessNetflixBtn");
let accessAndroidBtn = document.getElementById("accessAndroidBtn");
let dashboardErrorText = document.getElementById("dashboardErrorText");
let announcementContainer = document.getElementById("announcementContainer");
let codeContainer = document.getElementById("codeContainer");

window.onload = function () {
    let hostData = fetchHost()

    BACKEND_URL_BASE_S = 'https://' + hostData.host

    if (hostData.maintenance == true) {
        window.location.href = "maintenance.html"
    } else {
        fetchAnnouncement()
           .then(response => response.json())
           .then(data => {
                announcementContainer.innerHTML = data.message
                if (data.enabled) {
                    $('#announcementModal').modal('show')
                }
            })

        accessNetflixBtn.addEventListener("click", function (event) {
            event.preventDefault()

            accessNetflixBtn.classList.add('loading')

            // Receive Netflix session and access Netflix
            accessNetflix()
               .then(response => response.json())
               .then(data => {
                    accessNetflixBtn.classList.remove('loading')

                    if (data.result == 'uccess') {
                        window.open('https://www.netflix.com/?nftoken=' + data.data.NFToken)
                    }
                    else {
                        showError(data.message)
                    }
                })
        })

        accessAndroidBtn.addEventListener("click", function (event) {
            event.preventDefault()

            accessAndroidBtn.classList.add('loading')

            // Pair Netflix session with code
            pairAndroid()
               .then(response => response.json())
               .then(data => {
                    accessAndroidBtn.classList.remove('loading')

                    if (data.result == 'uccess') {
                        codeContainer.innerHTML = data.data.code
                        $('#androidModal').modal('show')
                    }
                    else {
                        showError(data.message)
                    }
                })
        })
    }
}

function showError(message) {
    dashboardErrorText.classList.remove('hidden')
    dashboardErrorText.innerHTML = message
}
