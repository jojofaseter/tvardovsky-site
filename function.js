(function() {
    const goTopBtn = document.getElementById('goTopBtn');

    // Если кнопка не найдена на странице — выходим
    if (!goTopBtn) return;

    // Показываем/скрываем кнопку
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            goTopBtn.classList.add('visible');
        } else {
            goTopBtn.classList.remove('visible');
        }
    });
    goTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
})();