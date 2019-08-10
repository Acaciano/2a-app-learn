import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { PhraseService } from '../core/services/phrase.service';
import { Phrase } from '../core/models/phrase';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  public phrase: Phrase[];
  public answer: string;
  public round: number;
  public roundPhrase: Phrase;
  public progress: number;
  public disableButton = false;
  public attempts: number;
  @Output() public endGame: EventEmitter<string> = new EventEmitter();

  constructor(private api: PhraseService) {
    this.phrase = api.getAll();
    this.round = 0;
    this.roundPhrase = this.phrase[this.round];
    this.progress = 0;
    this.attempts = 3;
  }

  ngOnInit() {
  }

  public checkAnswer(): void {
    if (this.answer === this.roundPhrase.phrasePtBr) {
      const lengthPhrase = this.phrase.length;

      this.round++;

      if (lengthPhrase !== this.round) { this.roundPhrase = this.phrase[this.round]; } else { this.disableButton = true; }

      this.answer = '';
      this.progress = this.progress + (100 / lengthPhrase);

      if (this.round === 4) {
        this.endGame.emit('ok');
      }
    } else {
      this.attempts--;

      if (this.attempts === 0) {
         Swal.fire('Oops...', 'Sua resposta está errada, você acabou usando todas suas tentativas!', 'error');
         this.disableButton = true;
         this.endGame.emit('error');
      } else {
        Swal.fire('Oops...', 'Sua resposta está errada!', 'error');
      }
    }
  }
}
