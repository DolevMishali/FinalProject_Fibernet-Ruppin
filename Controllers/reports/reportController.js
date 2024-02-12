const Report = require("../../models/reports/reportModel");

exports.getAllReports = () => {
  return Report.find({})
    .then((reports) => {
      return reports;
    })
    .catch((err) => {
      //handle error
    });
};

exports.createReport = (data) => {
  const newReport = new Report(data);

  return newReport.save().catch((err) => {
    return err;
  });
};

exports.updateReport = (reportId, updatedData) => {
  return Report.findByIdAndUpdate(reportId, updatedData, { new: true });
};
