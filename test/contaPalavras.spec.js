
const Lab = require('lab');
const lab = exports.lab = Lab.script();

const { expect } = require('code');

const { contaPalavras } = require('../app/contaPalavras');

lab.experiment('Teste com 3 palavras', () => {
  lab.test('Deve retornar 3', (done) => {
  expect(contaPalavras("Eu sou lindo")).to.equal({quantidade: 3 });
  done();
  });
});
  
