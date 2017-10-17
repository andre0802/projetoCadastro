var app = angular.module("pessoas", []);
app.controller("pessoasCtrl", function ($scope, $filter) {
    $scope.pessoas = [
        {
            nome: "André", cpf: "648.760.981-15",
            telefone: "(41) 8888-9999", email: "andre@gmail.com",
        }, {
            nome: "Jonas", cpf: "155.488.799-65",
            telefone: "(81) 4545-8899", email: "jonas@gmail.com",
        }
    ];
    $scope.add = function (pessoa) {
        $scope.pessoas.push(angular.copy(pessoa));
        delete $scope.pessoa;
        alert("Cadastro salvo com sucesso!");
    }
    $scope.apagar = function (index) {
        $scope.pessoas.splice(index, 1);
    };
});