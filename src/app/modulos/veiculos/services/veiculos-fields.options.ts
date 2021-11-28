import { ISelectOptions } from "src/app/shared/atomic-design/atoms/input/input.interface"

export const COMBUSTIVEL_OPTIONS: ISelectOptions[] = [
    {
      label: 'Gasolina',
      value: 'gasolina'
    },
    {
      label: 'Alcool',
      value: 'alcool'
    },
    {
      label: 'Flex',
      value: 'flex'
    },
    {
      label: 'Diesel',
      value: 'disel'
    }
  ]

export const ITENS_ADICIONAIS_OPTIONS: ISelectOptions[] = [
    {
      label: 'Trava elétrica',
      value: 'travaEletrica'
    },
    {
      label: 'Direção hidráulica',
      value: 'direcaoHidraulica'
    },
    {
      label: 'Alarme',
      value: 'alarme'
    },
    {
      label: 'Rodas de liga leve',
      value: 'rodaLigaLeve'
    }
  ]

export const CAMBIO_OPTIONS: ISelectOptions[] = [
    {
      label: 'Manual',
      value: 'manual',
      selected: true
    },
    {
      label: 'Automático',
      value: 'automatico'
    },
  ]

export const COR_OPTIONS: ISelectOptions[] = [
    {
      label: 'Branco',
      value: 'branco',
      selected: true
    },
    {
      label: 'Prata',
      value: 'prata'
    },
    {
      label: 'Preto',
      value: 'preto'
    },
    {
      label: 'Amarelo',
      value: 'amarelo'
    },
    {
      label: 'Azul',
      value: 'azul'
    },
    {
      label: 'Vermelho',
      value: 'vermelho'
    },
  ]