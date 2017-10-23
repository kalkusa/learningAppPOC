import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public wordList: Word[];
  public flashCardNumber: number;
  public isAnswerShowed: boolean;

  constructor(public navCtrl: NavController, private sqlite: SQLite) {
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

    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('create table danceMoves(name VARCHAR(32))', {})
        .then(() => console.log('Executed SQL'))
        .catch(e => console.log(e));
    })
      .catch(e => console.log(e));

    this.sqlite.echoTest().then(() => {
      console.log('echo');
    }
    );
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