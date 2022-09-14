import { appState } from "../AppState.js"
import { dndSpellsService } from "../Services/DndSpellsService.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"

function _drawDndSpells() {
  let template = ''
  appState.dndSpells.forEach(s => template += s.ListTemplate)
  setHTML('dnd-spells', template)
}

export class DndSpellsController {
  constructor() {
    appState.on('dndSpells', _drawDndSpells)
    this.getSpells()
  }

  async getSpells() {
    try {
      await dndSpellsService.getSpells()
    } catch (error) {
      console.error('[getSpells]', error)
      Pop.error(error)
    }
  }

  async getSpellDetails(url) {
    try {
      
      await dndSpellsService.getSpellDetails(url)
    } catch (error) {
      console.error('[getSpellDetails]', error)
      Pop.error(error)
    }
  }

}