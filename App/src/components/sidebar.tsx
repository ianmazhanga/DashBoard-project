
import "./styles/Sidebar.css";
import {
  FaThLarge,
  FaChartBar,
  FaUsers,
  FaBox,
  FaEnvelope,
  FaWallet,
  FaCog,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="logo-icon">*</div>
        <h2 className="logo-text">Siohioma</h2>
      </div>

      <div className="menu-section">
        <h4 className="section-title">MENU</h4>
        <ul>
          <li><FaThLarge /> Overview</li>
          <li><FaChartBar /> Statistics</li>
          <li><FaUsers /> Customers</li>
          <li className="has-dropdown"><FaBox /> Product</li>
          <li className="messages">
            <FaEnvelope /> Messages
            <span className="badge">13</span>
          </li>
          <li><FaWallet /> Transactions</li>
        </ul>
      </div>

      <div className="menu-section general">
        <h4 className="section-title">GENERAL</h4>
        <ul>
          <li><FaCog /> Settings</li>
        </ul>
      </div>

      <div className="sidebar-footer">
        <p>© 2025 Siohioma</p>
        <small>All rights reserved</small>
      </div>
    </div>
  );
};

export default Sidebar;



