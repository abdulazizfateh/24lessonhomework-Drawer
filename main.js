const drawer = document.querySelector(".drawer_content");
const drawerBackdrop = document.querySelector(".drawer_backdrop");
const openBtn = document.querySelector(".opener_btn");
const drawerCloseBtn = document.querySelector(".drawer_content_close_btn");

toggleDrawer = () => {
    drawer.classList.toggle("open");
    drawerBackdrop.classList.toggle("show");
};

openBtn.addEventListener("click", toggleDrawer);
drawerCloseBtn.addEventListener("click", toggleDrawer);
drawerBackdrop.addEventListener("click", toggleDrawer);