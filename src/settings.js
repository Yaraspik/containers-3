export default class Settings {
  constructor() {
    this.defaultSettings = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);
    this.customSettings = new Map();
  }

  setCustomSettings(setting, value) {
    this.customSettings.set(setting, value);
  }

  get settings() {
    let response = new Map();
    if (this.customSettings.size === 0) {
      response = this.defaultSettings;
    }
    for (const pair of this.defaultSettings) {
      if (this.customSettings.has(pair[0])) {
        response.set(pair[0], this.customSettings.get(pair[0]));
      } else {
        response.set(pair[0], pair[1]);
      }
    }
    return response;
  }
}
