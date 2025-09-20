import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:4000/api",
});

// Transactions
export const getTransactions = () => API.get("/transactions");
export const addTransaction = (data) => API.post("/transactions", data);
export const updateTransaction = (id, data) => API.put(`/transactions/${id}`, data);
export const deleteTransaction = (id) => API.delete(`/transactions/${id}`);
export const getBudgetSummary = () => API.get("/summary/budget");
