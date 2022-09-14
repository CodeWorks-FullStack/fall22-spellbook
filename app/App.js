import { ActiveSpellController } from "./Controllers/ActiveSpellController.js";
import { DndSpellsController } from "./Controllers/DndSpellsController.js";

class App {
  activeSpellController = new ActiveSpellController()
  dndSpellsController = new DndSpellsController()
}

window["app"] = new App();
