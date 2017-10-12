import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public wordList: Word[];
  public flashCardNumber: number;
  public isAnswerShowed:boolean;

  constructor(public navCtrl: NavController) {
    this.wordList = [
      { Hanzi: "我", Pinyin: "Wǒ", English: "I" },
      { Hanzi: "我们", Pinyin: "Wǒmen", English: "we" }
    ];
    this.flashCardNumber = 0;
    this.isAnswerShowed = false; 
  }

  showAnswer() {
    this.isAnswerShowed = true; 
  }

  userKnowsWord() {
    this.flashCardNumber++;
    this.isAnswerShowed = false; 
  }

}

class Word {
  public Hanzi: string;
  public Pinyin: string;
  public English: string;
}