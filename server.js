import express from "express";
import OpenAI from "openai";



const app = express();
const port = 3000;
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.use(express.json());
app.use(express.static("public"));

app.post("/identify", async (req, res) => {
  try {
    const { imageUrl } = req.body;
    if (!imageUrl) return res.status(400).json({ error: "No image URL provided." });

    console.log("Received image URL:", imageUrl);
    // Call OpenAI API to identify car details from the image
    const response = await client.responses.create({
      model: "gpt-4.1-mini", 
      input: [
        {
          role: "user",
          content: [
            { type: "input_text", text: "Identify the make, model, year, and details of this car." },
            { type: "input_image", image_url: imageUrl }
          ]
        }
      ]
    });
// Extract relevant information from the response and send it back to the client or return error message
    const carInfo = response.output_text || "Could not identify the car. Try a clearer image.";
    res.json({ car_info: carInfo });

  } catch (error) {
    console.error("Error processing image:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to identify car." });
  }
});

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
