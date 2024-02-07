const dataArray = [
    { id: 1, header: 'Column 1', p1: 'Item 1', p2: 'Description 1' },
    { id: 2, header: 'Column 2', p1: 'Item 2', p2: 'Description 2' },
    { id: 3, header: 'Column 2', p1: 'Item 3', p2: 'Description 3' },
  ];

  // Function to display 3-column grid
  function displayGrid(data) {
    const gridContainer = document.getElementById('productGrid');

    // Clear previous content
    gridContainer.innerHTML = '';

    // Iterate through the array and create grid items
    data.forEach(item => {
      const gridItem = document.createElement('div');
      gridItem.classList.add('col-md-4', 'mb-4');
      gridItem.innerHTML = `
        <div class="card">
          <div class="card-body">
            <h3 class="card-title">${item.header}</h3>
            <p>${item.p1}</p>
            <p>${item.p2}</p>
          </div>
        </div>
      `;
      gridContainer.appendChild(gridItem);
    });
  }


  displayGrid(dataArray);