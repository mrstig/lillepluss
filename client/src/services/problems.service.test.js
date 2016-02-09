import problemsModule from './problems.service';

describe('Service: problems', function() {
  var problems;

  beforeEach(angular.mock.module(problemsModule));

  beforeEach(angular.mock.inject(function( _problems_) {

    problems = _problems_;
    //fdsafdsa;
  }));

  

  it('gets a random problem with #getProblem()', function() {
    expect(problems).toBeDefined();
    var res = problems.getProblem();
    expect(res.query).toBeDefined();
    expect(res.alternatives).toBeDefined();
    expect(res.answer).toBeDefined();
    expect(res.alternatives).toContain(res.answer);

  });
});