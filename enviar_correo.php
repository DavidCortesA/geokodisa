<?php
  if(isset($_POST['submit'])) {
    if (!$_POST['antibot']){
      // Recopilar información del formulario
      $name = $_POST['nombre'];
      $email = $_POST['correo'];
      $phone = $_POST['telefono'];
      $message = $_POST['mensaje'];

      // Configurar correo electrónico
      $to = "geek.cias@gmail.com";
      $subject = "Mensaje del formulario de contacto";
      $body = "Nombre: $name\nCorreo electrónico: $email\nTeléfono: $phone\nMensaje:\n$message";
      
      // Enviar correo electrónico
      if (mail($to, $subject, $body)) {
          // Mensaje de confirmación en javascript
          echo "<script>      document.getElementById('confirm-modal').style.display = 'block';
          document.getElementById('nombre').value = '';
          document.getElementById('correo').value = '';
          document.getElementById('telefono').value = '';
          document.getElementById('mensaje').value = '';</script>";
          echo "<script>alert('Mensaje enviado correctamente');</script>";
          header("Location: index.html#contacto");
          exit;
      } else {
          // Mensaje de error en javascript
          header("Location: index.html#contacto");
          echo "<script>alert('Ocurrió un error al enviar su mensaje');</script>";
      }
    } else {
      // Si el campo antibot no está vacío, asumimos que es un bot
      header("Location: index.html#contacto");
      echo "<script>
        alert('Lo sentimos, parece que eres un bot');
      </script>";
    }
  }
?>

