import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'salarie', redirectTo: 'salarie/index', pathMatch: 'full'},
  { path: 'salarie/index', component: IndexComponent },
  { path: 'salarie/create', component: CreateComponent },
  { path: 'salarie/:idSalarie/edit', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalarieRoutingModule { }

