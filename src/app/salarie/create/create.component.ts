import { Component, OnInit } from '@angular/core';
import { SalarieService } from '../salarie.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
date_de_naissance = Date.now();
  form: FormGroup;

  constructor(
    public salarieService: SalarieService,
    private router: Router
  ) { }


  ngOnInit(): void {

    this.form = new FormGroup({
      nom_prenom:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      date_de_naissance: new FormControl('', [ Validators.required ]),
      adresse: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      email: new FormControl('', [ Validators.required, Validators.email ]),
      phone: new FormControl('', [ Validators.required, Validators.pattern("^[0-9]*$") ]),
      salaire: new FormControl('', [ Validators.required ]),
    });

  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.salarieService.create(this.form.value).subscribe(res => {
         console.log('Salarie created successfully!');
         this.router.navigateByUrl('salarie/index');
    })
  }

}
