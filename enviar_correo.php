<?php
  if(isset($_POST['submit'])) {
      // Recopilar información del formulario
      $name = $_POST['nombre'];
      $email = $_POST['correo'];
      $phone = $_POST['telefono'];
      $message = $_POST['mensaje'];

      // Configurar correo electrónico
      //   $to = "info@geokodisa.com";
      $to = "david.cortes.ayala@hotmail.com";
      $subject = "Mensaje del formulario de contacto";
      $body = "Nombre: $name\nCorreo electrónico: $email\nTeléfono: $phone\nMensaje:\n$message";

      // Enviar correo electrónico
      if (mail($to, $subject, $body)) {
          // Mensaje de confirmación en javascript
          echo "<script>
                  alert('Su mensaje ha sido enviado');
                  window.location.href='index.html#contacto';
                </script>";
      } else {
          // Mensaje de error en javascript
          echo "<script>alert('Ocurrió un error al enviar su mensaje');</script>";
      }
  }
?>
