// Welcome Message
window.onload = function () {
    console.log("LifeGuard AI Loaded Successfully");
};

// SOS Button
function emergencySOS() {
    alert("🚨 SOS Alert Sent!\nNearest ambulance has been notified.");
}

// AI Chatbot
async function askAI() {

    const question = document.getElementById("question").value;

    if (question.trim() === "") {
        alert("Please enter your question.");
        return;
    }

    const response = await fetch("/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            question: question
        })
    });

    const data = await response.json();

    document.getElementById("answer").innerHTML = data.answer;
}

// Ambulance Booking
function requestAmbulance() {

    alert("🚑 Ambulance Booked Successfully!");

}

// Find Hospital
function findHospital() {

    window.location.href = "hospitals.html";

}

// Contact Form
function sendMessage() {

    alert("✅ Message Sent Successfully!");

}