import React, { useState } from "react";

export default function EditTransaction({ tx, onSave, onCancel }) {
  const [form, setForm] = useState({
    type: tx.type,
    amount: tx.amount,
    category: tx.category,
    description: tx.description,
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(tx._id, { ...form, amount: parseFloat(form.amount) });
  };

  return (
    <div style={{ border: "1px solid gray", padding: "10px", marginTop: "20px" }}>
      <h3>Edit Transaction</h3>
      <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px" }}>
        <select name="type" value={form.type} onChange={handleChange}>
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>
        <input
          type="number"
          name="amount"
          value={form.amount}
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          value={form.category}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          value={form.description}
          onChange={handleChange}
        />
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
}
