document.getElementById("ebookForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Get form values
    var name = document.getElementById("name").value;
    var number = document.getElementById("number").value;
    var email = document.getElementById("email").value;

    // Prepare data object
    var data = {
        name: name,
        number: number,
        email: email
    };

    // Send data to Google Sheets
    fetch("https://script.google.com/macros/s/AKfycbzJx4j8S38gjtIOyrlvzMk5Ydrm4vXRh6iMBVYjU-Xh2j7t4EK94utsE-Op4hVGPXCP5w/exec", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => {
        if (response.ok) {
            // Trigger the eBook download
            window.location.href = "https://drive.google.com/uc?export=download&id=1cbvuZ3cpSCd-fyaXkaomp39dFK3DwaS7"; // replace with your eBook file path
        } else {
            alert("There was an issue submitting the form. Please try again.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
    });
});
