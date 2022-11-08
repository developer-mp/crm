//import logger from
import Filter from "./../utilities/common/filter";

class Helper {
  static findFilter(data) {
    let filters = [];
    if (data !== undefined && data.filters !== undefined) {
      filters = data.filters;
    }
    return filters;
  }

  static applyFilter(response, filters) {
    const data = Filter.applyFilters(response, filters);
    const item = { ..._.cloneDeep(success) };
    item.result.data = data;
    return item;
  }

  static buildFilterAll(data, item) {
    let filter = {};
    if (data !== undefined && !_.isEmpty(data)) filter = { ...data };

    if (item !== undefined) filter[item.key] = item.value;
    return filter;
  }
}

export default Helper;
