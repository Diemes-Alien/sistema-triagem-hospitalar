# 🏥 Sistema de Controle de Atendimento (Hospital) - Triagem de Pacientes

Este projeto faz parte do curso **Capacita Brasil Fullstack (Módulo 1)** e foi desenvolvido em **React.js**. Meu foco principal neste trabalho foi a implementação das telas de **Login** e **Triagem de Pacientes**.

---

## ✨ Funcionalidades Implementadas na Triagem

* **Gestão de Fila de Atendimento:** Organização de pacientes com base em prioridade (cores).
* **Controle de Status:** Atualização do status do paciente para "Aguardando", "Em Atendimento" e "Atendido".
* **Priorização Visual:** Identificação clara do "Tipo de Paciente" (Urgente, Moderado, Leve) e do "Nome do Paciente" na interface.
* **Chamada de Próximo Paciente:** Funcionalidade para chamar o paciente com a maior prioridade da fila.
* **Limpeza de Dados:** Opções para limpar o histórico de pacientes atendidos ou remover todos os pacientes.
* **Exportação para Excel (CSV):** Geração de um arquivo CSV com os dados de todos os pacientes para fácil visualização em planilhas.
* **Busca e Filtragem Dinâmica:** Campo de busca para encontrar pacientes rapidamente por nome, tipo ou motivo.
* **Experiência do Usuário (UX) Aprimorada:**
    * Botão "Sair" posicionado convenientemente no canto superior direito.
    * Melhoria no feedback visual ao chamar pacientes (substituindo `alert()` por um destaque mais suave).

---

## 🚀 Como Rodar o Projeto Localmente

Siga estas instruções para configurar e rodar o projeto em sua máquina:

1.  **Clone o Repositório:**
    ```bash
    git clone [https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git](https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git)
    ```
    (Lembre-se de substituir `SEU_USUARIO` e `SEU_REPOSITORIO` pelos seus dados reais do GitHub)

2.  **Navegue até a Pasta do Projeto:**
    ```bash
    cd SEU_REPOSITORIO_NOME
    ```

3.  **Instale as Dependências:**
    ```bash
    npm install
    # ou
    yarn install
    ```

4.  **Inicie o Servidor de Desenvolvimento:**
    ```bash
    npm start
    # ou
    yarn start
    ```
    O aplicativo será aberto automaticamente no seu navegador em `http://localhost:3000`.

---

## 🧪 Como Testar com Dados de Pacientes

Para popular a lista de pacientes e testar as funcionalidades, você pode injetar dados de teste diretamente no `localStorage` do seu navegador.

1.  Com o aplicativo rodando em `http://localhost:3000`, abra as **Ferramentas do Desenvolvedor** do seu navegador (geralmente pressionando `F12`).
2.  Vá para a aba **`Console`**.
3.  Cole o seguinte código no console e pressione `Enter`:

    ```javascript
    const pacientesTeste = [
      { nome: 'Paciente Urgente', nomeReal: 'Isabela Costa', motivo: 'Dor torácica intensa', cor: 'Vermelho', status: 'Aguardando' },
      { nome: 'Paciente Urgente', nomeReal: 'Thiago Martins', motivo: 'Trauma grave na cabeça', cor: 'Vermelho', status: 'Aguardando' },
      { nome: 'Paciente Moderado', nomeReal: 'Larissa Lima', motivo: 'Crise asmática leve', cor: 'Amarelo', status: 'Aguardando' },
      { nome: 'Paciente Moderado', nomeReal: 'Rafael Souza', motivo: 'Febre persistente há 3 dias', cor: 'Amarelo', status: 'Aguardando' },
      { nome: 'Paciente Leve', nomeReal: 'Fernanda Oliveira', motivo: 'Resfriado comum', cor: 'Verde', status: 'Aguardando' },
      { nome: 'Paciente Leve', nomeReal: 'Guilherme Santos', motivo: 'Dor de garganta leve', cor: 'Verde', status: 'Aguardando' },
      { nome: 'Paciente Atendido', nomeReal: 'Sofia Rodrigues', motivo: 'Consulta de rotina', cor: 'Verde', status: 'Atendido' },
      { nome: 'Paciente Em Atendimento', nomeReal: 'Diego Alves', motivo: 'Pequena laceração no braço', cor: 'Amarelo', status: 'Em atendimento' },
    ];
    localStorage.setItem('pacientes', JSON.stringify(pacientesTeste));
    console.log('Dados de teste de pacientes carregados no localStorage!');
    ```

4.  **Recarregue a página** (`Ctrl + F5` ou `Cmd + Shift + R`).
5.  A lista de pacientes na tela de triagem será preenchida com esses dados.

---

## 👩‍💻 Equipe do Projeto

Este projeto foi desenvolvido como parte de um trabalho em equipe para o curso Capacita Brasil. Minha contribuição principal foi nas seguintes partes:

* **[Seu Nome/Membro da Equipe]:** Implementação da Tela de Login e Tela de Triagem de Pacientes.

---

## 📄 Licença

[Se você tiver uma licença específica, adicione aqui. Caso contrário, pode remover esta seção ou adicionar um "Sem Licença Específica por enquanto".]
