"use client";

import * as React from "react";
import {
  Box,
  TextField,
  Button,
  Alert,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

export default function NewsletterForm() {
  const [email, setEmail] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [consent, setConsent] = React.useState(false);
  const [status, setStatus] = React.useState({ state: "idle" });
  const [botField, setBotField] = React.useState(""); // honeypot

  const onSubmit = async (e) => {
    e.preventDefault();

    // basic client-side checks
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus({
        state: "error",
        message: "Bitte gib eine gültige E-Mail-Adresse ein.",
      });
      return;
    }
    if (!consent) {
      setStatus({
        state: "error",
        message: "Bitte bestätige, dass du den Newsletter erhalten möchtest.",
      });
      return;
    }
    if (botField) {
      // silently drop likely bot submissions
      return;
    }

    setStatus({ state: "loading" });

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          attributes: {
            FIRSTNAME: firstName || undefined,
          },
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        setStatus({
          state: "error",
          message: data?.message || "Subscription failed. Please try again.",
        });
      } else {
        setStatus({
          state: "success",
          message:
            data?.message ||
            "Fast geschafft! Bitte prüfe dein Postfach und bestätige deine Anmeldung.",
        });
        setEmail("");
        setFirstName("");
        setConsent(false);
      }
    } catch {
      setStatus({
        state: "error",
        message: "Netzwerkfehler. Bitte versuche es erneut.",
      });
    }
  };

  return (
    <Box
      component="form"
      onSubmit={onSubmit}
      noValidate
      sx={{
        display: "grid",
        gap: 2,
        maxWidth: 800,
        width: "100%",
      }}
      aria-label="Newsletter sign-up"
    >
      {/* Honeypot field (hidden from users, visible to bots) */}
      <input
        type="text"
        name="company"
        value={botField}
        onChange={(e) => setBotField(e.target.value)}
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        autoComplete="email"
        fullWidth
      />

      <TextField
        label="Name (optional)"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        autoComplete="given-name"
        fullWidth
      />

      <FormControlLabel
        align="left"
        control={
          <Checkbox
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
          />
        }
        label={
          <>
            Ich möchte den Newsletter erhalten und akzeptiere die{" "}
            <a href="/datenschutz" target="_blank" rel="noreferrer">
              Datenschutzerklärung
            </a>
            . Ich kann meine Einwilligung jederzeit über den Abmeldelink im
            Newsletter widerrufen.“ .
          </>
        }
      />

      <Button
        type="submit"
        variant="contained"
        size="large"
        disabled={status.state === "loading"}
      >
        {status.state === "loading" ? "Anmeldung läuft" : "Anmelden"}
      </Button>

      {status.state === "success" && (
        <Alert severity="success" role="status">
          {status.message}
        </Alert>
      )}
      {status.state === "error" && (
        <Alert severity="error" role="alert">
          {status.message}
        </Alert>
      )}
    </Box>
  );
}
