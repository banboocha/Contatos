import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { LoadingController, AlertController, ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: DataService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private navCtrl: NavController,
  ) { 
    this.form = this.fb.group({
      name:[''],
      email:[''],
      username:[''],
      password:['']
    })
  }

  ngOnInit() {
  }

  async submit() {
    const loading = await this.loadingCtrl.create({
      message: "Cadastrando..."
    });
    loading.present();

    this.service
      .createCustumer(this.form.value)
      .subscribe(
        (res: any) => {
          loading.dismiss();
          this.showSuccess(res)
        },
        (err: any) => {
          loading.dismiss();
          this.showError("Falha ao cadastrar")
        }
      )
  }

  async showSuccess(data) {
    const alert = await this.alertCtrl.create({
      message: "Bem vindo!",
      buttons: [
        {
          text: "Continuar",
          handler: () => {
            this.navCtrl.navigateRoot('/login');
          }
        }
      ]
    });
    alert.present()
  }

  async showError(message) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 3000,
      showCloseButton: true,
      closeButtonText: "Fechar"
    });
    toast.present();
  }

}
