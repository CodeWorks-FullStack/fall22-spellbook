import { SpellDetail } from "./SpellDetail.js";

export class SandboxSpell extends SpellDetail {
  constructor(data) {
    super(data);
    this.prepared = data.prepared
  }

  get ListTemplate() {
    return /*html*/`
    <div class="no-select text-light p-3 ">
      <p class="mb-0 d-flex align-items-center justify-content-between"> 
      <!-- TRIGGERS PUT REQUEST -->
        <input type="checkbox" ${this.prepared ? 'checked' : ''} onchange="app.sandboxSpellsController.toggleSpellPrepared('${this.id}')" >
        <b>${this.name}</b>
        <i class="mdi mdi-delete-forever on-hover" onclick="app.sandboxSpellsController.deleteSpell('${this.id}')"></i>
      </p>
    </div>
    `
  }


}
