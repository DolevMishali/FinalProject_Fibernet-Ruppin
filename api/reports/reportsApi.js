const express = require("express");
const router = express.Router();
const reportController = require("../../Controllers/reports/reportController");

router.get("/reports", (req, res) => {
  reportController
    .getAllReports()
    .then((reports) => {
      res.json(reports);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.post("/reports", (req, res) => {
  reportController
    .createReport(req.body)
    .then((newReport) => {
      res.json(newReport);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.put("/reports/:id", (req, res) => {
  const reportId = req.params.id;
  const updatedData = req.body;

  reportController
    .updateReport(reportId, updatedData)
    .then((updatedReport) => {
      if (!updatedReport) {
        // No report was found with the given ID
        return res.status(404).send({ message: "Report not found" });
      }
      res.json(updatedReport);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

module.exports = router;
