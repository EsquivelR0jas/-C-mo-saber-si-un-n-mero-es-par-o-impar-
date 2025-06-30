function verificarParImpar() {
    const numero = parseInt(document.getElementById("numero").value);
    const resultado = document.getElementById("resultadoParImpar");

    if (isNaN(numero)) {
      resultado.innerHTML = " Por favor, ingresa un número válido.";
      return;
    }

    if (numero % 2 === 0) {
      resultado.innerHTML = ` ${numero} es un número <strong>PAR</strong>.`;
    } else {
      resultado.innerHTML = ` ${numero} es un número <strong>IMPAR</strong>.`;
    }
  }

  function mostrarPares() {
    const limite = parseInt(document.getElementById("limite").value);
    const resultado = document.getElementById("resultadoPares");

    if (isNaN(limite) || limite < 0) {
      resultado.innerHTML = " Por favor, ingresa un límite válido (número ≥ 0).";
      return;
    }

    let pares = [];
    for (let i = 0; i <= limite; i += 2) {
      pares.push(i);
    }

    resultado.innerHTML = ` Números pares hasta ${limite}:<br><strong>${pares.join(', ')}</strong>`;
  }

  