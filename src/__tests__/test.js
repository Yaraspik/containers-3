import Team from '../team';
import Character from '../character';
import ErrorRepository from '../errorRepository';

// tests for errorRepository

test('get Error from error`s repository', () => {
  const errorRepo = new ErrorRepository();
  expect(errorRepo.translate(1)).toBe('Не указано имя персонажа');
});

test('get unknown Error from error`s repository', () => {
  const errorRepo = new ErrorRepository();
  expect(errorRepo.translate(2)).toBe('Unknown error');
});

// end tests for errorRepository

test('create character Bowman or Daemon', () => {
  const character = new Character('Jack', 'Bowman');
  expect(character).toEqual(
    {
      health: 100,
      level: 1,
      name: 'Jack',
      type: 'Bowman',
    },
  );
});

test('create not available character', () => {
  function createCharacter() {
    return new Character('Jack', 'Pirat');
  }
  expect(createCharacter).toThrow('Передайте допустимый тип персонажа');
});

test('create character, name is not string', () => {
  function createCharacter() {
    return new Character(123, 'Bowman');
  }
  expect(createCharacter).toThrow('Значение имени должно быть строкой');
});

test('create character, name is short', () => {
  function createCharacter() {
    return new Character('1', 'Bowman');
  }
  expect(createCharacter).toThrow('Имя не может содержать меньше 2 символов');
});

test('create character, name is tall', () => {
  function createCharacter() {
    return new Character('superpupercharacter', 'Bowman');
  }
  expect(createCharacter).toThrow('Имя не может содержать больше 10 символов');
});

test('create character, type is not string', () => {
  function createCharacter() {
    return new Character('Miyagi', 123);
  }
  expect(createCharacter).toThrow('Передайте допустимый тип персонажа');
});

test('add to team character', () => {
  const team = new Team();
  const zombie = new Character('Tony', 'Zombie');
  expect(team.add(zombie)).toBe(true);
});

test('add to team double character', () => {
  function addCharacter() {
    const team = new Team();
    const zombie = new Character('Tony', 'Zombie');
    team.add(zombie);
    team.add(zombie);
  }
  expect(addCharacter).toThrow('Такой персонаж уже есть в команде');
});

test('add all characters', () => {
  const team = new Team();
  const zombie = new Character('Tony', 'Zombie');
  const magician = new Character('Andy', 'Magician');
  const daemon = new Character('Tommy', 'Daemon');
  expect(team.addAll(zombie, magician, daemon)).toBe(true);
});

test('response array of characters', () => {
  const team = new Team();
  const zombie = new Character('Tony', 'Zombie');
  const magician = new Character('Andy', 'Magician');
  team.addAll(zombie, magician);
  expect(team.toArray()).toEqual([
    {
      health: 100,
      level: 1,
      name: 'Tony',
      type: 'Zombie',
    },
    {
      health: 100,
      level: 1,
      name: 'Andy',
      type: 'Magician',
    },
  ]);
});
