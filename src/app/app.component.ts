import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public gameInProgress = true;
  public type: string;

  public endGame(type: string): void {
    this.gameInProgress = false;
    this.type = type;
  }

  public restartGame(): void {
    this.gameInProgress = true;
    this.type = undefined;
  }
}
