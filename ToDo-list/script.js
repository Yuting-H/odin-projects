const notePad = document.getElementById("note-pad");

const newNoteBtn = document.getElementById("new-note-btn");

newNoteBtn.addEventListener("click", () => {
  newEmptyNote();
});

function newEmptyNote() {
  const note = document.createElement("div");
  note.classList.add("note");

  const text = "default text";

  note.innerText = text;

  notePad.appendChild(note);

  return { note, text };
}

const myNote = newEmptyNote();
