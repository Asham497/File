function uploadFile() {
    const fileInput = document.getElementById("fileInput");
    const status = document.getElementById("status");

    if (fileInput.files.length === 0) {
        status.innerText = "Please select a file";
        return;
    }

    const fileName = fileInput.files[0].name;

    // Show uploading message
    status.innerText = "Uploading...";

    // Simulate upload delay
    setTimeout(() => {
        status.innerText = `File "${fileName}" uploaded successfully!`;
        fileInput.value = ""; // Reset file input
    }, 1000); // 1 second delay
}
