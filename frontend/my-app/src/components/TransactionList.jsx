import React from "react";

export default function TransactionList({ transactions, onDelete, onEdit }) {
  return (
    <table border="1" cellPadding="6" style={{ width: "100%", marginTop: "20px" }}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Description</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((tx) => (
          <tr key={tx._id}>
            <td>{tx.type}</td>
            <td>{tx.amount}</td>
            <td>{tx.category}</td>
            <td>{tx.description}</td>
            <td>{new Date(tx.date).toLocaleDateString()}</td>
            <td>
              <button onClick={() => onEdit(tx)}>Edit</button>{" "}
              <button onClick={() => onDelete(tx._id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
