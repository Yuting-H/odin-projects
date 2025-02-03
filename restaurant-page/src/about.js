const about = (() => {
  const aboutDiv = document.createElement("div");
  aboutDiv.style.display = "flex";
  aboutDiv.style.flexDirection = "column";
  aboutDiv.style.justifyContent = "center";
  aboutDiv.style.alignContent = "center";
  aboutDiv.style.textAlign = "center";

  const title = document.createElement("h1");
  title.innerHTML = "This is the about page";

  const desc = document.createElement("p");
  desc.innerHTML =
    "The content of this webpage is written primary in Javascript; rather than putting everything in a html file, the Javascript files populate the content after the barebone html file is loaded";

  aboutDiv.appendChild(title);
  aboutDiv.appendChild(desc);
  return aboutDiv;
})();

export default about;
