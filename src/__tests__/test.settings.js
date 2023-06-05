import Settings from '../settings';

test('set custom setting', () => {
  const settings = new Settings();
  settings.setCustomSettings('theme', 'light');
  expect(settings).toEqual({
    customSettings: new Map([
      ['theme', 'light'],
    ]),
    defaultSettings: new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]),
  });
});

test('get settings', () => {
  const settings = new Settings();
  settings.setCustomSettings('theme', 'light');
  settings.setCustomSettings('music', 'pop');
  expect(settings.settings).toEqual(
    new Map([
      ['theme', 'light'],
      ['music', 'pop'],
      ['difficulty', 'easy'],
    ]),
  );
});

test('get default settings', () => {
  const settings = new Settings();
  expect(settings.settings).toEqual(
    new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]),
  );
});
