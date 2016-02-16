import home from './index';

describe('Controller: Home', function() {
  var $rootScope, $controller, $q, ctrl, problems;

  beforeEach(angular.mock.module(home));

  beforeEach(angular.mock.inject(function(_$controller_, _$q_, _$rootScope_, _problems_) {
    $rootScope = _$rootScope_;
    $q = _$q_;
    problems = _problems_;
    $controller = _$controller_;
    ctrl = $controller('HomeController', {
      problems
    });
  }));

  it('problem is set on startup', function() {
    expect(problems).toBeDefined();
    spyOn(problems, 'getProblem');
    $controller('HomeController', {
      problems
    });
    expect(problems.getProblem).toHaveBeenCalled();
  });

  it('has a list of alternativePairs', function() {
    var res = {
      query: "4 + 5",
      alternatives: [9, 4, 7, 1],
      answer: 9,
      answerIndex: 0
    };
    spyOn(problems, 'getProblem').and.returnValue(res);
    ctrl.getRandomProblem();
    expect(ctrl.alternativePairs).toEqual([{
      left: {
        val: 9,
        id: 0
      },
      right: {
        val: 4,
        id: 1
      }
    }, {
      left: {
        val: 7,
        id: 2
      },
      right: {
        val: 1,
        id: 3
      }
    }]);
  });

  // it('updates correctAnswer on clickAlternative', function() {
  //   var res = {
  //     query: "4 + 5",
  //     alternatives: [9, 4, 7, 1],
  //     answer: 9,
  //     answerIndex: 0
  //   };
  //   spyOn(problems, 'getProblem').and.returnValue(res);
  //   ctrl.getRandomProblem();
  //   expect(ctrl.correctAnswer).toBe(null);
  //   ctrl.clickAlternative(2, null);
  //   expect(ctrl.correctAnswer).toBe(false);
  //   ctrl.clickAlternative(0, null);
  //   expect(ctrl.correctAnswer).toBe(true);

  // });


  it('updates correctCount and answerCount on clickAlternative and fetches a new problem', function() {
    var res = {
      query: "4 + 5",
      alternatives: [9, 4, 7, 1],
      answer: 9,
      answerIndex: 0
    };
    spyOn(problems, 'getProblem').and.returnValue(res);
    ctrl.getRandomProblem();
    expect(ctrl.correctCount).toBe(0);
    expect(ctrl.answerCount).toBe(0);
    
    ctrl.clickAlternative(2, null);
    expect(problems.getProblem).toHaveBeenCalledTimes(2)
    expect(ctrl.correctCount).toBe(0);
    expect(ctrl.answerCount).toBe(1);
    ctrl.clickAlternative(0, null);
    expect(problems.getProblem).toHaveBeenCalledTimes(3)
    expect(ctrl.correctCount).toBe(1);
    expect(ctrl.answerCount).toBe(2);

  });

  it('gets a random problem with #getRandomProblem', function() {
    var res = {
      query: "4 + 5",
      alternatives: [9, 4, 7, 1],
      answer: 9,
      answerIndex: 0
    };
    spyOn(problems, 'getProblem').and.returnValue(res);

    ctrl.getRandomProblem();

    $rootScope.$digest();

    expect(ctrl.problem).toEqual(res);
  });

});