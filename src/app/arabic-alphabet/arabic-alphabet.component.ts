import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arabic-alphabet',
  templateUrl: './arabic-alphabet.component.html',
  styleUrls: ['./arabic-alphabet.component.sass'],
})
export class ArabicAlphabetComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  playAudio(audioPath: string) {
    const audio = new Audio(audioPath);
    audio.load();
    audio.play();
  }
}
