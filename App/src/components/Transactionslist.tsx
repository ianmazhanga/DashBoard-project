import "./styles/Dashboard.css";

const transactions = [
  { name: "Premium T-Shirt", status: "Completed" },
  { name: "Playstation 5", status: "Pending" },
  { name: "Hoodie Gomborng", status: "Pending" },
  { name: "iPhone 15 Pro Max", status: "Completed" },
];

export default function TransactionsList() {
  return (
    <div className="card">
      <h3>Transactions</h3>
      <ul className="transaction-list">
        {transactions.map((t) => (
          <li key={t.name} className="transaction-item">
            <span>{t.name}</span>
            <span className={`status ${t.status.toLowerCase()}`}>
              {t.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
