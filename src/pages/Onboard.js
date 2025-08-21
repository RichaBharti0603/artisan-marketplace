import React, { useState } from "react";
import "./Onboard.css";

const steps = ["Profile", "Craft Details", "Pricing & Stock", "Story"];

export default function Onboard() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    name: "", region: "", craft: "",
    materials: "", price: "", stock: "",
    imageFile: null, imagePreview: "", story: ""
  });

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onImage = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    setForm({ ...form, imageFile: f, imagePreview: URL.createObjectURL(f) });
  };

  const submit = (e) => {
    e.preventDefault();
    alert("Profile saved! (UI only)\nYou can now list items in the marketplace.");
  };

  return (
    <div className="onboard">
      <h2>List your craft</h2>
      <div className="steps">
        {steps.map((label, i) => (
          <div key={label} className={`dot ${i <= step ? "active" : ""}`}>{i+1}</div>
        ))}
      </div>

      <form onSubmit={submit} className="card">
        {step === 0 && (
          <>
            <label>
              Your Name
              <input name="name" value={form.name} onChange={onChange} required />
            </label>
            <label>
              Region
              <input name="region" value={form.region} onChange={onChange} required />
            </label>
            <label>
              Display Photo
              <input type="file" accept="image/*" onChange={onImage} />
            </label>
            {form.imagePreview && <img className="preview" src={form.imagePreview} alt="preview" />}
          </>
        )}

        {step === 1 && (
          <>
            <label>
              Craft (e.g., Madhubani Painting)
              <input name="craft" value={form.craft} onChange={onChange} required />
            </label>
            <label>
              Materials
              <input name="materials" value={form.materials} onChange={onChange} />
            </label>
          </>
        )}

        {step === 2 && (
          <>
            <label>
              Price (₹)
              <input type="number" min="0" name="price" value={form.price} onChange={onChange} required />
            </label>
            <label>
              Stock
              <input type="number" min="0" name="stock" value={form.stock} onChange={onChange} required />
            </label>
          </>
        )}

        {step === 3 && (
          <>
            <label>
              Tell your story
              <textarea name="story" rows="5" value={form.story} onChange={onChange}
                placeholder="Talk about your tradition, motifs, community, inspiration..." />
            </label>
          </>
        )}

        <div className="actions">
          <button type="button" onClick={back} disabled={step === 0}>Back</button>
          {step < steps.length - 1 ? (
            <button type="button" onClick={next}>Next</button>
          ) : (
            <button type="submit">Finish</button>
          )}
        </div>
      </form>
    </div>
  );
}
