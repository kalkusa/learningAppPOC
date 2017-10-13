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
      { Hanzi: "我们", Pinyin: "Wǒmen", English: "we" },
      { Hanzi: "你", Pinyin: "Nǐ", English: "you" },
      { Hanzi: "你们", Pinyin: "Nǐmen", English: "you (plural)" },
      { Hanzi: "他", Pinyin: "Tā", English: "he" },
      { Hanzi: "她", Pinyin: "Tā", English: "she" },
      { Hanzi: "他们", Pinyin: "Tāmen", English: "they (males)" },
      { Hanzi: "她们", Pinyin: "Tāmen", English: "they (females)" },
      { Hanzi: "这 (这儿)", Pinyin: "Zhè (zhè'er)", English: "this (here, close)" },
      { Hanzi: "那 (那儿)", Pinyin: "Nà (nà'er)", English: "that (there, away)" },
      { Hanzi: "哪 (哪儿)", Pinyin: "Nǎ (nǎ'er)", English: "where (where)" },
      { Hanzi: "谁", Pinyin: "Shéi", English: "who" }
    ];
    this.flashCardNumber = 0;
    this.isAnswerShowed = false; 
  }

  showAnswer() {
    this.isAnswerShowed = true; 
  }

  userKnowsWord() {
    if (this.flashCardNumber + 1 < this.wordList.length) {
      this.flashCardNumber++;
    } else {
      this.flashCardNumber = 0;
    }
    this.isAnswerShowed = false;
  }

}

class Word {
  public Hanzi: string;
  public Pinyin: string;
  public English: string;
}