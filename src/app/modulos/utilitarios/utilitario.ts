import { DefaultEntity } from "src/app/shared/default.entity";



export interface Utilitario extends DefaultEntity {
  nome: string;
  valor: number;
  anoFabricacao: number;
  anoModelo: number;
}
