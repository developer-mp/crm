import projectsData from "../../data/entities/projects/data.json" assert { type: "json" };
import pkg from "lodash";
const { cloneDeep } = pkg;

class ProjectContent {
  static getDataList() {
    const { list } = projectsData;
    return cloneDeep(list);
  }
}

export default ProjectContent;
