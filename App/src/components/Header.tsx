import "./styles/Dashboard.css";

export default function Header() {
  return (
    <header className="header">
      <h2 className="header-title">Dashboard</h2>
      <input
        type="text"
        placeholder="Search anything..."
        className="search-input"
      />
    </header>
  );
}
