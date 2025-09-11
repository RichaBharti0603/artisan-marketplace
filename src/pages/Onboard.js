import React, { useState } from "react";
import "./Onboard.css";
import { useNavigate } from "react-router-dom";
import { useArtisans } from "../context/ArtisanContext";

// helpers (mock AI components, same as before)
import AICopyAssistant from "../components/AICopyAssistant";
import AutoTagSuggester from "../components/AutoTagSuggester";
import TranslationTabs from "../components/TranslationTabs";

const steps = ["Profile", "Craft Details", "Pricing & Stock", "Story"];

export default function Onboard() {
  const [step, setStep] = useState(0);
  const { addArtisan } = useArtisans();
  const navigate = useNavigate();

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

  const [tags, setTags] = useState([]);
  const [descTranslations, setDescTranslations] = useState({
    en: "",
    hi: "",
    bn: "",
  });

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

    const newArtisan = {
      id: `artisan-${Date.now()}`, // unique id
      name: form.name,
      craft: form.craft,
      region: form.region,
      price: Number(form.price || 0),
      stock: Number(form.stock || 0),
      image: form.imagePreview || "/images/placeholder.jpg",
      tags,
      story: form.story,
      materials: form.materials,
      descriptions: descTranslations,
    };

    addArtisan(newArtisan); // ✅ save into context
    alert("Your craft has been listed successfully!");
    navigate("/explore"); // redirect to marketplace
  };

  return (
    <div className="onboard">
      <h2>List your craft</h2>

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
                <img className="preview" src={form.imagePreview} alt="preview" />
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
              Craft
              <input
                name="craft"
                value={form.craft}
                onChange={onChange}
                placeholder="Madhubani Painting"
                required
              />
            </label>
            <label>
              Materials
              <input
                name="materials"
                value={form.materials}
                onChange={onChange}
                placeholder="Natural dyes, handmade paper"
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

        {/* STEP 3: Story */}
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
                  setDescTranslations((m) => ({ ...m, en: e.target.value }));
                }}
                placeholder="Talk about your tradition, motifs, inspiration..."
              />
            </label>
            <AICopyAssistant
              onApplyDescription={(text) => {
                setForm((f) => ({ ...f, story: text }));
                setDescTranslations((m) => ({ ...m, en: text }));
              }}
              onApplyCaption={(caption) => {
                navigator.clipboard?.writeText(caption).catch(() => {});
                alert("Caption copied!");
              }}
            />
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
    </div>
  );
}
