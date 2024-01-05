import { Clear, Load, LoadString, Remove, Save, SaveString } from "./type"

/**
 * Loads a string from storage.
 *
 * @param key The key to fetch.
 */
export const loadString: LoadString = (key) => {
  return localStorage.getItem(key)
}

/**
 * Saves a string to storage.
 *
 * @param key The key to fetch.
 * @param value The value to store.
 */
export const saveString: SaveString = (key, value) => {
  try {
    localStorage.setItem(key, value)
    return true
  } catch {
    return false
  }
}

/**
 * Loads something from storage and runs it thru JSON.parse.
 *
 * @param key The key to fetch.
 */
export const load: Load = (key) => {
  try {
    const almostThere = localStorage.getItem(key) || ""
    return JSON.parse(almostThere) as object
  } catch {
    return null
  }
}

/**
 * Saves an object to storage.
 *
 * @param key The key to fetch.
 * @param value The value to store.
 */
export const save: Save = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value))
    return true
  } catch {
    return false
  }
}

/**
 * Removes something from storage.
 *
 * @param key The key to kill.
 */
export const remove: Remove = (key) => {
  return localStorage.removeItem(key)
}

/**
 * Burn it all to the ground.
 */
export const clear: Clear = () => {
  return localStorage.clear()
}
