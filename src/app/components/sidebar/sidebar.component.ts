import { Component, Input } from '@angular/core';

import { SidebarComponent as BaseSidebarComponent } from 'theme/components/sidebar';

@Component({
  selector: 'app-sidebar',
  styleUrls: ['../../../theme/components/sidebar/sidebar.component.scss', './sidebar.component.scss'],
  templateUrl: '../../../theme/components/sidebar/sidebar.component.html',
})
export class SidebarComponent extends BaseSidebarComponent {
  public title = 'darkboard';
  public menu = [
    { name: 'Classic Dashboard', link: '/app/dashboard', icon: 'dashboard' },
    // { name: 'Custom Dashboard', link: '/app/dashboard-custom', icon: 'view_quilt' },
    {
      name: 'Tables',
      children: [
        { name: 'Table', link: '/ui/table' },
        { name: '3Tables', link: '/ui/tables' },

      ],
      icon: 'view_comfy',
    },
    // { name: 'Components', link: '/app/components', icon: 'developer_board' },
    { name: 'Profile', link: '/app/forms', icon: 'person' },
    { name: 'Charts', link: '/app/charts', icon: 'multiline_chart' },
    // {
    //   name: 'Pages', children: [
    //   { name: 'Sign in', link: '/pages/login' },
    //   { name: 'Sign up', link: '/pages/sign-up' },
    //   { name: 'Forgot password', link: '/pages/forgot-password' },
    //   { name: '404', link: '/pages/error' },
    //   ],
    //   icon: 'pages',
    // },
  ];
}
