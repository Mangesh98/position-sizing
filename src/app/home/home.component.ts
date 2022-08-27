import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  public href: string = "";
  today: Date = new Date();
  pipe = new DatePipe('en-US');
  todayWithPipe: string | null | undefined;
  d:any='';

   parsedUrl = new URL(window.location.href);
   baseUrl = this.parsedUrl.origin;
  constructor(private appComponent: AppComponent,
    private titleService: Title,
    private meta: Meta,
    private router:Router) { }

  ngOnInit(): void {
    this.href = this.baseUrl+this.router.url;
    this.todayWithPipe = this.pipe.transform(Date.now(), 'dd/MM/yyyy h:mm:ss');
    this.d=this.todayWithPipe;
    
    
    this.titleService.setTitle('Position Sizing');
    this.meta.addTag({
      name: 'description',
      content:
        'The size of a position within a portfolio, or the dollar amount an Trader will trade, is referred to as position sizing.',
    });
    this.meta.addTag({
      name: 'keywords',
      content: 'Position Sizing in Trading,Stock position size calculator,position size calculator,stock size calculator,position size calculator zerodha, position size calculator Equity, Equity position size calculator, Equity lot calculator, Equity position size,stock position size, stock lot size calculator,Equity lot size calculator, Equity risk management calculator, Equity calculators,stock calculators,position size calculator,position size calculator zerodha, lot size calculator, nifty and banknifty lot size calculator, nifty and banknifty position size calculator, position size calculator nifty and banknifty, options position size calculator, nifty and banknifty lot calculator, Options position size, nifty and banknifty lot size calculator, position size calculator Options, nifty and banknifty risk management calculator, nifty and banknifty calculators, Options calculator',
    });
    this.meta.addTag({ name: 'server-time', content: this.d});
    this.meta.addTag({ httpEquiv: 'content-language', content: 'en' });
    this.meta.addTag({ name: 'viewport', content: 'width=device-width, minimum-scale=1, user-scalable=no' });
    this.meta.addTag({ property: 'og:title', content: 'Position Sizing' });
    this.meta.addTag({ property: 'og:url', content: this.href });
    this.meta.addTag({ property: 'og:type', content: 'website' });
    this.meta.addTag({ property: 'og:description', content: 'The size of a position within a portfolio, or the dollar amount an Trader will trade, is referred to as position sizing.' });
 }

}
