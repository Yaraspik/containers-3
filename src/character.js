export default class Character {
  constructor(name, type) {
    // region check name
    if (typeof name !== 'string') {
      throw new Error('Значение имени должно быть строкой');
    } else if (name.length < 2) {
      throw new Error('Имя не может содержать меньше 2 символов');
    } else if (name.length > 10) {
      throw new Error('Имя не может содержать больше 10 символов');
    }
    // region check name end

    // region check type
    const validTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (!validTypes.includes(type)) {
      throw new Error('Передайте допустимый тип персонажа');
    }
    // region check type end

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }
}
