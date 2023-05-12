import contactsData from "../../data/entities/contacts/data.json" assert { type: "json" };
import pkg from "lodash";
const { cloneDeep } = pkg;

class ContactContent {
  static getDataList() {
    const { list } = contactsData;
    return cloneDeep(list);
  }
}

export default ContactContent;
