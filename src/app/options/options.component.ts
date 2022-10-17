import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css'],
})
export class OptionsComponent implements OnInit {
  public href: string = '';
  today: Date = new Date();
  pipe = new DatePipe('en-US');
  todayWithPipe: string | null | undefined;
  d: any = '';

  parsedUrl = new URL(window.location.href);
  baseUrl = this.parsedUrl.origin;

  constructor(
    private appComponent: AppComponent,
    private titleService: Title,
    private meta: Meta,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.href = this.baseUrl + this.router.url;
    this.todayWithPipe = this.pipe.transform(Date.now(), 'dd/MM/yyyy h:mm:ss');
    this.d = this.todayWithPipe;

    this.titleService.setTitle('Options Position Calculator');
    this.meta.addTag({
      name: 'description',
      content:
        'The Options Position Calculator will calculate the required position size based on your Nifty and Banknifty lot sizi, risk level and the stop loss in rupee',
    });
    this.meta.addTag({
      name: 'keywords',
      content:
        'position size calculator,position size calculator zerodha, lot size calculator, nifty and banknifty lot size calculator, nifty and banknifty position size calculator, position size calculator nifty and banknifty, options position size calculator, nifty and banknifty lot calculator, Options position size, nifty and banknifty lot size calculator, position size calculator Options, nifty and banknifty risk management calculator, nifty and banknifty calculators, Options calculator',
    });
    this.meta.addTag({ name: 'server-time', content: this.d });
    this.meta.addTag({ httpEquiv: 'content-language', content: 'en' });
    this.meta.addTag({
      name: 'viewport',
      content: 'width=device-width, minimum-scale=1, user-scalable=no',
    });
    this.meta.addTag({
      property: 'og:title',
      content: 'Options Position Calculator',
    });
    this.meta.addTag({ property: 'og:url', content: this.href });
    this.meta.addTag({ property: 'og:type', content: 'website' });
    this.meta.addTag({
      property: 'og:description',
      content:
        'The Options Position Calculator will calculate the required position size based on your Nifty and Banknifty lot sizi, risk level and the stop loss in rupee',
    });
    
  }

  account: number = 100000;
  dailyRisk: number = 3000;
  index: number = 50;
  net_profit = 0;
  lots = 0;
  quantities = 0;
  total_tax = 0;
  msg = '';
  firstTarget = 0;
  firstTargetPrice = 0;
  secondTarget = 0;
  secondTargetPrice = 0;
  customTarget = 0;
  customTargetPrice = 0;

  submit(position: any) {
    console.log(this.today);
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
          } else {
            this.msg = '';
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
          this.net_profit =
            Math.round(
              ((stopLossPrice - entryPrice) * quantities -
                total_tax +
                Number.EPSILON) *
                100
            ) / 100;
          this.lots = lots;
          this.quantities = quantities;
          total_tax = Math.round((total_tax + Number.EPSILON) * 100) / 100;
          this.total_tax = total_tax;
          
          this.firstTargetPrice=(stopLoss*1.5)+entryPrice;
          this.secondTargetPrice=(stopLoss*2)+entryPrice;

          this.firstTarget = getTarget(entryPrice, this.firstTargetPrice, quantities);
          this.secondTarget = getTarget(entryPrice, this.secondTargetPrice, quantities);
        }
      }
    }
  }
}

function getTarget(
  entryPrice: any,
  stopLossPrice: any,
  quantities: number
): any {
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
  var net_profit =
    Math.round(
      ((stopLossPrice - entryPrice) * quantities - total_tax + Number.EPSILON) *
        100
    ) / 100;

  return net_profit;
}
