import { Server } from "http";
import { yarg } from "./config/plugins/args.plugin";
import { serverApp } from "./presentation/server-app"; 

// el await  no se puede usar en el archivo principal de node por eso se usa  una funcion autoejecutable
// anonima para poder usarlo

(async () => {
  await main();
})();

async function main() {
    const { b:base, l:limit, s:show,n:name,d:file } = yarg; // destructuracion de objetos de yarg
    serverApp.run({base,limit,show,name,file}); 

}