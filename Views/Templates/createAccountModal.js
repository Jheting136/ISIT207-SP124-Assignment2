const createAccModal = document.getElementById('createAccModal');

function closeCreateAccModal(){
    createAccModal.hide;
}

function displayCreateAccModal() {


    createAccModal.innerHTML = `
        <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="loginModalLabel">Create My Account</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <!-- Add your login form or content here -->
                        <form>
                            <div class="mb-3">
                                <label for="email" class="form-label">Username</label>
                                <input type="text" class="form-control" id="Username" name="username">
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="text" class="form-control" id="email" name="Email">
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" class="form-control" id="password" name="password">
                            </div>
                            <div  class="grid-container">
                                <div class="grid-item" data-bs-dismiss="modal"><button type="button" class="btn btn-primary" onclick="validateLogin(); updateNavLink(); updateReserveBtn(); closeLoginModal(); return false;">Let&#39;s get started</button></div>
                                <div class="grid-item" style="display: flex; justify-content: flex-end;"><a href="#" class="nav-link"><small data-bs-toggle="modal" data-bs-target="#createAcc" data-bs-dismiss="modal" style="color:grey">I dont have an account</small></a></div>
                            </div>
                            <div  class="grid-container">
                                <div class="grid-item" data-bs-dismiss="modal"><button type="button" class="btn btn-primary" onclick="validateLogin(); updateNavLink(); updateReserveBtn(); closeLoginModal(); return false;">Let&#39;s get started</button></div>
                                <div class="grid-item" style="display: flex; justify-content: flex-end;"><a href="#" class="nav-link"><small data-bs-toggle="modal" data-bs-target="#createAcc" data-bs-dismiss="modal" style="color:grey">I dont have an account</small></a></div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
    `;

  }

  displayCreateAccModal();