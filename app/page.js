"use client";
import { useState } from "react";

export default function Home() {
  const [num, setNum] = useState("");
  const [res, setRes] = useState("");

  const buscar = async () => {
    if (!num) return;

    const r = await fetch(`/api/buscar?n=${num}`);
    const data = await r.json();

    setRes(data.palavra || "Nada encontrado.");
  };

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h1>Buscar palavra por número</h1>

      <input
        type="text"
        placeholder="Digite o número"
        value={num}
        onChange={(e) => setNum(e.target.value)}
        style={{ padding: 10, fontSize: 18 }}
      />

      <button
        onClick={buscar}
        style={{ marginLeft: 10, padding: "10px 20px", fontSize: 18 }}
      >
        Buscar
      </button>

      <p style={{ marginTop: 20, fontSize: 20 }}>
        <b>Resultado:</b> {res}
      </p>
    </div>
  );
}
