import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
  { path: 'candidates', loadChildren: './views/candidates/candidates.module#CandidatesModule'},
  { path: '', redirectTo: 'candidates', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRouterModule {}
