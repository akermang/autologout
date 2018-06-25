const autoLogOutComponent = $("#autoLogOutComponent");
const time = $("#autoLogOutComponent span");

function logOut() {
    sessionStorage.clear();
    window.location.replace("http://192.116.94.101/ServiceManager/apps/MOAG/moag_parot.html");
}

function cancelLogOut() {
 autoLogOutComponent.hide();
  time.text("stop")
}

function startLogoutTimer() {
  autoLogOutComponent.show();
  time.text("5")
  timer();
}

const timer = function () {
  curentTime = time.text()
  if(curentTime == "stop") return;
  if (curentTime == 0) { 
    // logout function here ****
      autoLogOutComponent.text("Loged Out");
      logOut(); 
  } else {
    time.text(curentTime -1);
    setTimeout(timer,1000);
  }
};
