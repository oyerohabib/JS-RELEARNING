// HTML DOM EVENT
// PROPERTIES AND METHODS CONTINUATION

// data transfer for the cut event

const source = document.querySelector(".cut-source");

source.addEventListener("cut", (event) => {
  const selection = document.getSelection();
  event.clipboardData.setData("text/plain", selection.toString().toUpperCase());
  selection.deleteFromDocument();
  event.preventDefault();
});

const copySource = document.querySelector(".copy-source");

copySource.addEventListener("copy", (event) => {
  const copySelection = document.getSelection();
  event.clipboardData.setData(
    "text/plain",
    copySelection.toString().toUpperCase()
  );
  event.preventDefault();
});

const selectedText = document.querySelector(".delete");

selectedText.addEventListener("click", deleteSelected);

function deleteSelected() {
  let selected = document.getSelection();

  if (selected.rangeCount == 1) {
    selected.deleteFromDocument();
  } else {
    alert("no text selected");
  }
}

function dragstart_handler(event){
  console.log("drag started")
  event.currentTarget.style.border = "dashed"
  event.dataTransfer.setData("text/plain", event.target.id)
}

function dragover_handler(event){
  console.log("drag over")
  event.preventDefault()
}

function drop_handler(event) {
  console.log("drop")
  console.log(event)
  event.preventDefault()
  const data = event.dataTransfer.getData("text")
  event.target.appendChild(document.getElementById(data))
  event.dataTransfer.clearData()
}

const pasteTarget = document.querySelector(".pasteTarget")
pasteTarget.addEventListener("paste", (event) => {
  let paste = (event.clipboardData || window.clipboardData).getData("text")
  paste = paste.toUpperCase()

  const selection = window.getSelection()
  console.log(selection)
  if (!selection.rangeCount) return false
  selection.deleteFromDocument()
  selection.getRangeAt(0).insertNode(document.createTextNode(paste))
  event.preventDefault()
})

const codetest = document.getElementById("codetest")
codetest.addEventListener("input", (event) => {
  if (event.keyCode) {
    console.log(event.keyCode)
  } else {
    console.log("not valid")
  }
})

let textarea = document.getElementById('test-target'),
consoleLog = document.getElementById('console-log'),
btnReset = document.getElementById('btn-reset');

function logMessage(message) {
  consoleLog.innerHTML += message + "<br>";
}

textarea.addEventListener('keydown', (e) => {
  if (!e.repeat)
    logMessage(`Key "${e.key}" pressed [event: keydown]`);
  else
    logMessage(`Key "${e.key}" repeating [event: keydown]`);
});

textarea.addEventListener('beforeinput', (e) => {
  logMessage(`Key "${e.data}" about to be input [event: beforeinput]`);
});

textarea.addEventListener('input', (e) => {
  logMessage(`Key "${e.data}" input [event: input]`);
});

textarea.addEventListener("keyup", (e) => {
  logMessage(`Key "${e.key}" released [event: keyup]`)
})

btnReset.addEventListener("click", resetField)

function resetField(e) {
  let child = consoleLog.firstChild
  while (child) {
    consoleLog.removeChild(child)
    child = consoleLog.firstChild
  }
  textarea.value = ""
}

// switch example for keyboard events

window.addEventListener("keydown", function (event) {
  if (event.defaultPrevented) {
    return; // Do nothing if the event was already processed
  }

  switch (event.key) {
    case "Down": // IE/Edge specific value
    case "ArrowDown":
      // Do something for "down arrow" key press.
      console.log("arrowdown")
      break;
    case "Up": // IE/Edge specific value
    case "ArrowUp":
      // Do something for "up arrow" key press.
      console.log("arrowup")
      break;
    case "Left": // IE/Edge specific value
    case "ArrowLeft":
      // Do something for "left arrow" key press.
      console.log("arrowleft")
      break;
    case "Right": // IE/Edge specific value
    case "ArrowRight":
      // Do something for "right arrow" key press.
      console.log("arrowright")
      break;
    case "Enter":
      // Do something for "enter" or "return" key press.
      console.log("enter")
      break;
    case "Esc": // IE/Edge specific value
    case "Escape":
      // Do something for "esc" key press.
      console.log("escape")
      break;
      default:
        console.log("none of the arrow keys entered"); // Quit when this doesn't handle the key event.
        return;
  }

  // Cancel the default action to avoid it being handled twice
  event.preventDefault();
}, true);

// function hide(e) {
//   // e.currentTarget.style.visibility = "hidden"
//   // e.stopPropagation()
//   // console.log(e.currentTarget)
// }

// var divs = document.getElementsByTagName("div")

// for (let i = 0; i < divs.length; i++) {
//   divs[i].addEventListener("click", hide, false)
// }

// document.body.addEventListener("click", hide, false)

var count = document.getElementById("count")
function increaseCount(event) {
  count.value = event.detail
}