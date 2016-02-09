'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './home.routes';
import HomeController from './home.controller';
import problemsService from '../../services/problems.service';

export default angular.module('app.home', [uirouter, problemsService])
  .config(routing)
  .controller('HomeController', HomeController)
  .name;