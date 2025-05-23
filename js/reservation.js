// reservation.js
document.addEventListener('DOMContentLoaded', function() {
    const reservationForm = document.getElementById('reservation-form');
    
    if (reservationForm) {
      reservationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const checkin = document.getElementById('checkin').value;
        const checkout = document.getElementById('checkout').value;
        const guests = document.getElementById('guests').value;
        const roomType = document.querySelector('input[name="room"]:checked')?.value;
        const promo = document.getElementById('promo').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const payment = document.getElementById('payment').value;
        
        // Basic validation
        if (!name || !checkin || !checkout || !guests || !roomType || !phone || !email || !payment) {
          alert('Please fill in all required fields');
          return;
        }
        
        // Here you would typically send the data to a server
        console.log('Reservation submitted:', {
          name,
          checkin,
          checkout,
          guests,
          roomType,
          promo,
          phone,
          email,
          payment
        });
        
        // Show success message
        alert('Reservation submitted successfully! We will contact you shortly to confirm.');
        reservationForm.reset();
      });
      
      // Set minimum date for check-in to today
      const today = new Date().toISOString().split('T')[0];
      document.getElementById('checkin').min = today;
      
      // Update checkout min date when checkin changes
      document.getElementById('checkin').addEventListener('change', function() {
        document.getElementById('checkout').min = this.value;
      });
    }
  });