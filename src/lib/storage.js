const PREFIX = "jatrix:v1:";

export const STORAGE_KEYS = {
  bookmarks: `${PREFIX}bookmarks`,
  notes: `${PREFIX}notes`,
  roleTerm: `${PREFIX}role-term`,
};

export function readJson(key, fallback) {
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    return parsed ?? fallback;
  } catch {
    return fallback;
  }
}

export function writeJson(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

export function removeKey(key) {
  try {
    window.localStorage.removeItem(key);
  } catch {
    /* storage unavailable */
  }
}

export function exportPayload() {
  return {
    app: "jatrix",
    version: 1,
    exportedAt: new Date().toISOString(),
    bookmarks: readJson(STORAGE_KEYS.bookmarks, []),
    notes: readJson(STORAGE_KEYS.notes, {}),
  };
}

export function parseImport(text) {
  const data = JSON.parse(text);
  if (!data || data.app !== "jatrix") throw new Error("Not a Jatrix backup file");
  const bookmarks = Array.isArray(data.bookmarks)
    ? data.bookmarks.filter((id) => typeof id === "string")
    : [];
  const notes =
    data.notes && typeof data.notes === "object" && !Array.isArray(data.notes) ? data.notes : {};
  return { bookmarks, notes };
}
