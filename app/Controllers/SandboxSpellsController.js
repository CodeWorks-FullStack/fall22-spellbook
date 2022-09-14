import { appState } from "../AppState.js"
import { sandboxSpellsService } from "../Services/SandboxSpellsService.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML, setText } from "../Utils/Writer.js"

function drawSandboxSpells() {

  let template = ''
  appState.sandboxSpells.forEach(s => template += s.ListTemplate)

  setHTML('spell-slots', template)

  setText('spell-count', appState.sandboxSpells.length)

}


export class SandboxSpellsController {
  constructor() {
    this.getSpells()
    appState.on('sandboxSpells', drawSandboxSpells)
  }

  async getSpells() {
    try {
      await sandboxSpellsService.getSpells()
    } catch (error) {
      console.error('[GettinSpells]', error)
      Pop.error(error)
    }
  }

  async addSpell() {
    try {
      await sandboxSpellsService.addSpell()
      Pop.success('Spell learned')
      if (appState.sandboxSpells.length == 2) {
        Pop.toast('isn\t this is awesone', 'question', 'center', 8000, true)
      }
    } catch (error) {
      console.error('[AddingSpell]', error)
      Pop.error(error)
    }
  }

  async toggleSpellPrepared(id) {
    try {
      await sandboxSpellsService.toggleSpell(id)
    } catch (error) {
      console.error('[ToggleSpell]', error)
      Pop.error(error)
    }
  }

  async deleteSpell(id) {
    try {
      const yes = await Pop.confirm('Forget this spell?')
      if (!yes) { return }
      await sandboxSpellsService.deleteSpell(id)
    } catch (error) {
      console.error('[DeleteSpell]', error)
      Pop.error(error)
    }
  }

}