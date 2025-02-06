import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ResidenceService } from '../core/services/residence.service';
import { Residence } from '../core/models/Residence';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addresidence',
  templateUrl: './addresidence.component.html',
  styleUrls: ['./addresidence.component.css'],
})
export class AddresidenceComponent {
  residenceform!: FormGroup;
  residence!:Residence;
  idR!:number;

  constructor(private rs: ResidenceService, private route: Router,private ac:ActivatedRoute) {}
  ngOnInit() {
    this.residenceform = new FormGroup({
      id: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[1-9]/),
      ]),
      name: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[A-Z]/),
      ]),
      address: new FormControl('', [
        Validators.required,
        Validators.maxLength(10),
      ]),
      image: new FormControl('', Validators.required),
      status: new FormControl('', [Validators.required]),
    });


    //1- recuperer l'id depuis l'url
    this.idR = this.ac.snapshot.params['idR'];
    //2. récupere l'objet relatif à l'id
    this.rs.getResidenceById(this.idR).subscribe((res) => {
      this.residence = res;
      console.log(this.residence);
      //3 remplir le formulaire avec l'objet recuperer
      this.residenceform.patchValue(this.residence);
    });  }


 
  get id() {
    return this.residenceform.get('id');
  }
  get name() {
    return this.residenceform.get('name');
  }
  get address() {
    return this.residenceform.get('address');
  }
  get status() {
    return this.residenceform.get('status');
  }

  add() {
    if (this.idR) {
      this.rs
        .updateResidence(this.residenceform.value, this.idR)
        .subscribe(() => this.route.navigate(['/residences']));
    } else {
      this.rs.addResidence(this.residenceform.value).subscribe(() => {
        console.log('added!!!!');
        this.route.navigate(['/residences']);
      });
      console.log(
        'Form residence : ' + JSON.stringify(this.residenceform.value)
      );
    }
  }
}
