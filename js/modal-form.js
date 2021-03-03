const loginLink = document.querySelector(".page-footer__button");
const loginPopup = document.querySelector(".modal-form");
const loginClose = loginPopup.querySelector(".modal-close");
const loginForm = loginPopup.querySelector(".feedback-form");
const loginLogin = loginPopup.querySelector(".feedback-form__name");
const loginMail = loginPopup.querySelector(".feedback-form__mail");
const loginReview = loginPopup.querySelector(".feedback-form__review");


loginLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.add("modal-show");

  if (storage) {
    loginLogin.value = storage;
    loginMail.focus();
  } else {
    loginLogin.focus();
  }
});

loginClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.remove("modal-show");
  loginPopup.classList.remove("modal-error");
});

loginForm.addEventListener("submit", function (evt) {
  if (!loginLogin.value || !loginMail.value || !loginReview.value) {
    evt.preventDefault();
    loginPopup.classList.remove("modal-error");
    loginPopup.offsetWidth = loginPopup.offsetWidth;
    loginPopup.classList.add("modal-error");
  } else {
    localStorage.setItem("login", loginLogin.value);
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (loginPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      loginPopup.classList.remove("modal-show");
      loginPopup.classList.remove("modal-error");
    }
  }
});
