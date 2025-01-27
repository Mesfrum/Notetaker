chrome.action.onClicked.addListener((tab) => {
  if (tab.id) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: toggleSidebar,
    });
  }
});

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  if (sidebar) {
    sidebar.remove();
    document.body.style.marginRight = "";
  } else {
    const div = document.createElement("div");
    div.id = "sidebar";
    div.style.cssText = `
        position: fixed;
        top: 0;
        right: 0;
        width: 300px;
        height: 100%;
        background-color: white;
        box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
        z-index: 1000;
        padding: 20px;
        overflow-y: auto;
      `;

    // Add content to the sidebar
    div.innerHTML = `
        <h2>Notes</h2>
        <textarea id="note" placeholder="Take your notes here..." style="width: 100%; height: 80%;"></textarea>
      `;

    document.body.appendChild(div);
    document.body.style.marginRight = "300px";
  }
}
