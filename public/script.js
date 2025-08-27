// URL of the backend server (Node.js) that calls GPT
const backendUrl = "http://localhost:3000/identify"; // Replace with your deployed backend URL

// Function to check if the URL points to a supported image format
function isValidImageUrl(url) {
    return url.match(/\.(jpeg|jpg|png|gif|webp)$/i);
}

// Function to preview the image before sending it to GPT
function previewImage(url) {
    const preview = document.getElementById("preview");
    preview.src = url;             // Set the image source
    preview.style.display = "block"; // Make the image visible
}

// Main function triggered when the user clicks "Identify Car"
async function identifyCar() {
    const url = document.getElementById("imgurUrl").value.trim();

    // Validate that the input is not empty
    if (!url) {
        alert("Please enter an image URL!");
        return;
    }

    // Validate the image format
    if (!isValidImageUrl(url)) {
        alert("Please enter a direct image URL ending with .jpg, .jpeg, .png, .gif, or .webp!");
        return;
    }

    // Show the image preview
    previewImage(url);

    // Show a loading message while GPT processes the image
    document.getElementById("result").innerText = "Identifying car...";

    try {
        // Send the URL to the backend via POST request
        const res = await fetch(backendUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ imageUrl: url })
        });

        const data = await res.json();

        // Display the GPT-generated car information
        document.getElementById("result").innerText = data.car_info || "Could not identify the car.";
    } catch (err) {
        // Handle errors such as network issues
        document.getElementById("result").innerText = "Error connecting to server.";
        console.error(err);
    }
}
