/* global angular */
(function () {
    "use strict";

    angular
        .module('angular-seed.common')
        .factory('DateTimeUtils', DateTimeUtils);

    // @ngInject
    function DateTimeUtils(moment, _) {

        var FORMAT_LOCAL_DATE = 'YYYY-MM-DD',
            FORMAT_LOCAL_DATE_TIME = 'YYYY-MM-DDTHH:mm:ss.SSS';

        return {
            toLocalDate: toLocalDate,
            toLocalDateTime: toLocalDateTime,

            propertiesToLocalDate: propertiesToLocalDate,
            propertiesToLocalDateTime: propertiesToLocalDateTime,

            getMonth: getMonth,
            getDay: getDay,
            createMonthDayString: createMonthDayString,
            formatMonthDay: formatMonthDay,
            getLastOccurredDateForMonthDay: getLastOccurredDateForMonthDay
        };

        function propertiesToLocalDate(object, properties) {
            return formatDateForProperties(object, properties, FORMAT_LOCAL_DATE);
        }

        function propertiesToLocalDateTime(object, properties) {
            return formatDateForProperties(object, properties, FORMAT_LOCAL_DATE_TIME);
        }

        function formatDateForProperties(object, properties, format) {
            properties.forEach(function(property) {

                if (!_.isUndefined(object[property]) && object[property] !== null) {
                    object[property] = formatDate(object[property], format);

                } else if (_.isArray(object)) {
                    object.forEach(function(value, index) {
                        value[property] = formatDate(value[property], format);
                    });
                }

            });
            return object;
        }

        function toLocalDate(date) {
            return formatDate(date, FORMAT_LOCAL_DATE);
        }

        function toLocalDateTime(date) {
            return formatDate(date, FORMAT_LOCAL_DATE_TIME);
        }

        function formatDate(date, format) {
            if (date) {
                return moment(date).format(format);
            }
        }

        function getMonth(monthDayString) {
            return parseInt(monthDayString.slice(2).split('-')[0], 10);
        }

        function getDay(monthDayString) {
            return parseInt(monthDayString.slice(2).split('-')[1], 10);
        }

        function formatMonthDay(monthDayString) {
            return getDay(monthDayString) + '. ' + getMonth(monthDayString) + '.';
        }

        function createMonthDayString(month, day) {
            if (!month || !day) {
                return;
            }
            function prependSingleDigitDate(date) {
                return date.toString().length > 1 ? date : '0' + date;
            }
            return '--' + prependSingleDigitDate(month) + '-' + prependSingleDigitDate(day);
        }

        function getLastOccurredDateForMonthDay(monthDayString) {
            var now = new Date(),
                nowYear = now.getFullYear(),
                nowMonth = now.getMonth() + 1,
                nowDate = now.getDate();

            // Occurred previous year
            if (nowMonth < getMonth(monthDayString)) {
                return createDate(nowYear - 1);

                // Occurred this year
            } else if(nowMonth > getMonth(monthDayString)) {
                return createDate(nowYear);

                // Occurred this or previous year based on specific date
            } else {

                // Occurred previous year
                if (nowDate <= getDay(monthDayString)) {
                    return createDate(nowYear - 1);

                    // Occurred this year
                } else {
                    return createDate(nowYear);
                }
            }

            function createDate(year) {
                return new Date(year, getMonth(monthDayString) - 1, getDay(monthDayString), 0, 0, 0, 0);
            }

        }

    }

}());