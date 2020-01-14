export default (component) => {
  const f = component.onBeforeMount
  const g = component.onMounted

  component.onBeforeMount = (e) => { 
    f.bind(component)(e)
    component.fr = document.createDocumentFragment()
    Array.from(component.root.children).map(v => component.fr.appendChild(v))
  }

  component.onMounted = (e) => {
    g.bind(component)(e)
    const target = component.root.querySelector('yield')
    target.parentElement.insertBefore(component.fr, target)
    target.parentElement.removeChild(target)
  }
}
