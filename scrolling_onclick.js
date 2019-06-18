function removeCookieForms() {
  chrome.tabs.executeScript({
    file: 'scrolling.js'
  }); 
}

document.getElementById('clickme').addEventListener('click', removeCookieForms);
