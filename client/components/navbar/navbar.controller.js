'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Home',
    'state': 'main'
  },
  //  {
  //  'title': 'Chalk Board',
  //  'state': 'ChalkBoard'
  //},
    {
    'title': 'The Team',
    'state': 'team'
  },{
    'title': 'Showcase',
    'state': 'showCase'
  },{
      'title': 'Contact Us',
      'state': 'contactUs'
    }
  //  ,{
  //  'title': 'Blog',
  //  'state': 'blog'
  //}
  ];

  isCollapsed = true;
  //end-non-standard

  constructor(Auth) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
  }
}

angular.module('goodToGoSolutionsApp')
  .controller('NavbarController', NavbarController);
