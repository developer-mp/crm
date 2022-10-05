//import { withRouter } from "react-router-dom";
// import { useNavigate } from "react-router-dom2";
import "./Dashboard.css";

const DashboardItem = (props) => {
  // const handleLink = () => {
  //   let { history, data } = props;
  //   history.push({
  //     pathname: data.urlLink,
  //   });
  // };

  // let navigate = useNavigate();

  // const handleLink = () => {
  //   let { data } = props;
  //   navigate(data.urlLink, { replace: true });
  // };

  const { img, title, bgColor } = props.data;

  const divStyle = {
    backgroundColor: bgColor,
    backgroundImage: "url(" + img + ")",
  };
  return (
    <div className="dashboardItem">
      {/* <div className="dashboardBox" onClick={handleLink}> */}
      <div className="dashboardImg" style={divStyle}></div>
      <h3>{title}</h3>
      {/* </div> */}
    </div>
  );
};

export default DashboardItem;

//export default withRouter(DashboardItem);
