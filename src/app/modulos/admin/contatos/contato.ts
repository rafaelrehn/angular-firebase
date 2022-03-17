import { FileUpload } from "src/app/shared/atomic-design/organisms/file-upload/model/file-upload.model";
import { DefaultEntity } from "src/app/shared/default.entity";

export interface Telefones{
  numero: string;
  isWhatsApp: boolean;
}

export interface Contato extends DefaultEntity {
  nome: string;
  telefones: Telefones[];
  uploads: any[];
  ordemExibicao: number;

  imagemPrincipal: FileUpload;
}
