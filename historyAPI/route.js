function log(message) {
  let messageDOM = document.createElement('p');
  messageDOM.textContent = message;
  document.getElementById('log').appendChild(messageDOM);
}

function route(url) {
  log(`jump ${url}`);
  window.history.pushState({}, '', url);
}
