function showExpandableSidebar() {
    const sidebar = document.querySelector("#expandableSidebar");
    const headerHeight = document.querySelector("header").getBoundingClientRect().height;
    if (sidebar.classList.contains("invisible")) {
        sidebar.classList.remove("invisible");
        sidebar.classList.add("expandable-sidebar");
        sidebar.style.marginTop = headerHeight + "px";
        sidebar.style.height = "calc(100% - " + headerHeight + "px)"
    } else {
        sidebar.classList.add("invisible");
        sidebar.classList.remove("expandable-sidebar");
    }
}