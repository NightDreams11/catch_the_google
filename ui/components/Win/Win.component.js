import { playAgain } from "../../../core/state-manager.js"

export function WinComponent() {
  const element = document.createElement("div")

  render(element)

  return { element }
}

async function render(element) {
  const title = document.createElement("h1")
  title.append("YOU WON. ")

  const button = document.createElement("button")
  button.append("PLAY AGAIN")

  button.addEventListener("click", () => {
    playAgain()
  })
  element.append(title, button)
}
