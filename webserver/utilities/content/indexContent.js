import CustomerContent from "./customerContent.js";
import ProductContent from "./productContent.js";
import ServiceContent from "./serviceContent.js";
import ProjectContent from "./projectContent.js";
import InsightContent from "./insightsContent.js";
import ContactContent from "./contactContent.js";

class IndexContent {
  static findDataContent(id) {
    try {
      let arr = {};
      const contentId = parseInt(id.toString()[0]);
      switch (contentId) {
        case 1:
          arr = CustomerContent.getDataList();
          break;
        case 2:
          arr = ProductContent.getDataList();
          break;
        case 3:
          arr = ServiceContent.getDataList();
          break;
        case 4:
          arr = ProjectContent.getDataList();
          break;
        case 5:
          arr = InsightContent.getDataList();
          break;
        case 6:
          arr = ContactContent.getDataList();
          break;
        default:
          break;
      }
      let dataContent = arr.find((x) => x.id === id).detail;
      return dataContent;
    } catch (e) {
      return [];
    }
  }
}

export default IndexContent;
