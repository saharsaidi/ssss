import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalarieRoutingModule } from './salarie-routing.module';
import { IndexComponent } from './index/index.component';
import { RouterModule } from '@angular/router';

import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    IndexComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    SalarieRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class SalarieModule { }
