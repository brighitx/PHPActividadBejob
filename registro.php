<!DOCTYPE html>
<html>

<head>
    <title>Registro completado</title>
    <link rel="stylesheet" href="estilos.css">
</head>
<body>
<?php
if($_POST){
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $email = $_POST['email'];

    //Conexion
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "cursosql";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if($conn->connect_error){
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "INSERT INTO usuario (nombre, apellido, email) VALUES ('$nombre', '$apellido', '$email')";

    if($conn->query($sql) === TRUE){
        echo '<h2>Usuario registrado correctamente.</h2>';
    } else {
        "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>
</body>
</html>