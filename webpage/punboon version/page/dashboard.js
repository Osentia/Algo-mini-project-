// SIDEBAR DROPDOWN
const allDropdown = document.querySelectorAll('#sidebar .side-dropdown');
const sidebar = document.getElementById('sidebar');

allDropdown.forEach(item => {
    const a = item.parentElement.querySelector('a:first-child');
    a.addEventListener('click', function(e) {
        e.preventDefault();

        if (!this.classList.contains('active')) {
            allDropdown.forEach(i => {
                const a = i.parentElement.querySelector('a:first-child');
                
                a.classList.remove('active');
                i.classList.remove('show');
            });
        }
        this.classList.toggle('active');
        item.classList.toggle('show');
    });
});

// SIDEBAR COLLAPSE
const toggleSideBar = document.querySelector('nav .toggle-sidebar');
const allSideDivider = document.querySelectorAll('#sidebar .divider');

if (sidebar.classList.contains('hide')) {
  allSideDivider.forEach(item => {
    item.textContent = '';
  });
  allDropdown.forEach(item => {
      const a = item.parentElement.querySelector('a:first-child');
      a.classList.remove('active');  // Example: you might want to remove active class or do something similar
      item.classList.remove('show'); // Example: hide the dropdown items
    })
} else {
  allSideDivider.forEach(item => {
    item.textContent = item.dataset.text;
  });
}

toggleSideBar.addEventListener('click', function() {
  sidebar.classList.toggle('hide');

  if (sidebar.classList.contains('hide')) {
    allSideDivider.forEach(item => {
      item.textContent = '';
    });

    // Handle dropdown items when sidebar is hidden
    allDropdown.forEach(item => {
      const a = item.parentElement.querySelector('a:first-child');
      a.classList.remove('active');  // Example: you might want to remove active class or do something similar
      item.classList.remove('show'); // Example: hide the dropdown items
    });
  } else {
    // Restore text for all side dividers when sidebar is visible
    allSideDivider.forEach(item => {
      item.textContent = item.dataset.text;
    });

    // Optionally, you might want to show dropdown items or change styles when the sidebar is not hidden
    allDropdown.forEach(item => {
      const a = item.parentElement.querySelector('a:first-child');
      a.classList.add('active');  // Example: activate the dropdown if necessary
      item.classList.add('show'); // Example: show the dropdown items
    });
  }
});


sidebar.addEventListener('mouseleave', function() {
  // Check if the sidebar has the class 'hide'
  if (this.classList.contains('hide')) {
    // Loop through all dropdown items
    allDropdown.forEach(item => {
      const a = item.parentElement.querySelector('a:first-child');
      
      // Remove the 'active' and 'show' classes
      a.classList.remove('active');
      item.classList.remove('show');
    });

    // Clear the text content of all side dividers
    allSideDivider.forEach(item => {
      item.textContent = '';
    });
  }
}); // Close the 'mouseleave' event listener

sidebar.addEventListener('mouseenter', function() {
  // Check if the sidebar has the class 'hide'
  if (this.classList.contains('hide')) {
    // Loop through all dropdown items
    allDropdown.forEach(item => {
      const a = item.parentElement.querySelector('a:first-child');
      
      // Remove the 'active' and 'show' classes
      a.classList.remove('active');
      item.classList.remove('show');
    });

    // Restore the text content of all side dividers from the 'data-text' attribute
    allSideDivider.forEach(item => {
      item.textContent = item.dataset.text;
    });
  }
});



// PROFILE DROPDOWN
const profile = document.querySelector('nav .profile');
const imgProfile = profile.querySelector('img');
const dropdown = profile.querySelector('.profile-link');

imgProfile.addEventListener('click', function() {
    dropdown.classList.toggle('show');
});




//MENU
const allMenu = document.querySelectorAll('main .content-data .head .menu');

allMenu.forEach(item => {
  const icon = item.querySelector('.icon');
  const menuLink = item.querySelector('.menu-link');

  icon.addEventListener('click', function() {
    menuLink.classList.toggle('show');
  });
});



// WINDOW CLICK EVENT
window.addEventListener('click', function(e) {
  if (e.target !== imgProfile && !profile.contains(e.target)) {
      if (dropdown.classList.contains('show'))  {
          dropdown.classList.remove('show');
      }
  }

  allMenu.forEach(item => {
      const icon = item.querySelector('.icon');
      const menuLink = item.querySelector('.menu-link');

      if (e.target !== icon && !menuLink.contains(e.target)) {
          if (menuLink.classList.contains('show')) {
              menuLink.classList.remove('show');
          }
      }
  });
});





// PROGRESSBAR
const allProgress = document.querySelectorAll('main .card .progress');

allProgress.forEach(item => {
  const val=item.dataset.value;
  item.style.setProperty('--value', val);
})









//APEXCHART
var options = {
    series: [{
    name: 'series1',
    data: [31, 40, 28, 51, 42, 109, 100]
  }, {
    name: 'series2',
    data: [11, 32, 45, 32, 34, 52, 41]
  }],
    chart: {
    height: 350,
    type: 'area'
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  xaxis: {
    type: 'datetime',
    categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    },
  },
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();