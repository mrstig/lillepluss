'use strict';

export default class HomeController {
  constructor(problems) {
    this.problemsSvc = problems;
   
    this.getRandomProblem();

  }

  getRandomProblem() {
    this.problem = this.problemSvc.getProblem();
  }

}

HomeController.$inject = ['problems'];
