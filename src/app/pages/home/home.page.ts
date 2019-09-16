import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { ToastController, LoadingController, AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public contatos: any[];

  constructor(
    private service: DataService,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private navCtrl: NavController,
  ) {}

  ngOnInit() {
    this.service.getContatos()
    .subscribe(
      (res: any) => {
        this.contatos = res;
      }
    )
  }

  async deletarContato(contact) {
    const loading = await this.loadingCtrl.create({
      message: "Cadastrando..."
    });
    loading.present();

    this.service
      .createContato(contact)
      .subscribe(
        (res: any) => {
          loading.dismiss();
          this.showSuccess(res)
        },
        (err: any) => {
          loading.dismiss();
          this.showError("Falha ao cadastrar contato")
        }
      )
  }

  async alterarContato(contact) {
    const loading = await this.loadingCtrl.create({
      message: "Cadastrando..."
    });
    loading.present();

    this.service
      .createContato(contact)
      .subscribe(
        (res: any) => {
          loading.dismiss();
          this.showSuccess(res)
        },
        (err: any) => {
          loading.dismiss();
          this.showError("Falha ao cadastrar contato")
        }
      )
  }

  async showSuccess(data) {
    const alert = await this.alertCtrl.create({
      message: "Contato inserido com sucesso!",
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
