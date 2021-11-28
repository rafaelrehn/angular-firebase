import { Component, Inject, OnInit } from "@angular/core"
import { ActivatedRoute, Router } from "@angular/router"
import { IBreadcrumb } from "../atomic-design/atoms/breadcrumb/breadcrumb.interface"
import { IInputInterface, IInputType } from "../atomic-design/atoms/input/input.interface"
import { IViewForm } from "../atomic-design/molecules/view-form/view-form.interface"
import { AbstractFieldsService } from "../base/abstract-fields.interface"
import { AbstractService } from "../base/abstract.service"
import { getInputValue } from "../base/utils"
import { DefaultEntity } from "../default.entity"

export abstract class AbstractViewClass<T>{
    model: T

    arrayViewForm: IViewForm[] = []
    inputs: IInputInterface[]

    breadcrumb: IBreadcrumb[]

    constructor(
        protected service: AbstractService<DefaultEntity>,
        @Inject('fieldsService') protected fieldsService: AbstractFieldsService,
        protected router: Router,
        protected activatedRoute: ActivatedRoute,
    ) { 
        this.inputs = this.fieldsService.buildFields()
        this.getModel()
    }

    getModel(){
        let key = this.activatedRoute.snapshot.paramMap.get('key') as string;
        this.service.getOne(key).subscribe(res=>{
            this.model = res as T
            console.log({res})
            Object.assign(this.model, {key: key})
            this.inputs.forEach(input=>{
                
                this.arrayViewForm.push({
                    label: input.label as string,
                    value: getInputValue(input, this.model),
                    mask: input.inputType,
                })        
            })    
            this.loadDefaultActions()
        
        })
    }    

    headerActionEvent(event: string){
        if(event=='edit'){
            const model = this.model as any
            this.router.navigate([`../../edit/${model.key}`], { relativeTo: this.activatedRoute })
        }
    }

    loadDefaultActions(){
        this.buildBreadCrumb()  
        this.afterContentLoaded()
    }

    afterContentLoaded(): void {}

    abstract buildBreadCrumb(): void
}