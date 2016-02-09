'use strict';

import angular from 'angular';
import _ from 'lodash';

class Problems {
  
  constructor($q) {
    this.$q = $q;
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  getProblem() {
    let answer = this.getRandomInt(2,10);
    let queryHalf = this.getRandomInt(0,answer-1);
    let queryOtherHalf = answer - queryHalf;
    let query = queryHalf + ' + ' + queryOtherHalf;
    let alternatives = _.range(3).map((v,k)=>this.getRandomInt(2,10));
    alternatives.push(answer);
    _.shuffle(alternatives);
    return {answer, query, alternatives };
  }
}

Problems.$inject = [];

export default angular.module('services.problems', [])
  .service('problems', Problems)
  .name;