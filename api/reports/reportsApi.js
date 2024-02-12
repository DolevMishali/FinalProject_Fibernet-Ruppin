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
    .updateReportByID(reportId, updatedData)
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

router.put('/reports/title/:title', async (req, res) => {
  const { title } = req.params;
  const updatedData = req.body;

  try {
    const report = await reportController.updateReportByTitle(title, updatedData);
    res.status(200).json(report);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/reports/:id", (req, res) => {
  const reportId = req.params.id;

  reportController
    .deleteReportById(reportId)
    .then(() => {
      res.status(200).send({ message: "Report successfully deleted" });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.delete("/reports/title/:title", async (req, res) => {
  const title = req.params.title;

  try {
    const result = await reportController.deleteReportByTitle(title);
    res.status(200).send(result);
  } catch (err) {
    if (err.message === 'No report found with the given title') {
      res.status(404).send({ message: err.message });
    } else {
      res.status(500).send({ message: err.message });
    }
  }
});

router.delete("/reports", async (req, res) => {
  try {
    const result = await reportController.deleteAllReports();
    res.status(200).send(result);
    res.status(200).send({ message: "Reports successfully deleted" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});


module.exports = router;