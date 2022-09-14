import { appState } from "../AppState.js"
import { SandboxSpell } from "../Models/SandboxSpell.js"
import { SandboxServer } from "./AxiosService.js"

class SandboxSpellsService {
  async addSpell() {
    if (!appState.activeSpell) { return }

    // @ts-ignore
    const alreadyLearned = appState.sandboxSpells.find(s => s.name == appState.activeSpell.name)
    if (alreadyLearned) {
      throw new Error('You already know this spell')
    }

    if (appState.sandboxSpells.length > 20) {
      throw new Error('Your brain is full, buy more space use credit card to unlock your potential')
    }


    const res = await SandboxServer.post(`/api/${appState.user}/spells`, appState.activeSpell)
    const newSpell = new SandboxSpell(res.data)
    appState.sandboxSpells = [...appState.sandboxSpells, newSpell]

  }

  async toggleSpell(id) {

    const spell = appState.sandboxSpells.find(s => s.id == id)
    if (!spell) {
      throw new Error('bad id')
    }

    // REVIEW how I flip a bool 😉
    spell.prepared = !spell.prepared
    await SandboxServer.put(`/api/${appState.user}/spells/${id}`, spell)
    appState.emit('sandboxSpells')
  }

  async deleteSpell(id) {
    await SandboxServer.delete(`/api/${appState.user}/spells/${id}`)
    appState.sandboxSpells = appState.sandboxSpells.filter(s => s.id != id)
  }
  async getSpells() {
    const res = await SandboxServer.get(`/api/${appState.user}/spells`)
    appState.sandboxSpells = res.data.map(s => new SandboxSpell(s))
  }
}

export const sandboxSpellsService = new SandboxSpellsService()