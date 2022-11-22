const _ = require("lodash");
//const logger = require("../../logger/winston");

class QueryDetail {
  static setDetailResult(items, data, search) {
    _.forEach(data, (item) => {
      if (item.type === "record") {
        this.setDetailRecordResult(item, items);
      } else if (item.type === "list") {
        this.setDetailListResult(item, items);
      } else if (item.type === "block") {
        try {
          this.setDetailBlockResult(item, items, search);
        } catch (e) {
          return e;
          //logger.error(`Error ${item.name} - ${e}`);
        }
      }
    });
  }

  static setDetailRecordResult(item, items) {
    const { name } = item;
    let result = _(items)
      .map("section")
      .flatten()
      .find((el) => el.name === name);
    if (result !== undefined) {
      _.forEach(item.data, (el) => {
        _.forOwn(el, (value, key) => {
          this.assignRecordItem(result.record, key, value);
        });
      });
    } else {
      result = _(items)
        .map("section")
        .flatten()
        .map("list")
        .flatten()
        .find((el) => el.name === name);
      if (result !== undefined && result.record) {
        _.forEach(item.data, (el) => {
          _.forOwn(el, (value, key) => {
            this.assignRecordItem(result.record, key, value);
          });
        });
      }
    }
  }

  static assignRecordItem(lst, key, value) {
    try {
      const cat = _.find(lst, { dataField: key });
      if (cat !== undefined) {
        cat.value = value;
      }
    } catch (e) {
      return e;
      //logger.error(`Error ${e}`);
    }
  }

  static setDetailListResult(item, items) {
    const { name } = item;
    const result = _(items)
      .map("section")
      .flatten()
      .map("list")
      .flatten()
      .find((el) => el.name === name);
    if (result !== undefined) {
      result.data = item.data;
    }
  }

  static applyRoleFilter(items, role) {
    const content = _.filter(items, (obj) => obj.role.includes(role));
    _.forEach(content, (item) => {
      _.remove(item.section, (obj) => !obj.role.includes(role));
    });
    _.forEach(content, (item) => {
      _.forEach(item.section, (elem) => {
        _.forEach(elem.list, (el) => {
          _.remove(el.record, (obj) => !obj.role.includes(role));
          _.remove(el.column, (obj) => !obj.role.includes(role));
        });
      });
    });
    return content;
  }

  static setDetailBlockResult(item, items, search) {
    const { name, results } = item;
    try {
      if (search.block === undefined || search.block.length === 0) return;
      const { section } = _.find(items, { Panel: name });
      const block = _.find(search.block, { panel: name });
      if (block === undefined || block.name === undefined) return;
      const element = _.find(section, { name: block.name });
      if (element === undefined) return;
      const showAll = block.showAll !== undefined && block.showAll;
      const line = _.cloneDeep(element);
      _.remove(section, (obj) => obj.name === block.name);
      let newLine = {};
      _.forEach(results, (row, ind) => {
        const record = _.find(row, { name: block.name });
        const { value } = _.find(record.data, { key: block.key });
        const collapsed = ind !== 0 && !showAll;
        newLine = {
          ..._.cloneDeep(line),
          title: value,
          index: ind,
          defaultCollapsed: ind !== 0 && !showAll,
        };
        _.forEach(row, (obj) => {
          if (obj.type === "record") {
            this.setDetailBlockResult(obj, newLine, ind);
          } else if (obj.type === "list") {
            this.setDetailBlockListResult(obj, newLine, ind);
          }
        });
        section.push(newLine);
      });
    } catch (e) {
      return e;
      //logger.error(`Error ${e}`);
    }
  }

  static findLineRecord(line, name) {
    if (line.name === name) return line;
    const result = _.find(line.list, { name });
    if (result !== undefined && result.record) return result;
    return undefined;
  }

  static setDetailBlockRecordResult(item, line, ind) {
    const { data, name } = item;
    const result = this.findLineRecord(line, name);
    if (result !== undefined) {
      result.name = `${name}###${ind}`;
      _.forEach(data, (el) => {
        this.assignRecordItem(result.record, el);
      });
    }
  }

  static setDetailBlockListResult(item, line, ind) {
    const { data, name } = item;
    const result = _.find(line.list, { name });
    if (result !== undefined) {
      result.name = `${name}###${ind}`;
      result.data = data;
    }
  }

  static listUI(arr, name) {
    return _.map(arr, (item) => item[name]);
  }

  static applyFilterForAdd(items, load) {
    const name = load.name ? load.name : "BaseDetail";
    const content = _.filter(items, (obj) => obj.isBaseAdd);
    _.forEach(content, (item) => {
      _.remove(item.section, (obj) => obj.name !== name);
    });
    return content;
  }

  static applyCRMFilter(items, search, result, crm) {
    const { entity, subentity, topic } = search;
    if (entity !== "Products" || subentity !== "" || topic !== "") {
      return items;
    }
    const customer = _.find(result, (item) => item.name === "CustomerHeading");
    if (customer === undefined) {
      return items;
    }
    if (
      customer.data !== undefined &&
      customer.data[0].customerdomain === crm
    ) {
      return items;
    }
    const content = _.filter(items, (obj) => obj.Panel !== crm);
    return content;
  }
}

export default QueryDetail;
