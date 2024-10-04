// SIDEBAR DROPDOWN
const allDropdown = document.querySelectorAll('#sidebar .side-dropdown');

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