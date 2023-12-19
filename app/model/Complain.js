class Complain {
  constructor(
    id,
    assignName,
    description,
    complainName,
    createdDate,
    depId,
    priorityId,
    reportName,
    statusId,
    updatedDate
  ) {
    this.id = id;
    this.assignName = assignName;
    this.description = description;
    this.complainName = complainName;
    this.createdDate = createdDate;
    this.depId = depId;
    this.priorityId = priorityId;
    this.reportName = reportName;
    this.statusId = statusId;
    this.updatedDate = updatedDate;
  }
}

export default Complain;
