#Angular is a development platform for building websites.Its a javascript framework which allow us to create single page application(A framework is a platform for developing software applications) 
#Single Page Application:- It is a web aaplication,which has only one HTML page .When we navigate around, only content of HTML page changes.The page itself dont change.
Advantages of SPA:-Fast and reactive.
Component:-A Component is a piece of UI. An angular application is basically tree of components.command to create component(ng g c componentName)
Disadvantages of Template Property:-It mixes typescript and html code which makes the code less maintainable.HTML is written as string so we will get no errors while compile time.
Data Binding in Anguar allow us to communicate between a component class and its corresponding view template.
One way data binding:- (Data flows in one direction like from component to view or from view to component)1.TS->Template(String interpolation{ {{data}} } and Property Binding { [property]="value" })2.Template->TS(Event Binding){(click)="onClick()"}
Two way data binding:-(Data flow from component to its view template and at the same time ,from view template to component class,Combination of property binding and event binding)ngModel.{[(ngModel)]=searchtext}(We have to import formsModule in app module and add it in imports.)
A directive is an instruction to DOM.There are three types of directives COMPONENT DIRECTIVE() ,ATTRIBUTE DIRECTIVE(Is used to change the apperence or behaviour of Dom element [ngStyle,ngClass]) ,STRUCTURAL DIRECTIVE(Is used to add or remove a DOM element on webpage[ngIf, ngFor ,ngSwitch])
[ngStyle]="{fontWeight:'bold',color:logic?'red':'blue'}".NgStyle directive is an attribute directive which allow us to set style of an element using expression.
@Input---->(Parent----->Child)
@Output---->(Child----->Parent)