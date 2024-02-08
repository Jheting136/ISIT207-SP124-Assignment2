
const navRoutes = window.routes;
const Token = sessionStorage.getItem("token");
console.log(navRoutes);
console.log(Token);

function displayNav(data) {
    const navBarDiv = document.getElementById('navBar');

    const containerDiv = document.createElement('div');
    containerDiv.classList.add('container-fluid');
    navBarDiv.appendChild(containerDiv);

    containerDiv.innerHTML = `
        <a class="navbar-brand" href="#">AZoom</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto" id="navBarUl">
                <!-- Nav links dynamically populated here -->
                </ul>
            </div>
    `;

    const ul = document.getElementById('navBarUl');

    // Clear previous content
    ul.innerHTML = '';

    // Iterate through the array and create nav links
    data.forEach(item => {
      const li = document.createElement('li');
      li.classList.add('nav-item');
      li.innerHTML = `
        <a class="nav-link" href=${item.url}>${item.text}</a>
      `;
      ul.appendChild(li);
    });
    // Add login element
    const loginLi = document.createElement('li');
          loginLi.classList.add('nav-item');
          loginLi.setAttribute('id', 'loginLogoutLink');
          loginLi.innerHTML =
            `<a class="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#loginModal">Login</a>`;
            ul.appendChild(loginLi);

  }

  function updateNavLink() {
            console.log("updating nav link")
            console.log(token)
            const navLink = document.getElementById('loginLogoutLink');
            navLink.classList.add('dropdown');
            if (sessionStorage.getItem("token") != null) {
                console.log("token not null")

                navLink.innerHTML =
                    `
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            ${sessionStorage.getItem("token")} <i class="bi bi-person-fill"></i>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-dark">
                            <li><a class="dropdown-item" href="../user/userProfile.html" >Profile</a></li>
                            <li><a class="dropdown-item" href="#" onclick="logOut()">Logout</a></li>
                        </ul>
                    `;
            } else {
            console.log("token is null")
              navLink.innerHTML =
                `<a class="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#loginModal">Login</a>`;
            }
          }


  displayNav(navRoutes);
  updateNavLink();

