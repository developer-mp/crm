import { lodash as _ } from "lodash";

export const dependableComponent = (components, componentName, value) => {
  let result = {};

  if (componentName === "Occurs") {
    _.find(components, { name: "FrequencyInterval" }).hidden =
      value !== "Weekly";
    _.find(components, { name: "IsDaily" }).hidden = value !== "Daily";

    if (value !== "Daily") {
      _.find(components, { name: "IsDaily" }).value = false;
      _.find(components, { name: "LoadEndTime" }).hidden = true;
      _.find(components, { name: "OccursEvery" }).hidden = true;
      result = { name: "IsDaily", value: false };
    }
  }

  if (componentName === "IsDaily") {
    _.find(components, { name: "LoadEndTime" }).hidden = !value;
    _.find(components, { name: "OccursEvery" }).hidden = !value;
  }

  if (componentName === "Project") {
    const workbook = _.find(components, { name: "Workbook" });
    workbook.dropdownList = workbook.dropdownList.map((item) => {
      item.hidden = item["projectname"] != value;
      return { ...item };
    });
  }

  if (componentName === "Folder") {
    const file = _.find(components, { name: "File" });
    file.dropdownList = file.dropdownList.map((item) => {
      item.hidden = item["filter"] != value;
      return { ...item };
    });
  }

  if (componentName === "CFolder") {
    const cfile = _.find(components, { name: "CFile" });
    cfile.dropdownList = cfile.dropdownList.map((item) => {
      item.hidden = item["filter"] != value;
      return { ...item };
    });
  }
  return result;
};
