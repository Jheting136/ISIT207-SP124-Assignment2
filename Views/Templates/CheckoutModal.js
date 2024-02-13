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
                                <label for="locationDropdown" class="form-label">Choose your pickup location</label>
                                <select id="locationDropdown" class="form-control"></select>
                            </div>
                            <div class="mb-3">
                            <div id="carDetailsGrid" class="grid-container">
                                <div class="grid-item-checkout">
                                    <label for="email" class="form-label">Collection Date</label>
                                    <input type="date" id="datepicker" class="form-control" placeholder="Select Date">
                                </div>
                                <div class="grid-item-checkout">
                                <label for="email" class="form-label">Return Date</label>
                                    <input type="date" id="datepicker" class="form-control" placeholder="Select Date">
                                </div>
                            </div>
                            </div>
                            <button class="btn btn-primary" onclick="validateLogin(); updateNavLink(); return false;">Reserve</button>
                        </form>
                    </div>
                </div>
            </div>
    `;

    var locationDropdown = document.getElementById("locationDropdown");

    // Populate the dropdown with options from the locations array
    locations.forEach(function(location) {
        var option = document.createElement("option");
        option.value = location;
        option.text = location;
        locationDropdown.appendChild(option);
    });

  }

  displayCheckoutModal();