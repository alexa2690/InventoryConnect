 angular
    .module('invConnect')
    .filter("dateFormat", function () {
    
    return function (input) {
        if(!angular.isDate(input)) return input;
        
        var duration = Math.round(moment.duration(moment().diff(input)).asDays());
        
        if(duration === 0 || duration === 1) {
            return moment(input).calendar();
        }
        
        return "<span>" + moment(input).format("LT") + " </span>" +
               "<span>" + moment(input).format("L") + " </span>";
    }
});