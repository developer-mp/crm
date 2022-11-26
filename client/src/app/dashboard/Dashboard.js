import { useSelector } from "react-redux";
import DashboardItem from "./DashboardItem.js";
import "./Dashboard.css";

const Dashboard = () => {
  const { dashboardItems } = useSelector((store) => store.dashboard);

  return (
    <div className="dashboard-container">
      <div className="dashboard-container-wrapper">
        {dashboardItems.map((item) => (
          <DashboardItem data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
