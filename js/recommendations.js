const recommendationCardSelector = ".card"
const recommendationCards = document.querySelectorAll(recommendationCardSelector)

recommendationCards.forEach(card => {
	card.addEventListener("click", event => {
		const currCard = card
		if (currCard.className.includes("modal")) {
			document.querySelector("body").style.overflow = "auto"
			currCard.className = currCard.className.replace(" modal", "")
		} else {
			document.querySelector("body").style.overflow = "hidden"
			currCard.className = currCard.className + " modal"
		}
	})
})
