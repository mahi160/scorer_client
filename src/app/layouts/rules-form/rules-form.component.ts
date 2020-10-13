import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rules-form',
  templateUrl: './rules-form.component.html',
  styleUrls: ['./rules-form.component.scss'],
})
export class RulesFormComponent implements OnInit {
  rulesForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.rulesForm = this.fb.group({
      teamA: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(21),
        ]),
      ],
      teamB: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(21),
        ]),
      ],
      numberOfPlayers: [
        null,
        Validators.compose([
          Validators.required,
          Validators.min(2),
          Validators.max(11),
          //  Validators.pattern(/^[0-9]/),
        ]),
      ],
      overs: [
        null,
        Validators.compose([
          Validators.required,
          Validators.min(1),
          Validators.max(50),
        ]),
      ],
      otherOptions: this.fb.array([]),
    });
    this.createOthers();
  }

  // ? Form Array
  get others(): FormArray {
    return this.rulesForm.get('otherOptions') as FormArray;
  }
  createOthers(): void {
    const other = [
      { name: 'Has LBW.', value: false },
      { name: 'Over boundary out. (no 6)', value: false },
      { name: 'Last man stand.', value: false },
    ];
    other.forEach((e) => {
      this.others.push(
        this.fb.group({
          name: [e.name],
          value: [e.value],
        })
      );
    });
  }

  onSubmit(): void {
    console.log(this.rulesForm.value);
    localStorage.setItem('Rules', JSON.stringify(this.rulesForm.value));
  }
}
