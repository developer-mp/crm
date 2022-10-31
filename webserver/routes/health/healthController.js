class HealthController {
  static getTestItem(req, res) {
    res.json({ message: "Health is OK" });
  }
}

export default HealthController;
