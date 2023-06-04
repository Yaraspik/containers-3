import Settings from '../settings';

test('set custom setting', () => {
  const settings = new Settings();
  settings.setCustomSettings('theme', 'light');
});

test('get settings', () => {
  const settings = new Settings();
  settings.setCustomSettings('theme', 'light');
  settings.setCustomSettings('music', 'pop');
});

test('get default settings', () => {
  const settings = new Settings();
  settings.setCustomSettings('theme', 'light');
});
