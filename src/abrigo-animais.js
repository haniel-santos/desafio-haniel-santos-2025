class AbrigoAnimais {

  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
    const brinquedos = ['RATO', 'BOLA', 'LASER', 'CAIXA', 'NOVELO', 'SKATE'];
    const listaPessoa1 = brinquedosPessoa1.split(',');
    const listaPessoa2 = brinquedosPessoa2.split(',');
    const listaAnimais = ordemAnimais.split(',');

    const animaisValidos = [
    { nome: 'Rex', especie: 'cão', brinquedos: ['RATO', 'BOLA'] },
    { nome: 'Mimi', especie: 'gato', brinquedos: ['BOLA', 'LASER'] },
    { nome: 'Fofo', especie: 'gato', brinquedos: ['BOLA', 'RATO', 'LASER'] },
    { nome: 'Zero', especie: 'gato', brinquedos: ['RATO', 'BOLA'] },
    { nome: 'Bola', especie: 'cão', brinquedos: ['CAIXA', 'NOVELO'] },
    { nome: 'Bebe', especie: 'cão', brinquedos: ['LASER', 'RATO', 'BOLA'] },
    { nome: 'Loco', especie: 'jabuti', brinquedos: ['SKATE', 'RATO'] }
  ];
  

  }
}

export { AbrigoAnimais as AbrigoAnimais };
