(function (angular) {

    'use strict';

    angular.module("sampleApp").factory("AppService", appService);

    appService.$inject = ["$http", "$q"];

    function appService($http, $q) {

        var services = {
            listaMenuEsquerdo: listaMenuEsquerdo,
            listaPessoas: listaPessoas,
            listaInfos: listaInfos,
            //listaJuncaoPessoaInfo: listaJuncaoPessoaInfo
        }

        return services;

        /*
        function listaJuncaoPessoaInfo(){
            var src1 = [ {"id": 1, "nome": "alfa"}, {"id": 2, "nome": "beta"} ]; // listaPessoas
            var src2 = [ {"id": 1, "letter": "A", "classe":"primary"}, {"id": 2, "letter": "B", "classe":"secondary"} ]; // listaInfos
            var result = src1.map((item, i) => Object.assign({}, item, src2[i]));
            console.table(result);
        }
        */

        function listaMenuEsquerdo() {
            return $http.get('api/menu-esquerdo.json');
        }

        function listaPessoas() {
            return $http.get('api/pessoa.json');
        }

        function listaInfos() {
            return $http.get('api/info.json');
        }

    }

})(angular);
