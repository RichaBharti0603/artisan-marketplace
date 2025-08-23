import React, { useState } from "react";
import "./Onboard.css";

// ✅ AI-ready UI helpers (frontend only; mock logic inside each)
import AICopyAssistant from "../components/AICopyAssistant";
import AutoTagSuggester from "../components/AutoTagSuggester";
import TranslationTabs from "../components/TranslationTabs";

const steps = ["Profile", "Craft Details", "Pricing & Stock", "Story"];

export default function Onboard() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    name: "",
    region: "",
    craft: "",
    materials: "",
    price: "",
    stock: "",
    imageFile: null,
    imagePreview: "",
    story: "",
  });

  const [tags, setTags] = useState([]); // ← AutoTagSuggester writes here
  const [descTranslations, setDescTranslations] = useState({
    en: "",
    hi: "",
    bn: "",
  }); // ← TranslationTabs writes here

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onImage = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    const preview = URL.createObjectURL(f);
    setForm((curr) => ({ ...curr, imageFile: f, imagePreview: preview }));
  };

  const submit = (e) => {
    e.preventDefault();

    // assemble payload (ready for backend /api later)
    const payload = {
      ...form,
      price: Number(form.price || 0),
      stock: Number(form.stock || 0),
      tags,
      descriptions: descTranslations, // { en, hi, bn }
    };

    console.log("Onboard SUBMIT (UI only):", payload);
    alert(
      "Profile saved! (UI only)\n\nCheck the browser console to see the payload with tags & translations."
    );

    // reset if you want to clear after submit
    // setStep(0);
    // setForm({ name:"", region:"", craft:"", materials:"", price:"", stock:"", imageFile:null, imagePreview:"", story:"" });
    // setTags([]);
    // setDescTranslations({ en:"", hi:"", bn:"" });
  };

  return (
    <div className="onboard">
      <h2>List your craft</h2>

      {/* Progress Dots */}
      <div className="steps">
        {steps.map((label, i) => (
          <div key={label} className={`dot ${i <= step ? "active" : ""}`}>
            {i + 1}
          </div>
        ))}
      </div>

      <form onSubmit={submit} className="card">
        {/* STEP 0: Profile */}
        {step === 0 && (
          <>
            <label>
              Your Name
              <input
                name="name"
                value={form.name}
                onChange={onChange}
                placeholder="e.g., Ramesh Kumar"
                required
              />
            </label>

            <label>
              Region
              <input
                name="region"
                value={form.region}
                onChange={onChange}
                placeholder="e.g., Madhubani, Bihar"
                required
              />
            </label>

            <label>
              Display Photo
              <input type="file" accept="image/*" onChange={onImage} />
            </label>

            {form.imagePreview && (
              <>
                <img
                  className="preview"
                  src={form.imagePreview}
                  alt="preview"
                />
                {/* AI: auto-tag suggester (mocked for now) */}
                <AutoTagSuggester
                  imagePreview={form.imagePreview}
                  onChange={(t) => setTags(t)}
                />
              </>
            )}
          </>
        )}

        {/* STEP 1: Craft Details */}
        {step === 1 && (
          <>
            <label>
              Craft (e.g., Madhubani Painting)
              <input
                name="craft"
                value={form.craft}
                onChange={onChange}
                required
              />
            </label>

            <label>
              Materials
              <input
                name="materials"
                value={form.materials}
                onChange={onChange}
                placeholder="e.g., natural dyes, handmade paper"
              />
            </label>
          </>
        )}

        {/* STEP 2: Pricing & Stock */}
        {step === 2 && (
          <>
            <label>
              Price (₹)
              <input
                type="number"
                min="0"
                name="price"
                value={form.price}
                onChange={onChange}
                required
              />
            </label>

            <label>
              Stock
              <input
                type="number"
                min="0"
                name="stock"
                value={form.stock}
                onChange={onChange}
                required
              />
            </label>
          </>
        )}

        {/* STEP 3: Story + AI Copy + Translations */}
        {step === 3 && (
          <>
            <label>
              Tell your story
              <textarea
                name="story"
                rows="5"
                value={form.story}
                onChange={(e) => {
                  onChange(e);
                  // keep EN in sync as base text for translations panel
                  setDescTranslations((m) => ({ ...m, en: e.target.value }));
                }}
                placeholder="Talk about your tradition, motifs, community, inspiration..."
              />
            </label>

            {/* AI: copy assistant (mocked; integrate /api later) */}
            <AICopyAssistant
              onApplyDescription={(text) => {
                setForm((f) => ({ ...f, story: text }));
                setDescTranslations((m) => ({ ...m, en: text }));
              }}
              onApplyCaption={(caption) => {
                try {
                  navigator.clipboard?.writeText(caption);
                  alert("Caption copied to clipboard!");
                } catch {
                  alert("Copy failed. You can select & copy manually.");
                }
              }}
            />

            {/* Translations (UI only; integrate Translation API later) */}
            <TranslationTabs
              baseText={form.story}
              onChangeMap={(map) => setDescTranslations(map)}
            />
          </>
        )}

        {/* Nav Buttons */}
        <div className="actions">
          <button type="button" onClick={back} disabled={step === 0}>
            Back
          </button>

          {step < steps.length - 1 ? (
            <button type="button" onClick={next}>
              Next
            </button>
          ) : (
            <button type="submit">Finish</button>
          )}
        </div>
      </form>

      {/* Optional: debugging/preview panel */}
      <div className="debug">
        <div><strong>Selected tags:</strong> {tags.join(", ") || "-"}</div>
        <div><strong>Translations set:</strong> {Object.keys(descTranslations).join(", ")}</div>
      </div>
    </div>
  );
}
