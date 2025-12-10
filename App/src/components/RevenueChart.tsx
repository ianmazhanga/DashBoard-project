import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import "./styles/Dashboard.css";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function RevenueChart() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Income",
        data: [30, 45, 60, 80, 90],
        backgroundColor: "#2e7d32",
      },
      {
        label: "Expenses",
        data: [20, 35, 50, 60, 70],
        backgroundColor: "#a5d6a7",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top" as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  return (
    <div className="card">
      <h3>Revenue</h3>
      <Bar data={data} options={options} />
    </div>
  );
}
