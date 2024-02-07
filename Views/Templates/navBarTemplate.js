
const navRoutes = window.routes;
const Token = window.token;
console.log(navRoutes);
console.log(Token);

function displayNav(data) {
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
        const navLink = document.getElementById('loginLogoutLink');

        if (Token != null) {
        console.log("token not null")
          navLink.innerHTML =
            `<a class="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#logoutModal">Logout</a>`;
        } else {
        console.log("token is null")
          navLink.innerHTML =
            `<a class="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#loginModal">Login</a>`;
        }
      }


  displayNav(navRoutes);