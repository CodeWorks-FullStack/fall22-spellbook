import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', Value)
  

  user = prompt('What is your Name?')

  
  /** @type {import('./Models/DnDSpell').DnDSpell[]} */
  dndSpells = []
  
  /** @type {import('./Models/SandboxSpell').SandboxSpell[]} */
  sandboxSpells = []
  
  /** @type {import('./Models/SpellDetail').SpellDetail | null} */
  activeSpell = null

}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
