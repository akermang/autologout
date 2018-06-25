const autoLogOutComponent = $("#autoLogOutComponent");
const time = $("#autoLogOutComponent span");
const numberSecToLogOut = 5;
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
      // autoLogOutComponent.text("logged Out");
      logOut(); 
  } else {
    time.text(curentTime -1);
    setTimeout(timer,1000);
  }
};
