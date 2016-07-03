import vm from 'vm'

export const parse = (contents) => {
  const pattern = /var (beaches = [^;]*);\/\/]]>/g
  const match = pattern.exec(contents)

  const sandbox = { beaches: [] }
  const context = vm.createContext(sandbox)
  const script = new vm.Script(match[1])
  script.runInContext(context)

  return context.beaches
}

export default {
  parse,
}
