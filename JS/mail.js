function SendMail() {
    var params = {
        from_name: document.getElementById("fullName").value,
        email_id: document.getElementById("email_id").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_omn9b8i", "template_lryy0up", params).then(function (res) {
        openModal();
        clearFormFields();
    });
}
let popup = document.getElementById("popup");

function openModal() {
    popup.classList.add("open-popup");
}
function closePopup() {
    popup.classList.remove("open-popup");
}

function clearFormFields() {
    document.getElementById("fullName").value = "";
    document.getElementById("email_id").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
}