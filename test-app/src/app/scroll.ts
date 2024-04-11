export default function smoothScrollTo (targetId) {
    const target = document.getElementById(targetId);
    if (!target) return;

    const startPosition = window.scrollY;
    const targetPosition = target.getBoundingClientRect().top;
    const distance = targetPosition;
    let startTime = null;

    const easeInOutQuint = (time, start, distance, duration) => {
        time /= duration / 2;
        if (time < 1) return (distance / 2) * time * time * time * time * time + start;
        time -= 2;
        return (distance / 2) * (time * time * time * time * time + 2) + start;
    };

    const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const duration = 1500; // Durée de l'animation en millisecondes
        const run = easeInOutQuint(timeElapsed, startPosition, distance, duration);

        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
};