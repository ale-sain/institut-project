export default function smoothScrollTo(targetId: string): void {
    const target = document.getElementById(targetId);
    if (!target) return;

    // La position de départ est la position actuelle de défilement
    const startPosition: number = window.scrollY;
    // Calcule la position de l'élément cible par rapport au haut du document
    const targetPosition: number = target.getBoundingClientRect().top + window.scrollY;
    // La distance devrait être la différence entre la position cible et la position de départ
    const distance: number = targetPosition - startPosition;
    let startTime: number | null = null;

    const easeInOutQuint = (time: number, start: number, distance: number, duration: number): number => {
        time /= duration / 2;
        if (time < 1) return (distance / 2) * time * time * time * time * time + start;
        time -= 2;
        return (distance / 2) * (time * time * time * time * time + 2) + start;
    };

    const animation = (currentTime: number): void => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed: number = currentTime - startTime;
        const duration: number = 2000; // Durée de l'animation en millisecondes
        const run: number = easeInOutQuint(timeElapsed, startPosition, distance, duration);

        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
}
