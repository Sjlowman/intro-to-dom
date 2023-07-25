const checkPwd = () => {
  const pwd = pwdInput.value;
  const pwdLength = document.getElementById("pwd").value.length;
  let pwdValidity = "invalid";
  if (pwdLength > 7 && pwdValidity < 12) {
    pwdValidity = "valid";
  } else if (pwdLength > 11) {
    pwdValidity = "optimal";
  }

  /* Add check here.  Will calculate three statuses <8 = invalid, 8-11 incl = valid 12+ = optimal */
  updateDOM(pwdValidity, pwdLength);
};

const updateDOM = (pwdValidity, pwdLength) => {
  const progressBar = document.getElementById("pwdlength");
  /* const gameResult = document.createElement("gameResult"); */
  const progressFeedbackText = document.createElement("progressFeedbackText");
  progressBar.value = pwdLength * 5;

  if (pwdValidity === "invalid") {
    progressFeedbackText.setAttribute("Should be longer");
  } else if (pwdValidity === "valid") {
    progressFeedbackText.setAttribute("Pretty good");
  } else {
    progressFeedbackText.setAttribute("Great");
  }

  progressFeedbackText.setAttribute("id", "outcome");
  /*gameResult.textContent = outcome;
  document.body.appendChild(gameResult); */
};

const pwdInput = document.getElementById("pwd");
pwdInput.addEventListener("keyup", checkPwd);
