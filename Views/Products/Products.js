const cars = [
    { id: 1, brand: 'Toyota', short: 'Aqua', long: '2016 Toyota Aqua 1.5', price: '3,499', duration: '6, 12' },
    { id: 2, brand: 'Mercedes-Benz', short: 'A180', long: '2016 Mercedes-Benz A180 1.6', price: '3,499', duration: '6, 12' },
    { id: 3, brand: 'Porsche', short: 'Boxster', long: '2010 Porsche Boxster 2.7 Convertible', price: '3,499', duration: '6, 12' },
  ]

  // Function to display 3-column grid
  function displayGrid(data) {

    // Iterate through the array and create grid items
    data.forEach(item => {
        const gridContainer = document.getElementById('productGrid');
        const gridItem = document.createElement('div');
        gridItem.classList.add('col-md-4', 'mb-4');
        gridItem.innerHTML = `
        <div class="card" onclick="routeToCheckout('${encodeURIComponent(item.short)}');" >
            <div class="card-body">
                <h3 class="card-title">${item.brand} ${item.short}</h3>
                <p>$${item.price}/ month, NETT</p>
                <p>Duration: ${item.duration} months</p>
            </div>
        </div>
        `;
        gridContainer.appendChild(gridItem);
    });
  }
  //'${encodeURIComponent(item.short)}'

  function routeToCheckout(prodID){
    const prodInfo = cars.find(c => c.short === prodID);
    const urlSearchParams = new URLSearchParams(window.location.search);

      // Add a new parameter 'searchParam' with value 'example'
//      urlSearchParams.set('prodInfo', prodInfo.brand);
      for (const key in prodInfo) {
            urlSearchParams.set(key, prodInfo[key]);
          }
      console.log(urlSearchParams);

      // Replace the current URL with the updated one
      window.location.href = `../productDetails/productDetails.html?${urlSearchParams}`;
    }


  displayGrid(cars);