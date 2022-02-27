/** LISTADO DE USUARIOS */
var perfilUs = $("#perfilLog").val();
$(".datatableUsuariosSTW").DataTable({
    ajax: "public/views/util/DatatableUsuarios.php?perfilUsuario=" + perfilUs,
    deferRender: true,
    retrieve: true,
    processing: true,
    paging: true,
    lengthChange: true,
    searching: true,
    ordering: true,
    info: true,
    autoWidth: false,
    language: {
        url: "public/views/resources/js/dataTables.spanish.lang",
    },
});


$("#dniUsuario").keyup(function () {
    this.value = (this.value + "").replace(/[^0-9]/g, "");
  });
  // $("#dniUsuario").attr("minlenght", 12);
  $("#dniUsuario").attr("maxlength", "8");
  
  $("#edtdniUsuario").keyup(function () {
    this.value = (this.value + "").replace(/[^0-9]/g, "");
  });
  // $("#dniUsuario").attr("minlenght", 12);
  $("#edtdniUsuario").attr("maxlength", "8");
  
  $("#nombreUsuario").keyup(function () {
    this.value = (this.value + "").replace(/[^a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ ]/g, "");
  });
  $("#nombreUsuario").keyup(function () {
    var u1 = $(this).val();
    var mu1 = u1.toUpperCase();
    $("#nombreUsuario").val(mu1);
  });
  $("#edtnombreUsuario").keyup(function () {
    this.value = (this.value + "").replace(/[^a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ ]/g, "");
  });
  $("#apellidoUsuarioPat").keyup(function () {
    this.value = (this.value + "").replace(/[^a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ ]/g, "");
  });
  $("#apellidoUsuarioPat").keyup(function () {
    var u2 = $(this).val();
    var mu2 = u2.toUpperCase();
    $("#apellidoUsuarioPat").val(mu2);
  });
  $("#edtapellidoUsuarioPat").keyup(function () {
    this.value = (this.value + "").replace(/[^a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ ]/g, "");
  });
  $("#apellidoUsuarioMat").keyup(function () {
    this.value = (this.value + "").replace(/[^a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ ]/g, "");
  });
  $("#apellidoUsuarioMat").keyup(function () {
    var u3 = $(this).val();
    var mu3 = u3.toUpperCase();
    $("#apellidoUsuarioMat").val(mu3);
    
  });
  $("#edtapellidoUsuarioMat").keyup(function () {
    this.value = (this.value + "").replace(/[^a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ ]/g, "");
  });
  
  $("#cuentaUsuario").keyup(function () {
    this.value = (this.value + "").replace(/[^a-zA-Z\u00f1\u00d1]/g, "");
  });
  $("#cuentaUsuario").keyup(function () {
    var u4 = $(this).val();
    var mu4 = u4.toLowerCase();
    $("#cuentaUsuario").val(mu4);
  });
  $("#edtcuentaUsuario").keyup(function () {
    this.value = (this.value + "").replace(/[^a-zA-Z\u00f1\u00d1]/g, "");
  });
  $("#edtcuentaUsuario").keyup(function () {
    var u4edt = $(this).val();
    var mu4edt = u4edt.toLowerCase();
    $("#edtcuentaUsuario").val(mu4edt);
  });
// Editar Usuario
$(".datatableUsuariosSTW tbody").on("click", ".btnEditarUsuario", function () {
    var idUsuario = $(this).attr("idUsuario");
    var datos = new FormData();
    datos.append("idUsuario", idUsuario);
    $.ajax({
        url: "public/views/src/ajaxUsuarios.php",
        method: "POST",
        data: datos,
        cache: false,
        contentType: false,
        processData: false,
        dataType: "json",
        success: function (respuesta) {
            $("#idUsuario").val(respuesta["id_usuario"]);
            $("#edtdniUsuario").val(respuesta["dni"]);
            $("#edtnombreUsuario").val(respuesta["nombres"]);
            $("#edtapellidoUsuarioPat").val(respuesta["apellido_paterno"]);
            $("#edtapellidoUsuarioMat").val(respuesta["apellido_materno"]);
            $("#edtcuentaUsuario").val(respuesta["cuenta"]);
            $("#passwordActual").val(respuesta["clave"]);
            $("#edtperfilUsuario").val(respuesta["id_perfil"]);
            $("#edtperfilUsuario").html(respuesta["perfil"]);
        },
    });
});
// Editar Usuario

// Habilitar Usuario
$(".datatableUsuariosSTW tbody").on("click", ".btnHabilitar", function () {
    var idUsuario2 = $(this).attr("idUsuario");
    var idEstado = $(this).attr("idEstado");
    var datos = new FormData();
    datos.append("idUsuario2", idUsuario2);
    datos.append("idEstado", idEstado);
    $.ajax({
        url: "public/views/src/ajaxUsuarios.php",
        method: "POST",
        data: datos,
        cache: false,
        contentType: false,
        processData: false,
        success: function (respuesta) {
            if (idEstado == 1) {
                toastr.success("¡La cuenta de usuario ha sido habilitada!");
            }
            else {
                toastr.error("¡La cuenta de usuario ha sido inhabilitada!");
            }
        },
    });
    if (idEstado == 2) {
        $(this).removeClass("btn-success");
        $(this).addClass("btn-danger");
        $(this).html('<i class="fas fa-user-minus"></i>INHABILITADO');
        $(this).attr("idEstado", 1);
    } else {
        $(this).addClass("btn-success");
        $(this).removeClass("btn-danger");
        $(this).html('<i class="fas fa-user-check"></i>HABILITADO');
        $(this).attr("idEstado", 2);
    }
});
// Habilitar Usuario

