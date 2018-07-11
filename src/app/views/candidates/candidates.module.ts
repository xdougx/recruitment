import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewCandidateComponent } from './new-candidate/new-candidate.component';
import { ShowCandidateComponent } from './show-candidate/show-candidate.component';
import { IndexCandidateComponent } from './index-candidate/index-candidate.component';
import { CandidatesRoutingModule } from './cadidates-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CandidatesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [NewCandidateComponent, ShowCandidateComponent, IndexCandidateComponent]
})
export class CandidatesModule { }
