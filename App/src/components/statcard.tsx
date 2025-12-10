import "./styles/Dashboard.css";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  positive?: boolean;
}

export default function StatCard({ title, value, change, positive }: StatCardProps) {
  return (
    <div className="stat-card">
      <p className="stat-title">{title}</p>
      <h3 className="stat-value">{value}</h3>
      <p className={`stat-change ${positive ? "positive" : "negative"}`}>
        {change} from last month
      </p>
    </div>
  );
}
