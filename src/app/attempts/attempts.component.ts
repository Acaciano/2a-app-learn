import { Component, OnInit, Input } from '@angular/core';
import { Heart } from '../core/models/heart';

@Component({
  selector: 'app-attempts',
  templateUrl: './attempts.component.html',
  styleUrls: ['./attempts.component.css']
})
export class AttemptsComponent implements OnInit {
  public image: string;
  public imageEmpty: string;
  public hearts: Heart[] = [];

  @Input() public attempts: number;

  constructor() {
    this.hearts.push(new Heart(true));
    this.hearts.push(new Heart(true));
    this.hearts.push(new Heart(true));
  }

  ngOnInit() {
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnChanges(): void {
    if (this.attempts >= 0 && (this.attempts !== this.hearts.length)) {
      const i = this.hearts.length - this.attempts;
      this.hearts[i - 1].full = false;
    }
  }
}
