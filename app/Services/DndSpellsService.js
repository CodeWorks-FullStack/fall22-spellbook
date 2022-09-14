import { appState } from "../AppState.js"
import { DnDSpell } from "../Models/DnDSpell.js"
import { SpellDetail } from "../Models/SpellDetail.js"
import { DndServer } from "./AxiosService.js"

class DndSpellsService {
  async getSpellDetails(url) {
    const res = await DndServer.get(url)
    appState.activeSpell = new SpellDetail(res.data)
  }

  async getSpells() {
    const res = await DndServer.get('/api/spells')
    appState.dndSpells = res.data.results.map(s => new DnDSpell(s))

  }
}
export const dndSpellsService = new DndSpellsService() 