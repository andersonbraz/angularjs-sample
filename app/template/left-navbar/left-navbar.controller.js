(function(angular){
    'use strict'

    angular.module("sampleApp").controller("LeftMenuBarController", leftMenuBarController);

    leftMenuBarController.$inject = ["$rootScope","AppService"];

    function leftMenuBarController($rootScope, AppService){

        var vm = this;

        $rootScope.messages = $rootScope.messages || [];
        vm.opcoesMenuEsquerdo = [];

        vm.init = function(){
            vm.listarLeftMenu();
        }

        vm.listarLeftMenu = function(){
            AppService.listaMenuEsquerdo().then(
                function(response){
                    vm.opcoesMenuEsquerdo = response.data.lista;
                },
                function(error){
                    $rootScope.messages.push({
                        type: "ERROR",
                        text: "Não foi possível listar opções menu esquerdo."
                    });
                }
            );
        }

    }

})(angular);