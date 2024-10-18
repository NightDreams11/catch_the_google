export function PlayerComponent(playerNumber) {
  if (playerNumber < 1 || playerNumber > 2) {
    throw new Error("Incorrect player number")
  }

  const element = document.createElement("img")

  render(element, playerNumber)

  return { element }
}

async function render(element, playerNumber) {
  element.src = `assets/images/player${playerNumber}.png`
}
