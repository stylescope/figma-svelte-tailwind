import './plugin.css'
import Plugin from './Plugin.svelte'

const app = new Plugin({
  //target: document.getElementById('app'),
  target: document.body
})

export default app
