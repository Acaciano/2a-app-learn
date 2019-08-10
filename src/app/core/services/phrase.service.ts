import { Phrase } from '../models/phrase';
import { Injectable } from '@angular/core';

@Injectable()
export class PhraseService {
    private phrase: Phrase[] = [];

    constructor() { }

    getAll() {
      this.phrase.push(new Phrase('I like to learn', 'Eu gosto de aprender'));
      this.phrase.push(new Phrase('I watch tv', 'Eu assisto tv'));
      this.phrase.push(new Phrase('How are you?', 'Como vai você'));
      this.phrase.push(new Phrase('I eat bread', 'Eu como pão'));

      return this.phrase;
    }

}
