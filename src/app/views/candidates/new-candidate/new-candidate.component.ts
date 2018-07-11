import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-new-candidate',
  templateUrl: './new-candidate.component.html',
  styleUrls: ['./new-candidate.component.css']
})
export class NewCandidateComponent implements OnInit {
  public createForm: FormGroup;
  public loading: boolean;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loading = true;
    this.prepareForm();
    this.loading = false;
  }

  private prepareForm(): void {
    this.createForm = this.formBuilder.group({
      picture: ['', [Validators.required]],
      birthDate: ['', [Validators.required]],
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      address: ['', [Validators.required]],
      latitude: ['', [Validators.required]],
      longitude: ['', [Validators.required]],
      createdAt: [new Date, [Validators.required]]
    });
  }


}
