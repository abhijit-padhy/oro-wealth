var app = angular.module('app',[]);

app.controller('ctrl',function($scope){
    $scope.message = "index message";
    $scope.flag = true;
    $scope.user = {
        "name":"",
        "phone":"",
        "fb":"",
        "tw":"",
        "link":""
    };
    $scope.userList = [];
    $scope.save = function(){
        var obj = JSON.stringify($scope.user);
        var copyObj = JSON.parse(obj);
        var tmp = false;
        $scope.userList.forEach(element => {
            if(copyObj.name == element.name){
                element.name = copyObj.name;
                element.phone = copyObj.phone;
                element.fb = copyObj.fb;
                element.tw = copyObj.tw;
                element.link = copyObj.link;
                tmp = true;
            }          
        });
        if(tmp == false){
            $scope.userList.push(copyObj);
        }
    };
    $scope.add = function(){
        $scope.flag = true;
        $scope.user = {
            "name":"",
            "phone":"",
            "fb":"",
            "tw":"",
            "link":""
        };
    };
    $scope.next = function(){
        $scope.flag = false;
    };
    $scope.delete = function(index){
        $scope.userList.splice(index,1);
    };
    $scope.edit = function(row){
        $scope.flag = true;
        $scope.user = {
            "name":row.name,
            "phone":row.phone,
            "fb":row.fb,
            "tw":row.tw,
            "link":row.link
        };
    }
});