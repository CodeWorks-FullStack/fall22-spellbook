import { appState } from "../AppState.js";
import { setHTML } from "../Utils/Writer.js";


function drawActiveSpell() {
  if (appState.activeSpell == null) { return }
  setHTML('active-spell', appState.activeSpell.CardTemplate)
}


export class ActiveSpellController {
  constructor() {
    appState.on('activeSpell', drawActiveSpell)
  }
}