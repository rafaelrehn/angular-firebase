import { FileUpload } from "src/app/shared/atomic-design/organisms/file-upload/model/file-upload.model";
import { DefaultEntity } from "src/app/shared/default.entity";



export interface Veiculo extends DefaultEntity {
  nome: string;
  valor: number;
  anoFabricacao: number;
  anoModelo: number;
  imagemPrincipal: FileUpload;
  marca: string;
}
