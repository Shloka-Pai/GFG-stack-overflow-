import React, { useState, useEffect } from "react";
import { fetchCategories, fetchTags, createQuestion } from "../services/api";
import "../App.css"; 

const AskQuestion = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  
  // Selection States
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);

  // 1. Fetch Data on Load
  useEffect(() => {
    const loadData = async () => {
      try {
        const catRes = await fetchCategories();
        const tagRes = await fetchTags();
        setCategories(catRes.data);
        setTags(tagRes.data);
      } catch (err) {
        console.error("Failed to load data", err);
      }
    };
    loadData();
  }, []);

  // 2. Handle Checkbox for Tags
  const handleTagChange = (tagId) => {
    if (selectedTags.includes(tagId)) {
      setSelectedTags(selectedTags.filter((id) => id !== tagId));
    } else {
      setSelectedTags([...selectedTags, tagId]);
    }
  };

  // 3. Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        title,
        body,
        category: selectedCategory,
        tags: selectedTags,
        user: "64b5f8f81234567890abcdef", 
      };

      await createQuestion(payload);
      alert("Question Posted Successfully!");
    } catch (error) {
      console.error("Error posting question:", error);
      alert("Failed to post question.");
    }
  };

  return (
    <div className="ask-question-container">
      <h2>Ask a Public Question</h2>
      <form onSubmit={handleSubmit}>
        
        {/* Title */}
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="e.g. How do I filter an array in JS?"
          />
        </div>

        {/* Body */}
        <div className="form-group">
          <label>Body</label>
          <textarea
            className="form-textarea"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </div>

        {/* Category Dropdown */}
        <div className="form-group">
          <label>Category</label>
          <select
            className="form-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            required
          >
            <option value="">Select a Category</option>
            {categories.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        {/* Tags Checkboxes */}
        <div className="form-group">
          <label>Tags</label>
          <div className="tags-container">
            {tags.length === 0 ? <p>No tags available. Create some in Backend!</p> : null}
            {tags.map((tag) => (
              <div key={tag._id} className="tag-item">
                <input
                  type="checkbox"
                  id={`tag-${tag._id}`}
                  value={tag._id}
                  checked={selectedTags.includes(tag._id)}
                  onChange={() => handleTagChange(tag._id)}
                />
                <label htmlFor={`tag-${tag._id}`} className="tag-label">
                  {tag.name}
                </label>
              </div>
            ))}
          </div>
        </div>

        <button type="submit" className="submit-btn">
          Post Question
        </button>
      </form>
    </div>
  );
};

export default AskQuestion;