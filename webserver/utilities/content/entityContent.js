import pkg from "lodash";
const { find, cloneDeep, filter, concat } = pkg;

class EntityContent {
  static getData(query, arr) {
    const subentity = query.subentity === undefined ? "" : query.subentity;
    const topic = query.topic === undefined ? "" : query.topic;
    let item = find(arr, { subentity, topic });
    // if (item === undefined) {
    //   item = find(arr, { subentity: "Edits", topic: "" });
    // }
    return cloneDeep({ item });
    //return cloneDeep(item.data);
  }

  // static assignAvailableList(lst, nme, arr) {
  //   const item = _.find(lst, { column: nme });
  //   if (item !== undefined) {
  //     item.availableList = arr;
  //   }
  // }

  // static setSelected(lst, nme) {
  //   const item = _.find(lst, { nameLnme });
  //   if (item !== undefined) {
  //     item.isSelected = true;
  //   }
  // }

  // static getDropDownTypeList(lst) {
  //   const data = _.filter(
  //     lst,
  //     (o) => o.filterType === 2 && o.availableList === undefined
  //   );
  //   return _.cloneDeep(data);
  // }

  static getDetailDropDownTypeList(result, datatype = 2) {
    const lst = _(result)
      .map("section")
      .flatten()
      .map("list")
      .flatten()
      .map("column")
      .flatten()
      .value();
    const lstD = filter(
      lst,
      (o) => o.datatype === datatype && o.availableList === undefined
    );
    const lstR = _(result)
      .map("section")
      .flatten()
      .map("list")
      .flatten()
      .map("record")
      .flatten()
      .value();
    const lstDR = filter(
      lstR,
      (o) => o.datatype === datatype && o.availableList === undefined
    );
    const lstDAll = concat(lstD, lstDR);
    return lstDAll;
  }
}

export default EntityContent;
