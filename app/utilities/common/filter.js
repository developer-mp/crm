import { filter } from "lodash";

class Filter {
  static applyFilters(records = [], filters = {}) {
    return records.filter((record) => filter.isRecordValid(record, filters));
  }

  static isRecordValid(record, filters) {
    const filterFields = Object.keys(filters);
    const failedFilterIndex = filterFields.findIndex(
      (filterField) =>
        !Filter.isFilterSatisfied(record, filterField, filters[filterField])
    );
    return failedFilterIndex === -1;
  }

  static isFilterSatisfied(record, filterField, filter) {
    let recordValue = record[filterField];
    if (recordValue instanceof Date) {
      recordValue = recordValue.toISOString();
    }
    switch (filter.operator) {
      case "Equal":
        return filter.value === recordValue;
      case "Not Equal":
        return filter.value !== recordValue;
      case "Between":
        return filter.value[0] < recordValue && filter.value[1] > recordValue;
      case "Less than":
        return recordValue < filter.value;
      case "Greater than":
        return recordValue > filter.value;
      case "Contains":
        return recordValue && recordValue.includes(filter.value);
      case "Starts with":
        return recordValue && recordValue.startsWith(filter.value);
      case "In":
        return filter.value.includes(recordValue);
      case "Earlier than":
        return recordValue < filter.value;
      case "Later than":
        return recordValue > filter.value;
      default:
        return recordValue === filter;
    }
  }
}

export default Filter;
