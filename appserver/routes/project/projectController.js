import SQL from "../../utilities/sql/sql.js";
import projectsQuery from "../../data/query/project/projects.json" assert { type: "json" };

class ProjectController {
  static async getProjects(req, res, next) {
    const value = null;
    const { projects } = projectsQuery;
    const query = projects;
    SQL.selectQuery(value, query)
      .then((result) => {
        res.json(result);
      })
      .catch(next);
  }
}

export default ProjectController;
