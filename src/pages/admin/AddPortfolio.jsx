import { useState } from "react";
import { createPortfolio } from "../../services/portfolio";

const CATEGORIES = ["Web Application", "Mobile App", "AI Automation", "Ui/Ux", "Web Development", "Full Stack"];
const STATUSES = ["draft", "published", "archived"];

const STATUS_META = {
  draft:     { label: "Draft",     color: "#b45309", bg: "#fef3c7", dot: "#f59e0b" },
  published: { label: "Published", color: "#065f46", bg: "#d1fae5", dot: "#10b981" },
  archived:  { label: "Archived",  color: "#374151", bg: "#f3f4f6", dot: "#9ca3af" },
};

function AddPortfolio() {
  const [form, setForm] = useState({
    title:       "",
    slug:        "",
    category:    "",
    type:        "Ui/Ux",
    description: "",
    tags:        "",
    status:      "draft",
    featured:    false,
    projectUrl:  "",
  });

  // ✅ File state separate from text form state
  const [imageFile,   setImageFile]   = useState(null);
  const [galleryFiles, setGalleryFiles] = useState([]);
  const [imagePreview, setImagePreview] = useState("");

  const [loading,       setLoading]       = useState(false);
  const [error,         setError]         = useState("");
  const [success,       setSuccess]       = useState("");
  const [activeSection, setActiveSection] = useState("basics");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));

    // ✅ Auto-generate slug from title
    if (name === "title") {
      const auto = value.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
      setForm((prev) => ({ ...prev, title: value, slug: auto }));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleGalleryChange = (e) => {
    const files = Array.from(e.target.files);
    setGalleryFiles(files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      // ✅ Build FormData — backend multer expects fields named "image" and "gallery"
      const formData = new FormData();

      formData.append("title",       form.title.trim());
      formData.append("slug",        form.slug.trim());
      formData.append("category",    form.category);
      formData.append("type",        form.type);
      formData.append("description", form.description.trim());
      formData.append("status",      form.status);
      formData.append("featured",    form.featured);
      formData.append("projectUrl",  form.projectUrl.trim());

      // Tags: send as comma-separated string and parse server-side,
      // or append each individually — here we send each as a separate field
      const tags = form.tags.split(",").map((t) => t.trim()).filter(Boolean);
      tags.forEach((tag) => formData.append("tags", tag));

      // ✅ File fields — must match multer field names exactly
      if (imageFile) {
        formData.append("image", imageFile);
      }
      galleryFiles.forEach((file) => formData.append("gallery", file));

      await createPortfolio(formData);

      setSuccess("Portfolio created successfully!");
      setForm({
        title: "", slug: "", category: "", type: "Ui/Ux",
        description: "", tags: "", status: "draft",
        featured: false, projectUrl: "",
      });
      setImageFile(null);
      setGalleryFiles([]);
      setImagePreview("");
      setActiveSection("basics");
    } catch (err) {
      setError(err.message || "Failed to create portfolio. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const sections = [
    { id: "basics", label: "Basics", icon: "📋" },
    { id: "media",  label: "Media",  icon: "🖼️" },
    { id: "meta",   label: "Details", icon: "⚙️" },
  ];

  const completeness = (() => {
    const fields = [form.title, form.slug, form.category, form.description, imageFile];
    return Math.round((fields.filter(Boolean).length / fields.length) * 100);
  })();

  return (
    <div style={{ fontFamily: "'DM Sans', 'Segoe UI', sans-serif", minHeight: "100vh", background: "#f8f7f4", padding: "2rem 1rem" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Playfair+Display:wght@700&display=swap');
        * { box-sizing: border-box; }
        .ap-input { width: 100%; background: #fff; border: 1.5px solid #e5e3df; border-radius: 10px; padding: 11px 14px; font-size: 14px; font-family: inherit; color: #1a1814; outline: none; transition: border-color 0.18s, box-shadow 0.18s; }
        .ap-input:focus { border-color: #0d1f4e; box-shadow: 0 0 0 3px rgba(13,31,78,0.08); }
        .ap-input::placeholder { color: #bbb; }
        .ap-input:hover:not(:focus) { border-color: #c9c6c0; }
        textarea.ap-input { resize: vertical; min-height: 120px; line-height: 1.6; }
        select.ap-input { appearance: none; cursor: pointer; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23888' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 12px center; padding-right: 36px; }
        .file-input-wrapper { position: relative; }
        .file-input-wrapper input[type="file"] { position: absolute; inset: 0; opacity: 0; cursor: pointer; width: 100%; height: 100%; }
        .file-drop-zone { border: 1.5px dashed #d1cfc8; border-radius: 10px; padding: 28px 20px; text-align: center; color: #9ca3af; transition: border-color 0.18s, background 0.18s; cursor: pointer; }
        .file-drop-zone:hover { border-color: #0d1f4e; background: #f8f7ff; }
        .tab-btn { padding: 8px 18px; border: 1.5px solid transparent; border-radius: 8px; font-size: 13px; font-weight: 500; cursor: pointer; transition: all 0.16s; background: transparent; color: #888; font-family: inherit; display: flex; align-items: center; gap: 6px; }
        .tab-btn.active { background: #fff; border-color: #e5e3df; color: #0d1f4e; box-shadow: 0 1px 4px rgba(0,0,0,0.06); }
        .tab-btn:not(.active):hover { color: #444; background: rgba(255,255,255,0.5); }
        .submit-btn { width: 100%; padding: 14px; background: #0d1f4e; color: #fff; border: none; border-radius: 12px; font-size: 15px; font-weight: 600; font-family: inherit; cursor: pointer; transition: background 0.18s, transform 0.12s; letter-spacing: 0.01em; }
        .submit-btn:hover:not(:disabled) { background: #162f6b; }
        .submit-btn:active:not(:disabled) { transform: scale(0.99); }
        .submit-btn:disabled { opacity: 0.55; cursor: not-allowed; }
        .tag-pill { display: inline-flex; align-items: center; gap: 5px; background: #eef0f8; color: #0d1f4e; font-size: 12px; font-weight: 500; padding: 3px 10px; border-radius: 20px; }
        .status-dot { width: 8px; height: 8px; border-radius: 50%; display: inline-block; }
        .featured-toggle { display: flex; align-items: center; gap: 12px; padding: 14px 16px; background: #fff; border: 1.5px solid #e5e3df; border-radius: 10px; cursor: pointer; transition: border-color 0.16s; }
        .featured-toggle:hover { border-color: #c9c6c0; }
        .toggle-track { width: 40px; height: 22px; border-radius: 11px; transition: background 0.2s; position: relative; flex-shrink: 0; }
        .toggle-thumb { position: absolute; top: 3px; width: 16px; height: 16px; border-radius: 50%; background: #fff; transition: left 0.2s; box-shadow: 0 1px 3px rgba(0,0,0,0.2); }
        .label-text { font-size: 13px; color: #6b7280; margin-bottom: 6px; font-weight: 500; letter-spacing: 0.02em; text-transform: uppercase; }
        .progress-bar { height: 3px; background: #e5e3df; border-radius: 2px; overflow: hidden; }
        .progress-fill { height: 100%; border-radius: 2px; background: linear-gradient(90deg, #e8192c, #0d1f4e); transition: width 0.4s ease; }
        .section-panel { display: none; }
        .section-panel.active { display: block; }
        .image-preview { width: 100%; height: 180px; border-radius: 10px; object-fit: cover; margin-top: 10px; border: 1.5px solid #e5e3df; }
        .gallery-thumb { width: 72px; height: 72px; border-radius: 8px; object-fit: cover; border: 1.5px solid #e5e3df; }
        .toast-success { background: #d1fae5; border: 1px solid #6ee7b7; color: #065f46; }
        .toast-error { background: #fee2e2; border: 1px solid #fca5a5; color: #991b1b; }
        .toast { padding: 12px 16px; border-radius: 10px; font-size: 13px; font-weight: 500; display: flex; align-items: center; gap: 8px; }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>

      <div style={{ maxWidth: 760, margin: "0 auto" }}>

        {/* PAGE HEADER */}
        <div style={{ marginBottom: "2rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
            <div style={{ width: 36, height: 36, background: "#0d1f4e", borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2"><path d="M12 5v14M5 12h14"/></svg>
            </div>
            <div>
              <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: "#0d1f4e", margin: 0, lineHeight: 1 }}>
                New Portfolio
              </h1>
              <p style={{ fontSize: 13, color: "#9ca3af", margin: 0, marginTop: 2 }}>Create and publish a new project showcase</p>
            </div>
          </div>
          <div style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 12 }}>
            <div className="progress-bar" style={{ flex: 1 }}>
              <div className="progress-fill" style={{ width: `${completeness}%` }} />
            </div>
            <span style={{ fontSize: 12, color: "#9ca3af", fontWeight: 500, whiteSpace: "nowrap" }}>{completeness}% complete</span>
          </div>
        </div>

        {/* MAIN CARD */}
        <div style={{ background: "#fff", borderRadius: 18, border: "1.5px solid #e5e3df", overflow: "hidden", boxShadow: "0 2px 16px rgba(0,0,0,0.05)" }}>

          {/* TAB NAV */}
          <div style={{ padding: "16px 24px", borderBottom: "1.5px solid #f0ede8", background: "#faf9f6", display: "flex", gap: 6, alignItems: "center" }}>
            {sections.map((s) => (
              <button key={s.id} className={`tab-btn${activeSection === s.id ? " active" : ""}`} onClick={() => setActiveSection(s.id)}>
                <span>{s.icon}</span> {s.label}
              </button>
            ))}
            <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 6 }}>
              <span className="status-dot" style={{ background: STATUS_META[form.status].dot }} />
              <span style={{ fontSize: 12, fontWeight: 500, color: STATUS_META[form.status].color, background: STATUS_META[form.status].bg, padding: "3px 10px", borderRadius: 20 }}>
                {STATUS_META[form.status].label}
              </span>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div style={{ padding: "28px 28px 0" }}>

              {/* BASICS */}
              <div className={`section-panel${activeSection === "basics" ? " active" : ""}`}>
                <div style={{ display: "grid", gap: 18 }}>
                  <div>
                    <p className="label-text">Project Title *</p>
                    <input name="title" placeholder="e.g. E-commerce Dashboard" value={form.title} onChange={handleChange} className="ap-input" required />
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                    <div>
                      <p className="label-text">Slug</p>
                      <input name="slug" placeholder="auto-generated" value={form.slug} onChange={handleChange} className="ap-input" style={{ fontFamily: "monospace", fontSize: 13 }} />
                    </div>
                    <div>
                      <p className="label-text">Category *</p>
                      <select name="category" value={form.category} onChange={handleChange} className="ap-input" required>
                        <option value="">Select category...</option>
                        {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <p className="label-text">Description *</p>
                    <textarea name="description" placeholder="Describe the project, the problem it solves, and the impact delivered..." value={form.description} onChange={handleChange} className="ap-input" required />
                  </div>
                  <div>
                    <p className="label-text">Tags <span style={{ color: "#bbb", fontWeight: 400, textTransform: "none", letterSpacing: 0 }}>— comma separated</span></p>
                    <input name="tags" placeholder="React, Node.js, AWS, Figma..." value={form.tags} onChange={handleChange} className="ap-input" />
                    {form.tags && (
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 10 }}>
                        {form.tags.split(",").map((t, i) => t.trim() && (
                          <span key={i} className="tag-pill"># {t.trim()}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* MEDIA */}
              <div className={`section-panel${activeSection === "media" ? " active" : ""}`}>
                <div style={{ display: "grid", gap: 20 }}>

                  {/* Cover image file input */}
                  <div>
                    <p className="label-text">Cover Image * <span style={{ color: "#bbb", fontWeight: 400, textTransform: "none", letterSpacing: 0 }}>— jpg, png, webp</span></p>
                    <div className="file-input-wrapper">
                      <div className="file-drop-zone">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ margin: "0 auto 8px" }}><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                        {imageFile
                          ? <p style={{ fontSize: 13, color: "#0d1f4e", fontWeight: 500, margin: 0 }}>✅ {imageFile.name}</p>
                          : <><p style={{ fontSize: 13, margin: 0 }}>Click or drag to upload cover image</p><p style={{ fontSize: 11, margin: "4px 0 0", color: "#bbb" }}>Max 5MB</p></>
                        }
                      </div>
                      {/* ✅ file input — name="image" matches multer field */}
                      <input type="file" name="image" accept="image/*" onChange={handleImageChange} />
                    </div>
                    {imagePreview && (
                      <img src={imagePreview} alt="Preview" className="image-preview" />
                    )}
                  </div>

                  {/* Gallery file input */}
                  <div>
                    <p className="label-text">Gallery <span style={{ color: "#bbb", fontWeight: 400, textTransform: "none", letterSpacing: 0 }}>— up to 5 images</span></p>
                    <div className="file-input-wrapper">
                      <div className="file-drop-zone">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ margin: "0 auto 8px" }}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                        {galleryFiles.length > 0
                          ? <p style={{ fontSize: 13, color: "#0d1f4e", fontWeight: 500, margin: 0 }}>✅ {galleryFiles.length} file(s) selected</p>
                          : <><p style={{ fontSize: 13, margin: 0 }}>Click or drag to upload gallery images</p><p style={{ fontSize: 11, margin: "4px 0 0", color: "#bbb" }}>Select multiple — max 5</p></>
                        }
                      </div>
                      {/* ✅ multiple + name="gallery" matches multer field */}
                      <input type="file" name="gallery" accept="image/*" multiple onChange={handleGalleryChange} />
                    </div>
                    {galleryFiles.length > 0 && (
                      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 10 }}>
                        {galleryFiles.map((file, i) => (
                          <img key={i} src={URL.createObjectURL(file)} alt={`gallery-${i}`} className="gallery-thumb" />
                        ))}
                      </div>
                    )}
                  </div>

                </div>
              </div>

              {/* DETAILS */}
              <div className={`section-panel${activeSection === "meta" ? " active" : ""}`}>
                <div style={{ display: "grid", gap: 18 }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                    <div>
                      <p className="label-text">Project Type</p>
                      <select name="type" value={form.type} onChange={handleChange} className="ap-input">
                        <option value="Ui/Ux">UI/UX</option>
                        <option value="Ai Automation">AI Automation</option>
                        <option value="Web Application">Web Application</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Mobile App">Mobile App</option>
                        <option value="fullStack">Full Stack</option>
                      </select>
                    </div>
                    <div>
                      <p className="label-text">Status</p>
                      <select name="status" value={form.status} onChange={handleChange} className="ap-input">
                        {STATUSES.map((s) => <option key={s} value={s}>{STATUS_META[s].label}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <p className="label-text">Live Project URL</p>
                    <div style={{ position: "relative" }}>
                      <input name="projectUrl" placeholder="https://yourproject.com" value={form.projectUrl} onChange={handleChange} className="ap-input" style={{ paddingLeft: 40 }} />
                      <svg style={{ position: "absolute", left: 13, top: "50%", transform: "translateY(-50%)", color: "#bbb" }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    </div>
                  </div>
                  <div>
                    <p className="label-text">Featured</p>
                    <label className="featured-toggle">
                      <div className="toggle-track" style={{ background: form.featured ? "#0d1f4e" : "#e5e3df" }}>
                        <div className="toggle-thumb" style={{ left: form.featured ? "18px" : "3px" }} />
                      </div>
                      <input type="checkbox" name="featured" checked={form.featured} onChange={handleChange} style={{ display: "none" }} />
                      <div>
                        <p style={{ fontSize: 14, fontWeight: 500, color: "#1a1814", margin: 0 }}>Mark as Featured Project</p>
                        <p style={{ fontSize: 12, color: "#9ca3af", margin: 0, marginTop: 2 }}>Featured projects appear at the top of your portfolio</p>
                      </div>
                      {form.featured && (
                        <span style={{ marginLeft: "auto", fontSize: 11, fontWeight: 600, color: "#c2410c", background: "#fff7ed", padding: "3px 10px", borderRadius: 20, border: "1px solid #fed7aa" }}>★ Featured</span>
                      )}
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* FOOTER */}
            <div style={{ padding: "24px 28px 28px" }}>
              {(error || success) && (
                <div className={`toast ${error ? "toast-error" : "toast-success"}`} style={{ marginBottom: 16 }}>
                  {error
                    ? <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                    : <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  }
                  {error || success}
                </div>
              )}

              <div style={{ display: "flex", gap: 10 }}>
                {activeSection !== "basics" && (
                  <button type="button"
                    onClick={() => setActiveSection(sections[sections.findIndex(s => s.id === activeSection) - 1].id)}
                    style={{ padding: "14px 20px", border: "1.5px solid #e5e3df", borderRadius: 12, background: "#fff", color: "#374151", fontSize: 14, fontWeight: 500, cursor: "pointer", fontFamily: "inherit" }}>
                    ← Back
                  </button>
                )}
                {activeSection !== "meta" ? (
                  <button type="button"
                    onClick={() => setActiveSection(sections[sections.findIndex(s => s.id === activeSection) + 1].id)}
                    style={{ flex: 1, padding: "14px", border: "none", borderRadius: 12, background: "#f3f4f6", color: "#0d1f4e", fontSize: 15, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>
                    Next: {sections[sections.findIndex(s => s.id === activeSection) + 1]?.label} →
                  </button>
                ) : (
                  <button type="submit" disabled={loading} className="submit-btn" style={{ flex: 1 }}>
                    {loading ? (
                      <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ animation: "spin 0.8s linear infinite" }}><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
                        Creating...
                      </span>
                    ) : "Publish Portfolio →"}
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>

        <p style={{ textAlign: "center", fontSize: 12, color: "#c4c0b8", marginTop: 20 }}>
          Fields marked * are required to publish
        </p>
      </div>
    </div>
  );
}

export default AddPortfolio;