import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { Options } from "../../domain/use-cases/save-file.sistem";

export const yarg = yargs(process.argv)
  .option("b", {
    // el argv es un arreglo que contiene los argumentos que se le pasan a la aplicacion
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Es la base de la tabla de multiplicar",
  })
  .option(
    // son opciones que se pueden pasar a la aplicacion de la tabla de multiplicar
    "l",
    {
      alias: "limit",
      type: "number",

      default: 10,
      describe: "Multiplica hasta el numero que se le pase",
    }
  )
  .option("s", {
    alias: "show",
    type: "boolean",
    default: false,
    describe: "Muestra la tabla en consola",
  })
  .options("n", {
    alias: "name",
    type: "string",
    default: "tabla",
    describe: "Nombre del archivo",
  })
  .options("d", {
    alias: "file",
    type: "string",
    default: "outputs",
    describe: "Carpeta donde se guardara el archivo",
  })
  .check((argv, option) => {
    // es una funcion que se ejecuta cuando se ejecuta el comando validando los argumentos
    if (argv.b < 1) throw "La base tiene que ser un numero mayor a 0";

    return true;
  })
  .parseSync();
