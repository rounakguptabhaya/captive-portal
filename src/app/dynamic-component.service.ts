import { Injectable, ComponentFactoryResolver, ApplicationRef, Injector, ComponentRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DynamicComponentService {
  constructor(
    private resolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {}

  addComponent(component: any, container: HTMLElement): ComponentRef<any> {
    const factory = this.resolver.resolveComponentFactory(component);
    const componentRef = factory.create(this.injector);
    this.appRef.attachView(componentRef.hostView);
    container.appendChild(componentRef.location.nativeElement);
    return componentRef;
  }
}
