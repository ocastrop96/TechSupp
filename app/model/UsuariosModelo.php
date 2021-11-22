<?php
require_once "dbConnect.php";
class UsuariosModelo
{
    static public function mdlLoginUsuario($datos)
    {
        $stmt = Conexion::conectar()->prepare("CALL LoginUsuario(:cuenta)");
        $stmt->bindParam(":cuenta", $datos, PDO::PARAM_STR);
        $stmt->execute();
        return $stmt->fetch();
        $stmt->close();
        $stmt = null;
    }
    static public function mdlRegistroIntentos($datos)
    {
        $stmt = Conexion::conectar()->prepare("CALL RegistroIntentos(:idUsuario)");
        $stmt->bindParam(":idUsuario", $datos, PDO::PARAM_STR);
        $stmt->execute();
        return $stmt->fetch();
        $stmt->close();
        $stmt = null;
    }
    static public function mdlListarUsuarios($item, $valor)
    {
        if ($item != null) {
            $stmt = Conexion::conectar()->prepare("SELECT
            ws_usuarios.id_usuario,
            ws_usuarios.dni,
            ws_usuarios.nombres,
            ws_usuarios.apellido_paterno,
            ws_usuarios.apellido_materno,
            ws_usuarios.cuenta,
            ws_usuarios.clave,
            date_format(fecha_registro,'%d-%m-%Y') as fecha_registro,
            ws_usuarios.nintentos,
            ws_usuarios.id_perfil,
            ws_perfiles.perfil,
            ws_usuarios.estado,
            ws_estadousuario.descripEstadoUs 
        FROM
            ws_usuarios
            INNER JOIN ws_perfiles ON ws_usuarios.id_perfil = ws_perfiles.id_perfil
            INNER JOIN ws_estadousuario ON ws_usuarios.estado = ws_estadousuario.idEstadoUs
        WHERE $item = :$item");
            $stmt->bindParam(":" . $item, $valor, PDO::PARAM_STR);
            $stmt->execute();
            return $stmt->fetch();
        } else {
            $stmt = Conexion::conectar()->prepare("CALL ListarUsuarios()");
            $stmt->execute();
            return $stmt->fetchAll();
        }
        //Cerramos la conexion por seguridad
        $stmt->close();
        $stmt = null;
    }

    static public function mdlListarTiposRoles()
    {
        $stmt = Conexion::conectar()->prepare("CALL Listar_Perfiles_Users()");
        $stmt->execute();
        return $stmt->fetchAll();
        $stmt->close();
        $stmt = null;
    }

    static public function mdlRegistrarUsuario($datos)
    {
        $stmt = Conexion::conectar()->prepare("CALL Registrar_Usuario(:perfil,:dni,:apellidos,:nombres,:cuenta,:correo,:clave)");
        $stmt->bindParam(":perfil", $datos["idPerfil"], PDO::PARAM_INT);
        $stmt->bindParam(":dni", $datos["dniUsuario"], PDO::PARAM_STR);
        $stmt->bindParam(":apellidos", $datos["apellidosUsuario"], PDO::PARAM_STR);
        $stmt->bindParam(":nombres", $datos["nombresUsuario"], PDO::PARAM_STR);
        $stmt->bindParam(":cuenta", $datos["cuentaUsuario"], PDO::PARAM_STR);
        $stmt->bindParam(":correo", $datos["correoUsuario"], PDO::PARAM_STR);
        $stmt->bindParam(":clave", $datos["claveUsuario"], PDO::PARAM_STR);

        if ($stmt->execute()) {
            return "ok";
        } else {
            return "error";
        }
        $stmt->close();
        $stmt = null;
    }
    static public function mdlEditarUsuario($datos)
    {
        $stmt = Conexion::conectar()->prepare("CALL Editar_Usuario(:idUsuario,:perfil,:dni,:apellidos,:nombres,:cuenta,:correo,:clave)");
        $stmt->bindParam(":idUsuario", $datos["idUsuario"], PDO::PARAM_INT);
        $stmt->bindParam(":perfil", $datos["idPerfil"], PDO::PARAM_INT);
        $stmt->bindParam(":dni", $datos["dniUsuario"], PDO::PARAM_STR);
        $stmt->bindParam(":apellidos", $datos["apellidosUsuario"], PDO::PARAM_STR);
        $stmt->bindParam(":nombres", $datos["nombresUsuario"], PDO::PARAM_STR);
        $stmt->bindParam(":cuenta", $datos["cuentaUsuario"], PDO::PARAM_STR);
        $stmt->bindParam(":correo", $datos["correoUsuario"], PDO::PARAM_STR);
        $stmt->bindParam(":clave", $datos["claveUsuario"], PDO::PARAM_STR);

        if ($stmt->execute()) {
            return "ok";
        } else {
            return "error";
        }
        $stmt->close();
        $stmt = null;
    }
    static public function mdlActualizarUsuario($idUsuario, $idEstado)
    {
        $stmt = Conexion::conectar()->prepare("CALL Habilitar_Usuario(:idUsuario,:idEstado)");
        $stmt->bindParam(":idUsuario", $idUsuario, PDO::PARAM_STR);
        $stmt->bindParam(":idEstado", $idEstado, PDO::PARAM_STR);
        if ($stmt->execute()) {
            return "ok";
        } else {
            return "error";
        }
        $stmt->close();
        $stmt = null;
    }
    static public function mdlDesbloquearUsuario($idUsuario)
    {
        $stmt = Conexion::conectar()->prepare("CALL Desbloquear_Usuario(:idUsuario)");
        $stmt->bindParam(":idUsuario", $idUsuario, PDO::PARAM_STR);
        if ($stmt->execute()) {
            return "ok";
        } else {
            return "error";
        }
        $stmt->close();
        $stmt = null;
    }

    static public function mdlValidarEstado($idUsuario)
    {
        $stmt = Conexion::conectar()->prepare("CALL Verifica_EstadoLog(:idUsuario)");
        $stmt->bindParam(":idUsuario", $idUsuario, PDO::PARAM_STR);
        $stmt->execute();
        return $stmt->fetch();
        $stmt->close();
        $stmt = null;
    }

    static public function mdlEliminarUsuario($dato)
    {
        $stmt = Conexion::conectar()->prepare("CALL Eliminar_Usuario(:idUsuario)");
        $stmt->bindParam(":idUsuario", $dato, PDO::PARAM_STR);
        if ($stmt->execute()) {
            return "ok";
        } else {
            return "error";
        }
        $stmt->close();
        $stmt = null;
    }
}
