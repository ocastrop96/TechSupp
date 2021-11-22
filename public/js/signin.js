$("#usuarioLogSTW").keyup(function () {
    var u4 = $(this).val();
    var mu4 = u4.toLowerCase();
    $("#usuarioLogSTW").val(mu4);
});
$("#usuarioLogSTW").keyup(function () {
    this.value = (this.value + "").replace(/[^a-zA-ZñÑáéíóúÁÉÍÓÚ]/g, "");
});

function ValidarLoginMR() {
    var usuarioLog = $("#usuarioLogSTW").val();
    var passwordLog = $("#usuarioPassSTW").val();

    if (usuarioLog.length == 0 || passwordLog.length == 0) {
        Swal.fire({
            icon: "warning",
            title: "Ingrese usuario y contraseña por favor",
            showConfirmButton: false,
            timer: 1500
        });
        return false
    }
}
$("#btnLoginSTW").on("click", function () {
    ValidarLoginMR()
});
$("#usuarioLogSTW").change(function () {
    var cuenta = $(this).val();
    var datos = new FormData();

    datos.append("validarCuentaLog", cuenta);

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
                $("#usuarioPassSTW").focus();
                $("#mensajeLogSTW").addClass("d-none");
            } else {
                $("#usuarioLogSTW").val("");
                $("#usuarioLogSTW").focus();
                $("#mensajeLogSTW").removeClass("d-none");
            }
        },
    });
});