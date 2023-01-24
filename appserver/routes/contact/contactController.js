import SQL from "../../utilities/sql/sql.js";
import contactsQuery from "../../data/query/contact/contacts.json" assert { type: "json" };

class ContactController {
  static async getContacts(req, res, next) {
    const value = null;
    const { contacts } = contactsQuery;
    const query = contacts;
    SQL.selectQuery(value, query)
      .then((result) => {
        res.json(result);
      })
      .catch(next);
  }
}

export default ContactController;
