'use strict';

describe('LeGroupage Site', function(){
  beforeEach(module('siteControllers'));

	describe('SiteCtrl', function(){
		var scope, ctrl;
		beforeEach(inject(function ($rootScope, $controller) {
			scope = $rootScope.$new();
			ctrl = $controller('SiteCtrl', {$scope: scope});
		}));
		it('should create show blog entry count', function () {
			console.log("principle:" + scope.principle.length);
			expect(scope.principle.length).toEqual(2);
		});
	});


	describe('SiteViewCtrl', function () {
		var scope, ctrl, $httpBackend;
		beforeEach(inject(function (_$httpBackend_,
									$routeParams, $rootScope, $controller) {
			$httpBackend = _$httpBackend_;
			$httpBackend.expectGET('principle').respond({_id: '1'});
			$routeParams.id = '1';
			scope = $rootScope.$new();
			ctrl = $controller('SiteViewCtrl', {$scope: scope});
		}));
		it('should show blog entry id', function () {
			expect(scope.blogEntry._id).toEqual(1);
		});
	});
});
