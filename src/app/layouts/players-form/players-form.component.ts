import { FormBuilder, FormArray, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players-form',
  templateUrl: './players-form.component.html',
  styleUrls: ['./players-form.component.scss'],
})
export class PlayersFormComponent implements OnInit {
  players: FormGroup = this.fb.group({
    player: this.fb.array([], Validators.minLength(10)),
  });
  playersAttr = [
    { name: 'Batter', value: 'bat' },
    { name: 'Bowler', value: 'bowl' },
  ];
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    for (let i = 0; i < 10; i++) {
      this.addPlayer();
    }
  }
  get playersFrom(): FormArray {
    return this.players.get('player') as FormArray;
  }
  addPlayer(): void {
    const player = this.fb.group({
      name: [null, Validators.required],
      attr: [null, Validators.required],
    });
    this.playersFrom.push(player);
  }
}
