function darkMode() {
    var element = document.body;
    var button = document.getElementById("themeBtn");
    element.classList.toggle("dark-mode");
    if (document.getElementById("themeBtn").value == "Dark Mode") {
        document.getElementById("themeBtn").value = "Light Mode";
        cvalue = "DarkMode";
    } else if (document.getElementById("themeBtn").value == "Light Mode") {
        document.getElementById("themeBtn").value = "Dark Mode";
        cvalue = "LightMode";
    } else {
        return;
    }
}