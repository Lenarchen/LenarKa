const achievementPhotoSelector = ".achievement-photo";
const achievementMainPhotoSelector = ".achievement-photo-main";

const achievementPhotos = document.querySelectorAll(achievementPhotoSelector)
const achievementMainPhoto = document.querySelector(achievementMainPhotoSelector)

achievementPhotos.forEach(photoElement => {
	photoElement.addEventListener("click", event => {
		achievementMainPhoto.src = event.target.src
	})
})
