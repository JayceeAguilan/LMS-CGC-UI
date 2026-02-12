(function () {
  var routes = {
    student: "pages/auth/student-login.html",
    faculty: "pages/auth/faculty-login.html"
  };

  var params = new URLSearchParams(window.location.search);
  var queryRole = (params.get("role") || "").toLowerCase();
  var hashRole = window.location.hash.replace("#", "").toLowerCase();
  var role = queryRole || hashRole;

  if (routes[role]) {
    window.location.replace(routes[role]);
  }
})();
