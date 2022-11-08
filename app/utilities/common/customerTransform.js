import { lodash as _ } from "lodash";

class CustomerTransform {
  static applyCustomerTransform(data) {
    _.forEach(data, (item) => {
      this.applyCustomerItem(item);
    });
  }

  static applyCustomerItem(item) {
    _.forEach(hide, (el) => {
      item[el] = undefined;
    });

    _.forEach(transform, (el) => {
      item[el.key] = item[el.key] ? el.yes : el.no;
    });

    _.forEach(trims, (el) => {
      item[el] = item[el].trim();
    });
  }
}

export default CustomerTransform;
