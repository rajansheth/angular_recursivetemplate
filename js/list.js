var app = angular.module('app', []);

app.controller('AppCtrl', function ($scope) {

/* Prepare the list of categories */
  $scope.categories = [
    { 
      title: 'Computers',
      categories: [
        {
          title: 'Laptops',
          categories: [
            {
              title: 'Ultrabooks',
              categories: [
                {
                  title: 'Mini Book'
                }
              ]
            },
            {
              title: 'Macbooks'            
            }
          ]
        },
        {
          title: 'Desktops'
        },

        {
          title: 'Tablets',
          categories: [
            { 
              title: 'Apple'
            },
            {
              title: 'Android'
            },
            {
              title: 'BlackBerry'
            }
          ]        
        }
      ]
    },

    {
      title: 'Printers'
    }

  ];
});
