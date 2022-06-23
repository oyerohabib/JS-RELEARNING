// HTML DOM EVENT
// PROPERTIES AND METHODS

// altKey

function pressAltKey(event) {
  var demo = document.getElementById("demo")
  if (event.altKey) {
    demo.innerHTML = "The ALT key was pressed!";
  } else {
    demo.innerHTML = "The ALT key was not pressed!";
  }
}

function changeAnimation() {
  document.getElementById("animationDiv").style.animationName = "mynewmove"
}

function checkBubble(event) {
  let x = event.bubbles;
  document.getElementById("animationButton").innerHTML = x;
}

function func1(event) {
  alert("div1")
  if (document.getElementById("check").checked) {
    event.stopPropagation()
  }
}

function func2() {
  alert("div2")
}

function isTrusted(event) {
  if ("isTrusted" in event) {
    if (event.isTrusted) {
      alert(`the ${event.type} is trusted`)
    } else {
      alert(`the ${event.type} is not trusted`)
    }
  } else {
    alert("your browser doesn't support the isTrusted event")
  }
}

function triggerClick() {
  let scriptBut = document.getElementById("scriptBut")
  scriptBut.click()
}

function changePart() {
  location.hash = "newpart"
}

function triggerHash(event) {
  document.getElementById("hashNote").innerHTML = `The oldUrl is ${event.oldURL}, and the new url is ${event.newURL}`
}

function getEvent(event) {
  let x = event.type
  document.getElementById("eventType").innerHTML = x
}

function whichEvent(event) {
  alert(event.which)
}

function timeStamp(event) {
  document.getElementById("timestamp").innerHTML = event.timeStamp
}

function isCached(event) {
  if (event.persisted) {
    console.log("the page cached")
  } else {
    console.log("the page did not cache")
  }
}

function didMeta(event) {
  if (event.metaKey) {
    alert("meta key was pressed")
  } else {
    alert("meta key was not pressed")
  }
}

function checkCancel(event) {
  if (event.cancelable) {
    alert("event is cancellable")
  } else {
    alert("not cancellable")
  }
}

document.getElementById("testDefaultForm").addEventListener("submit", function testDefault(event) {
  event.preventDefault()
})

function checkKey(event) {
  alert(event.key)
}

function countTouches(event) {
  // alert(event.touches.length)
}

function countTargetTouches(event) {
  alert(event.targetTouches.length)
}

function targetTouchesTags(event) {
  alert(event.targetTouches[0].target.tagName)
}

let screenLog = document.querySelector(".screenLog")
document.addEventListener("mousemove", logKey)

function logKey(event) {
  screenLog.innerText = `
    Screen X/Y: ${event.screenX}, ${event.screenY}
    Page X/Y: ${event.pageX}, ${event.pageY}
  `
}

var selectedObj = window.getSelection()
// alert(selectedObj)
// var range = selectedObj.getRangeAt(0)
// alert(range)