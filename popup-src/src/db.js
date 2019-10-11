let db;

export function get() {
  return db;
}

export async function save(data) {
  db = data;
  await global.browser.storage.local.set(data);
}

export async function init() {
  db = await global.browser.storage.local.get();
  if (Object.keys(db).length === 0) {
    const defaultSetting = {
      status: true,
    };

    db = defaultSetting;
    save(defaultSetting);
  }
}
