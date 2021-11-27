import { IBreadcrumb } from "./breadcrumb.interface";

export class BreadCrumbBuilder{
    breadCrumb: IBreadcrumb

    build(label: string, route: string){
        this.breadCrumb = {
            label: label,
            route: route
        }

        return this
    }

    active(){
        this.breadCrumb.active = true
        return this
    }

    get(){
        return this.breadCrumb
    }
}