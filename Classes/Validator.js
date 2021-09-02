/**
 * The class should validate the incoming JSON
 * and returns relevant warnings depending on missing fields
 */

class Validator {
  constructor() {}

  #isEmpty(string) {
    if (string === "") return true;
    else return false;
  }

  validateJSONData(jsonData) {
    let errors = {};

    // Assuming json data is in string format
    let parsedData = JSON.parse(jsonData);

    // Check first name field is empty
    if (this.#isEmpty(parsedData.firstName))
      errors.firstName = "First name Must not be empty";

    // check last name field is empty
    if (this.#isEmpty(parsedData.lastName))
      errors.lastName = "Last name must not be empty";

    // check code field is empty
    if (this.#isEmpty(parsedData.code)) errors.code = "Code must not be empty";

    // check admission number field is empty
    if (this.#isEmpty(parsedData.admNo))
      errors.admNo = "Admission Number must not be empty";

    // check course information field is empty
    if (this.#isEmpty(parsedData.courseInfo))
      errors.courseInfo = "Course Information must not be empty";

    return {
      errors,
      valid: Object.keys(errors).length === 0 ? true : false,
    };
  }
}

module.exports = Validator;
