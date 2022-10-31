import menuContent from "../../data/content/menu.json" assert { type: "json" };
import dashboardContent from "../../data/content/dashboard.json" assert { type: "json" };

// const _ = require("lodash");
// const securityQuestion = require("../../data/ref/securityquestion.json");
// const usercode = require("../../data/ref/usercode.json");
// const permission = require("../../data/content/permission.json");
// const role = require("../../data/ref/role.json");

class UserMenu {
  // static getMenu(user) {
  //   const { data } = menu;
  //   // const item = _.find(data, { restricted: user.restricted, key: user.key });
  //   // return _.clodeDeep(item.data);
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
  //       throw webError.serverValidationError(13);
  //     }
  //   }

  // static getSecurityQuestion() {
  //   const { data } = securityquestion;
  //   return data;
  // }

  // static getSecurityQuestionText(code) {
  //   const { data } = securityQuestion;
  //   const item = _.find(data, { code });
  //   if (item === undefined) {
  //     throw webError.ServerValidationError(18);
  //   }
  //   return item.text;
  // }

  // static getPermissionList() {
  //   const { data } = permission;
  //   return data;
  // }

  // static getAdminPermission() {
  //   let { data } = permission;
  //   data = _.filter(data, (obj) => obj.isAdmin);
  //   return _.map(data, "name");
  // }

  // static isAdminPresent(userPermission) {
  //   if (!userPermission) return false;
  //   const isAdmin = userPermission.includes("3");
  //   return isAdmin;
  // }

  // static getPermission(name) {
  //   const { data } = permission;
  //   const item = _.find(data, { name });
  //   let arr = [];
  //   if (item !== undefined) {
  //     arr = item.publicQuery;
  //   }
  //   return arr;
  // }

  // static getRole(privs) {
  //   let { data } = role;
  //   const lst = _.filter(data, (obj) => privs.includes(obj.keys));
  //   return _.map(lst, "text");
  // }

  // static availableDashboard(item, userrole) {
  //   if (!item.privs) return true;
  //   const { privs } = item;
  //   const arr = [...privs];
  //   const product = arr[0];
  //   const ind = parseInt(arr[1]);

  //   let result = false;
  //   for (let i = ind; i < 4; i++) {
  //     const str = `${product}${i.toString()}`;
  //     if (userrole.includes(str)) {
  //       result = true;
  //       break;
  //     }
  //   }
  //   return result;
  // }
}

export default UserMenu;
