import { Component, Inject, OnInit } from "@angular/core"
import { ActivatedRoute, Router } from "@angular/router"
import { IBreadcrumb } from "../atomic-design/atoms/breadcrumb/breadcrumb.interface"
import { IInputInterface } from "../atomic-design/atoms/input/input.interface"
import { IViewForm } from "../atomic-design/molecules/view-form/view-form.interface"
import { AbstractFieldsService } from "../base/abstract-fields.interface"
import { AbstractService } from "../base/abstract.service"
import { DefaultEntity } from "../default.entity"

export abstract class AbstractViewClass<T>{
    model: T

    arrayViewForm: IViewForm[] = []
    inputs: IInputInterface[]

    breadcrumb: IBreadcrumb[]

    constructor(
        protected service: AbstractService<DefaultEntity>,
        @Inject('fieldsService') protected fieldsService: AbstractFieldsService,
        protected route: Router,
        protected activatedRoute: ActivatedRoute
    ) { 
        this.inputs = this.fieldsService.buildFields()
        this.getModel()
    }

    getModel(){
        let key = this.activatedRoute.snapshot.paramMap.get('key') as string;
        this.service.getOne(key).subscribe(res=>{
        this.model = res as T
        this.inputs.forEach(input=>{
            const _model = this.model as any
            const value = _model[input.name]
            this.arrayViewForm.push({
                label: input.label as string,
                value: value,
                mask: input.inputType
            })        
        })    
        this.buildBreadCrumb()  
        })
    }

    abstract buildBreadCrumb(): void
}