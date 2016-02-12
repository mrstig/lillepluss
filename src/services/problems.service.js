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
    let alternatives = _.range(3).map((v,k)=>{
      let r = this.getRandomInt(2,this.randLimit);
      if ( r == answer )
        r = (r + 1) % this.max;
      return r;
    });
    alternatives.push(answer);
    _.shuffle(alternatives);
    return {answer, query, alternatives: _.shuffle(alternatives) };
  }
}

Problems.$inject = [];

export default angular.module('services.problems', [])
  .service('problems', Problems)
  .name;