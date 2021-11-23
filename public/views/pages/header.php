<nav class="main-header navbar navbar-expand navbar-dark navbar-lightblue border-bottom-0">
  <!-- Left navbar links -->
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
    </li>
  </ul>
  <ul class="navbar-nav ml-auto">
    <!-- Notifications Dropdown Menu -->
    <li class="nav-item dropdown">
      <a class="nav-link" data-toggle="dropdown" href="#">
          <i class="fas fa-cogs"></i>
          <span class="badge badge-danger navbar-badge">+</span>
        </a> 
      <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <span class="dropdown-item dropdown-header">Opciones del Usuario</span>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <i class="fas fa-id-card"></i> Mi Perfil
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <i class="fas fa-sync-alt"></i> Actualizar datos
          </a>
          <div class="dropdown-divider"></div>
          <span class="dropdown-item dropdown-footer">Opciones del Usuario</span>
        </div>
    </li>
    <input type="hidden" name="estatusLogId" id="estatusLogId" value="<?php echo $_SESSION["loginIdSTW"]; ?>">
    <input type="hidden" name="perfilLog" id="perfilLog" value="<?php echo $_SESSION["loginPerfilSTW"]; ?>">

    <li class="nav-item">
      <a class="nav-link" href="signout" role="button">
        <i class="fas fa-sign-out-alt"></i>
        <span class="float-right font-weight-bolder">&nbsp; Cerrar Sesión</span>
      </a>
    </li>
  </ul>
</nav>