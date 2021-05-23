export class UserInfo {
  constructor(userName, userJob) {
    this._name = userName;
    this._job = userJob;
  }

  getUserInfo() {
    return {
      name: this._name,
      job: this._job,
    };
  }

  setUserInfo(formValues) {
    this._name.textContent = formValues.name;
    this._job.textContent = formValues.job;
  }
}
