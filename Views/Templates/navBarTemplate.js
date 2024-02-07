
const navRoutes = window.routes;
const Token = sessionStorage.getItem("token");
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


  displayNav(navRoutes);