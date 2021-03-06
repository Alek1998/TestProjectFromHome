import {Component, OnInit} from '@angular/core'
import { Router } from '@angular/router'
import { EventService } from './shared/index'

@Component({
  templateUrl: 'create-event.component.html',
  styles: [`
    em {float:right; color:#E05C65; padding-left:10px;}
    .error input {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999; }
    .error :-moz-placeholder { color: #999; }
    .error ::-moz-placeholder {color: #999; }
    .error :ms-input-placeholder { color: #999; }
  `]
})
export class CreateEventComponent implements OnInit{
  isDirty:boolean = true
  event: any
  constructor(private router: Router, private eventService:EventService) {

  }

  saveEvent(formValues) {
this.eventService.saveEvent(formValues)
this.isDirty = false
this.router.navigate(['/events'])
}


  ngOnInit() {
    this.event = {
      name: 'NgSpectacular',
      date: new Date('9/26/2036'),
      time: '10:00 am',
      price: 599.99,
      imageUrl: '/app/assets/images/angularconnect-shield.png',
      location: {
        address: '1057 DT',
        city: 'London',
        country: 'England'
      }
    }
  }

  cancel() {
  this.router.navigate(['/events'])
}
}
