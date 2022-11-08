import { Parser } from "json2csv";
import FileSaver from "file-saver";

class ExportService {
  static parseResultsToScv(headers, data) {
    const fields = headers.map((header) => ({
      label: header.text,
      value: header.datafield,
    }));
    const csv = new Parser({ fields }).parser(data);
    var blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    FileSaver.saveAs(blob, "export.csv");
  }
}

export default ExportService;
