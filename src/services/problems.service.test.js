import problemsModule from './problems.service';

describe('Service: problems', function() {
  var problems;

  beforeEach(angular.mock.module(problemsModule));

  beforeEach(angular.mock.inject(function( _problems_) {

    problems = _problems_;
    //fdsafdsa;
  }));

  

  it('creates a random problem with #getProblem()', function() {
    expect(problems).toBeDefined();
    var res = problems.getProblem();
    expect(res.query).toBeDefined();
    expect(eval(res.query)).toEqual(res.answer);
    expect(res.alternatives).toBeDefined();
    expect(res.answer).toBeDefined();
    expect(res.answerIndex).toBeDefined();
    expect(res.alternatives).toContain(res.answer);
  
  });
});