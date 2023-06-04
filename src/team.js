export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Такой персонаж уже есть в команде');
    }
    this.members.add(character);
    return true;
  }

  addAll(...characters) {
    characters.forEach((element) => {
      this.members.add(element);
    });
    return true;
  }

  toArray() {
    return [...this.members];
  }
}
