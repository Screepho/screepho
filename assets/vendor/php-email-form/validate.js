/**
 * PHP Email Form Validation - v3.7
 * URL: https://bootstrapmade.com/php-email-form/
 * Author: BootstrapMade.com
 */
(function () {
  "use strict";

  let forms = document.querySelectorAll(".php-email-form");

  forms.forEach(function (e) {
    e.addEventListener("submit", function (event) {
      event.preventDefault();

      let thisForm = this;

      thisForm.querySelector(".loading").classList.add("d-block");
      php_email_form_submit(thisForm);
    });
  });

  function php_email_form_submit(thisForm) {
    setTimeout(() => {
      thisForm.querySelector(".loading").classList.remove("d-block");
      thisForm.querySelector(".sent-message").classList.add("d-block");
    }, 2000);

    setTimeout(() => {
      thisForm.querySelector(".sent-message").classList.remove("d-block");
    }, 4000);
  }
})();
