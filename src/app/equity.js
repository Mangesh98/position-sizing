function cal_intra(){
  bp = parseFloat(parseFloat(document.getElementsByClassName("intra_bp")[0].value).toFixed(2));
  sp = parseFloat(parseFloat(document.getElementsByClassName("intra_sp")[0].value).toFixed(2));
  qty = parseFloat(parseFloat(document.getElementsByClassName("intra_qty")[0].value).toFixed(2));

  if (isNaN(qty) || (isNaN(bp) && isNaN(sp))) {
    var elements = document.querySelector("#intraday-equity-calc").querySelectorAll(".valuation-block");
    for (var i = 0; i < elements.length; i++) {
      elements[i].querySelector("span").innerHTML = 0;
    }
    document.getElementById("intra_pnl").innerHTML = 0;
    return;
  }
  if (isNaN(bp) || bp == 0) {
    bp = 0;
    bse_tran_charge_buy = 0;
  }
  if (isNaN(sp) || sp == 0) {
    sp = 0;
    bse_tran_charge_sell = 0;
  }
  var brokerage_buy = ((bp * qty * 0.0003)>20) ? 20:parseFloat(parseFloat(bp * qty * 0.0003).toFixed(2));
  var brokerage_sell = ((sp * qty * 0.0003)>20) ? 20:parseFloat(parseFloat(sp * qty * 0.0003).toFixed(2));
  var brokerage = parseFloat(parseFloat(brokerage_buy + brokerage_sell).toFixed(2));

  var turnover = parseFloat(parseFloat((bp+sp)*qty).toFixed(2));

  var stt_total = Math.round(parseFloat(parseFloat((sp * qty) * 0.00025).toFixed(2)));

  var exc_trans_charge = (document.getElementsByClassName("intra_nse")[0].checked) ? parseFloat(parseFloat(0.0000345*turnover).toFixed(2)) : parseFloat(parseFloat(0.0000345*turnover).toFixed(2));
  var cc = 0;

  var stax = parseFloat(parseFloat(0.18 * (brokerage + exc_trans_charge)).toFixed(2));

  var sebi_charges = parseFloat(parseFloat(turnover*0.000001).toFixed(2));
  sebi_charges = parseFloat(parseFloat(sebi_charges + (sebi_charges * 0.18)).toFixed(2));

  var stamp_charges = Math.round(parseFloat(parseFloat((bp*qty)*0.00003).toFixed(2)));

  var total_tax = parseFloat(parseFloat(brokerage + stt_total + exc_trans_charge + cc + stax + sebi_charges + stamp_charges).toFixed(2));

  var breakeven = parseFloat(parseFloat(total_tax / qty).toFixed(2));
  breakeven = isNaN(breakeven) ? 0 : breakeven

  var net_profit = parseFloat(parseFloat(((sp - bp) * qty) - total_tax).toFixed(2));

  document.querySelector("#intra_turn").innerHTML = turnover;
  document.querySelector("#intra_brokerage").innerHTML = brokerage;
  document.querySelector("#intra_stt").innerHTML = stt_total;
  document.querySelector("#intra_etc").innerHTML = exc_trans_charge;
  document.querySelector("#intra_cc").innerHTML = cc;
  document.querySelector("#intra_st").innerHTML = stax;
  document.querySelector("#sebi").innerHTML = sebi_charges;
  document.querySelector("#stamp_duty").innerHTML = stamp_charges;
  document.querySelector("#intra_total").innerHTML = total_tax;
  document.querySelector("#intra_breakeven").innerHTML = breakeven;
  document.querySelector("#intra_pnl").innerHTML = net_profit;
  if (parseFloat(net_profit) > 0) {
    document.querySelector("#intra_pnl").classList.remove("neg")
    document.querySelector("#intra_pnl").classList.add("pos")
  } else {
    document.querySelector("#intra_pnl").classList.remove("pos")
    document.querySelector("#intra_pnl").classList.add("neg")
  }
}