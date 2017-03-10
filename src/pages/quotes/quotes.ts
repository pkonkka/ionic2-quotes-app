import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { Quote } from '../../data/quote.interface';

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html'
})
export class QuotesPage implements OnInit {
  quoteGroup: {category: string, quotes: Quote[], icon: string};

  constructor(private navParams: NavParams) {

  }

  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }

  // ionViewDidLoad() {
  //   this.quoteGroup = this.navParams.data;
  //  Add elvis operator (?) im template to use this approach
  // }

}
