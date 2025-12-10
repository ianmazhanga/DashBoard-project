import Sidebar from "../sidebar";
import Header from "../Header";
import StatCard from "../statcard";
import RevenueChart from "../RevenueChart";
import DonutChart from "../DonutChart";
import TransactionsList from "../Transactionslist";
import SalesReport from "../SalesReport";
import "../styles/Dashboard.css";


export default function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar />

      <main className="main-content">
        <Header />

        <div className="dashboard-grid">

          <section className="left-panel">
            <div className="stats-row">
              <StatCard title="Net Income" value="$193.000" change="+35%" positive />
              <StatCard title="Total Return" value="$32.000" change="-24%" />
              <StatCard title="Total Sales" value="$120.000" change="+12%" positive />
            </div>

            
            <div className="revenue-card small-chart">
              <h4>Revenue</h4>
              <RevenueChart />
            </div>

            
            <div className="sales-report small-chart">
              <h4>Sales Report</h4>
              <SalesReport />
            </div>

        
            <TransactionsList />
          </section>

    
          <aside className="right-panel">
        
            <div className="donut-card small-donut">
              <h4>Sales Completion</h4>
              <DonutChart />
            </div>

            
            <div className="upgrade-box">
              <h3>Level up your sales managing to the next level.</h3>
              <p>An easy way to manage sales with care and precision.</p>
              <button>Update to Siohioma</button>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

