import 'bootstrap/dist/css/bootstrap.min.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import home from './features/home/index';


import routing from './app.config';

angular.module('app', [uirouter, home])
  .config(routing);