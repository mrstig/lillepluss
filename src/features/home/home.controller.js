'use strict';

import "../../css/home.scss";

export default class HomeController {
  constructor(problems) {
    this.problemsSvc = problems;
   
    this.getRandomProblem();
    this.correctCount = 0;
    this.answerCount = 0;
  }
  
  clickAlternative(input, event) {
    let correctAnswer = (input == this.problem.answerIndex);
    if (correctAnswer)
      this.correctCount++;
    this.answerCount++;
    this.correctAnswer = correctAnswer;
    this.getRandomProblem();
  }

  createAlternativePairs(list) {
    if (!list)
      return [];
    
    let len = list.length;
    let pairs = [];
    for(let i = 0; i<len; i+=2 ) {
      let p = {left: {val: list[i], id:i}, right: i+1<len ? {val: list[i+1], id: (i+1)}: null};
      pairs.push(p);
    }
    return pairs;
  }

  getRandomProblem() {
    this.problem = this.problemsSvc.getProblem();
    this.alternativePairs = this.createAlternativePairs((this.problem||{}).alternatives);
    this.correctAnswer = null;
  }

}

HomeController.$inject = ['problems'];
