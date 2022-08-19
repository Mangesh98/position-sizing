import { Component } from '@angular/core';

@Component({
  selector: 'app-intraday',
  templateUrl: './intraday.component.html',
  styleUrls: ['./intraday.component.css']
})
export class IntradayComponent {
  account: number = 100000;
  dailyRisk: number = 3000;
  index: number = 50;
  title = 'PositionManager';
  net_profit = 0;
  quantities = 0;
  total_tax = 0;
  msg = '';

  submit(position: any) {
    if (position.status == 'VALID') {
      var account = this.account;
      var dailyRisk = position.value.dailyRisk;
      var entryPrice = position.value.entryPrice;
      var stopLossPrice = position.value.stopLoss;
      if (entryPrice < stopLossPrice) {
        this.net_profit = 0;
        this.quantities = 0;
        this.total_tax = 0;
      } else {
        
        var stoploss = entryPrice - stopLossPrice;
        var max_quentity = Math.floor(account / entryPrice);

        if (stoploss != 0) {
          var quantities = Math.floor(dailyRisk / stoploss);

          if (quantities > max_quentity) {
            quantities = max_quentity;
            this.msg = '(Max Quantities)';
          }else{
            this.msg = '';
          }

          var loss = quantities * stoploss;

          var brokerage_buy = ((entryPrice * quantities * 0.0003)>20) ? 20:(entryPrice * quantities * 0.0003);
          var brokerage_sell = ((stopLossPrice * quantities * 0.0003)>20) ? 20:(stopLossPrice * quantities * 0.0003);
          var brokerage = Math.round(brokerage_buy + brokerage_sell);

          var turnover = (entryPrice + stopLossPrice) * quantities;
          var stt_total = Math.round((stopLossPrice * quantities) * 0.00025);
          var etc = 0.0000345 * turnover;
          var gst = 0.18 * (brokerage + etc);
          var sebi_charges = turnover * 0.000001;
          var sebi_charges = sebi_charges + sebi_charges * 0.18;
          var stamp_charges = Math.round((entryPrice * quantities) * 0.00003);
          var total_tax =
            brokerage + stt_total + etc + gst + sebi_charges + stamp_charges;

          dailyRisk = dailyRisk - total_tax;
          loss = 0;
          turnover = 0;
          stt_total = 0;
          etc = 0;
          gst = 0;
          sebi_charges = 0;
          stamp_charges = 0;
          total_tax = 0;

          quantities = Math.floor(dailyRisk / stoploss);
          if (quantities > max_quentity) {
            quantities = max_quentity;
          }else{
          }
           loss = quantities * stoploss;

           brokerage_buy = ((entryPrice * quantities * 0.0003)>20) ? 20:(entryPrice * quantities * 0.0003);
           brokerage_sell = ((stopLossPrice * quantities * 0.0003)>20) ? 20:(stopLossPrice * quantities * 0.0003);
           brokerage = Math.round(brokerage_buy + brokerage_sell);

           turnover = (entryPrice + stopLossPrice) * quantities;
           stt_total = Math.round((stopLossPrice * quantities) * 0.00025);
           etc = 0.0000345 * turnover;
           gst = 0.18 * (brokerage + etc);
           sebi_charges = turnover * 0.000001;
           sebi_charges = sebi_charges + sebi_charges * 0.18;
           stamp_charges = Math.round((entryPrice * quantities) * 0.00003);
           total_tax =
            brokerage + stt_total + etc + gst + sebi_charges + stamp_charges;

          this.net_profit = Math.round((((stopLossPrice - entryPrice) * quantities - total_tax)+Number.EPSILON) * 100)/ 100;
          this.quantities = quantities;
          total_tax = Math.round((total_tax + Number.EPSILON) * 100) / 100;
          this.total_tax = total_tax;
          
        }
      }
    }
  }
}
