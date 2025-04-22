# api-teste-01

Tabelas do banco pra vc criar Melk

--Nome do Banco/Schemas

zyn_app_db

-- Tabela de usuários

CREATE TABLE usuarios (
 id INT AUTO_INCREMENT PRIMARY KEY,
 nome VARCHAR(100),
 email VARCHAR(100) UNIQUE,
 senha VARCHAR(255)
);

-- Tabela de dados de saúde

CREATE TABLE dados_saude (
 id INT AUTO_INCREMENT PRIMARY KEY,
 usuario_id INT,
 peso DECIMAL(5,2),
 gordura_corporal DECIMAL(5,2),
 data_registro DATE DEFAULT (CURRENT_DATE),
 FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
);

-Teste de incersão de dados-

Método: POST

URL:http://localhost:3000/auth/registro

Body (raw → JSON):

{
  "nome": "João",
  "email": "joao@email.com",
  "senha": "123456"
}

-Teste de consulta- 

Método: GET

URL:http://localhost:3000/usuarios/1

resposta esperada:

{
  "id": 1,
  "nome": "João",
  "email": "joao@email.com"
}
