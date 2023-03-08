<?php
  // Recoger datos del formulario
  $nombre = $_POST['nombre'];
  $correo = $_POST['correo'];
  $telefono = $_POST['telefono'];
  $mensaje = $_POST['mensaje'];

  // Crear mensaje de correo electrónico
  $destinatario = "david.cortes.ayala@hotmail.com"; // Cambiar por tu correo electrónico
  $asunto = "Nuevo mensaje de formulario";
  $cuerpo = "Nombre: " . $nombre . "\r\n";
  $cuerpo .= "Correo electrónico: " . $correo . "\r\n";
  $cuerpo .= "Teléfono: " . $telefono . "\r\n";
  $cuerpo .= "Mensaje: " . $mensaje;

  // Enviar correo electrónico
  $headers = "From: " . $correo . "\r\n";
  $headers .= "Reply-To: " . $correo . "\r\n";
  $headers .= "X-Mailer: PHP/" . phpversion();
  if (mail($destinatario, $asunto, $cuerpo, $headers)) {
    // Correo enviado correctamente
    echo "<script>alert('Correo enviado correctamente.');</script>";
  } else {
    // Error al enviar el correo
    echo "<script>alert('Error al enviar el correo.');</script>";
  }
?>
