import { Component, OnInit } from '@angular/core';
import { SalarieService } from '../salarie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Salarie } from '../salarie';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id_s: number;
  salarie: Salarie;
  form: FormGroup;

  constructor(
    public salarieService: SalarieService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id_s = this.route.snapshot.params['idSalarie'];
    this.salarieService.find(this.id_s).subscribe((data: Salarie)=>{
      this.salarie = data;
    });

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
    this.salarieService.update(this.id_s, this.form.value).subscribe(res => {
         console.log('Salarié updated successfully!');
         this.router.navigateByUrl('salarie/index');
    })
  }

}
