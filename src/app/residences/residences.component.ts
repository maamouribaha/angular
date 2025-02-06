import { Component } from '@angular/core';
import { Residence } from '../core/models/Residence';
import { CommonService } from '../core/services/common.service';
import { ResidenceService } from '../core/services/residence.service';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css'],
})
export class ResidencesComponent {
//injection du commonservice dans la classe residence
  constructor(private cs:CommonService, private rs:ResidenceService){}

search_item:string="";
 listR:Residence[]=[];
ngOnInit(){
  // this.rs.addResidence({
  //   id: 5,
  //   name: 'El Narjesse',
  //   address: 'Ariana',
  //   image: '../../assets/images/R4.jpg',
  //   status: 'Vendu',
  // },)
 this.rs.getResidenceList().subscribe(res=>this.listR=res);
  // console.log(this.cs.getSomeValueOf(this.listR,"status","Vendu"));
}


  favoris: Residence[] = [];

  showLocation(adress: string) {
    if (adress === 'inconnu') {
      alert("l'adresse est inconnu");
    } else {
      alert("l'adresse est" + adress);
    }
  }

  addFavorite(residence: Residence) {
    if (!this.favoris.includes(residence)) {
      this.favoris.push(residence);
    }
    console.log(this.favoris);
  }
filtreByAddress(){
  return this.listR.filter(residance=> residance.address.toLowerCase().includes(this.search_item.toLowerCase()))
}

}
