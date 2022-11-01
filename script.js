document.getElementById("submitDownload").addEventListener("click", myFunction);
const select = document.getElementById('exampleFormControlSelect1');

function youtube_parser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
} // thanks stackoverflow for REGEXPPPPPPPPPPPPPPPP

function myFunction() {
    const getURL = document.getElementById("exampleInputEmail1").value
    if (getURL.startsWith("https://www.youtube.com/")) {
        if (select.value == "1280x720") {
            const id = youtube_parser(getURL)
            chrome.tabs.create({url:"https://img.youtube.com/vi/" + id + "/maxresdefault.jpg"});
        } else if (select.value == "640x480") {
            const id = youtube_parser(getURL)
            chrome.tabs.create({url:"https://img.youtube.com/vi/" + id + "/sddefault.jpg"});
        } else if (select.value == "480x360") {
            const id = youtube_parser(getURL)
            chrome.tabs.create({url:"https://img.youtube.com/vi/" + id + "/hqdefault.jpg"});
        } else if (select.value == "320x180") {
            const id = youtube_parser(getURL)
            chrome.tabs.create({url:"https://img.youtube.com/vi/" + id + "/mqdefault.jpg"});
        } 
    } else {
        chrome.notifications.create('NOTFICATION_ID', {
            type: 'basic',
            iconUrl: 'youtube.png',
            title: 'Youtube Thumbnail error',
            message: 'Your need to specify a youtube full link to the video, example : http://www.youtube.com/watch?v=yourid',
            priority: 0
        })
    }
}