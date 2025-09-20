import React from "react";

export default function BudgetSummary({ summary }) {
  if (!summary) return null;
  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Summary</h2>
      <p>Total Income: {summary.totalIncome}</p>
      <p>Total Expense: {summary.totalExpense}</p>
      <p>Net: {summary.net}</p>
      <h3>By Category</h3>
      <ul>
        {summary.byCategory?.map((c, i) => (
          <li key={i}>
            {c.category} ({c.type}): {c.total}
          </li>
        ))}
      </ul>
    </div>
  );
}
