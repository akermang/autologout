const autoLogOutComponent = $("#autoLogOutComponent");
const time = $("#autoLogOutComponent span");
const inactivityTimeDelay = 10000; //in ml/sec
const numberSecToLogOut = 5; // in sec
const logOutRedirect = "http://192.116.94.101/ServiceManager/apps/MOAG/moag_parot.html"

function logOut() {
    sessionStorage.clear();
    window.location.replace(logOutRedirect);
}

function cancelLogOut() {
 autoLogOutComponent.hide();
  time.text("stop")
}

function startLogoutTimer() {
  autoLogOutComponent.show();
  time.text(numberSecToLogOut);
  timer();
}

const timer = function () {
  curentTime = time.text()
  if(curentTime == "stop") return;
  if (curentTime == 0) { 
    // logout function here ****
    logOut(); 
  } else {
    time.text(curentTime -1);
    setTimeout(timer,1000);
  }
};

function idleTimer() {
  var t;
  window.onload = resetTimer;
  window.onmousemove = resetTimer; // catches mouse movements
  window.onmousedown = resetTimer; // catches mouse movements
  window.onclick = resetTimer;     // catches mouse clicks
  window.onscroll = resetTimer;    // catches scrolling
  window.onkeypress = resetTimer;  //catches keyboard actions
    window.touchmove = resetTimer;

 function resetTimer() {
      clearTimeout(t);
      t = setTimeout(startLogoutTimer,inactivityTimeDelay);  // time is in milliseconds (1000 is 1 second)
  }
}
idleTimer();
