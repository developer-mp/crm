class HealthController {
  static async getTestItem(req, res) {
    res.json({ message: "App server is running" });
  }
}

export default HealthController;
