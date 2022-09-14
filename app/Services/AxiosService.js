// @ts-ignore
export const SandboxServer = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com',
  timeout: 2500
})

// @ts-ignore
export const DndServer = axios.create({
  baseURL: 'https://www.dnd5eapi.co',
  timeout: 2500
})

