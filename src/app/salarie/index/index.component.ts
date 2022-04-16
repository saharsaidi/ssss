import { Component, OnInit } from '@angular/core';

import { SalarieService } from '../salarie.service';
import { Salarie } from '../salarie';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  salaries: Salarie[] = [];

  // constructor() { }
  constructor(public salarieService: SalarieService) { }

  ngOnInit(): void {
    this.salarieService.getAll().subscribe((data: Salarie[])=>{
      this.salaries = data;
      console.log(this.salaries);
    })
  }

  deleteSalarie(id_s: number){
    this.salarieService.delete(id_s).subscribe(res => {
         this.salaries = this.salaries.filter(item => item.id_s !== id_s);
         console.log('Salarie deleted successfully!');
    })
  }

}
