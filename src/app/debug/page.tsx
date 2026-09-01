"use client";

import { useEffect, useState } from "react";

export default function DebugPage() {
  const [data, setData] = useState<string>("");

  useEffect(() => {
    setData(localStorage.getItem("debug-preloader") ?? "kosong, belum ada data");
  }, []);

  return (
    <pre style={{ whiteSpace: "pre-wrap", padding: 16, fontSize: 12 }}>
      {data}
    </pre>
  );
}