// Menu Toggles
function toggleMenu(menuId) {
    document.querySelectorAll(".menu").forEach(menu => (menu.style.display = "none"));
    const menu = document.getElementById(menuId);
    if (menu) menu.style.display = "block";
}

// Submenu Toggles
function toggleSubMenu(subMenuId) {
    const subMenu = document.getElementById(subMenuId);
    if (subMenu) {
        subMenu.style.display = subMenu.style.display === "none" ? "block" : "none";
    }
}

// Messaging
function sendMessage() {
    const messageInput = document.getElementById("message-input");
    const mediaUpload = document.getElementById("media-upload");
    const messages = document.querySelector(".messages");

    if (messageInput.value.trim()) {
        const newMessage = document.createElement("p");
        newMessage.innerHTML = `<strong>You:</strong> ${messageInput.value}`;
        messages.appendChild(newMessage);
        messageInput.value = "";
    }

    if (mediaUpload.files.length > 0) {
        const file = mediaUpload.files[0];
        const mediaElement = file.type.startsWith("video")
            ? document.createElement("video")
            : document.createElement("img");
        mediaElement.src = URL.createObjectURL(file);
        mediaElement.controls = true;
        mediaElement.width = "100%";
        messages.appendChild(mediaElement);
        mediaUpload.value = "";
    }
}

// Settings
function changeBackgroundColor() {
    const color = document.getElementById("background-color").value;
    document.body.style.backgroundColor = color;
}

function changeFont() {
    const font = document.getElementById("font").value;
    document.body.style.fontFamily = font;
}
