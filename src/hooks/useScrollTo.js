import { useCallback } from "react"

export const useScrollTo = () => {
  const scrollTo = useCallback(elementId => {
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }, [])

  return scrollTo
}
