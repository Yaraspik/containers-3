export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [1, 'Не указано имя персонажа'],
    ]);
  }

  translate(code) {
    let error = this.errors.get(code);
    if (typeof error === 'undefined') {
      error = 'Unknown error';
    }
    return error;
  }
}
