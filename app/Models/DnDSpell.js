export class DnDSpell {
  constructor(data) {
    this.name = data.name
    this.url = data.url
  }

  get ListTemplate(){
    return /*html*/`
    <div class="selectable no-select text-light p-3" onclick="app.dndSpellsController.getSpellDetails('${this.url}')">
      <p class="mb-0"><b>${this.name}</b></p>
    </div>
    `
  }
}