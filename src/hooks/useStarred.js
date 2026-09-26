import { useCallback, useEffect, useState } from "react";
import {
  STORAGE_KEYS,
  exportPayload,
  parseImport,
  readJson,
  removeKey,
  writeJson,
} from "../lib/storage.js";

export function useStarred() {
  const [starred, setStarred] = useState(() => readJson(STORAGE_KEYS.bookmarks, []));
  const [notes, setNotes] = useState(() => readJson(STORAGE_KEYS.notes, {}));

  useEffect(() => {
    writeJson(STORAGE_KEYS.bookmarks, starred);
  }, [starred]);

  useEffect(() => {
    writeJson(STORAGE_KEYS.notes, notes);
  }, [notes]);

  const toggle = useCallback((id) => {
    setStarred((prev) => (prev.includes(id) ? prev.filter((value) => value !== id) : [...prev, id]));
  }, []);

  const clear = useCallback(() => {
    setStarred([]);
    removeKey(STORAGE_KEYS.bookmarks);
  }, []);

  const setNote = useCallback((id, note) => {
    setNotes((prev) => {
      const next = { ...prev };
      if (note && note.trim()) next[id] = note.trim();
      else delete next[id];
      return next;
    });
  }, []);

  const restore = useCallback((payload) => {
    setStarred(payload.bookmarks);
    setNotes(payload.notes);
  }, []);

  return { starred, starredSet: new Set(starred), toggle, clear, notes, setNote, restore, exportPayload };
}

export { exportPayload, parseImport };
