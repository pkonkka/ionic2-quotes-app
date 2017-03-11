import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

import { Quote } from '../../data/quote.interface';
import { QuotePage } from '../quote/quote';
import { QuotesService } from '../../services/quotes';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html'
})
export class FavoritesPage {
  quotes: Quote[];

  constructor(
    private quotesService: QuotesService,
    private modalCtrl: ModalController) {

  }

  ionViewWillEnter() {
    this.quotes = this.quotesService.getFavoriteQuotes();

  }

  onViewQuote(selectedQuote: Quote) {
    const modal = this.modalCtrl.create(QuotePage, selectedQuote);
    modal.present();

  }

}
