import sampleDados from "../data/sampleDados.js";

const sd = sampleDados;
const resultado = document.getElementById('resultado');

    if (sd) {
      resultado.innerHTML = `
      <div class="card">
        
        <h2><strong>Nome:</strong> ${sd.nome}</h2>
        <p><strong>ID:</strong> ${sd.id}</p>
        <p><strong>Idade:</strong> ${sd.idade}</p>
        <p><strong>Profissão:</strong> ${sd.profissao}</p>
        </div>
      `;
    } else {
      resultado.textContent = 'Erro ao carregar os dados.';
    }
