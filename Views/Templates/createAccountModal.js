const createAccModal = document.getElementById('createAccModal');

function closeCreateAccModal(){
    createAccModal.hide;
}

function displayCreateAccModal() {


    createAccModal.innerHTML = `
        <div class="modal-dialog modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="loginModalLabel">Create My Account</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <!-- Add your login form or content here -->
                        <form>

                            <div  class="grid-container-3">
                                <div class="grid-item">
                                    <label for="name" class="form-label">First Name</label>
                                    <input type="text" class="form-control" id="name" name="name">
                                </div>
                                <div class="grid-item">
                                    <label for="lastName" class="form-label">Last Name</label>
                                    <input type="text" class="form-control" id="lastName" name="lastName">
                                </div>
                                <div class="grid-item">
                                    <label for="age" class="form-label">Age</label>
                                    <input type="number" class="form-control" id="age" name="age">
                                </div>
                            </div>

                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="text" class="form-control" id="email" name="Email">
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" class="form-control" id="password" name="password">
                            </div>
                            <hr>
                            <h5>Card Details</h5>
                            <div class="mb-3">
                                <label for="NOC" class="form-label">Name On Card</label>
                                <input type="text" class="form-control" id="NOC" name="NOC">
                            </div>
                            <div class="grid-container">
                                <div class="mb-3">
                                    <label for="cardNo" class="form-label">Card Number</label>
                                    <input type="text" class="form-control" id="cardNo" name="cardNo">
                                </div>
                                <div class="grid-container">
                                    <div class="mb-3">
                                        <label for="cvv" class="form-label">CVV</label>
                                        <input style="width: 4vw; padding-right: 1vw" type="text" class="form-control" id="cvv" name="cvv">
                                    </div>
                                    <div class="mb-3">
                                        <label for="exp" class="form-label">Card Expiry </label>
                                        <input type="month" class="form-control" id="exp" name="exp">
                                    </div>
                                </div>
                            </div>
                            <div  class="grid-container-3">
                                <div class="grid-item">
                                    <label for="country" class="form-label">Country</label>
                                    <input type="text" class="form-control" id="country" name="country">
                                </div>
                                <div class="grid-item">
                                    <label for="address" class="form-label">Address</label>
                                    <input type="text" class="form-control" id="address" name="address">
                                </div>
                                <div class="grid-item">
                                    <label for="postalCode" class="form-label">Postal Code</label>
                                    <input type="text" class="form-control" id="postalCode" name="postalCode">
                                </div>
                            </div>
                            <div class="grid-item" data-bs-dismiss="modal"><button type="button" class="btn btn-primary" onclick="closeLoginModal(); return false;">Let&#39;s get started</button></div>


                        </form>
                    </div>
                </div>
            </div>
    `;

  }

  displayCreateAccModal();