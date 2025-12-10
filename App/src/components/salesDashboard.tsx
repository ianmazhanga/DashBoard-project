import React from "react";
import "./salesDashboard.css";
import Sidebar from "./sidebar";
import "./styles/Dashboard.css";
import AnimatedNumber from "./AnimatedNumber.tsx";


const SalesDashboard: React.FC = () => {
  return (
    <div className="sd-app">
      <Sidebar />

      <main className="sd-main">
        <section className="sd-top-cards">
          {[
            { label: "Revenue", value: 12430, prefix: "$", sub: "+4.5% vs last week" },
            { label: "Orders", value: 312, sub: "Avg. order $39.8" },
            { label: "Visitors", value: 7812, sub: "Unique users" },
            { label: "Refunds", value: 320, prefix: "$", sub: "0.8% of revenue" },
          ].map((item, i) => (
            <div key={i} className="sd-card sd-small-card">
              <div className="sd-small">{item.label}</div>
              <div className="sd-big">
                <AnimatedNumber
                  value={item.value}
                  prefix={item.prefix}
                  duration={1500}
                  formatValue={(n: number) => n.toLocaleString()}
                />
              </div>
              <div className="sd-sub">{item.sub}</div>
            </div>
          ))}
        </section>
        <section className="sd-charts">
          <div className="sd-chart-large sd-card">
            <div className="sd-chart-header">
              <div>
                <div className="sd-muted">Sales Over Time</div>
                <div className="sd-title">This month</div>
              </div>
              <div className="sd-muted">Export ▾</div>
            </div>

            <div className="sd-spark" aria-hidden>
              {[24, 36, 64, 48, 78, 52, 90, 70].map((h, i) => (
                <div key={i} className="sd-bar" style={{ height: `${h}%` }} />
              ))}
            </div>

            <div className="sd-chart-footer">
              <div>
                Revenue:{" "}
                <strong>
                  <AnimatedNumber value={68400} prefix="$" duration={1500} />
                </strong>
              </div>
              <div>
                Orders:{" "}
                <strong>
                  <AnimatedNumber value={1240} duration={1500} />
                </strong>
              </div>
            </div>
          </div>

          
          <div className="sd-chart-small sd-card">
            <div className="sd-chart-header">
              <div>
                <div className="sd-muted">Top Products</div>
                <div className="sd-title">By revenue</div>
              </div>
              <div className="sd-muted">View ▾</div>
            </div>

            <ul className="sd-top-products">
              {[
                { name: "Premium Shirt", info: "Shirts • 320 sold", val: 9840, prefix: "$", color: "#f6a" },
                { name: "Sneakers", info: "Shoes • 210 sold", val: 7120, prefix: "$", color: "#6af" },
                { name: "Running Cap", info: "Accessories • 540 sold", val: 4320, prefix: "$", color: "#f6a" },
              ].map((p, i) => (
                <li key={i}>
                  <div className="sd-prod-info">
                    <div
                      className="sd-prod-icon"
                      style={{ background: `linear-gradient(135deg, ${p.color}, #6a9)` }}
                    >
                      {p.name[0]}
                    </div>
                    <div>
                      <div className="sd-prod-name">{p.name}</div>
                      <div className="sd-muted sd-small">{p.info}</div>
                    </div>
                  </div>
                  <div className="sd-prod-value">
                    <AnimatedNumber value={p.val} prefix={p.prefix} duration={1500} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Bottom Section */}
        <section className="sd-bottom-section">
          <div className="sd-card sd-activity">
            <div className="sd-section-title">Recent activity</div>
            <ul>
              <li>
                <span className="sd-dot"></span> New order #1023 —{" "}
                <small className="sd-muted">2 hours ago</small>
              </li>
              <li>
                <span className="sd-dot"></span> Refund processed —{" "}
                <small className="sd-muted">5 hours ago</small>
              </li>
              <li>
                <span className="sd-dot"></span> New review added —{" "}
                <small className="sd-muted">Yesterday</small>
              </li>
            </ul>
          </div>

          <div className="sd-card">
            <div className="sd-section-title">Latest orders</div>
            <table className="sd-table">
              <thead>
                <tr>
                  <th>Order</th>
                  <th>Customer</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { order: "#1023", customer: "Adam", amount: 129 },
                  { order: "#1022", customer: "Maria", amount: 59 },
                  { order: "#1021", customer: "James", amount: 220 },
                ].map((o, i) => (
                  <tr key={i}>
                    <td>{o.order}</td>
                    <td>{o.customer}</td>
                    <td>
                      <AnimatedNumber value={o.amount} prefix="$" duration={1500} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      {/* Right Panel / Quick Stats */}
      <aside className="sd-right">
        <div className="sd-right-header">
          <div>
            <div className="sd-muted sd-small">Today</div>
            <div className="sd-title">October 27, 2025</div>
          </div>
          <div className="sd-muted">Settings ▾</div>
        </div>

        <div className="sd-right-section">
          <div className="sd-section-title">Quick stats</div>
          <div className="sd-quick-stats">
            <div>
              <div className="sd-quick-stat">
                <div className="sd-quick-stat-value">
                  <AnimatedNumber value={1240} duration={1500} />
                </div>
                <div className="sd-quick-stat-label">Total Orders</div>
              </div>

              <div className="sd-quick-stat">
                <div className="sd-quick-stat-value">
                  <AnimatedNumber value={68400} prefix="$" duration={1500} />
                </div>
                <div className="sd-quick-stat-label">Total Revenue</div>
              </div>

              <div className="sd-quick-stat">
                <div className="sd-quick-stat-value">
                  <AnimatedNumber value={320} duration={1500} />
                </div>
                <div className="sd-quick-stat-label">New Customers</div>

                <div className="sd-progress-ring">
                  <svg viewBox="0 0 36 36">
                    <path
                      className="sd-ring-bg"
                      d="M18 2.0845
                         a 15.9155 15.9155 0 0 1 0 31.831
                         a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="sd-ring"
                      strokeDasharray="70, 100"
                      d="M18 2.0845
                         a 15.9155 15.9155 0 0 1 0 31.831
                         a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <div className="sd-ring-text">70%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default SalesDashboard;
