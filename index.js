const checkPwd = () => {
  const pwd = pwdInput.value;
  const pwdLength = document.getElementById("pwd").value.length;
  console.log(pwdLength);
  let pwdValidity = "invalid";
  if (pwdLength < 8) {
    pwdValidity = "invalid";
  } else if (pwdLength < 12) {
    pwdValidity = "valid";
  } else if (pwdLength > 11) {
    pwdValidity = "optimal";
  }
  updateDOM(pwdValidity, pwdLength);
};

const resetPwdClassification = () => {
  if (document.getElementById("pwdValidityText")) {
    const pwdValidityText = document.body.lastChild;
    document.body.removeChild(pwdValidityText);
  }
};

const updateDOM = (pwdValidity, pwdLength) => {
  resetPwdClassification();
  //const progressDivBar = document.getElementById("progressBarDiv");
  const progressFeedbackText = document.createElement("progressFeedbackText");

  progressFeedbackText.setAttribute("id", "pwdValidityText");
  document.getElementById("progressBarDiv").style.width = pwdLength * 5 + "px";

  if (pwdValidity === "invalid") {
    pwdValidity = "Should be longer";
    document.getElementById("progressBarDiv").style.backgroundColor = "red";
  } else if (pwdValidity === "valid") {
    pwdValidity = "Pretty good";
    document.getElementById("progressBarDiv").style.backgroundColor = "orange";
  } else {
    pwdValidity = "Grrreat!";
    document.getElementById("progressBarDiv").style.backgroundColor = "green";
  }

  progressFeedbackText.textContent = pwdValidity;
  document.body.appendChild(progressFeedbackText);
};

const pwdInput = document.getElementById("pwd");
pwdInput.addEventListener("keyup", checkPwd);
