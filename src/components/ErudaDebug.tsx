"use client";

import { useEffect, useRef, useState } from "react";

export default function ErudaDebug() {
  const [debugMode, setDebugMode] = useState(false);
  const [status, setStatus] = useState("DEBUG");

  const erudaRef = useRef<any>(null);

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);

      // Kalau masuk menggunakan ?debug=1,
      // simpan agar debug tidak hilang ketika redirect.
      if (params.get("debug") === "1") {
        sessionStorage.setItem("twinkle-debug", "1");
      }

      const savedDebug =
        sessionStorage.getItem("twinkle-debug");

      if (savedDebug === "1") {
        setDebugMode(true);

        console.log(
          "[DEBUG] Debug mode aktif:",
          window.location.href
        );
      }
    } catch (error) {
      console.error("[DEBUG] Error:", error);
    }
  }, []);

  const openEruda = async () => {
    try {
      setStatus("LOADING...");

      if (erudaRef.current) {
        erudaRef.current.show();
        setStatus("DEBUG");
        return;
      }

      const module = await import("eruda");

      const eruda = module.default || module;

      eruda.init();

      erudaRef.current = eruda;

      eruda.show();

      setStatus("DEBUG");

      console.log("[ERUDA] Eruda aktif");
    } catch (error) {
      console.error("[ERUDA] ERROR:", error);

      setStatus("ERROR");

      alert(
        "Eruda gagal dibuka:\n" +
          String(error)
      );
    }
  };

  if (!debugMode) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={openEruda}
      style={{
        position: "fixed",
        top: "10px",
        right: "10px",
        zIndex: 2147483647,
        background: "#dc2626",
        color: "#ffffff",
        border: "2px solid white",
        padding: "10px 14px",
        borderRadius: "8px",
        fontWeight: "bold",
        fontSize: "13px",
        cursor: "pointer",
        boxShadow: "0 2px 10px rgba(0,0,0,0.4)",
      }}
    >
      {status}
    </button>
  );
}