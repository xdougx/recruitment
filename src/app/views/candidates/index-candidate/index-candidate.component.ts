import { CandidatesService } from '@base/services/candidates.service';
import { Person } from '@base/models/person.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-candidate',
  templateUrl: './index-candidate.component.html',
  styleUrls: ['./index-candidate.component.css']
})
export class IndexCandidateComponent implements OnInit {
  public objects: Array<Person>;

  constructor(private service: CandidatesService) { }

  ngOnInit() {
    this.objects = [];
    this.service.load(() => this.prepare());
  }

  private prepare(): void {
    this.objects = this.service.index();
  }

}
