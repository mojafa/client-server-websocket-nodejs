class Student {
  studentName = "";
  studentAdmissionNo = 0;
  courseInfo = "";
  personalCode = "";
  constructor() {}

  setStudent(jsonData) {
    let parsedData = JSON.parse(jsonData);

    this.studentName = parsedData.firstName + " " + parsedData.lastName;
    this.studentAdmissionNo = parseInt(parsedData.admNo);
    this.courseInfo = parsedData.courseInfo;
    this.personalCode = parsedData.code;
  }

  get studentName() {
    return this.studentName;
  }

  get studentAdmissionNo() {
    return this.studentAdmissionNo;
  }

  get courseInfo() {
    return this.courseInfo;
  }

  get personalCode() {
    this.personalCode;
  }
}

module.exports = Student;
