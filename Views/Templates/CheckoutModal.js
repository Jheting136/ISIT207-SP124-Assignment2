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
                                <label for="email" class="form-label">Username</label>
                                <input type="text" class="form-control" id="email" name="username">
                            </div>
                            <div class="mb-3">
                                <div id="carDetailsGrid" class="grid-container">
                                <div class="grid-item">
                                    <label for="email" class="form-label">Collection Date</label>
                                    <input type="date" id="datepicker" class="form-control" placeholder="Select Date">
                                </div>
                                <div class="grid-item">
                                <label for="email" class="form-label">Return Date</label>
                                    <input type="date" id="datepicker" class="form-control" placeholder="Select Date">
                                </div>
                                </div>
                            </div>
                            <button class="btn btn-primary" onclick="validateLogin(); updateNavLink(); return false;">Login</button>
                        </form>
                    </div>
                </div>
            </div>
    `;

  }

  displayCheckoutModal();