import "./styles/Dashboard.css";

export default function SalesReport() {
  return (
    <div className="card">
      <h3>Sales Report</h3>
      <div className="sales-report">
        <div className="report-row">
          <span>Product Launched</span>
          <span>233</span>
        </div>
        <div className="report-row">
          <span>Ongoing Product</span>
          <span>23</span>
        </div>
        <div className="report-row">
          <span>Product Sold</span>
          <span>482</span>
        </div>
      </div>
    </div>
  );
}
