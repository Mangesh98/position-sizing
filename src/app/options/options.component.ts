import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
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
    private router: Router,
    private cookie:CookieService,
  ) {}

  setCookie(a:number,d:number)
  {
    let account=a.toString();
    let dailyRisk=d.toString();
    this.cookie.set('account',account,{ expires: 365});
    this.cookie.set('dailyRisk',dailyRisk,{ expires: 365});
  }
  getCookie()
  {
    if(this.cookie.check('account'))
    {
      return [this.cookie.get('account'),this.cookie.get('dailyRisk')];
    }
    return [100000,3000];
  }


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

  account:any= this.cookie.get('account');
  dailyRisk:any= this.cookie.get('dailyRisk');

  // account: number = 1;
  rtrValue: number = 1;
  index: number = 50;
  net_profit = 0;
  lots = 0;
  quantities = 0;
  customQuantities = 0;
  total_tax = 0;
  msg = '';
  firstTarget = 0;
  firstTargetPrice = 0;
  customTarget = 0;
  customTargetPrice = 0;
  stopLoss = 0;
  stopLossPrice = 0;
  entryPrice = 0;

  submit(position: any) {
    if (position.status == 'VALID') {
      var account = this.account;
      var dailyRisk = position.value.dailyRisk;
      this.customQuantities = position.value.customQuantities;
      this.setCookie(account,dailyRisk);
      var lotSize = this.index;
      this.entryPrice = position.value.entryPrice;
      var stopLossPrice = position.value.stopLoss;
      if (this.entryPrice < stopLossPrice) {

        [this.net_profit,this.total_tax] = getTarget(
          this.entryPrice,
          this.stopLossPrice,
          this.customQuantities
        );
      } else {
        this.stopLoss = this.entryPrice - stopLossPrice;
        var quantity = this.stopLoss * lotSize;
        var hq = account / this.entryPrice;
        var q = Math.floor(hq / lotSize);
        var max_quentity = q * lotSize;
        if (quantity != 0) {
          var lots = Math.floor(dailyRisk / quantity);
          this.quantities = lots * lotSize;

          if (this.quantities > max_quentity) {
            lots = q;
            this.quantities = max_quentity;
            this.msg = '(Max Lot)';
          } else {
            this.msg = '';
          }

          var loss = this.quantities * this.stopLoss;
          var brokerage = 40;

          var turnover = (this.entryPrice + stopLossPrice) * this.quantities;
          var stt_total = Math.round(stopLossPrice * this.quantities * 0.0005);
          var etc = 0.00053 * turnover;
          var gst = 0.18 * (brokerage + etc);
          var sebi_charges = turnover * 0.000001;
          var sebi_charges = sebi_charges + sebi_charges * 0.18;
          var stamp_charges = Math.round(
            this.entryPrice * this.quantities * 0.00003
          );
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
          this.quantities = lots * lotSize;
          if (this.quantities > max_quentity) {
            lots = q;
            this.quantities = max_quentity;
            this.msg = '( Max Lot )';
          }

          loss = this.quantities * this.stopLoss;
          turnover = (this.entryPrice + stopLossPrice) * this.quantities;
          stt_total = Math.round(stopLossPrice * this.quantities * 0.0005);
          etc = 0.00053 * turnover;
          gst = 0.18 * (brokerage + etc);
          sebi_charges = turnover * 0.000001;
          sebi_charges = sebi_charges + sebi_charges * 0.18;
          stamp_charges = Math.round(
            this.entryPrice * this.quantities * 0.00003
          );
          total_tax =
            brokerage + stt_total + etc + gst + sebi_charges + stamp_charges;
          this.net_profit =
            Math.round(
              ((stopLossPrice - this.entryPrice) * this.quantities -
                total_tax +
                Number.EPSILON) *
                100
            ) / 100;
          this.lots = lots;
          this.quantities = this.quantities;
          total_tax = Math.round((total_tax + Number.EPSILON) * 100) / 100;
          this.total_tax = total_tax;

          this.firstTargetPrice =
            Math.round(
              (this.stopLoss * 2 + this.entryPrice + Number.EPSILON) * 100
            ) / 100;
          this.customTargetPrice =
            Math.round(
              (this.stopLoss * 1 + this.entryPrice + Number.EPSILON) * 100
            ) / 100;

          let temp;
          [this.firstTarget,temp] = getTarget(
            this.entryPrice,
            this.firstTargetPrice,
            this.quantities
          );
          [this.customTarget,temp] = getTarget(
            this.entryPrice,
            this.customTargetPrice,
            this.quantities
          );
        
        }
      }
    }
  }

  rtrUpdate(searchValue: any) {
    if (this.rtrValue != null && searchValue.data != null) {
      let temp;
      this.customTargetPrice =
        Math.round(
          (this.stopLoss * this.rtrValue + this.entryPrice + Number.EPSILON) *
            100
        ) / 100;
      [this.customTarget,temp] = getTarget(
        this.entryPrice,
        this.customTargetPrice,
        this.quantities
      );
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
  total_tax = Math.round((total_tax + Number.EPSILON) * 100) / 100;
  var net_profit =
    Math.round(
      ((stopLossPrice - entryPrice) * quantities - total_tax + Number.EPSILON) *
        100
    ) / 100;

  return [net_profit,total_tax];
}
