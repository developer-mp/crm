import menuContent from "../../data/content/menu.json" assert { type: "json" };
import dashboardContent from "../../data/content/dashboard.json" assert { type: "json" };

class UserMenu {
  // static getMenu() {
  //   const { data } = menu;
  //   // const item = _.find(data, { restricted: user.restricted, key: user.key });
  //   // return _.clodeDeep(item.data);
  //   return data;
  // }

  static getMenu() {
    const { menu } = menuContent;
    return menu;
  }

  static getDashboard() {
    const { dashboard } = dashboardContent;
    return dashboard;
  }

  // static userCode(code) {
  //   const { data } = userCode;
  //   let item = _.find(data, { code });
  //   if (item === undefined) {
  //     item = _.find(data, { code: 200 });
  //   }
  //   console.log(item);
  //   return item;
  // }

  //   static checkUserEndPointPermission (user){
  //     const item=this.userCode(user.code);
  //     if(item.restricted){

  //     }
  //   }
}

export default UserMenu;
