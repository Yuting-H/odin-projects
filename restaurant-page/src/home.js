const home = (() => {
  const homediv = document.createElement("div");
  const title = document.createElement("h1");

  homediv.appendChild(title);
  homediv.style.display = "flex";
  homediv.style.justifyContent = "center";

  title.innerHTML = "Welcome to my Mock Restaurant Page";

  return homediv;
})();

export default home;
