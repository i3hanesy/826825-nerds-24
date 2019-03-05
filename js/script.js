var contact = document.querySelector(".button-contact-area");

var popup = document.querySelector(".modal");
var close = popup.querySelector(".modal-close");

  contact.addEventListener("click" , function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
  });

  close.addEventListener("click" , function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
  });