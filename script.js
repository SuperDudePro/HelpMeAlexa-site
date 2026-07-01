// Replace this with the APS-restricted Google Form URL when it is ready.
const GOOGLE_FORM_URL = "";

const formLinks = document.querySelectorAll("[data-form-link]");
const formStatus = document.querySelector("[data-form-status]");

if (GOOGLE_FORM_URL) {
  formLinks.forEach((link) => {
    link.href = GOOGLE_FORM_URL;
    link.textContent = "Open the Student Voice Form";
    link.removeAttribute("aria-disabled");
  });
  if (formStatus) {
    formStatus.textContent = "The form is active. You will need to sign in with your APS account.";
  }
} else {
  formLinks.forEach((link) => {
    link.href = "#form-next";
    link.setAttribute("aria-disabled", "true");
  });
}
