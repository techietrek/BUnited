function handleGetStarted() {
  const isLoggedIn = false;
  if (isLoggedIn) {
    window.location.href = "dashboard.html";
  } else {
    window.location.href = "login.html";
  }
}
