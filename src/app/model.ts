export class Model{

  kullaniciAdi;
  yapılacaklar;

  constructor(){

    this.kullaniciAdi="Budotekno";
    this.yapılacaklar=[

      new TodoYapılacaklar("Kitap oku",true)


    ]



  }
}

export class TodoYapılacaklar{

  aciklama;
  durum;

  constructor(aciklama:string, durum:boolean){

    this.aciklama = aciklama;
    this.durum=durum;

  }


}
