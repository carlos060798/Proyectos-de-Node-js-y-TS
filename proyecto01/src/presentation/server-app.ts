import { CreateTable } from "../domain/use-cases/create-table-usecase";
import { SaveFile } from "../domain/use-cases/save-file.sistem";

interface RunOptions {
   base: number;
   limit: number;
   show: boolean;
   name: string;
   file: string;

}
export class serverApp {

   static run(options: RunOptions) {
      const { base, limit, show,name,file } = options;

      const table = new CreateTable().execute({ base: base, limit: limit });
      const saveCreate = new SaveFile().execute({ fileContent: table, fileDestination:file, fileName: name });

      if (show) {
         console.log(table);
      }

   }
}