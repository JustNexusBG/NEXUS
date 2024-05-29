document.addEventListener('scroll', function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var parallax = document.getElementById('parallax');
    parallax.style.transform = 'translateY(' + (scrollTop * 0.5) + 'px)';
});
