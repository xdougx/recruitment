import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ShowCandidateComponent } from './show-candidate/show-candidate.component';
import { IndexCandidateComponent } from './index-candidate/index-candidate.component';
import { NewCandidateComponent } from './new-candidate/new-candidate.component';


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: IndexCandidateComponent,
        children: [
          { path: 'new', component: NewCandidateComponent},
          { path: 'create', component: ShowCandidateComponent }
        ]
      }
    ])
  ],
  exports: [RouterModule]
})

export class CandidatesRoutingModule {}
