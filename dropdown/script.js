const body = document.getElementsByTagName("body")[0];

const dropdownNode = document.createElement("div");

const dropdown = {
  name: "Cars",
  values: ["Sedan", "Coupe", "SUV"],
  expanded: true,
};

const nameDiv = document.createElement("div");
nameDiv.innerHTML = dropdown.name;
dropdownNode.appendChild(nameDiv);

function showValues() {
  dropdown.values.forEach((value) => {
    const valueDiv = document.createElement("div");
    valueDiv.innerHTML = value;
    dropdownNode.appendChild(valueDiv);
    dropdownNode.style.lineHeight = 1;
  });
}

function hideValues() {
  let nameNode = dropdownNode.firstChild;
  dropdownNode.innerHTML = "";
  dropdownNode.appendChild(nameNode);
  dropdownNode.style.lineHeight = 0;
}

nameDiv.addEventListener("click", () => {
  if (dropdown.expanded) {
    hideValues();
    dropdown.expanded = false;
  } else {
    showValues();
    dropdown.expanded = true;
  }
});

showValues();
body.appendChild(dropdownNode);
