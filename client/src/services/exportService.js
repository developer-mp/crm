import { saveAs } from "file-saver";

class ExportService {
  static exportToCSV = (data, file) => {
    const blob = new Blob([data], { type: "text/csv;charset=utf-8" });
    saveAs(blob, `${file}.csv`);
  };
}

export default ExportService;
