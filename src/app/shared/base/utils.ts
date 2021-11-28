import { IInputInterface, IInputType } from "../atomic-design/atoms/input/input.interface"

export function getInputValue(input: IInputInterface, model: any): string{
    const _model = model as any
    if(input.inputType == IInputType.RADIO || input.inputType == IInputType.SELECT){
        const idxLabel = input.select?.options.map(m=>m.value).indexOf(_model[input.name]) as number
        if(idxLabel > -1){
            return input.select?.options[idxLabel].label as string
        }else{
            return ''
        }            
    }else if(input.inputType == IInputType.MULTISELECT){
        const values: string[] = _model[input.name]
        if(values.length > 0){
            let res = ''
            values.forEach((val, i)=>{
                const idxLabel = input.select?.options.map(m=>m.value).indexOf(val) as number
                const va = input.select?.options[idxLabel].label as string
                res.length == 0 ? res += va : res += ', '+ va                    
            })
            return res
        }else{
            return ''
        }
        
    }else{
        const value = _model[input.name]
        return value   
    }        
}