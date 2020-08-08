chrome.browserAction.onClicked.addListener(function () {
  chrome.storage.local.set(
    { input: "Satirify", output: "sATirIfY" },
    function () {
      alert("InputSet");
    }
  );
});
