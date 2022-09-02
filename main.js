const input = document.querySelector(".input-bar");
const add = document.querySelector(".add-button");

const contacts = document.querySelector(".contacts-list");

add.onclick = addContact;
input.addEventListener("keypress", (ev) => {
    if (ev.key === "Enter") {
        addContact();
    }
});

function addContact() {
    if (input.value.length === 0) return;
    let chip = document.createElement("div");
    chip.classList.add("chip");
    let pic = document.createElement("img");
    pic.src = "./public/profile.png";
    let name = document.createElement("p");
    name.innerText = input.value;
    let button = document.createElement("button");
    button.onclick = deleteContact;
    button.innerText = "X";
    chip.appendChild(pic);
    chip.appendChild(name);
    chip.appendChild(button);
    contacts.appendChild(chip);
    input.value = "";
}

function deleteContact(ev) {
    contacts.removeChild(ev.target.parentNode);
}
