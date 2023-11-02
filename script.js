// This is the event listener for the search form submission
document.getElementById('searchForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevents the form from submitting the traditional way.

  var location = document.getElementById('searchLocation').value;
  var date = document.getElementById('searchDate').value;
  var category = document.getElementById('searchCategory').value;

  // TODO: Implement the search functionality.
  // This is where i would call a function to search database based on the criteria.
  console.log(location, date, category);
}); // This closes the event listener for the search form

// Function to view yard sale details
function viewYardSaleDetails(id) {
  // TODO: Fetch yard sale details from database using the yard sale ID and display them.
  console.log('Viewing details for yard sale ID:', id);
}

// Function to initialize Google Map
function initMap() {
  // TODO: Initialize Google Map and set it to a desired location.
}

// This is the event listener for the review form submission
document.getElementById('reviewForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var reviewText = document.getElementById('reviewText').value;
  var reviewRating = document.getElementById('reviewRating').value;

  // TODO: Implement the functionality to submit this review to database.
  console.log(reviewText, reviewRating);
}); // This closes the event listener for the review form

// Function to save a yard sale as a favorite
function saveFavoriteYardSale(id) {
  // TODO: Implement the functionality to save this yard sale as a favorite.
  console.log('Saving yard sale as a favorite, ID:', id);
}

// The notification functionality would be added here, and it would be more complex and backend-dependent.

  var reviewText = document.getElementById('reviewText').value;
  var reviewRating = document.getElementById('reviewRating').value;

  // TODO: Implement the functionality to submit this review to the database.
  console.log(reviewText, reviewRating);

function saveFavoriteYardSale(id) {
  // TODO: Implement the functionality to save this yard sale as a favorite.
  console.log('Saving yard sale as a favorite, ID:', id);
}

// Notification functionality would be more complex and backend-dependent.

}

});




