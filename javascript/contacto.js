function validateForm(event) {
    var name = document.getElementById("fullName").value.trim();
    var email = document.getElementById("email").value.trim();
    var subject = document.getElementById("subject").value.trim();
    var message = document.getElementById("message").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var contactPreference = document.getElementById("contactPreference").value;

    const namePattern = /^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s'-]{2,50}$/;
    const emailPattern = /^[\w\.-]{5,}@[\w\.-]+\.[a-zA-Z]{2,}$/;
    const subjectPattern = /^[\s\S]{3,75}$/;
    const messagePattern = /^[\s\S]{10,600}$/;
    const phonePattern = /^\+?\d{0,3}?[-.\s]?\(?\d{1,4}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

    if (name === "") {
        alert("El campo de nombre está vacío.");
        return false;
    }

    if (!namePattern.test(name)) {
        alert("Nombre no válido. Debe tener entre 2 y 50 caracteres, solo puede contener letras, espacios, guiones, y letras con acentuación.");
        return false;
    }

    if (email === "") {
        alert("El campo de correo electrónico está vacío.");
        return false;
    }

    if (!emailPattern.test(email)) {
        alert("Correo electrónico no válido, ingrese uno que sea válido.");
        return false;
    }

    if (subject === "") {
        alert("El campo de asunto está vacío.");
        return false;
    }

    if (!subjectPattern.test(subject)) {
        alert("Asunto no válido, debe tener entre 3 y 75 caracteres.");
        return false;
    }

    if (message === "") {
        alert("El campo de mensaje está vacío.");
        return false;
    }

    if (!messagePattern.test(message)) {
        alert("Mensaje no válido, debe tener entre 10 y 600 caracteres.");
        return false;
    }

    if (contactPreference === "phone" && phone === "") {
        alert("Has seleccionado Teléfono como preferencia de contacto, pero no has proporcionado un número de teléfono.");
        return false;
    }


    if (phone !== "" && !phonePattern.test(phone)) {
        alert("Teléfono no válido.");
        return false;
    }

    alert("Todos los campos son válidos.");
    return true; 
}