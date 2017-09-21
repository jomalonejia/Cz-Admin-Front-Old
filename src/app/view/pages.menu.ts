export const PAGES_MENU = [
  {
    path: 'view',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'general.menu.dashboard',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'manager',
        data: {
          menu: {
            title: 'general.menu.manager',
            icon: 'ion-edit',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          {
            path: 'user',
            data: {
              menu: {
                title: 'general.menu.user',
              }
            }
          },
        ]
      },
      {
        path: 'item',
        data: {
          menu: {
            title: 'general.menu.item',
            icon: 'ion-edit',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          {
            path: 'list',
            data: {
              menu: {
                title: 'general.menu.list',
              }
            }
          },
        ]
      },
      {
        path: '',
        data: {
          menu: {
            title: 'general.menu.pages',
            icon: 'ion-document',
            selected: false,
            expanded: false,
            order: 650,
          }
        },
        children: [
          {
            path: ['/login'],
            data: {
              menu: {
                title: 'general.menu.login'
              }
            }
          },
          {
            path: ['/register'],
            data: {
              menu: {
                title: 'general.menu.register'
              }
            }
          }
        ]
      }
    ]
  }
];