// Desbloquear Usuario
$(".datatableUsuariosSTW tbody").on("click", ".btnDesbloquearUsuario", function () {
    var idUsuario3 = $(this).attr("idUsuario");
    var datos = new FormData();
    datos.append("idUsuario3", idUsuario3);
    $.ajax({
        url: "public/views/src/ajaxUsuarios.php",
        method: "POST",
        data: datos,
        cache: false,
        contentType: false,
        processData: false,
        success: function (respuesta) {
            toastr.info("¡La cuenta de usuario ha sido desbloqueada!");
        },
    });
});
// Desbloquear Usuario

// Eliminar Usuario
$(".datatableUsuariosSTW tbody").on("click", ".btnEliminarUsuario", function () {
    var idUsuario4 = $(this).attr("idUsuario");
    Swal.fire({
        title: "¿Está seguro de eliminar al usuario?",
        text: "¡Si no lo está, puede cancelar la acción!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#343a40",
        cancelButtonColor: "#d33",
        confirmButtonText: "¡Sí, eliminar Usuario!",
        cancelButtonText: "¡No, cancelar",
    }).then(function (result) {
        if (result.value) {
            window.location = "index.php?ruta=usuarios&idUsuario=" + idUsuario4;
        }
    });
});
// Eliminar Usuario

$("#claveU1").on("click", function () {
    var control3 = $(this);
    var estatus3 = control3.data("activo");
    var icon3 = control3.find("span");
    if (estatus3 == false) {
      control3.data("activo", true);
      $(icon3).removeClass("fas fa-eye").addClass("fas fa-low-vision");
      $("#claveUsuario").attr("type", "text");
    }
    else {
      control3.data("activo", false);
      $(icon3).removeClass("fas fa-low-vision").addClass("fas fa-eye");
      $("#claveUsuario").attr("type", "password");
    }
  });

  $("#dniUsuario").change(function () {
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1500,
    });
    var dni = $(this).val();
    var datos = new FormData();
    datos.append("validarDni", dni);
    $.ajax({
        url: "public/views/src/ajaxUsuarios.php",
        method: "POST",
        data: datos,
        cache: false,
        contentType: false,
        processData: false,
        dataType: "json",
        success: function (respuesta) {
            if (respuesta) {
                Toast.fire({
                    icon: "warning",
                    title: "El DNI Ingresado ya se encuentra registrado",
                });
                $("#dniUsuario").val("");
                $("#nombreUsuario").val("");
                $("#apellidoUsuarioPat").val("");
                $("#apellidoUsuarioMat").val("");
                $("#dniUsuario").focus();
            } else {
                $("#nombreUsuario").val("");
                $("#apellidoUsuarioPat").val("");
                $("#apellidoUsuarioMat").val("");

                $("#btnDNIU").on("click", function () {
                    var dni = $("#dniUsuario").val();
                    if (dni.length = 8) {
                        $.ajax({
                            type: "GET",
                            url:
                                "https://dniruc.apisperu.com/api/v1/dni/" +
                                dni +
                                "?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Im9jYXN0cm9wQGhuc2ViLmdvYi5wZSJ9.kQIxUB6tdcsGBkLapIbw9dEVPHqvwyt6y94HxE7dpEk",
                            contentType: "application/json; charset=utf-8",
                            dataType: "json",
                            success: function (data) {
                                if (data["apellidoPaterno"] == null) {
                                    $("#nombreUsuario").focus();
                                    $("#nombreUsuario").prop("readonly", false);
                                    $("#apellidoUsuarioPat").prop("readonly", false);
                                    $("#apellidoUsuarioMat").prop("readonly", false);

                                    toastr.error("No se encontraron datos, ingrese manualmente", "DNI");
                                }
                                else {
                                    $("#nombreUsuario").val(data["nombres"]);
                                    $("#apellidoUsuarioPat").val(data["apellidoPaterno"]);
                                    $("#apellidoUsuarioMat").val(data["apellidoMaterno"]);
                                    $("#perfilUsuario").focus();
                                    $("#nombreUsuario").prop("readonly", true);
                                    $("#apellidoUsuarioPat").prop("readonly", true);
                                    $("#apellidoUsuarioMat").prop("readonly", true);
                                }
                            },
                            failure: function (data) {
                                toastr.info("No se pudo conectar los datos", "DNI");
                            },
                            error: function (data) {
                                $("#nombreUsuario").prop("readonly", false);
                                $("#apellidoUsuarioPat").prop("readonly", false);
                                $("#apellidoUsuarioMat").prop("readonly", false);

                                $("#dniUsuario").focus();
                                $('#form-reg-usuario').trigger("reset");
                            },
                        });
                    }
                });
            }
        },
    });
});