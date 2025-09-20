import React, { useEffect, useState } from "react";
import {
  getTransactions,
  getBudgetSummary,
  addTransaction,
  updateTransaction,
  deleteTransaction,
} from "../api";
import AddTransaction from "../components/AddTransaction";
import TransactionList from "../components/TransactionList";
import BudgetSummary from "../components/BudgetSummary";
import EditTransaction from "../components/EditTransaction";

export default function HomePage() {
  const [transactions, setTransactions] = useState([]);
  const [summary, setSummary] = useState({});
  const [editingTx, setEditingTx] = useState(null);

  const loadData = async () => {
    const txRes = await getTransactions();
    const sumRes = await getBudgetSummary();
    setTransactions(txRes.data);
    setSummary(sumRes.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleAdd = async (tx) => {
    await addTransaction(tx);
    loadData();
  };

  const handleUpdate = async (id, tx) => {
    await updateTransaction(id, tx);
    setEditingTx(null);
    loadData();
  };

  const handleDelete = async (id) => {
    await deleteTransaction(id);
    loadData();
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h1>💰 FinTrack</h1>
      <AddTransaction onAdd={handleAdd} />
      <BudgetSummary summary={summary} />
      <TransactionList
        transactions={transactions}
        onDelete={handleDelete}
        onEdit={(tx) => setEditingTx(tx)}
      />
      {editingTx && (
        <EditTransaction
          tx={editingTx}
          onSave={handleUpdate}
          onCancel={() => setEditingTx(null)}
        />
      )}
    </div>
  );
}
