const formCardEl = document.querySelector(".form-card");
const formNotificationEl = document.querySelector(".form-notification");
const formTitleEl = document.querySelector(".form-title");
const confirmInputEl = document.getElementById("confirm");
const forgotPasswordEl = document.querySelector(".forgot-password-text");
const primaryBtnEl = document.querySelector(".primary-btn");
const subBtnEl = document.querySelector(".sub-btn");

const app = () => {
  // Đặt trạng thái hiển thị UI (Có đang ở giao diện Đăng nhập không?)
  let isLoginForm = true;

  primaryBtnEl.addEventListener("click", () => {
    if (!isLoginForm) {
      formCardEl.classList.add("hidden");
      formNotificationEl.classList.remove("hidden");
    } else {
      isLoginForm = !isLoginForm;
      renderFormUI();
    }
  });

  subBtnEl.addEventListener("click", () => {
    isLoginForm = !isLoginForm;
    renderFormUI();
  });

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
  renderFormUI();
};

app();
