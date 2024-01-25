// Ejemplo: Validar un correo electrónico
function validarCorreoElectronico(correo) {
    const patronCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return patronCorreo.test(correo);
  }
  function validateForm() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // Verificar si la contraseña cumple con ciertos criterios (puedes ajustarlos según tus necesidades)
    if (password.length < 8) {
      document.getElementById("passwordError").innerText = "La contraseña debe tener al menos 8 caracteres.";
      return false;
        
  
