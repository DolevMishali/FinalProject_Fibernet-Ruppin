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

exports.deleteReport = async (reportId) => {
  try {
    const deletedReport = await Report.findByIdAndDelete(reportId);
    if (!deletedReport) {
      throw new Error('Report not found');
    }
    return deletedReport;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

