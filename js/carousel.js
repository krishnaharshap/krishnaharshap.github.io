(function () {
  var track = document.getElementById('projects-track');
  var prev = document.querySelector('.carousel-prev');
  var next = document.querySelector('.carousel-next');
  if (!track || !prev || !next) return;

  function scrollByCard(direction) {
    var card = track.querySelector('.card');
    var gap = 20;
    var amount = card ? card.getBoundingClientRect().width + gap : 300;
    track.scrollBy({ left: direction * amount, behavior: 'smooth' });
  }

  prev.addEventListener('click', function () { scrollByCard(-1); });
  next.addEventListener('click', function () { scrollByCard(1); });
})();
