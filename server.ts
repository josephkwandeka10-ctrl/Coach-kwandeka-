import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini API lazily or with fallback
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    aiClient = new GoogleGenAI({
      apiKey: apiKey || "dummy-key",
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", app: "Coach Kwandeka Platform" });
});

// Coach Kwandeka AI Chat Endpoint
app.post("/api/chat", async (req, res) => {
  try {
    const { message, conversationHistory } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      // Fallback friendly response if key is missing
      return res.json({
        reply:
          "Hello! I am Coach Kwandeka's AI assistant. Currently, my live AI key is being configured, but Coach Kwandeka's core coaching philosophy is: 'Consistency beats intensity every single time. Focus on progressive overload, 1.8g protein per kg bodyweight, and mastering daily habits.' Book a consultation directly using the booking modal!",
      });
    }

    const ai = getGeminiClient();

    const systemInstruction = `You are Coach Kwandeka AI, the virtual AI fitness, strength, nutrition, and mindset coach for Coach Joseph Kwandeka.
Coach Joseph Kwandeka is an elite high-performance coach specializing in:
1. Custom 1-on-1 Personal & Athletic Coaching (Body recomposition, hyper-efficient strength, functional mobility)
2. 12-Week Body & Mind Transformation Blueprint (Fat loss, muscle gain, sustainable lifestyle transformation)
3. Executive Stamina & Habit Architecture (Peak energy, time-efficient routines for busy professionals)
4. Macro Precision & Tailored Nutrition Strategies.

Your tone is motivating, direct, empowering, authoritative yet warm, grounded in exercise science and realistic lifestyle integration.
Give practical, specific advice (e.g. recommend protein targets, progressive overload strategies, sleep hygiene, hydration, consistency metrics).
Always encourage users to book a 1-on-1 strategy call with Coach Kwandeka for personalized plans. Keep answers concise, actionable, and formatted cleanly with bullet points when helpful.`;

    const contents = [];
    if (Array.isArray(conversationHistory)) {
      for (const msg of conversationHistory) {
        if (msg.role === "user" || msg.role === "model") {
          contents.push({
            role: msg.role,
            parts: [{ text: msg.content }],
          });
        }
      }
    }
    contents.push({
      role: "user",
      parts: [{ text: message }],
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    const reply = response.text || "Keep pushing forward! Every effort counts.";
    res.json({ reply });
  } catch (error: any) {
    console.error("Coach AI Chat Error:", error);
    res.status(500).json({
      error: "Failed to generate AI response",
      details: error?.message || "Internal server error",
    });
  }
});

async function start() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Coach Kwandeka Server running on http://0.0.0.0:${PORT}`);
  });
}

start();
