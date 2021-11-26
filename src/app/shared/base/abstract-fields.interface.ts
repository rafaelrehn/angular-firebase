import { IInputInterface } from "../atomic-design/atoms/input/input.interface";

export interface AbstractFieldsService {
  buildFields(): IInputInterface[]
}
