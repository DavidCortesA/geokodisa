<?php
  if(isset($_POST['submit'])) {
    // Verificar si el campo antibot está vacío
    if (!$_POST['antibot']) {
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
        echo "<script>
          document.getElementById('confirm-modal').style.display = 'block';
        </script>";
      } else {
        echo "<script>
          alert('Ocurrió un error al enviar su mensaje');
        </script>";
      }
    } else {
      // Si el campo antibot no está vacío, asumimos que es un bot
      echo "<script>
        alert('Lo sentimos, parece que eres un bot');
      </script>";
    }
  }
?>
