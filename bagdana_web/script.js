```javascript
const modal = document.getElementById("appointmentModal");

function openForm() {
    modal.style.display = "flex";
}

function closeForm() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        closeForm();
    }
};

document.getElementById("appointmentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Сіз дәрігерге сәтті жазылдыңыз!");

    this.reset();
    closeForm();
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    alert("Рахмет, " + name + "! Хабарламаңыз жіберілді.");

    this.reset();
});
```
