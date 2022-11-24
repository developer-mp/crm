import DashboardItem from "./DashboardItem.js";
import "./Dashboard.css";
import { useSelector } from "react-redux";

const DashboardContainer = () => {
  const { dashboardItems } = useSelector((store) => store.dashboard);
  const title = "Catalog";

  return (
    <div className="d">
      <h3>{title}</h3>
      <div className="dashboard">
        {dashboardItems.map((item) => (
          <DashboardItem data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default DashboardContainer;
