const menu = (() => {
  const menuDiv = document.createElement("div");
  const title = document.createElement("h1");

  menuDiv.appendChild(title);
  menuDiv.style.display = "flex";
  menuDiv.style.justifyContent = "center";

  title.innerHTML = "This is the menu page";

  return menuDiv;
})();

export default menu;
