import menuContent from "../../data/content/menu.json" assert { type: "json" };
import dashboardContent from "../../data/content/dashboard.json" assert { type: "json" };

class UserMenu {
  static getMenu() {
    const { menu } = menuContent;
    return menu;
  }

  static getDashboard() {
    const { dashboard } = dashboardContent;
    return dashboard;
  }
}

export default UserMenu;
