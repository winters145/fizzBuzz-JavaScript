const User = require("./user")

class UserBase {

  constructor(usersArr) {
    this.usersArr = usersArr
  };

  count() {
    return this.usersArr.length
  };

  getNames() {
    return this.usersArr.map(user => user.name)
  };

  getIntroduction() {
    return this.usersArr.map(user => user.getIntroduction())
  };
};

module.exports = UserBase
