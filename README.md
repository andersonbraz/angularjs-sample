# angularjs-sample



1. Criando projeto e fazendo a instalacao de dependencias.

```
cd c:\Projects

mkdir angularjs-sample

npm init

npm i -D cpx
npm i -D live-server

mkdir c:\Projects\angularjs-sample\app


npm i angular@1.8.x
npm i angular-animate@1.8.x
npm i angular-resource@1.8.x
npm i angular-route@1.8.x
npm i bootstrap
npm i jquery
npm i popper.js
npm i @fortawesome/fontawesome-free
npm i ng-table
npm i -f

```

2. Definição do scripts essenciais para desenvolvimento do projeto 

```
"scripts": {
	"start": "live-server app --host=localhost --port=8090",
	"postinstall": "npm run copy-libs",
	"copy-libs": "cpx \"node_modules/{angular,angular-*,bootstrap/dist,jquery/dist,@fortawesome/fontawesome-free}/**/*\" app/lib -C"
}
```