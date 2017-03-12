import { Component } from '@angular/core';
import {ModalController } from 'ionic-angular';

import { Quote } from '../../data/quote.interface';
import { QuotePage } from '../quote/quote';
import { QuotesService } from '../../services/quotes';
import { SettingsService } from '../../services/settings';


@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html'
})
export class FavoritesPage {
  quotes: Quote[];

  // -----------------------------------------------------------------------------------
  constructor(
    private quotesService: QuotesService,
    private modalCtrl: ModalController,
    private settngsService:SettingsService) {

  }

  // -----------------------------------------------------------------------------------
  ionViewWillEnter() {
    this.quotes = this.quotesService.getFavoriteQuotes();

  }

  // -----------------------------------------------------------------------------------
  onViewQuote(selectedQuote: Quote) {
    const modal = this.modalCtrl.create(QuotePage, selectedQuote);
    modal.present();
    modal.onDidDismiss((remove: boolean) => {
      if (remove) {
        this.onRemoveFromFavorites(selectedQuote);
      }
    });
  }

  // -----------------------------------------------------------------------------------
  onRemoveFromFavorites(quote: Quote) {
    this.quotesService.removeQuoteFromFavorites(quote);
    this.quotes = this.quotesService.getFavoriteQuotes();    
  }

  // -----------------------------------------------------------------------------------
  getBackground() {
    return this.settngsService.getBackground() ? 'altQuoteBackground' : 'quoteBackground';
  }

  // -----------------------------------------------------------------------------------
  // alternative implementation with CSS
  isAltBackground() {
    return this.settngsService.getBackground();
  }

}
