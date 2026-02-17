const expositionContainers = document.querySelectorAll('.small_container_exposition');

expositionContainers.forEach(container => {
    const img = container.querySelector('img');
    const text = container.querySelector('.hidden-text');

    container.addEventListener('mouseenter', () => {
        img.style.opacity = '0';
        text.style.opacity = '1';
    });

    container.addEventListener('mouseleave', () => {
        img.style.opacity = '1';
        text.style.opacity = '0';
    });
});