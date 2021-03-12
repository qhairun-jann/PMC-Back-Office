//#List Function avaiable:
/*
            - toggleSocialButtons
            - EnableSocialButtons
            - allCheckInputHandlder
*/
function toggleSocialButtons(toggle) {
  //console.log("toggleSocialButtonsEnter !");
  const sharebtn = document.querySelector(".sharebtn");
  const x = document.querySelectorAll(".btn_social");
  const xArr = Array.from(x);

  //console.log("toggle based:", toggle);

  if (toggle) {
    // console.log("toggle if:", toggle);
    xArr.map((socialElement) => {
      socialElement.querySelector("svg").style.background = "inherit";
    });
    sharebtn.style.pointerEvents = "auto";
    sharebtn.style.opacity = 1;
  } else if (!toggle) {
    // console.log("toggle else :", toggle);
    xArr.map((socialElement) => {
      socialElement.querySelector("svg").style.background = "grey";
    });
    sharebtn.style.opacity = 0.2;
    sharebtn.style.pointerEvents = "none";
  }
}

function EnableSocialButtons(event) {
  // toggleSocialButtons(event.target.checked ? true : false)
  toggleSocialButtons(allCheckInputHandlder());
}

function allCheckInputHandlder() {
  const x = document.querySelectorAll(".req__checkbox");
  const xArr = Array.from(x);
  let result = false;
  for (let index = 0; index < xArr.length; index++) {
    const y = xArr[index].checked;
    if (y) {
      result = true;
      break;
    } else result = false;
  }

  //console.log("xArr:", xArr);
  return result;
}

window.onload = () => {
  toggleSocialButtons(allCheckInputHandlder());
};
