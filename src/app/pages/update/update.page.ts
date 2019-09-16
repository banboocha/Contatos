import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

  public form: FormGroup; 
  public contato: any;
  
  constructor(
    private service: DataService,
    private route: ActivatedRoute,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
    const contato = this.route.snapshot.paramMap.get('contato');
    this.service.getContato(contato)
    .subscribe(
      (res: any) => this.contato = res
    );
  }

}
