import { DependencyList, useCallback, useEffect } from 'react'

export function useKeybinding(
  key: string,
  effect: () => void,
  dependencyList: DependencyList,
) {
  const listener = useCallback((e: KeyboardEvent) => {
    if (e.key == key) {
      effect()
      e.preventDefault()
    }
  }, dependencyList)

  useEffect(() => {
    window.addEventListener('keydown', listener)
    return () => window.removeEventListener('keydown', listener)
  })
}
