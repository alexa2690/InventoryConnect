 angular
    .module('invConnect')
    .filter("filterRequisitions", function () {
    
    return function (items, costCenter, status) {
        var filtered = items;
        
        if(status == undefined && costCenter == undefined)
        {
            return filtered;
        }
        
        if(status != undefined) {
            filtered = filtered.filter(function(item) {
                return item.status.toLowerCase() === status;
            });
        }
        
        if(costCenter != undefined) {
            filtered = filtered.filter(function(item) {
                return item.costCenterShortName === costCenter;
            });
        }
        
        return filtered;
    }
});