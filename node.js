document.getElementById('loginButton').addEventListener('click', function() {
    document.getElementById('loginPopup').style.display = 'block';
  });
  
  document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('loginPopup').style.display = 'none';
  });
  
  // Close the popup if the user clicks outside of it
  window.addEventListener('click', function(event) {
    var popup = document.getElementById('loginPopup');
    if (event.target == popup) {
      popup.style.display = 'none';
    }
  });
  