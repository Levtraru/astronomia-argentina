/* ======== Contact ======== */
function validacion() {
  var name = document.querySelector("#name").value;
  var surname = document.querySelector("#surname").value;
  var location = document.querySelector("#location").value;
  var email = document.querySelector("#email").value;
  var message = document.querySelector("#message").value;
  var error = document.querySelector("#contact-error");
  var text;

  error.style.padding = "10px";

  if (name.trim() == null || name.trim().length == 0) {
    text = "Ingrese nombre válido";
    error.innerHTML = text;
    return false;
  }

  if (surname.trim() == null || surname.trim().length == 0) {
    text = "Ingrese apellido válido";
    error.innerHTML = text;
    return false;
  }

  if (location.trim() == null || location.trim().length == 0) {
    text = "Ingrese ubicación válida";
    error.innerHTML = text;
    return false;
  }

  if (
    email.indexOf("@") == -1 ||
    email.trim() == null ||
    email.trim().length == 0
  ) {
    text = "Ingrese e-mail válido";
    error.innerHTML = text;
    return false;
  }

  if (message.trim() == null || message.trim().length == 0) {
    text = "Su mensaje no contiene texto";
    error.innerHTML = text;
    return false;
  }

  alert("¡Mensaje enviado con éxito!");

  return true;
}
/* ======== Contact End ======== */
