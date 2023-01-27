import entityContent from "../../data/content/entity.json" assert { type: "json" };
import pkg from "lodash";
const { cloneDeep } = pkg;

class SearchEntity {
  static getEntityContent() {
    const { entity } = entityContent;
    return cloneDeep(entity);
  }

  static findEntity(id) {
    const arr = this.getEntityContent();
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
}
export default SearchEntity;
