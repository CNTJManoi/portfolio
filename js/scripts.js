gsap.registerPlugin(TextPlugin);
gsap.utils.toArray('.fade-in').forEach(function(elem) {
    gsap.fromTo(elem, { opacity: 0 }, {
        opacity: 1,
		immediateRender: true,
        scrollTrigger: {
            trigger: elem,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
            toggleActions: "play none none reverse"
        }
    });
});
gsap.from("#experience", {
    opacity: 0,
    y: 20,
    duration: 1,
	stagger: 0.2,
	stagger: 0.2,
    scrollTrigger: {
        trigger: "#experience",
        start: "top 80%",
        toggleActions: "play none none none",
    }
});
gsap.to("#intro-text", { text: "Привет! Я Алексей Коровченко", duration: 2, ease: "power1.inOut" });
gsap.to("#job-description", { text: "Начинающий разработчик ПО с основным фокусом на C#", delay: 2, duration: 2 });

function getDeclension(number, nominative, genitiveSingular, genitivePlural) {
    if (number % 10 === 1 && number % 100 !== 11) {
        return nominative;
    } else if (number % 10 >= 2 && number % 10 <= 4 && (number % 100 < 10 || number % 100 >= 20)) {
        return genitiveSingular;
    } else {
        return genitivePlural;
    }
}

function updateExperience() {
    const startDate = new Date(2023, 10);
    const currentDate = new Date();

    let years = currentDate.getFullYear() - startDate.getFullYear();
    let months = currentDate.getMonth() - startDate.getMonth();

    if (months < 0) {
        years--;
        months += 12;
    }

    const yearText = getDeclension(years, "год", "года", "лет");
    const monthText = getDeclension(months, "месяц", "месяца", "месяцев");

    const experienceText = `${years} ${yearText}, ${months} ${monthText}`;
    document.querySelector('#experience .card-text').innerHTML += `<br><strong>Стаж работы:</strong> ${experienceText}`;
}

document.addEventListener("DOMContentLoaded", updateExperience);

document.addEventListener("DOMContentLoaded", updateExperience);