Essa API faz parte do desafio backend da B2W Digital.

> ## Casos de uso

1. ✅ Deve ser possível cadastrar um novo planeta
2. ✅ Deve ser possível listar todos os planetas
3. ✅ Deve ser possível buscar um planeta pelo seu nome
4. ✅ Deve ser possível buscar um planeta pelo seu ID
4. ✅ Deve ser possível remover um planeta pelo seu ID

> ## Como usar

1. Clone esse repositório na sua máquina **https://github.com/yants95/b2wdigital.git**
2. Inicie o docker na sua máquina
3. Entre na pasta do projeto e execute **yarn run up**
4. Está pronto! A API está disponível no endereço **http://localhost:5050/api** com os endpoints abaixo
    -> GET: /planets
    -> GET: /planets/id/:planetId
    -> GET: /planets/name/:planetName
    -> DELETE: /planets/:planetId
    -> POST: /planets