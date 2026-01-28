(function () {
  emailjs.init("CLbat-eMxkO4HMoyP"); // from EmailJS dashboard
})();

function handleSubmit(event) {
  event.preventDefault();

  emailjs.sendForm(
    "service_hd35wig",   // e.g. service_xxxxx
    "template_khh7f8c",  // e.g. template_xxxxx
    event.target
  )
  .then(() => {
    alert("Message sent successfully ✅");
    event.target.reset();
  })
  .catch((error) => {
    console.error("EmailJS Error:", error);
    alert("Something went wrong ❌");
  });
}
