chrome.browserAction.onClicked.addListener(function(tab) {
    let spotUrl = "spotify:playlist:2Wj3zlqSALz6q5LgSt3jU4"
    chrome.tabs.create({"url": spotUrl})
});
