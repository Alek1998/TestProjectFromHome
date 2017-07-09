import {Component, Input} from "@angular/core";
import {ISession} from "../shared/index";
@Component({
  selector: 'session-list',
  templateUrl: 'session-list.commponent.html'
})
export class SessionListComponent{
  @Input() sessions:ISession[]
}
