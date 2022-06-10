// dom events and properties
function funcBlur() {
  console.log("onblur");
}

function funcOnchange() {
  console.log("onchange");
}

function funcOnfocus() {
  console.log("focus");
}

function funcOnselect() {
  console.log("selected");
}

function funcOnsubmit() {
  console.log("submitted");
}

function funcOnreset() {
  console.log("reset");
}

function funcOnkeydown() {
  console.log("keydown");
}

// DIFFERENCE BETWEEN ONKEYDOWN AND ONKEYPRESS -
// ONKEYDOWN IS WHEN YOU PRESS ANY KEY
// BUT ONKEYPRESS IS WHEN YOU PRESS A KEY THAT DISPLAYS ON THE INPUT FIELD

function funcOnkeypress() {
  console.log("keypress");
}

function funcOnkeyup() {
  console.log("keyup");
}

function funcOnclick() {
  console.log("onclick");
}

function funcOncontext() {
  console.log("context menu");
}

function funcOndblclick() {
  console.log("double click");
}

function onMouseEnter() {
  console.log("mouse entered");
}

function onMouseLeave() {
  console.log("mouse left");
}

function onMouseMove() {
  console.log("mouse moving");
}

function onMouseDown() {
  console.log("mouse down");
}

function onMouseOut() {
  console.log("mouse out");
}

function funcAbort() {
  alert("aborted");
}

var video = document.getElementById("buga");
video.onabort = function () {
  alert("video aborted");
};
// abort occurs because of the loading of a video/audio is aborted not when an error occurs
// similar to abort we also have
// - emptied
// - error
// - stalled
// - suspend

video.addEventListener("abort", function newAbort() {
  console.log("media aborted");
});

// error event occurs when an error occurs in the loading of a video/audio/external file
// stalled event occurs when the browser is trying to fetch a media but data is not available
// suspend event occurs when a media is paused or when download has happened
// afterprint - when a page has started printing or if the print dialogue box has been closed.
// animationend - when an animation ends
// animationstart  - when an animation starts
// animationiteration - when an animation is repeated
// beforeprint - when a page is about to be printed
// beforeunload - event occurs before a document is about to be unloaded
// blur - event occurs when an element loses focus
// canplay - event occurs when the browser can start playing a media, i.e, when it has buffered enough to start playing
// canplaythrough - event occurs when a browser can play through a media without stopping for buffering
// change - event occurs when the cntent of a form element or state of a checkbox has chaged
// copy - event occurs when the user copies an element
// cut, click, dblclick, contextmenu
// drag - event occurs when an element is being dragged
// dragend - event occurs when the user has finished dragging an element
// dragenter -  occurs when the drag element enters the drag terget
// dragleave -  occurs when the drag element leaves the drag target
// dragover -  occurs when the drag element is over the drag target
// dragstart -  occurs when the user starts to drag an element.
// drop - event occurs when the drag element is dropped into the drop target
// durationchange - event occurs when the duration of a media is changed
// ended - event occurs when the media has reached the end
// focus - event occurs when an element gets a focus
// focusin - event occurs when an element is about to get a focus
// focusout - event occurs when an element is about to lose a focus
// fullscreenchange - element occurs when an element is displayed in full screen mode.
// fullscreenerror - event occurs when an element can not be displayed in fullscreen mode.
// event occurs when an element gets a user input
// invalid - event occurs when an element is invalid
// keypress - event occurs when a user presses a key
// keyup - event occurs when a user releases a key
// keydown - event occurs when a user is pressing a key
// load - occurs when a object has loaded
// loadeddata - occurs when media data is loaded
// loadedmetadata - occurs when meta data are loaded, e.g dimensions and durations
// loadstart - occurs when the browser starts looking for the specified media
// message - occurs when a message is received through the event source
// mouseenter - occurs when a pointer is moved onto an element
// mouseleave - occurs when a pointer is moved out an element
// mousemove - occurs when a pointer is moving while it is over an element
// mousedown - occurs when the user presses a mouse button over an element
// mouseup - occurs when the user releases a mouse button over an element
// mouseover - occurs when the pointer is moved onto an element or one of its children.
// mouseout - occurs when the pointer is moved out of an element or out of one of it children.
// offline - when the browser starts to work offline
// online - when the browser starts to work online
// open - occurs when a connection with the event source is opened
// pagehide - occurs when a user navigates away from a webpage
// pageshow - occurs when a user navigates to a webpage
// paste - occurs when a user pastes some content in an element.
// pause - occurs when the media is paused either manually or programmatically
// play - occurs when the media has been started or no longer paused
// playing - occurs when the media is playing after been paused or stopped for buffering
// popstate - occurs when the window history changes
// progress - occurs when the browser is in the process of getting the media data
// ratechange - occurs when the playing speed of media changes
// resize - occurs when the document view resizes
// reset - occurs when a form is reset
// scroll - occurs when an element scrollbar is being scrolled
// search - occurs when a user writes something in a search field for <input type="search">
// seeked - occurs when a user finished moving to a new position
// seeking - occurs when a user starts moving to a new position
// select - occurs after the user selects some text
// show - occurs when a <menu> element is shown as a context menu
// stalled - occurs when the browser is trying to get media data but data is not available
// storage - occurs when a web storage area is updated
// submit - occurs when a form is submitted.
// suspend - occurs when the browser is intentionally not getting media data
// timeupdate - occurs when the playing position has changed, for instance, when the user fast-forwards to a different point in the media
// toggle - occurs when the user open/closes the <details> element.
// touchcancel - occurs when the touch is interrupted
// touchend - occurs when a finger is removed from the touch screen
// touchstart - occurs when the finger is placed on a touch screen
// touchmove - occurs when the finger is dragged accross a touch screen.
// transitioned - occurs when a css transitioned has completed
// unload - occurs when a page has unloaded (for <body>)
// volumechange - occurs when the volume of the media has changed include setting the volume to "mute".
// waiting - occurs when the media pauses to buffer more data or or when it is paused and expected to resume
// wheel - occurs when the mouse wheel rolls up or down an element
// hashchange - occurs when there has been changes to the anchor part of a url.
