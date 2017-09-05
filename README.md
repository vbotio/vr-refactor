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


#### <i class="icon-hdd"></i> Executando o projeto localmente
Execute `ng serve`
 Sua aplicação automaticamente estará rodando em `localhost:4200`
 Caso queira alterar a porta em que o projeto está sendo executado, basta rodar o comando `ng serve --host 0.0.0.0 --port 4201` 


#### <i class="icon-folder-open"></i> Build
Execute o comando `ng build` . Todo os arquivos buildados estarão dentro de `dist`. Para buildar para produção use a flag `-prod`.

#### <i class="icon-folder-open"></i> Testes unitários
Execute o comando `ng test` para utilizar os testes padrão usando [Karma](https://karma-runner.github.io/1.0/index.html)

#### <i class="icon-pencil"></i> Criando modulos, componentes, etc.

Execute `ng generate component nome-do-componente`.
ou `ng generate module nome-do-modulo`.
O mesmo comando pode ser utilizado para gerar diretivas, serviços e classes.
