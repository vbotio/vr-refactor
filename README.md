Vr-Refactor
===================

Esse repositório visa migrar a versão atual do projeto VR Portal para a versão 4 do AngularJS.


Dependências do projeto
-------------

 1. [NodeJS](https://nodejs.org/en/download/)
 2. [Angular-Cli](https://github.com/angular/angular-cli)
Juntamente com o Angular-CLI, serão instaladas outras dependências como o **WebPack**, **RxJS** e outros.

Instalando o projeto
-------------
Após a instalação das dependências, no seu terminal digite o seguinte comando: `$ npm install`


Executando o projeto localmente
-------------
Execute `ng serve -o`
 Sua aplicação automaticamente estará rodando em `localhost:4200`
 Caso queira alterar a porta em que o projeto está sendo executado, basta rodar o comando `ng serve --host 0.0.0.0 --port 4201` 


Build
-------------
Execute o comando `ng build` . Todo os arquivos buildados estarão dentro de `dist`. Para buildar para produção use a flag `-prod`.

Deploy em Prod (Heroku temporariamente)
-------------
Após ser invitado para o projeto no Heroku pelo admin, execute os seguintes comandos no seu terminal
 1. heroku git:remote -a https://git.heroku.com/vr-front-refactor.git
 
 __opcional__ - para checar se o comando executou com sucesso, rode ` git remote -v`
 
 O resultado esperado é parecido com: 
 ` heroku  https://git.heroku.com/vr-front-refactor.git (fetch)`
 ` heroku  https://git.heroku.com/vr-front-refactor.git (push)`
 ` origin  https://vitorbocciovr@bitbucket.org/vrbeneficiosteam/vr-refactor.git (fetch)`
 ` origin  https://vitorbocciovr@bitbucket.org/vrbeneficiosteam/vr-refactor.git (push)`

 2. git add .
 3. git commit -m "mensagem para commitar para o bitbucket"
 4. git push origin suabranch
 5. git push heroku suabranch //aqui sim é feito o deploy - lembre-se que aqui já é produção, entao double check se sua branch está ok
 
Testes unitários
-------------
Execute o comando `ng test` para utilizar os testes padrão usando [Karma](https://karma-runner.github.io/1.0/index.html)

Criando modulos, componentes, etc.
--------------
Execute `ng generate component nome-do-componente`.
ou `ng generate module nome-do-modulo`.
O mesmo comando pode ser utilizado para gerar diretivas, serviços e classes.
