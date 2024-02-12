const cars = [
    { id: 1, brand: 'Toyota', short: 'Aqua', long: 'Toyota Aqua', price: '3,499', duration: '6, 12', details:{Year: '2016', Body: 'Hatchback', Fuel: 'Hybrid', Engine: '1.5', Doors: '5', Seats: '5', Transmission: 'Auto'}, img:['../../Images/Toyota-Aqua-2016-15-Car-Subscription.webp','../../Images/Toyota-Aqua-2016-15-Car-Subscription (1).webp','../../Images/Toyota-Aqua-2016-15-Car-Subscription (2).webp']},
    { id: 2, brand: 'Mercedes-Benz', short: 'A180', long: 'Mercedes-Benz A180', price: '3,499', duration: '6, 12', details:{Year: '2016', Body: 'Hatchback', Fuel: 'Petrol', Engine: '1.6', Doors: '5', Seats: '5', Transmission: 'Auto'}, img:['../../Images/Mercedes-benz-A180-2016-16-Car-Subscription.webp']},
    { id: 3, brand: 'Porsche', short: 'Boxster', long: 'Porsche 718 Boxster Convertible', price: '3,499', duration: '6, 12', details:{Year: '2010', Body: 'Sport', Fuel: 'Petrol', Engine: '2.7', Doors: '2', Seats: '2', Transmission: 'Auto'}, img:['../../Images/porsche-boxster.webp', '../../Images/PCGB20_0911_fine.jpg'] },
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
//      for (const key in prodInfo) {
//            urlSearchParams.set(key, JSON.stringify(prodInfo[key]));
//          }
      urlSearchParams.set('prodInfo',JSON.stringify(prodInfo));
      console.log(urlSearchParams);

      // Replace the current URL with the updated one
      window.location.href = `../productDetails/productDetails.html?${urlSearchParams}`;

    }


  displayGrid(cars);