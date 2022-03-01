const User = require('./user.js')

describe(User, () => {
  const user = new User('Jack');

  describe('getName', () => {
    it ('Returns the users name', () => {
      expect(user.getName()).toBe('Jack')
    });
  });

  describe('getIntroduction', () => {
    it ('Returns an introduction', () => {
      expect(user.getIntroduction()).toBe('Hi, my name is Jack')
    });
  });
});