import { Entity } from "src/app/shared/default.entity";



export interface Veiculo extends Entity {
  nome: string;
  valor: number;
  anoFabricacao: number;
  anoModelo: number;
}
