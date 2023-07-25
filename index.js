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
  console.log(pwdValidity);
  /* Add check here.  Will calculate three statuses <8 = invalid, 8-11 incl = valid 12+ = optimal */
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
  const progressBar = document.getElementById("pwdlength");
  /* const gameResult = document.createElement("gameResult"); */
  const progressFeedbackText = document.createElement("progressFeedbackText");
  progressFeedbackText.setAttribute("id", "pwdValidityText");
  progressBar.value = pwdLength * 5;

  if (pwdValidity === "invalid") {
    pwdValidity = "Should be longer";
  } else if (pwdValidity === "valid") {
    pwdValidity = "Pretty good";
  } else {
    pwdValidity = "Great";
  }

  /*gameResult.textContent = outcome;
  document.body.appendChild(gameResult); */
  progressFeedbackText.textContent = pwdValidity;
  document.body.appendChild(progressFeedbackText);
};

const pwdInput = document.getElementById("pwd");
pwdInput.addEventListener("keyup", checkPwd);
