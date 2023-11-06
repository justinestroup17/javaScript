export default class User {
  constructor(email, name) {
    /* Underscores for properties mean "Don't access these properties without a getter and a setter".
      Intended to be private */
    this._id = email;
    this._name = name;
  }
  greeting() {
    return `Hi, my name is ${this._name}.`;
  }
}
