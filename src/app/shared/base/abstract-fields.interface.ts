import { InputInterface } from "../atomic-design/atoms/input/input.interface";

export interface AbstractFieldsService {
  buildFields(): InputInterface[]
}
