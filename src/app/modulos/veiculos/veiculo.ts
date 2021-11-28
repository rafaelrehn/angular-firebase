import { DefaultEntity } from "src/app/shared/default.entity";



export interface Veiculo extends DefaultEntity {
  nome: string;
  valor: number;
  anoFabricacao: number;
  anoModelo: number;
}
