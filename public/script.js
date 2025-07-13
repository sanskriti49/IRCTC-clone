document.addEventListener("DOMContentLoaded", function () {
	const track = document.querySelector(".carousel-track");
	if (track) {
		const slides = Array.from(track.children);
		const nextButton = document.querySelector(".carousel-button.next");
		const prevButton = document.querySelector(".carousel-button.prev");
		const slideWidth = slides[0].getBoundingClientRect().width;
		let currentSlide = 0;
		const totalSlides = slides.length;

		const moveToSlide = (targetSlide) => {
			if (track) {
				track.style.transform =
					"translateX(-" + slideWidth * targetSlide + "px)";
				currentSlide = targetSlide;
			}
		};

		// Handle window resizing
		window.addEventListener("resize", () => {
			const newSlideWidth = slides[0].getBoundingClientRect().width;
			track.style.transition = "none";
			track.style.transform =
				"translateX(-" + newSlideWidth * currentSlide + "px)";
			setTimeout(() => {
				track.style.transition = "transform 0.5s ease-in-out";
			}, 50);
		});

		if (prevButton && nextButton) {
			prevButton.addEventListener("click", (e) => {
				moveToSlide((currentSlide - 1 + totalSlides) % totalSlides);
			});

			nextButton.addEventListener("click", (e) => {
				moveToSlide((currentSlide + 1) % totalSlides);
			});
		}

		// auto-play the carousel
		setInterval(() => {
			moveToSlide((currentSlide + 1) % totalSlides);
		}, 5000);
	}
});
