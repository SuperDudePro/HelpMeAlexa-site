// Replace this with the APS-restricted Google Form URL when it is ready.
const GOOGLE_FORM_URL = "";

const formLinks = document.querySelectorAll("[data-form-link]");
const formStatus = document.querySelector("[data-form-status]");

if (GOOGLE_FORM_URL) {
  formLinks.forEach((link) => {
    link.href = GOOGLE_FORM_URL;
    link.textContent = "Open the Student Voice Form";
    link.removeAttribute("aria-disabled");
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
  });
  if (formStatus) {
    formStatus.textContent = "Use your APS account to submit the form.";
  }
} else {
  formLinks.forEach((link) => {
    link.href = "#form";
    link.setAttribute("aria-disabled", "true");
  });
}
