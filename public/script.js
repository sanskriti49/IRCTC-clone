let date;
let a;
let time;

const months = {
	0: "Jan",
	7: "Aug",
};

setInterval(() => {
	a = new Date();
	const Dat = a.getDate();
	const monthNumber = a.getMonth();
	const year = a.getFullYear();
	const months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"June",
		"July",
		"Aug",
		"Sept",
		"Oct",
		"Nov",
		"Dec",
	];
	date = [`${Dat}-${months[monthNumber]}-${year}`];
	time =
		(a.getHours() < 10 ? "0" : "") +
		a.getHours() +
		":" +
		(a.getMinutes() < 10 ? "0" : "") +
		a.getMinutes() +
		":" +
		(a.getSeconds() < 10 ? "0" : "") +
		a.getSeconds();
	document.getElementById("time").innerText = date + " [ " + time + "]";
}, 1000);

// ======================= LIVE CLOCK =======================
function updateTime() {
	const timeElement = document.getElementById("time");
	if (timeElement) {
		const now = new Date();
		const options = {
			weekday: "short",
			year: "numeric",
			month: "short",
			day: "numeric",
			hour: "2-digit",
			minute: "2-digit",
			second: "2-digit",
			hour12: true,
		};
		timeElement.textContent = `[ ${now.toLocaleString("en-US", options)} ]`;
	}
}

// Update time every second
setInterval(updateTime, 1000);
updateTime(); // Initial call

// ======================= IMAGE CAROUSEL =======================
document.addEventListener("DOMContentLoaded", function () {
	// --- Hero Section Carousel ---
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
			track.style.transition = "none"; // Disable transition during resize
			track.style.transform =
				"translateX(-" + newSlideWidth * currentSlide + "px)";
			setTimeout(() => {
				track.style.transition = "transform 0.5s ease-in-out"; // Re-enable
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

		// Auto-play the carousel
		setInterval(() => {
			moveToSlide((currentSlide + 1) % totalSlides);
		}, 5000); // Change slide every 5 seconds
	}
});
