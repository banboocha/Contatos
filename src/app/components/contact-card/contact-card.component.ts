import { Component, OnInit } from '@angular/core';
import { UserUtil } from 'src/app/utils/user.util';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss'],
})
export class ContactCardComponent implements OnInit {

  public user: any;

  constructor() { }

  ngOnInit() {
      this.user = UserUtil.get();
  }

}
