import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResidenceService } from '../core/services/residence.service';
import { Residence } from '../core/models/Residence';

@Component({
  selector: 'app-residence-details',
  templateUrl: './residence-details.component.html',
  styleUrls: ['./residence-details.component.css']
})
export class ResidenceDetailsComponent {
  idR!:number;
  residence!:Residence;
  constructor(private act:ActivatedRoute, private rs:ResidenceService){}

  ngOnInit(){
    this.idR=this.act.snapshot.params['id'];

   this.rs.getResidenceById(this.idR).subscribe((res)=>this.residence=res)
  }


}
