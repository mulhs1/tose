describe('DateTimeUtils', function () {

    var DateTimeUtils;

    beforeEach(function() {
        module('angular-seed');
        inject(function(_DateTimeUtils_) {
            DateTimeUtils = _DateTimeUtils_;
        });
    });


    it('should exist', function() {
        expect(DateTimeUtils).not.toBeUndefined();
    });

    it('should get correct month from month day', function() {
        expect(DateTimeUtils.getMonth('--10-20')).toEqual(10);
    });

    it('should get correct day from month day', function() {
        expect(DateTimeUtils.getDay('--10-20')).toEqual(20);
    });

    it('should create correct month day string', function() {
        expect(DateTimeUtils.createMonthDayString(10, 20)).toEqual('--10-20');
    });

    it('should format month day string', function() {
        expect(DateTimeUtils.formatMonthDay('--10-20')).toEqual('20. 10.');
    });

    it('should get correct last occurred date for month day', function() {
        var now = new Date(),
            nowYear = now.getFullYear(),
            nowMonth = now.getMonth() + 1,
            nowDate = now.getDate(),
            skipFirstDayOfMonth = nowDate === 1;

        if (!skipFirstDayOfMonth) {
            expect(DateTimeUtils.getLastOccurredDateForMonthDay('--' + nowMonth + '-' + (nowDate - 1)).getFullYear())
                .toEqual(nowYear);
        }

        expect(DateTimeUtils.getLastOccurredDateForMonthDay('--' + nowMonth + '-' + nowDate).getFullYear())
            .toEqual(nowYear - 1);
    });

});
