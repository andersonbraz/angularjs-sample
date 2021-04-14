(function (angular) {

    'use strict';

    angular.module("sampleApp").controller("TableController", tableController);

    tableController.$inject = ["$scope", "AppService", "NgTableParams"];

    function tableController($scope, AppService, NgTableParams) {
        var vm = this;

        vm.init = function () {
            console.log("LOG_CONTROLLER_HOME");
            vm.preparaLista();
        };

        vm.preparaLista = function () {
            AppService.listaPessoas().then(
                function (response) {
                    vm.resposta1 = response.data.lista;
                    vm.pessoa = new NgTableParams({
                        count: 10
                    }, {
                        counts: [],
                        dataset: response.data.lista
                    });
                    AppService.listaInfos().then(
                        function (response) {
                            vm.resposta2 = response.data.lista;
                            vm.info = new NgTableParams({
                                count: 10
                            }, {
                                counts: [],
                                dataset: response.data.lista
                            });
                            vm.listarGeral();
                        },
                        function (error) {
                            console.log("ERROR_RESPONSE_INFOS: " + JSON.stringify(error));
                        }
                    );
                },
                function (error) {
                    console.log("ERROR_RESPONSE_PESSOAS: " + JSON.stringify(error));
                }
            );
        };

        vm.listarGeral = function () {

            vm.resultado = [];

            /*
            vm.resposta1.map(function(item){
                vm.resultado.push({
                    ...item,
                    ...vm.resposta2.find((element) => element.condigoInfo === item.condigoInfo);
                    })
                });
            }); 
            */

            vm.resposta1.map(function(item){
                vm.resultado.push({
                    ...item,
                    ...vm.resposta2.find(function(element){
                        return element.condigoInfo === item.condigoInfo;
                    })
                });
            });

            vm.book = new NgTableParams({
                count: 10,
                sorting: {name:"asc"}
            }, {
                counts: [],
                dataset: vm.resultado
            });

            //console.table(vm.resultado);

        };

    };

})(angular);