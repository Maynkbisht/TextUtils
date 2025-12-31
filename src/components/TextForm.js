import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  // History for undo (previous) functionality
  const [history, setHistory] = useState([]);
  const [histIndex, setHistIndex] = useState(-1);

  const saveToHistory = (prev) => {
    if (prev === undefined || prev === null) return;
    setHistory((h) => {
      const upto = histIndex >= 0 ? h.slice(0, histIndex + 1) : h.slice();
      if (upto.length && upto[upto.length - 1] === prev) return upto;
      const next = [...upto, prev].slice(-50); // cap history to 50 entries
      setHistIndex(next.length - 1);
      return next;
    });
  };

  const updateText = (newText, message, type = "success") => {
    saveToHistory(text);
    setText(newText);
    if (message) props.showAlert(message, type);
  };

  const handlePrevious = () => {
    if (histIndex >= 0 && history[histIndex] !== undefined) {
      const prev = history[histIndex];
      setText(prev);
      setHistIndex((i) => i - 1);
    } else {
      props.showAlert("No previous state", "warning");
    }
  };

  const handleNext = () => {
    const nextIndex = histIndex + 1;
    if (nextIndex <= history.length - 1 && history[nextIndex] !== undefined) {
      setText(history[nextIndex]);
      setHistIndex(nextIndex);
    } else {
      props.showAlert("No next state", "warning");
    }
  };

  /* ---------------- BASIC HANDLERS ---------------- */
  const handleOnChange = (event) => {
    const newVal = event.target.value;
    saveToHistory(text);
    setText(newVal);
  };

  const handleUpChange = () => {
    if (text.trim()) {
      updateText(text.toUpperCase(), "Converted to Uppercase", "success");
    } else props.showAlert("No text available", "warning");
  };

  const handleLoChange = () => {
    if (text.trim()) {
      updateText(text.toLowerCase(), "Converted to Lowercase", "success");
    } else props.showAlert("No text available", "warning");
  };

  const handleClear = () => {
    if (text.trim()) {
      updateText("", "Text cleared", "danger");
    } else props.showAlert("Nothing to clear", "warning");
  };

  const handleCopy = () => {
    if (text.trim()) {
      navigator.clipboard.writeText(text);
      props.showAlert("Text copied to clipboard", "success");
    } else props.showAlert("Nothing to copy", "warning");
  };

  const handleExtraSpaces = () => {
    if (text.trim()) {
      updateText(
        text.split(/\s+/).join(" "),
        "Extra spaces removed",
        "success"
      );
    } else props.showAlert("No text available", "warning");
  };

  const handleCapitalize = () => {
    if (text.trim()) {
      updateText(
        text
          .toLowerCase()
          .split(" ")
          .map((w) => (w ? w.charAt(0).toUpperCase() + w.slice(1) : w))
          .join(" "),
        "Words capitalized",
        "success"
      );
    } else props.showAlert("No text available", "warning");
  };

  const handleReverseText = () => {
    if (text.trim()) {
      updateText(text.split("").reverse().join(""), "Text reversed", "success");
    } else props.showAlert("No text available", "warning");
  };

  const handleRemoveDuplicateWords = () => {
    if (text.trim()) {
      updateText(
        [...new Set(text.split(" "))].join(" "),
        "Duplicate words removed",
        "success"
      );
    } else props.showAlert("No text available", "warning");
  };

  const handleShuffleWords = () => {
    if (text.trim()) {
      let words = text.split(" ");
      for (let i = words.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [words[i], words[j]] = [words[j], words[i]];
      }
      updateText(words.join(" "), "Words shuffled", "success");
    } else props.showAlert("No text available", "warning");
  };

  const handleRemoveLineBreaks = () => {
    if (text.trim()) {
      updateText(text.replace(/\n/g, " "), "Line breaks removed", "success");
    } else props.showAlert("No text available", "warning");
  };

  const handleRemovePunctuation = () => {
    if (text.trim()) {
      updateText(
        text.replace(/[^\w\s]/g, ""),
        "Punctuation removed",
        "success"
      );
    } else props.showAlert("No text available", "warning");
  };

  const handleSentenceCase = () => {
    if (text.trim()) {
      updateText(
        text.charAt(0).toUpperCase() + text.slice(1).toLowerCase(),
        "Converted to sentence case",
        "success"
      );
    } else props.showAlert("No text available", "warning");
  };

  const handleRemoveNumbers = () => {
    if (text.trim()) {
      updateText(text.replace(/[0-9]/g, ""), "Numbers removed", "success");
    } else props.showAlert("No text available", "warning");
  };

  const handleSlugify = () => {
    if (text.trim()) {
      updateText(
        text
          .toLowerCase()
          .trim()
          .replace(/[^\w\s-]/g, "")
          .replace(/\s+/g, "-"),
        "Converted to URL slug",
        "success"
      );
    } else props.showAlert("No text available", "warning");
  };

  const handleSortWords = () => {
    if (text.trim()) {
      updateText(
        text.split(" ").sort().join(" "),
        "Words sorted alphabetically",
        "success"
      );
    } else props.showAlert("No text available", "warning");
  };

  const handleLongestWord = () => {
    if (text.trim()) {
      const longest = text
        .split(" ")
        .reduce((a, b) => (b.length > a.length ? b : a), "");
      props.showAlert(`Longest word: ${longest}`, "success");
    } else props.showAlert("No text available", "warning");
  };

  const handleCountVowels = () => {
    if (text.trim()) {
      const count = text.match(/[aeiou]/gi)?.length || 0;
      props.showAlert(`Vowels count: ${count}`, "success");
    } else props.showAlert("No text available", "warning");
  };

  const handleCountConsonants = () => {
    if (text.trim()) {
      const count = text.match(/[bcdfghjklmnpqrstvwxyz]/gi)?.length || 0;
      props.showAlert(`Consonants count: ${count}`, "success");
    } else props.showAlert("No text available", "warning");
  };

  const handleToBinary = () => {
    if (text.trim()) {
      updateText(
        text
          .split("")
          .map((c) => c.charCodeAt(0).toString(2))
          .join(" "),
        "Converted to binary",
        "success"
      );
    } else props.showAlert("No text available", "warning");
  };

  const handleRemoveEmojis = () => {
    if (text.trim()) {
      updateText(
        text.replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, ""),
        "Emojis removed",
        "success"
      );
    } else props.showAlert("No text available", "warning");
  };

  /* ---------------- STYLES ---------------- */
  const styledark = {
    color: "#fff",
    backgroundColor: "#262628ff",
    fontWeight: "400",
    fontSize: "20px",
    fontFamily: '"Italiana", serif',
  };

  const stylelight = {
    color: "#000",
    backgroundColor: "#fff",
    fontWeight: "400",
    fontSize: "18px",
    fontFamily: '"Italiana", serif',
  };

  const style2dark = { color: "#fff" };
  const style2light = { color: "#262628ff" };

  const getBtnClass = (variant = "primary") => {
    return props.mode === "dark"
      ? `btn btn-outline-${variant} mx-1 my-1`
      : `btn btn-${variant} mx-1 my-1`;
  };
  /* ---------------- RETURN JSX ---------------- */
  return (
    <div className="container">
      <div className="row justify-content-center">
        {/* Tablet / Medium Sized Container */}
        <div className="col-12 col-md-12 col-lg-10 col-xl-9">
          {/* Heading */}
          <h1
            className="text-center italiana"
            style={props.mode === "dark" ? style2dark : style2light}
          >
            {props.heading}
          </h1>
          <br />

          {/* Text Area */}
          <div className="mb-3">
            <label htmlFor="text" className="form-label">
              <h3>
                <b
                  className="text-center italiana"
                  style={props.mode === "dark" ? style2dark : style2light}
                >
                  Text Area
                </b>
              </h3>
            </label>

            <textarea
              className="form-control"
              id="text"
              rows="6"
              style={props.mode === "dark" ? styledark : stylelight}
              value={text}
              onChange={handleOnChange}
            />
          </div>

          {/* Utilities Heading */}
          <br />
          <h3
            className="mt-4 mb-2"
            style={props.mode === "dark" ? style2dark : style2light}
          >
            <b className="text-center italiana">Text Utilities</b>
          </h3>

          {/* Buttons */}
          <div
            className={`p-3 border rounded shadow-sm ${
              props.mode === "dark" ? "bg-dark text-light" : "bg-light"
            }`}
          >
            <button
              disabled={!text.trim()}
              className={`${getBtnClass("primary")} text-center italiana`}
              style={{ borderRadius: "10px" }}
              onClick={handleUpChange}
            >
              Uppercase
            </button>
            <button
              disabled={!text.trim()}
              className={`${getBtnClass("primary")} text-center italiana`}
              style={{ borderRadius: "10px" }}
              onClick={handleLoChange}
            >
              Lowercase
            </button>
            <button
              disabled={!text.trim()}
              className={`${getBtnClass("danger")} text-center italiana`}
              style={{ borderRadius: "10px" }}
              onClick={handleClear}
            >
              Clear
            </button>
            <button
              disabled={!text.trim()}
              className={`${getBtnClass("primary")} text-center italiana`}
              style={{ borderRadius: "10px" }}
              onClick={handleCopy}
            >
              Copy
            </button>
            <button
              disabled={!text.trim()}
              className={`${getBtnClass("primary")} text-center italiana`}
              style={{ borderRadius: "10px" }}
              onClick={handleCapitalize}
            >
              Capitalize
            </button>
            <button
              disabled={!text.trim()}
              className={`${getBtnClass("primary")} text-center italiana`}
              style={{ borderRadius: "10px" }}
              onClick={handleReverseText}
            >
              Reverse
            </button>
            <button
              disabled={!text.trim()}
              className={`${getBtnClass("primary")} text-center italiana`}
              style={{ borderRadius: "10px" }}
              onClick={handleExtraSpaces}
            >
              Remove Spaces
            </button>
            <button
              disabled={!text.trim()}
              className={`${getBtnClass("primary")} text-center italiana`}
              style={{ borderRadius: "10px" }}
              onClick={handleLongestWord}
            >
              Longest Word
            </button>
            <button
              disabled={!text.trim()}
              className={`${getBtnClass("primary")} text-center italiana`}
              style={{ borderRadius: "10px" }}
              onClick={handleCountVowels}
            >
              Vowels
            </button>
            <button
              disabled={!text.trim()}
              className={`${getBtnClass("primary")} text-center italiana`}
              style={{ borderRadius: "10px" }}
              onClick={handleCountConsonants}
            >
              Consonants
            </button>
            <button
              disabled={!text.trim()}
              className={`${getBtnClass("primary")} text-center italiana`}
              style={{ borderRadius: "10px" }}
              onClick={handleToBinary}
            >
              Binary
            </button>
            <button
              disabled={!text.trim()}
              className={`${getBtnClass("primary")} text-center italiana`}
              style={{ borderRadius: "10px" }}
              onClick={handleRemoveEmojis}
            >
              Remove Emojis
            </button>
            <button
              disabled={!text.trim()}
              className={`${getBtnClass("primary")} text-center italiana`}
              style={{ borderRadius: "10px" }}
              onClick={handleRemoveDuplicateWords}
            >
              Remove Duplicates
            </button>
            <button
              disabled={!text.trim()}
              className={`${getBtnClass("primary")} text-center italiana`}
              style={{ borderRadius: "10px" }}
              onClick={handleShuffleWords}
            >
              Shuffle
            </button>
            <button
              disabled={!text.trim()}
              className={`${getBtnClass("primary")} text-center italiana`}
              style={{ borderRadius: "10px" }}
              onClick={handleRemoveLineBreaks}
            >
              Remove Line Breaks
            </button>
            <button
              disabled={!text.trim()}
              className={`${getBtnClass("primary")} text-center italiana`}
              style={{ borderRadius: "10px" }}
              onClick={handleSentenceCase}
            >
              Sentence Case
            </button>
            <button
              disabled={!text.trim()}
              className={`${getBtnClass("primary")} text-center italiana`}
              style={{ borderRadius: "10px" }}
              onClick={handleRemovePunctuation}
            >
              Remove Punctuation
            </button>
            <button
              disabled={!text.trim()}
              className={`${getBtnClass("primary")} text-center italiana`}
              style={{ borderRadius: "10px" }}
              onClick={handleRemoveNumbers}
            >
              Remove Numbers
            </button>
            <button
              disabled={!text.trim()}
              className={`${getBtnClass("primary")} text-center italiana`}
              style={{ borderRadius: "10px" }}
              onClick={handleSlugify}
            >
              Slug
            </button>
            <button
              disabled={!text.trim()}
              className={`${getBtnClass("primary")} text-center italiana`}
              style={{ borderRadius: "10px" }}
              onClick={handleSortWords}
            >
              Sort
            </button>
            <button
              disabled={histIndex < 0}
              className={`${getBtnClass("secondary")} text-center italiana`}
              style={{ borderRadius: "10px" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              disabled={histIndex >= history.length - 1}
              className={`${getBtnClass("secondary")} text-center italiana`}
              style={{ borderRadius: "10px" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
          {/* Preview Button */}
          <div className="text-center italiana my-4">
            <button
              className={`btn ${
                props.mode === "dark" ? "btn-outline-light" : "btn-primary"
              }`}
              data-bs-toggle="collapse"
              data-bs-target="#previewCollapse"
              style={{ borderRadius: "10px" }}
            >
              ㅤㅤPreviewㅤㅤ
            </button>
          </div>

          {/* Collapsible Preview */}
          <div className="collapse" id="previewCollapse">
            <div
              className={`card card-body ${
                props.mode === "dark" ? "bg-dark text-light" : "bg-light"
              }`}
            >
              <p>
                <b>Words:</b> {text.split(" ").filter((w) => w).length}
              </p>
              <p>
                <b>Characters:</b> {text.length}
              </p>
              <p>
                <b>Reading Time:</b>{" "}
                {(0.008 * text.split(" ").filter((w) => w).length).toFixed(2)}{" "}
                minutes
              </p>

              <textarea
                className="form-control mt-2"
                rows="3"
                value={text}
                readOnly
                style={props.mode === "dark" ? styledark : stylelight}
              />
             
            </div>
          </div>
          <br/>
        </div>
      </div>
    </div>
  );
}
