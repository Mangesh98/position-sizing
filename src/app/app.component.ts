import { Component } from '@angular/core';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  account: number = 100000;
  dailyRisk: number = 3000;
  index: number = 50;
  title = 'PositionManager';
  net_profit = 0;
  lots = 0;
  quantities = 0;
  total_tax = 0;
  msg = '';

  icon = faSun;

  changeIcon() {
    if (this.icon == faSun) {
      this.icon = faMoon;
      document.documentElement.style.setProperty('--bs-white', '#1d2b3a');
      document.documentElement.style.setProperty('--bs-black', '#fff');
      document.documentElement.style.setProperty(
        '--bs-primary',
        'rgba(255, 255, 255, 0.25)'
      );
      document.documentElement.style.setProperty('--bs-blue', '#fff');
    } else {
      this.icon = faSun;
      document.documentElement.style.setProperty('--bs-white', 'white');
      document.documentElement.style.setProperty('--bs-black', 'black');
      document.documentElement.style.setProperty('--bs-primary', 'royalblue');
      document.documentElement.style.setProperty('--bs-blue', 'royalblue');
    }
  }

  submit(position: any) {
    if (position.status == 'VALID') {
      var account = this.account;
      var dailyRisk = position.value.dailyRisk;
      var lotSize = this.index;
      var entryPrice = position.value.entryPrice;
      var stopLossPrice = position.value.stopLoss;
      if (entryPrice < stopLossPrice) {
        this.net_profit = 0;
        this.lots = 0;
        this.quantities = 0;
        this.total_tax = 0;
      } else {
        var stopLoss = entryPrice - stopLossPrice;
        var quantity = stopLoss * lotSize;
        var hq = account / entryPrice;
        var q = Math.floor(hq / lotSize);
        var max_quentity = q * lotSize;

        if (quantity != 0) {
          var lots = Math.floor(dailyRisk / quantity);
          var quantities = lots * lotSize;

          if (quantities > max_quentity) {
            lots = q;
            quantities = max_quentity;
            this.msg = '(Max Lot)';
          }

          var loss = quantities * stopLoss;
          var brokerage = 40;

          var turnover = (entryPrice + stopLossPrice) * quantities;
          var stt_total = Math.round(stopLossPrice * quantities * 0.0005);
          var etc = 0.00053 * turnover;
          var gst = 0.18 * (brokerage + etc);
          var sebi_charges = turnover * 0.000001;
          var sebi_charges = sebi_charges + sebi_charges * 0.18;
          var stamp_charges = Math.round(entryPrice * quantities * 0.00003);
          var total_tax =
            brokerage + stt_total + etc + gst + sebi_charges + stamp_charges;

          dailyRisk = dailyRisk - total_tax;

          lots = 0;
          loss = 0;
          turnover = 0;
          stt_total = 0;
          etc = 0;
          gst = 0;
          sebi_charges = 0;
          stamp_charges = 0;
          total_tax = 0;

          lots = Math.floor(dailyRisk / quantity);
          quantities = lots * lotSize;
          if (quantities > max_quentity) {
            lots = q;
            quantities = max_quentity;
            this.msg = '( Max Lot )';
          }

          loss = quantities * stopLoss;
          turnover = (entryPrice + stopLossPrice) * quantities;
          stt_total = Math.round(stopLossPrice * quantities * 0.0005);
          etc = 0.00053 * turnover;
          gst = 0.18 * (brokerage + etc);
          sebi_charges = turnover * 0.000001;
          sebi_charges = sebi_charges + sebi_charges * 0.18;
          stamp_charges = Math.round(entryPrice * quantities * 0.00003);
          total_tax =
            brokerage + stt_total + etc + gst + sebi_charges + stamp_charges;
          this.net_profit = Math.round((((stopLossPrice - entryPrice) * quantities - total_tax)+Number.EPSILON) * 100)/ 100;
          console.log(this.net_profit, ' ', dailyRisk);
          this.lots = lots;
          this.quantities = quantities;
          total_tax = Math.round((total_tax + Number.EPSILON) * 100) / 100;
          this.total_tax = total_tax;
        }
      }
    }
  }
}
