document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar-menu");
    const toggleButton = document.getElementById("sidebarToggle");

    if (toggleButton && sidebar) {
      toggleButton.addEventListener("click", function () {
        sidebar.classList.toggle("active");
      });
    }
});


