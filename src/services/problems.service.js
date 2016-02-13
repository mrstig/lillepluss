'use strict';

import angular from 'angular';
import _ from 'lodash';

class Problems {
  
  constructor($q) {
    this.$q = $q;
    this.max = 20;
    
  }
  get randLimit () {
    return this.max + 1;
  }
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  getProblem() {
    let answer = this.getRandomInt(2,this.randLimit);
    let queryHalf = this.getRandomInt(0,answer-1);
    let queryOtherHalf = answer - queryHalf;
    let query = queryHalf + ' + ' + queryOtherHalf;

    let alternatives = _.shuffle(_.filter(_.range(20), (v,k)=>v!=answer)).slice(0,3);
    let answerIndex = this.getRandomInt(0,4);
    alternatives.splice(answerIndex, 0, answer);
    return {answer, query, alternatives, answerIndex };
  }
}

Problems.$inject = [];

export default angular.module('services.problems', [])
  .service('problems', Problems)
  .name;