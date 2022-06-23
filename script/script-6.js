// event phase example

let clear = false,
    divInfo = null,
    divs = null,
    chCapture = null;

window.onload = function () {
  divInfo = document.getElementById('divInfo');
  divs = document.getElementsByTagName('div');
  chCapture = document.getElementById('chCapture');
  chCapture.onclick = function () {
    removeListeners();
    addListeners();
    clearDivs();
  };
  clearDivs();
  addListeners();
}

function removeListeners() {
  for (const div of divs) {
    if (div.id != 'divInfo') {
      div.removeEventListener('click', onDivClick, true);
      div.removeEventListener('click', onDivClick, false);
    }
  }
}

function addListeners() {
  for (const div of divs) {
    if (div.id != 'divInfo') {
        if (chCapture.checked) {
            div.addEventListener('click', onDivClick, true);
        }
        else {
            div.addEventListener('click', onDivClick, false);
            div.onmousemove = function () { clear = true };
        }
    }
  }
}

function onDivClick(e) {
  if (clear) {
    clearDivs();
    clear = false;
  }
  if (e.eventPhase == 2) {
    e.currentTarget.style.backgroundColor = 'red';
  }
  const level =
      e.eventPhase == 0 ? 'none' :
      e.eventPhase == 1 ? 'capturing' :
      e.eventPhase == 2 ? 'target' :
      e.eventPhase == 3 ? 'bubbling' : 'error';
  const para = document.createElement('p');
  para.textContent = `${e.currentTarget.id}; eventPhase: ${level}`;
  divInfo.appendChild(para);
}

function clearDivs() {
  for (let i = 0; i < divs.length; i++) {
    if (divs[i].id != 'divInfo') {
      divs[i].style.backgroundColor = (i & 1) ? '#f6eedb' : '#cceeff';
    }
  }
  divInfo.textContent = '';
}