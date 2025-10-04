const BREVO_API_KEY = process.env.BREVO_API_KEY;
const LIST_IDS = (process.env.BREVO_LIST_IDS || "")
  .split(",")
  .map((s) => parseInt(s.trim(), 10))
  .filter((n) => !Number.isNaN(n));

const TEMPLATE_ID = parseInt(process.env.BREVO_DOI_TEMPLATE_ID || "", 10);
const REDIRECT_URL = process.env.BREVO_DOI_REDIRECT || "";

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const body = req.body || {};
    const email = (body.email || "").trim().toLowerCase();

    if (!email || !isValidEmail(email)) {
      return res
        .status(400)
        .json({ message: "Bitte gib eine gültige E-Mail-Adresse ein." });
    }

    if (!BREVO_API_KEY || !LIST_IDS.length || !TEMPLATE_ID || !REDIRECT_URL) {
      return res.status(500).json({
        message: "Server nicht für Newsletter-Anmeldungen konfiguriert.",
      });
    }

    // --- Brevo Double Opt-In ---
    const response = await fetch(
      "https://api.brevo.com/v3/contacts/doubleOptinConfirmation",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": BREVO_API_KEY,
        },
        body: JSON.stringify({
          email,
          attributes: body.attributes || {},
          includeListIds: LIST_IDS,
          templateId: TEMPLATE_ID,
          redirectionUrl: REDIRECT_URL,
        }),
      }
    );

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      return res.status(response.status).json({
        message:
          err?.message ||
          "Die Anmeldung ist fehlgeschlagen. Bitte versuche es erneut oder kontaktiere uns.",
        details: err,
      });
    }

    return res.status(200).json({
      message:
        "Fast geschafft! Bitte prüfe dein Postfach und bestätige deine Anmeldung.",
    });
  } catch (e) {
    console.error("Newsletter subscribe error:", e);
    return res.status(500).json({
      message: "Unerwarteter Serverfehler. Bitte versuche es später erneut.",
    });
  }
}
