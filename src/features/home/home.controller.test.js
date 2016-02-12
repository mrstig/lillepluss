import home from './index';

describe('Controller: Home', function() {
  var $rootScope, $controller, $q, ctrl, problems;

  beforeEach(angular.mock.module(home));

  beforeEach(angular.mock.inject(function(_$controller_, _$q_, _$rootScope_, _problems_) {
    $rootScope = _$rootScope_;
    $q = _$q_;
    problems = _problems_;
    $controller = _$controller_;
    ctrl = $controller('HomeController', {problems});
  }));

 it('problem is set on startup', function() {
    expect(problems).toBeDefined();
    spyOn(problems, 'getProblem');
    $controller('HomeController', {problems});
    expect(problems.getProblem).toHaveBeenCalled();
  });
  
  it('has a list of alternativePairs', function() {
    var res = {
      query: "4 + 5",
      alternatives: [9,4,7,1],
      answer: 9
    };
    spyOn(problems, 'getProblem').and.returnValue(res);
    ctrl.getRandomProblem();
    expect(ctrl.alternativePairs).toEqual([{left:9,right:4},{left:7,right:1}]);
  });
  
  it('gets a random problem with #getRandomProblem', function() {
    var res = {
      query: "4 + 5",
      alternatives: [9,4,7,1],
      answer: 9
    };
    spyOn(problems, 'getProblem').and.returnValue(res);

    ctrl.getRandomProblem();

    $rootScope.$digest();

    expect(ctrl.problem).toEqual(res);
  });

});