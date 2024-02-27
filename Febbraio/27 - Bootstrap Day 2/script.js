document.addEventListener('DOMContentLoaded', () => {

    function countTrips() {
      const trips = document.querySelectorAll('.card').length;
      alert(`There are ${trips} trips present on this page.`);
    }
  
    function addHotBadge() {
      const offerCards = document.querySelectorAll('#welcome-summer .card');
      offerCards.forEach(card => {
        const badge = document.createElement('span');
        badge.classList.add('badge', 'bg-danger', 'hot-badge');
        badge.textContent = 'HOT';
        card.appendChild(badge);
      });
    }
  
    addHotBadge();
  
    function removeAllCards() {
      const cards = document.querySelectorAll('.card');
      cards.forEach(card => card.remove());
    }
  
    const removeCardsBtn = document.querySelector('#removeCardsBtn');
    if (removeCardsBtn) {
      removeCardsBtn.addEventListener('click', removeAllCards);
    }

    document.getElementById('countTripsBtn').addEventListener('click', countTrips);
    document.getElementById('removeCardsBtn').addEventListener('click', removeAllCards);

  });