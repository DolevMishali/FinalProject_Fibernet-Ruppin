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

exports.updateReportByID = (reportId, updatedData) => {
  return Report.findByIdAndUpdate(reportId, updatedData, { new: true });
};

exports.updateReportByTitle = async (title, updatedData) => {
  try {
    // Find the report by title and update it with the new data
    const updatedReport = await Report.findOneAndUpdate({ title: title }, updatedData, { new: true });
    if (!updatedReport) {
      throw new Error('Report with the given title not found');
    }
    return updatedReport;
  } catch (err) {
    console.error(err);
    throw err;
  }
};


exports.deleteReportById = async (reportId) => {
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

exports.deleteReportByTitle = async (title) => {
  try {
    const deletedReport = await Report.deleteOne({ title: title });
    if (deletedReport.deletedCount === 0) {
      throw new Error('No report found with the given title');
    }
    return { message: 'Report successfully deleted' };
  } catch (err) {
    console.error(err);
    throw err;
  }
};

exports.deleteAllReports = async () => {
  try {
    await Report.deleteMany({});
    return { message: 'All reports successfully deleted' };
  } catch (err) {
    console.error(err);
    throw err;
  }
};