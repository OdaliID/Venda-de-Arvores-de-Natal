function iniciar() {
  let planoSemanal = true;
  
  precoSemanal = {
    basico: 9.99,
    super: 14.99,
    mega: 29.99
  }
  
  precoMensal = {
    basico: 29.99,
    super: 59.99,
    mega: 99.99
  }

  verificaPlanoAtivo(planoSemanal);
  atribuiValorPlanos();

  function atribuiValorPlanos() {
    let planoBasicoSemanal = document.getElementById("planoSemanalBasico");
    planoBasicoSemanal.textContent = `R$ ${precoSemanal.basico}`;
    planoBasicoSemanal.textContent = planoBasicoSemanal.textContent.replace('.', ',')

    let planoSuperSemanal = document.getElementById("planoSemanalSuper");
    planoSuperSemanal.textContent = `R$ ${precoSemanal.super}`;
    planoSuperSemanal.textContent = planoSuperSemanal.textContent.replace('.', ',')

    let planoMegaSemanal = document.getElementById("planoSemanalMega");
    planoMegaSemanal.textContent = `R$ ${precoSemanal.mega}`;
    planoMegaSemanal.textContent = planoMegaSemanal.textContent.replace('.', ',')

    let planoBasicoMensal = document.getElementById("planoMensalBasico");
    planoBasicoMensal.textContent = `R$ ${precoMensal.basico}`;
    planoBasicoMensal.textContent = planoBasicoMensal.textContent.replace('.', ',')

    let planoSuperMensal = document.getElementById("planoMensalSuper");
    planoSuperMensal.textContent = `R$ ${precoMensal.super}`;
    planoSuperMensal.textContent = planoSuperMensal.textContent.replace('.', ',')

    let planoMegaMensal = document.getElementById("planoMensalMega");
    planoMegaMensal.textContent = `R$ ${precoMensal.mega}`;
    planoMegaMensal.textContent = planoMegaMensal.textContent.replace('.', ',')
  }
  
  function verificaPlanoAtivo(estado) {
    let aluguelSemana = document.getElementById("aluguelSemana");
    let aluguelMes = document.getElementById("aluguelMes");
    let formularioSemanal = document.getElementById("formularioSemanal");
    let formularioMensal = document.getElementById("formularioMensal");

    if (!!estado) {
      aluguelSemana.style.display = "block";
      aluguelMes.style.display = "none";
      formularioSemanal.style.display = "none";
    }
    
    else {
      aluguelSemana.style.display = "none";
      aluguelMes.style.display = "block";
      formularioMensal.style.display = "none";
    }
  }
  
  function modificaEstadoPlano() {
    planoSemanal = !planoSemanal;
    verificaPlanoAtivo(planoSemanal);
  }

  function verificaTipoPlano(plano, tipo) {
    if (tipo == "semanal") {
      if (plano == "Semanal Básico") {
        return precoSemanal.basico;
      }

      if (plano == "Semanal Super") {
        return precoSemanal.super;
      }

      else {
        return precoSemanal.mega;
      }
    }

    else {
      if (plano == "Mensal Básico") {
        return precoMensal.basico;
      }

      if (plano == "Mensal Super") {
        return precoMensal.super;
      }

      else {
        return precoMensal.mega;
      }
    }
  }

  function calculaPlano(tipo) {
    if (tipo == "semanal") {
      let plano = document.getElementById("formularioSemanal__escolhaPlano__option").value;
      let planoValor = verificaTipoPlano(plano, "semanal");
      let qtdSemana = document.getElementById("formularioSemanal__qtdSemana__input").value;
      let valorFinal = document.getElementById("formularioSemanal__valor");
      valorFinal.textContent = `O valor final é R$ ${planoValor * qtdSemana}`
      valorFinal.textContent = valorFinal.textContent.replace('.', ',');
    }

    else {
      let plano = document.getElementById("formularioMensal__escolhaPlano__option").value;
      let planoValor = verificaTipoPlano(plano, "mensal");
      let qtdSemana = document.getElementById("formularioMensal__qtdMes__input").value;
      let valorFinal = document.getElementById("formularioMensal__valor");
      valorFinal.textContent = `O valor final é R$ ${planoValor * qtdSemana}`
      valorFinal.textContent = valorFinal.textContent.replace('.', ',');
    }


  }

  function mostrarFormulario(formulario) {
    formulario.style.display = "block";
  }
  

  let botaoPlanoSemanal = document.getElementById("descricaoPlanos__semanal__ball");
  botaoPlanoSemanal.addEventListener("click", function(){ modificaEstadoPlano()})

  let botaoPlanoMensal = document.getElementById("descricaoPlanos__mensal__ball");
  botaoPlanoMensal.addEventListener("click", function(){ modificaEstadoPlano()})


  let botaoAluguelSemanal = document.getElementById("escolhaAluguelSemanal__botao");
  let formularioSemanal = document.getElementById("formularioSemanal");
  botaoAluguelSemanal.addEventListener("click", function(){ mostrarFormulario(formularioSemanal)})

  let botaoAluguelMensal = document.getElementById("escolhaAluguelMensal__botao");
  let formularioMensal = document.getElementById("formularioMensal");
  botaoAluguelMensal.addEventListener("click", function(){ mostrarFormulario(formularioMensal)})


  let formularioSemanalBotao = document.getElementById("formularioSemanal__botao");
  let formularioMensalBotao = document.getElementById("formularioMensal__botao");
  formularioSemanalBotao.addEventListener("click", function(event){
    event.preventDefault();
    calculaPlano("semanal");
  });
  
  formularioMensalBotao.addEventListener("click", function(event) {
    event.preventDefault();
    calculaPlano("mensal");
  });
}

document.addEventListener("DOMContentLoaded", iniciar)