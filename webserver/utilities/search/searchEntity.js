import entity from "../../data/content/entity.json" assert { type: "json" };
import pkg from "lodash";
const { cloneDeep, find, flatMap, map, filter, each, forOwn, forEach } = pkg;

class SearchEntity {
  static getEntityList() {
    const { lst } = entity;
    return cloneDeep(lst);
  }

  static findEntity(id) {
    const arr = this.getEntityList();
    let modArr = [];

    for (let i = 0; i < 3; i++) {
      modArr.push({
        id: arr[i]?.id,
        key: arr[i]?.key,
      });
      for (let j = 0; j < 3; j++) {
        modArr.push({
          id: arr[i]?.subentities[j]?.id,
          key: arr[i]?.subentities[j]?.key,
        });
        for (let k = 0; k < 3; k++) {
          modArr.push({
            id: arr[i]?.subentities[j]?.filters[k]?.id,
            key: arr[i]?.subentities[j]?.filters[k]?.key,
          });
        }
      }
    }

    let searchKey = modArr.find((x) => x.id === id).key;
    return searchKey;
  }

  // static getSearchFilter(filters) {
  //   const filter = {};
  //   _.forEach(filters, (item) => {
  //     filter[item.column] = { operator: item.operator, value: item.value };
  //   });
  //   return filter;
  // }

  // static getSearchFilterOld(filters) {
  //   const data = _.filter(filters, (o) => o[operator] === "Equal");
  //   return _.map(data, (item) => ({
  //     key: item.column,
  //     comparable: item.operator,
  //     value: item.value,
  //   }));
  // }

  static getResultCode(entity, code, requestKeys, pks) {
    if (pks.length === 1) return { id: code };
    const arr = [];
    each(pks, (item) => {
      if (requestKeys[item]) {
        arr.push(requestKeys[item]);
      } else {
        arr.push("");
      }
    });
    return { id: arr };
  }

  // static buildAppRequest(id, filters, name, topic) {
  //   const record = { pk: id };
  //   if (filters !== undefined) {
  //     _.forEach(filters, (item) => {
  //       if (item.key === "id") {
  //         item.value = item.value !== "" ? item.value : 0;
  //       }
  //       if (item.key === "updated") item.value = new Date();
  //       record[item.key] = item.value;
  //     });
  //   } else {
  //     record.id = id;
  //   }
  //   return { id, record, name, topic };
  // }

  // static createEntityId(userCode, userrole) {
  //   const keys = [];
  //   const names = [];

  //   if (userCode.restricted) return { names, keys };

  //   const arr = this.getEntityList();
  //   _.forEach(arr, (item) => {
  //     if (this.availableEntity(item, userrole)) {
  //       keys.push(item.id);
  //       if (!_.includes(names, item.name)) {
  //         names.push(item.name);
  //       }
  //       _.forEach(item.subentities, (subitem) => {
  //         if (this.availableEntity(subitem, userrole)) {
  //           keys.push(subitem.id);
  //           if (!_.includes(names, `${item.name}.${subitem.name}`)) {
  //             names.push(`${item.name}.${subitem.name}`);
  //           }
  //           _.forEach(subitem.filters, (filter) => {
  //             if (this.availableEntity(filter, userrole)) {
  //               keys.push(filter.id);
  //               if (
  //                 !_.includes(
  //                   names,
  //                   `${item.name}.${subitem.name}.${filter.name}`
  //                 )
  //               ) {
  //                 names.push(`${item.name}.${subitem.name}.${filter.name}`);
  //               }
  //             }
  //           });
  //         }
  //       });
  //     }
  //   });
  //   return { names, keys };
  // }

  // static findEntityId(key) {
  //   const arr = this.getEntityList();
  //   const [area, topic, subtopic] = key.split(".");
  //   const entity = _.find(
  //     arr,
  //     (item) => item.name === area || item.key === area
  //   );
  //   if (topic === undefined) {
  //     return { name: entity.name, id: entity.id };
  //   }
  //   const subentity = _.find(
  //     entity.subentities,
  //     (item) => item.name === topic || item.key === `${area}.${topic}`
  //   );
  //   if (subentity === undefined) return { name: entity.name, id: 0 };
  //   if (subtopic === undefined) return { name: entity.name, id: subentity.id };
  //   const filter = _.find(
  //     subentity.filters,
  //     (item) =>
  //       item.name === subtopic || item.key === `${area}.${topic}.${subtopic}`
  //   );
  //   if (filter !== undefined) return { name: entity.name, id: filter.id };
  //   return { name: "", id: 0 };
  // }

  static applyUserEntities(list, keys) {
    _.forEach(list, (entity) => {
      _.forEach(entity.subentities, (subentity) => {
        if (subentity.filters.length > 0) {
          _.remove(subentity.filters, (item) => !keys.includes(item.id));
        }
      });
      _.remove(
        entity.subentities,
        (item) => item.filters.length === 0 && !keys.includes(item.id)
      );
    });
  }

  // static applyPublicEntities(list, arr) {
  //   let item = {};
  //   _.forEach(arr, (name) => {
  //     item = _.find(list, { name });
  //     if (item !== undefined) {
  //       item.isPublic = true;
  //     }
  //   });
  // }

  // static availableEntity(item, userrole) {
  //   if (!item.role) return true;

  //   const { role } = item;

  //   const arr = [...role];
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
  // }
}
export default SearchEntity;
