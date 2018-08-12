chrome.tabs.onCreated.addListener(function (newTab) {
	if (newTab.index > 0) {
		chrome.tabs.remove(newTab.id)
	}
})