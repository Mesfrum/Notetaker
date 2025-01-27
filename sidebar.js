const noteTextarea = document.getElementById("note");

noteTextarea.addEventListener("input", () => {
  chrome.storage.local.set({ note: noteTextarea.value });
});

chrome.storage.local.get("note", (data) => {
  if (data.note) {
    noteTextarea.value = data.note;
  }
});
