function getResult() {

  let goal = document.getElementById("goal").value;
  let tired = document.getElementById("tired").value;
  let resultDiv = document.getElementById("result");

  if (goal === "") {
    alert("Please answer all questions");
    return;
  }

  let product = "";
  let reason = "";

  if (goal === "energy") {
    product = "NAD+ Supplement";
    reason = "You are looking for better energy and focus. NAD+ supports cellular energy production and cognitive function.";
  }
  else if (goal === "sleep") {
    product = "Magnesium Glycinate";
    reason = "Magnesium helps relax the body and supports better sleep quality.";
  }
  else if (goal === "joints") {
    product = "Joint Support Supplement";
    reason = "This supplement contains ingredients that help support joint mobility and comfort.";
  }
  else if (goal === "gut") {
    product = "Gut Health Capsules";
    reason = "This product supports digestion and helps maintain a healthy gut balance.";
  }
  else if (goal === "beauty") {
    product = "Beauty + Collagen Strips";
    reason = "Collagen supports healthy skin, hair, and nails from within.";
  }

  resultDiv.style.display = "block";
  resultDiv.innerHTML = `
    <h3>Recommended for You:</h3>
    <h2>${product}</h2>
    <p>${reason}</p>
    <small>
      Disclaimer: This recommendation is for informational purposes only.
      Consult a healthcare professional before use.
    </small>
  `;
}
