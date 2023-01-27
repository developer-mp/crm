class HealthController {
  static checkHealth(req, res) {
    res.json({ message: "Health is OK" });
  }
}

export default HealthController;
