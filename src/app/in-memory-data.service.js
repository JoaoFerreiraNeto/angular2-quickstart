"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var contatos = [
            { id: 1, nome: 'João', email: 'joao@joao.com', telefone: '(00) 0000-0000' },
            { id: 2, nome: 'Pedro', email: 'pedro@joao.com', telefone: '(00) 1111-0000' },
            { id: 3, nome: 'Lucas', email: 'lucas@joao.com', telefone: '(00) 2222-0000' },
            { id: 4, nome: 'José', email: 'jose@joao.com', telefone: '(00) 3333-0000' },
            { id: 5, nome: 'Geremias', email: 'geremias@joao.com', telefone: '(00) 5555-0000' }
        ];
        return { contatos: contatos };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map