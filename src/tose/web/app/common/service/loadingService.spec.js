describe('LoadingService', function () {

    var LoadingService;

    beforeEach(function() {
        jasmine.Clock.useMock();
        module('angular-seed');
        inject(function(_LoadingService_) {
            LoadingService = _LoadingService_;
        });
    });

    it('should exist', function() {
        expect(LoadingService).not.toBeUndefined();
    });

    it('should have active loading after loading start', function() {
        LoadingService.start();
        expect(LoadingService.loading.active).toBe(true);
    });

    it('should not have active loading after loading stop', function() {
        LoadingService.start();
        expect(LoadingService.loading.active).toBe(true);
        LoadingService.stop();
        expect(LoadingService.loading.active).toBe(false);
    });

    it('should store info about arbitrary number of loadings', function() {
        LoadingService.start();
        LoadingService.start();
        LoadingService.start();
        expect(LoadingService.loading.active).toBe(true);
        LoadingService.stop();
        expect(LoadingService.loading.active).toBe(true);
        LoadingService.stop();
        LoadingService.stop();
        expect(LoadingService.loading.active).toBe(false);
    });

});
