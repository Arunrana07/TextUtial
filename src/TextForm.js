import React, { useState } from "react";

function TextForm({ mode }) {
  const [text, setText] = useState("");
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;

  const copyText = async () => {
    await navigator.clipboard.writeText(text);
  };

  return (
    <main className={`page-shell home-page ${mode === "dark" ? "page-dark" : ""}`}>
      <div className="home-intro">
        <span className="eyebrow">SMART TEXT TOOL</span>
        <h1>Transform your text in seconds.</h1>
        <p>Format, clean and analyse your writing with a simple tool made for everyday work.</p>
      </div>

      <section className="editor-card">
        <div className="editor-topbar">
          <div><span className="status-dot"></span> Text editor</div>
          <span>{words} words&nbsp; · &nbsp;{text.length} characters</span>
        </div>
        <textarea
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="Start typing or paste your text here..."
        />
        <div className="editor-actions">
          <button onClick={() => setText(text.toUpperCase())} disabled={!text}>UPPERCASE</button>
          <button onClick={() => setText(text.toLowerCase())} disabled={!text}>lowercase</button>
          <button onClick={() => setText(text.trim().split(/\s+/).join(" "))} disabled={!text}>Remove spaces</button>
          <button onClick={copyText} disabled={!text}>Copy text</button>
          <button className="clear-button" onClick={() => setText("")} disabled={!text}>Clear</button>
        </div>
      </section>

      <section className="summary-grid">
        <article><strong>{words}</strong><span>Words</span></article>
        <article><strong>{text.length}</strong><span>Characters</span></article>
        <article><strong>{(words * 0.008).toFixed(2)}</strong><span>Minutes read</span></article>
      </section>

      <section className="preview-card">
        <h2>Preview</h2>
        <p className={!text ? "placeholder-copy" : ""}>{text || "Your text preview will appear here."}</p>
      </section>
    </main>
  );
}

export default TextForm;
