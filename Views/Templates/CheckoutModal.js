const locations = ["Marina Bay Sands", "Gardens by the Bay", "Sentosa Island", "Chinatown", "Little India"];



function displayCheckoutModal() {
    const checkoutModal = document.getElementById('checkoutModal');

    checkoutModal.innerHTML = `
        <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="checkoutModalLabel">Reserve your new ride</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <!-- Add your login form or content here -->
                        <form>
                            <div class="mb-3">
                                <label for="location" class="form-label">Choose your pickup and return location</label>
                                <select id="location" class="form-control"></select>
                            </div>

                            <div class="mb-3">
                                <div id="carDetailsGrid" class="grid-container">
                                    <div class="grid-item-checkout">
                                        <label for="email" class="form-label">Collection Date</label>
                                        <input type="date" id="pickUpDate" class="form-control" placeholder="Select Date">
                                    </div>
                                    <div class="grid-item-checkout">
                                        <label for="email" class="form-label">Return Date</label>
                                        <input type="date" id="returnDate" class="form-control" placeholder="Select Date">
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="cvv" class="form-label">Enter your CVV number </label>
                                <input type="text" class="form-control" id="cvv" placeholder="CVV">
                            </div>
                            <button class="btn btn-primary" onclick="addReservation(prodID);  return false;">Reserve</button>
                        </form>
                    </div>
                </div>
            </div>
    `;

    var locationPicker = document.getElementById("location");

    // Populate the dropdown with options from the locations array
    locations.forEach(function(location) {
        var locationOptions = document.createElement("option");
        locationOptions.value = location;
        locationOptions.text = location;
        locationPicker.appendChild(locationOptions);
    });


  }

  displayCheckoutModal();