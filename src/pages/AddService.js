import React, { useState } from "react";
import "../styles/addService.css";

export default function AddService() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    duration: "",
    imageUrl: "",
  });
  const [message, setMessage] = useState({ type: "", text: "" });
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    if (selectedFile) {
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage({ type: "error", text: "Please select an image first!" });
      return;
    }

    setIsLoading(true);
    const formDataObj = new FormData();
    formDataObj.append("image", file);

    try {
      const res = await fetch(`${process.env.REACT_APP_API_BASE}/api/upload`, {
        method: "POST",
        body: formDataObj,
      });

      const data = await res.json();

      if (data.success) {
        setFormData((prev) => ({ ...prev, imageUrl: data.url }));
        setMessage({ type: "success", text: "Image uploaded successfully!" });
      } else {
        setMessage({ type: "error", text: "Image upload failed!" });
      }
    } catch (err) {
      setMessage({ type: "error", text: "Upload error occurred!" });
      console.error("Upload error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.imageUrl) {
      setMessage({
        type: "error",
        text: "Please upload an image before submitting!",
      });
      return;
    }

    setIsLoading(true);

    try {
      console.log("📤 Submitting service data:", formData);
      
      const res = await fetch(`${process.env.REACT_APP_API_BASE}/api/services`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log("📥 Server response:", data);

      if (res.ok) {
        setMessage({ type: "success", text: "Service added successfully!" });
        // Reset form
        setFormData({ 
          name: "", 
          description: "", 
          price: "", 
          duration: "", 
          imageUrl: "" 
        });
        setFile(null);
        setPreview(null);
      } else {
        setMessage({ 
          type: "error", 
          text: data.error || "Failed to add service!" 
        });
      }
    } catch (err) {
      console.error("❌ Submit error:", err);
      setMessage({ type: "error", text: "Failed to add service!" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="add-service-page">
      <div className="service-container">
        {/* Left Side - Form */}
        <div className="form-section">
          <div className="form-card">
            <h2 className="title">Add New Service</h2>

            {message.text && (
              <div className={`message-box ${message.type}`}>
                {message.text}
              </div>
            )}

            <form onSubmit={handleSubmit} className="service-form">
              <div className="form-group">
                <label>Service Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter service name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                />
              </div>

              <div className="form-group">
                <label>Description</label>
                <textarea
                  name="description"
                  placeholder="Write a short description..."
                  value={formData.description}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Price (PKR)</label>
                  <input
                    type="number"
                    name="price"
                    placeholder="Enter price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                  />
                </div>

                <div className="form-group">
                  <label>Duration (minutes)</label>
                  <input
                    type="number"
                    name="duration"
                    placeholder="Enter duration"
                    value={formData.duration || ""}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Upload Service Image</label>
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={handleFileChange} 
                  disabled={isLoading}
                />
                <button
                  type="button"
                  className="upload-btn"
                  onClick={handleUpload}
                  disabled={isLoading || !file || formData.imageUrl}
                >
                  {isLoading ? "Uploading..." : formData.imageUrl ? "✅ Uploaded" : "Upload Image"}
                </button>
              </div>

              <button 
                type="submit" 
                className="submit-btn"
                disabled={isLoading || !formData.imageUrl}
              >
                {isLoading ? "Adding Service..." : "Add Service"}
              </button>
            </form>
          </div>
        </div>

        {/* Right Side - Image Preview */}
        <div className="preview-section">
          <div className="preview-card">
            <h3>Image Preview</h3>
            {preview ? (
              <div className="image-preview">
                <img src={preview} alt="Service Preview" />
                <div className="preview-status">
                  {formData.imageUrl ? (
                    <span className="status-success">✅ Uploaded to Cloud</span>
                  ) : (
                    <span className="status-pending">📁 Ready to Upload</span>
                  )}
                </div>
              </div>
            ) : (
              <div className="no-preview">
                <div className="placeholder-icon">📷</div>
                <p>Select an image to see preview</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}