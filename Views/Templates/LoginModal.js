const loginModal = document.getElementById('loginModal');

function closeLoginModal(){
    loginModal.hide;
}

function displayLoginModal() {


    loginModal.innerHTML = `
        <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="loginModalLabel">Login</h5>
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
                                <label for="password" class="form-label">Password</label>
                                <input type="password" class="form-control" id="password" name="password">
                            </div>
                            <button type="button" class="btn btn-primary" onclick="validateLogin(); updateNavLink(); updateReserveBtn(); closeLoginModal(); return false;">Login</button>
                        </form>
                    </div>
                </div>
            </div>
    `;

  }

  displayLoginModal();