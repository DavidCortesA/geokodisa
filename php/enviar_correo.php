<?php
  if(isset($_POST['submit'])) {
      // Recopilar información del formulario
      $name = $_POST['name'];
      $email = $_POST['email'];
      $phone = $_POST['phone'];
      $message = $_POST['message'];

      // Configurar correo electrónico
      $to = "destinatario@dominio.com";
      $subject = "Mensaje del formulario de contacto";
      $body = "Nombre: $name\nCorreo electrónico: $email\nTeléfono: $phone\nMensaje:\n$message";

      // Enviar correo electrónico
      if (mail($to, $subject, $body)) {
          // Mensaje de confirmación en javascript
          echo "<script>alert('Su mensaje ha sido enviado');</script>";
          header("Location: index.html");
          exit;
      } else {
          // Mensaje de error en javascript
          echo "<script>alert('Ocurrió un error al enviar su mensaje');</script>";
      }
  }
?>