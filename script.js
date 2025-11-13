document.getElementById("uploadForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const fileInput = document.getElementById("videoUpload");
  const file = fileInput.files[0];

  if (!file) {
    alert("Please select a video file first!");
    return;
  }

  // Show loading message
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "⏳ Analyzing your video... Please wait.";

  // Prepare video data for backend
  const formData = new FormData();
  formData.append("video", file);

  try {
    // Send video to Flask backend
        const analyzeResponse = await fetch("/analyze", {      method: "POST",
      body: formData,
    });


        // Check if response is JSON before parsing
        const contentType = analyzeResponse.headers.get("content-type");
        if (!analyzeResponse.ok || !contentType || !contentType.includes("application/json")) {
            const errorText = await analyzeResponse.text();
            resultDiv.innerHTML = `❌ Upload failed: ${errorText.substring(0, 200)}`;
            return;
        }
    const analyzeData = await analyzeResponse.json();

    if (analyzeData.error) {
      resultDiv.innerHTML = `❌ Error: ${analyzeData.error}`;
      return;
    }

    // Display squat count
    const squatCount = analyzeData.squat_count;
    resultDiv.innerHTML = `✅ Squat count: <strong>${squatCount}</strong><br>Generating AI feedback...`;

    // Ask backend for AI feedback
    const feedbackResponse = await fetch("http://127.0.0.1:5000/ai-feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: `The user completed ${squatCount} squats. Provide professional fitness feedback on their squat form and suggestions for improvement.`,
      }),
    });

    const feedbackData = await feedbackResponse.json();

    if (feedbackData.error) {
      resultDiv.innerHTML += `<br>⚠️ AI feedback error: ${feedbackData.error}`;
      return;
    }

    // Show feedback
    resultDiv.innerHTML = `
      ✅ Squat count: <strong>${squatCount}</strong><br><br>
      🤖 AI Feedback:<br>
      <div style="background:#f8f9fa; padding:10px; border-radius:10px; border:1px solid #ddd;">
        ${feedbackData.feedback}
      </div>
    `;
  } catch (error) {
    resultDiv.innerHTML = `❌ Something went wrong: ${error.message}`;
  }
});
