import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Container_Template';

  /*
    This Constructor parameter is used for the ng-template render to the html.
    Without ViewContainerRef we can not able to display and render the ng-template
  */
  constructor(private vcr:ViewContainerRef){}

  /*
    01 = This ViewChild() help to ng-template render.
    02 = static:true means it will render when ngOnInt method called.
    03 = read:TemplateRef mean it will return the TemplateRef so we specify here.
  */
  @ViewChild('templateData',{static:true,read:TemplateRef}) templateDataRef!:TemplateRef<any>;

  /*  This is create for the check the condition if true then array print otherwise not print. */
  status:boolean = true;

  /*  This Array is just for the display and implement the containder logic so it was created. */
  products = [
    {name:'Laptop'},
    {name:'PCs'},
    {name:'Mobile'},
    {name:'Smartphones'},
  ];

  ngOnInit(){
    /*
      This is used for the render the ng-template into the html
      This is called when static:true
    */
    let view = this.vcr.createEmbeddedView(this.templateDataRef);
  }

  ngAfterViewInit(){
    /*  This is called when static:false */
    // let view = this.vcr.createEmbeddedView(this.templateDataRef);
  }
}
