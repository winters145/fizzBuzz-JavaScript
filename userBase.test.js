const User = require('./user.js')
const UserBase = require('./userBase.js')

describe (UserBase, () => {
  const users = [
    new User('Uma'),
    new User('Josh'),
    new User('Ollie')
  ];
  const userBase = new UserBase(users);

  describe('count', () => {
    it ('Returns the number of users', () => {
      expect(userBase.count()).toBe(3)
    });
  });
  describe('getNames', () => {
    it ('Returns the names of all users', () => {
      expect(userBase.getNames()).toEqual([ 'Uma', 'Josh', 'Ollie' ]);
    })
  });
  describe('getIntroduction', () => {
    it ('Returns the introductions of all users', () => {
      expect(userBase.getIntroduction()).toEqual([
        'Hi, my name is Uma',
        'Hi, my name is Josh',
        'Hi, my name is Ollie'
      ]);
    });
  });
});