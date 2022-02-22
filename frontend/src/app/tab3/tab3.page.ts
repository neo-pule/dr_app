import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  todoList = [{day:"Monday",time:"09:00 AM - 07:00 PM"},{day:"Tuesday",time:"09:00 AM - 07:00 PM"},{day:"Wednesday",time:"09:00 AM - 07:00 PM"},{day:"Thurday",time:"09:00 AM - 07:00 PM"},{day:"Friday",time:"09:00 AM - 07:00 PM"},{day:"Saturday",time:"09:00 AM - 01:00 PM"},{day:"Sunday",time:"Holiday"}]

  constructor() {}

}
