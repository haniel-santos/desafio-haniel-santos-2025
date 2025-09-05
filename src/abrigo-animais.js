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


    function validarBrinquedos(brinquedosArray, brinquedosValidos) {

      const temDuplicatas = new Set(brinquedosArray).size !== brinquedosArray.length;
    
      if (temDuplicatas) return false;
    
      return brinquedosArray.every(b => brinquedosValidos.includes(b));

    }

  
    function validarAnimais(animaisArray, animaisValidos) {

      const temDuplicatas = new Set(animaisArray).size !== animaisArray.length;

      if (temDuplicatas) return false;

      return animaisArray.every(animalNome => animaisValidos.some(a => a.nome === animalNome));

    }

    if (!validarBrinquedos(listaPessoa1, brinquedos) || !validarBrinquedos(listaPessoa2, brinquedos)) {

      return { erro: 'Brinquedo inválido' };

    }

    if (!validarAnimais(listaAnimais, animaisValidos)) {

      return { erro: 'Animal inválido' };

    }

    function contemSequencia(brinquedosPessoa, brinquedosAnimal) {

      let indexAnimal = 0;

      for (let i = 0; i < brinquedosPessoa.length && indexAnimal < brinquedosAnimal.length; i++) {

        if (brinquedosPessoa[i] === brinquedosAnimal[indexAnimal]) {

            indexAnimal++;

        }
      }
    
      return indexAnimal === brinquedosAnimal.length;

    }

    const resultados = [];

    for (const nomeAnimal of listaAnimais) {

      const animal = animaisValidos.find(a => a.nome === nomeAnimal);

      const brinquedosAnimal = animal.brinquedos;
    
      const pessoa1Atende = contemSequencia(listaPessoa1, brinquedosAnimal);

      const pessoa2Atende = contemSequencia(listaPessoa2, brinquedosAnimal);
    
 
      if (pessoa1Atende && pessoa2Atende) {

          resultados.push(`${animal.nome} - abrigo`);

          continue;

      }

      if (pessoa1Atende) {

        resultados.push(`${animal.nome} - pessoa 1`);

    } else if (pessoa2Atende) {

        resultados.push(`${animal.nome} - pessoa 2`);

    } else {

        resultados.push(`${animal.nome} - abrigo`);

    }    
    
  }
     
    resultados.sort();

    return { lista: resultados };

  }
}

export { AbrigoAnimais as AbrigoAnimais };
