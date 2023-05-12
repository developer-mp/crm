import dataContent from "../../data/content/content.json" assert { type: "json" };
import pkg from "lodash";
const { cloneDeep } = pkg;

class SearchEntity {
  static getEntityContent() {
    const { entities } = dataContent;
    return cloneDeep(entities);
  }

  static findEntity(id) {
    const arr = this.getEntityContent();
    let modArr = [];

    for (let i = 0; i < arr.length; i++) {
      modArr.push({
        id: arr[i]?.id,
        key: arr[i]?.key,
      });
      for (let j = 0; j < arr.length; j++) {
        modArr.push({
          id: arr[i]?.subentities[j]?.id,
          key: arr[i]?.subentities[j]?.key,
        });
        for (let k = 0; k < arr.length; k++) {
          modArr.push({
            id: arr[i]?.subentities[j]?.categories[k]?.id,
            key: arr[i]?.subentities[j]?.categories[k]?.key,
          });
        }
      }
    }

    let searchKey = modArr.find((x) => x.id === id).key;
    return searchKey;
  }
}
export default SearchEntity;
