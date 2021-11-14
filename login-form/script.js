const formCardEl = document.querySelector(".form-card");
const formNotificationEl = document.querySelector(".form-notification");
const notificationTextEl = document.querySelector(".form-notification p");
const formTitleEl = document.querySelector(".form-title");
const confirmInputEl = document.getElementById("confirm");
const forgotPasswordEl = document.querySelector(".forgot-password-text");
const primaryBtnEl = document.querySelector(".primary-btn");
const subBtnEl = document.querySelector(".sub-btn");

const formControlEls = document.querySelectorAll(".form-control");
const userNameInputEl = document.getElementById("id");
const passwordInputEl = document.getElementById("password");
const confirmPasswordInputEl = document.getElementById("confirm");

let isLoginForm = true;

// Render UI
const renderFormUI = () => {
  formTitleEl.textContent = isLoginForm ? "Đăng nhập" : "Đăng ký";
  primaryBtnEl.textContent = isLoginForm ? "Đăng nhập" : "Xác nhận đăng ký";
  subBtnEl.textContent = !isLoginForm ? "Đăng nhập" : "Đăng ký";

  if (isLoginForm) {
    confirmInputEl.closest(".form-control").classList.add("hidden");
    forgotPasswordEl.classList.remove("hidden");
  } else {
    confirmInputEl.closest(".form-control").classList.remove("hidden");
    forgotPasswordEl.classList.add("hidden");
  }
};

// Action buttons
const actionsBtnHandler = () => {
  subBtnEl.addEventListener("click", () => {
    isLoginForm = !isLoginForm;
    [...formControlEls].forEach((el) => el.classList.remove("invalid"));
    [userNameInputEl, passwordInputEl, confirmPasswordInputEl].forEach(
      (el) => (el.value = "")
    );
    renderFormUI();
  });
};

// Validation + Submit
const validateAndSubmitForm = () => {
  const renderInputError = (inputEl, message, clearError = false) => {
    const controlEl = inputEl.closest(".form-control");
    const errorTextEl = controlEl.querySelector(".error-text");

    if (clearError) {
      controlEl.classList.remove("invalid");
      return;
    }

    controlEl.classList.add("invalid");
    errorTextEl.textContent = message;
  };

  const validateInputs = () => {
    const userNameValue = userNameInputEl.value;
    const passwordValue = passwordInputEl.value;
    const confirmPasswordValue = confirmPasswordInputEl.value;
    let inputsAreValid = true;

    if (userNameValue.trim().length === 0) {
      renderInputError(userNameInputEl, "Username must not be empty");
      inputsAreValid = false;
    }

    if (passwordValue.trim().length < 6 || passwordValue.trim().length > 32) {
      renderInputError(passwordInputEl, "Password must be 6 to 32 charaters");
      inputsAreValid = false;
    }

    if (!isLoginForm && confirmPasswordValue !== passwordValue) {
      renderInputError(
        confirmPasswordInputEl,
        "Confirm password must match the password"
      );
      inputsAreValid = false;
    }

    return inputsAreValid;
  };

  [userNameInputEl, passwordInputEl, confirmPasswordInputEl].forEach((el) =>
    el.addEventListener("keypress", (event) => {
      renderInputError(event.target, null, true);
    })
  );

  const renderNotiMessage = () => {};

  formCardEl.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(validateInputs());
  });
};

// Show/Hide Password

// Initialize app
const init = () => {
  actionsBtnHandler();
  renderFormUI();
  submitHandler();
};
init();
