import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "./styles/Dashboard.css";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DonutChart() {
  const data = {
    labels: ["Sales", "Percentage", "View Count"],
    datasets: [
      {
        data: [23, 16, 68],
        backgroundColor: ["#2e7d32", "#fbc02d", "#ef6c00"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "70%",
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="card donut">
      <h3>Total View Performance</h3>
      <div className="donut-container">
        <Doughnut data={data} options={options} />
        <div className="donut-center">
          <span className="donut-value">565K</span>
          <span className="donut-label">Total Count</span>
        </div>
      </div>
    </div>
  );
}
