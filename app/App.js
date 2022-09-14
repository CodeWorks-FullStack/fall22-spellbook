import { ActiveSpellController } from "./Controllers/ActiveSpellController.js";
import { DndSpellsController } from "./Controllers/DndSpellsController.js";
import { SandboxSpellsController } from "./Controllers/SandboxSpellsController.js";

class App {
  activeSpellController = new ActiveSpellController()
  dndSpellsController = new DndSpellsController()
  sandboxSpellsController = new SandboxSpellsController()
}

window["app"] = new App();
