import { Component, OnInit, Input } from '@angular/core';
import { Contact } from 'src/app/model/Contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styles: []
})
export class ContactListComponent implements OnInit {

  @Input() contacts: Contact[];
  constructor() { }

  ngOnInit() {
  }

}
