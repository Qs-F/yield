import { RiotComponent } from 'riot'

export default (component: RiotComponent): void => {
  const f = component.onBeforeMount
  const g = component.onMounted

  component.onBeforeMount = (p, s) => {
    if (f) {
      f.bind(component)(p, s)
    }
    component.fr = document.createDocumentFragment()
    Array.from(component.root.children).map(v => component.fr.appendChild(v))
  }

  component.onMounted = (p, s) => {
    if (g) {
      g.bind(component)(p, s)
    }
    const target = component.root.querySelector('yield')
    if (target === null) {
      return
    }
    const tp = target.parentElement
    if (tp === null) {
      return
    }
    tp.insertBefore(component.fr, target)
    tp.removeChild(target)
  }
}
