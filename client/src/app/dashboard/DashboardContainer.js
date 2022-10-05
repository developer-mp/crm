import DashboardItem from "./DashboardItem.js";
import "./Dashboard.css";
import { useSelector } from "react-redux";

const DashboardContainer = () => {
  const { dashboardItems } = useSelector((store) => store.dashboard);
  const title = "Customers Management Console";

  return (
    <div className="dashboard">
      <h3>{title}</h3>
      {dashboardItems.map((item) => (
        <DashboardItem data={item} key={item.id} />
      ))}
    </div>
  );
};

export default DashboardContainer;
