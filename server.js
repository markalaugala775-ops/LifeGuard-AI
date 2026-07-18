const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

app.post("/chat", (req, res) => {
    const question = (req.body.question || "").toLowerCase();

    let answer = "Call 108 immediately for any medical emergency.";

    if (question.includes("heart")) {
        answer = "Heart attack: Keep the patient calm and call 108 immediately.";
    } else if (question.includes("burn")) {
        answer = "Cool the burn with running water for 20 minutes.";
    } else if (question.includes("bleeding")) {
        answer = "Apply firm pressure with a clean cloth until help arrives.";
    } else if (question.includes("ambulance")) {
        answer = "Your ambulance request has been received.";
    }

    res.json({ answer });
});

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`LifeGuard AI running on http://localhost:${PORT}`);
});