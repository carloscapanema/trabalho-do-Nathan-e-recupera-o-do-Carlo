const express = require('express');
const db = require('./db'); // Importa a conexão com o banco configurada abaixo

const app = express();

// Middleware obrigatório para o Express entender JSON no req.body
app.use(express.json());

// =========================================================================
// RESPOSTA DA QUESTÃO 6 (Rota POST /livros)
// =========================================================================
app.post('/livros', async (req, res) => {
  try {
    // 2. Entrada de dados: receber titulo e autor do req.body
    const { titulo, autor } = req.body;

    // Validação simples para evitar dados vazios
    if (!titulo || !autor) {
      return res.status(400).json({ erro: 'Os campos titulo e autor são obrigatórios.' });
    }

    // 3. Banco de Dados: executar a query de inserção usando db.query()
    const sql = 'INSERT INTO livros (titulo, autor) VALUES (?, ?)';
    const [resultado] = await db.query(sql, [titulo, autor]);

    // 4. Resposta: retornar status 201 (Created) e JSON de sucesso
    return res.status(201).json({
      mensagem: 'Livro cadastrado com sucesso!',
      id: resultado.insertId,
      livro: { titulo, autor }
    });
  } catch (error) {
    console.error('Erro ao cadastrar livro:', error);
    return res.status(500).json({ erro: 'Erro interno ao cadastrar o livro.' });
  }
});
// =========================================================================

// Inicialização do servidor para testar no laboratório
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
