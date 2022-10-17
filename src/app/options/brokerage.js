	var ecn_comm_added = [];
	// n-> non-agri
	// a-> agri
	COMMODITY_OPT_MULTIPLIER_MAP = {
		"COPPER": '2500n',
		"CRUDEOIL": '100n',
		"GOLD": '100n',
		"GOLDM": '10n',
		"NATURALGAS": '1250n',
		"NICKEL": '1500n',
		"SILVER": '30n',
		"SILVERM": '5n',
		"ZINC": '5000n'
	}
	COMMODITY_STRIKE_MAP = {
		"COPPER": '400,5',
		"CRUDEOIL": '3000,50',
		"GOLD": '30000,100',
		"GOLDM": '30000,10',
		"NATURALGAS": '250,5',
		"NICKEL": '1500,20',
		"SILVER": '40000,250',
		"SILVERM": '50000,250',
		"ZINC": '190,2.5'
	}
	COMMODITY_MULTIPLIER_MAP = {
		// "ALUMINI": '1000a',
		"ALUMINIUM": '5000a',
		"CARDAMOM": '100a',
		"CASTORSEED": '100b',
		"COPPER": '2500a',
		// "COPPERM": '250a',
		"COTTON": '25a',
		"CPO": '1000a',
		"CRUDEOIL": '100a',
		"GOLD": '100a',
		"GOLDGUINEA": '1a',
		"GOLDM": '10a',
		"GOLDPETAL": '1a',
		"KAPAS": '200b',
		"LEAD": '5000a',
		// "LEADMINI": '1000a',
		"MCXBULLDEX": '50a',
		"MCXENRGDEX": '125a',
		"MCXMETLDEX": '50a',
		"MENTHOIL": '360a',
		"NATURALGAS": '1250a',
		"NICKEL": '1500a',
		"PEPPER": '10b',
		"RBDPMOLEIN": '1000b',
		"RUBBER": '10a',
		"SILVER": '30a',
		"SILVERM": '5a',
		"SILVERMIC": '1a',
		"ZINC": '5000a',
		// "ZINCMINI": '1000a'
	}
	COMMODITY_GROUP_MAP = {
		// "ALUMINI": '1000n',
		"ALUMINIUM": '5000n',
		"CARDAMOM": '100a',
		"CASTORSEED": '100a',
		"COPPER": '2500n',
		// "COPPERM": '250n',
		"COTTON": '25a',
		"CPO": '1000a',
		"CRUDEOIL": '100n',
		"GOLD": '100n',
		"GOLDGUINEA": '1n',
		"GOLDM": '10n',
		"GOLDPETAL": '1n',
		"KAPAS": '4000a',
		"LEAD": '5000n',
		// "LEADMINI": '1000n',
		"MCXBULLDEX": '50n',
		"MCXENRGDEX": '125n',
		"MCXMETLDEX": '50n',
		"MENTHOIL": '360a',
		"NATURALGAS": '1250n',
		"NICKEL": '1500n',
		"PEPPER": '10a',
		"RBDPMOLEIN": '1000a',
		"RUBBER": '10a',
		"SILVER": '30n',
		"SILVERM": '5n',
		"SILVERMIC": '1n',
		"ZINC": '5000n',
		// "ZINCMINI": '1000n'
	}
	COMMODITY_OPT_BUY_SELL_MAP = {
		"COPPER": '310,315',
		"CRUDEOIL": '3170,3190',
		"GOLD": '30950,30980',
		"GOLDM": '30950,30980',
		"NATURALGAS": '300,310',
		"NICKEL": '1520,1540',
		"SILVER": '43750,43800',
		"SILVERM": '53750,54180',
		"ZINC": '156,159'
	}
	COMMODITY_BUY_SELL_MAP = {
		// "ALUMINI": '110,112',
		"ALUMINIUM": '110,112',
		"CARDAMOM": '1160,1165',
		"CASTORSEED": '3880,3884',
		"COPPER": '310,315',
		// "COPPERM": '310,315',
		"COTTON": '20100,20150',
		"CPO": '560,562',
		"CRUDEOIL": '3170,3190',
		"GOLD": '30950,30980',
		"GOLDGUINEA": '24650,24700',
		"GOLDM": '30950,30980',
		"GOLDPETAL": '3060,3090',
		"KAPAS": '20100,20150',
		"LEAD": '125,128',
		// "LEADMINI": '125,128',
		"MCXBULLDEX": '50,55',
		"MCXENRGDEX": '125,130',
		"MCXMETLDEX": '50,55',
		"MENTHOIL": '900,950',
		"NATURALGAS": '195,198',
		"NICKEL": '660,665',
		"PEPPER": '40000,40100',
		"RBDPMOLEIN": '520,525',
		"RUBBER": '15000,15100',
		"SILVER": '43750,43800',
		"SILVERM": '43750,43800',
		"SILVERMIC": '43750,43800',
		"ZINC": '156,159',
		// "ZINCMINI": '156,159'
	}
	COMMODITY_OPT_UNIT = {
		"COPPER": 'per Kg,2.5 MT',
		"CRUDEOIL": 'per Barrel,100 BBL(Barrel)',
		"GOLD": 'per 10 Grams,1 Kg',
		"GOLDM": 'per 10 Grams,One MCX Gold Mini futures contract',
		"NATURALGAS": 'per MMBTU,1 MCX Natural Gas futures contract',
		"NICKEL": 'per Kg,1 MCX Nickel futures contract',
		"SILVER": 'per Kg,30 Kg',
		"SILVERM": 'per Kg,1 MCX Silver Mini futures contract',
		"ZINC": 'per Kg,5 MT'
	}
	COMMODITY_UNIT = {
		// "ALUMINI": 'per Kg,1 MT',
		"ALUMINIUM": 'per Kg,5 MT',
		"CARDAMOM": 'per Kg,100 Kg',
		"CASTORSEED": 'per Quintal,10 MT',
		"COPPER": 'per Kg,2.5 MT',
		// "COPPERM": 'per Kg,250 Kg',
		"COTTON": 'per Bale,25 Bales',
		"CPO": 'per Kg,10 MT',
		"CRUDEOIL": 'per Barrel,100 BBL(Barrel)',
		"GOLD": 'per 10 Grams,1 Kg',
		"GOLDGUINEA": 'per 8 Grams,8 Grams',
		"GOLDM": 'per 10 Grams,100 Grams',
		"GOLDPETAL": 'per Gram,1 Gram',
		"KAPAS": 'per 20 Kg,4 MT',
		"LEAD": 'per Kg,5 MT',
		// "LEADMINI": 'per Kg,1 MT',
		"MCXBULLDEX": 'MCX iCOMDEX Bullion Index,50',
		"MCXENRGDEX": 'MCX iCOMDEX ENERGY,125',
		"MCXMETLDEX": 'MCX iCOMDEX Base Metal Index,50',
		"MENTHOIL": 'per Kg,360 Kg',
		"NATURALGAS": 'per MMBTU,1250 MMBTU',
		"NICKEL": 'per Kg,1500 Kg',
		"PEPPER": 'per Quintal,1 MT',
		"RBDPMOLEIN": 'per 10Kg,10MT',
		"RUBBER": 'per 100Kg,1MT',
		"SILVER": 'per Kg,30 Kg',
		"SILVERM": 'per Kg,5 Kg',
		"SILVERMIC": 'per Kg,1 Kg',
		"ZINC": 'per Kg,5 MT',
		// "ZINCMINI": 'per Kg,1 MT'
	}
	TN_COMM_STAMP = {
		"COTTON": '0.30',
		"KAPAS": '0.30',
		"GOLD": '0.50',
		"SILVER": '0.10',
		"CASTORSEED": '0.50'
	}
	document.addEventListener("DOMContentLoaded", function () { 
    	tinytabs(document.querySelector("#mytabs"));
	})
	function populate_comm(type) {
		var select_html;
		if (type == "Futures") {
			for (comm in COMMODITY_MULTIPLIER_MAP){
				var value = (COMMODITY_MULTIPLIER_MAP[comm]).slice(0,-1);
				var commodity_cat = (COMMODITY_MULTIPLIER_MAP[comm]).charAt((COMMODITY_MULTIPLIER_MAP[comm]).length-1);
				select_html += "<option data-fut-comm=" + comm + " cat="+commodity_cat+" value="+value+">"+comm+"</option>";
			}
			document.getElementById("commodity_multiplier_fut").innerHTML = select_html;
			for (comm in COMMODITY_BUY_SELL_MAP){
				var value = (COMMODITY_BUY_SELL_MAP[comm]);
				var arr = value.split(",");
				var elements = document.querySelectorAll("[data-fut-comm=" + comm + "]");
				for (var i = 0; i < elements.length; i++) {
					elements[i].setAttribute("bp",arr[0])
					elements[i].setAttribute("sp",arr[1])
				}
			}
			for (comm in COMMODITY_UNIT){
				var value = (COMMODITY_UNIT[comm]);
				var arr = value.split(",");
				var elements = document.querySelectorAll("[data-fut-comm=" + comm + "]");
				for (var i = 0; i < elements.length; i++) {
					elements[i].setAttribute("base",arr[0])
					elements[i].setAttribute("unit",arr[1])
				}
			}
			for (comm in COMMODITY_GROUP_MAP){
				var value = (COMMODITY_GROUP_MAP[comm]);
				var arr = [];
				arr[0] = value.substring(0, value.length - 1);
				arr[1] = value.substring(value.length - 1, value.length);
				var elements = document.querySelectorAll("[data-fut-comm=" + comm + "]");
				for (var i = 0; i < elements.length; i++) {
					elements[i].setAttribute("grp",arr[1])
				}
			}
		} else {
			for (comm in COMMODITY_OPT_MULTIPLIER_MAP){
				var value = (COMMODITY_OPT_MULTIPLIER_MAP[comm]).slice(0,-1);
				var commodity_cat = (COMMODITY_OPT_MULTIPLIER_MAP[comm]).charAt((COMMODITY_OPT_MULTIPLIER_MAP[comm]).length-1);
				var srp = COMMODITY_STRIKE_MAP[comm].split(",")[0]
				var step = COMMODITY_STRIKE_MAP[comm].split(",")[1]
				select_html += "<option data-opt-comm=" + comm + " cat="+commodity_cat+" value="+value+" srp="+srp+" step="+step+">"+comm+"</option>";
			}
			document.getElementById("commodity_multiplier_opt").innerHTML = select_html;
			for (comm in COMMODITY_OPT_BUY_SELL_MAP){
				var value = (COMMODITY_OPT_BUY_SELL_MAP[comm]);
				var arr = value.split(",");
				var elements = document.querySelectorAll("[data-opt-comm=" + comm + "]");
				for (var i = 0; i < elements.length; i++) {
					elements[i].setAttribute("bp",arr[0]);
					elements[i].setAttribute("sp",arr[1]);
				}
			}
			for (comm in COMMODITY_OPT_UNIT){
				var value = (COMMODITY_OPT_UNIT[comm]);
				var arr = value.split(",");
				var elements = document.querySelectorAll("[data-opt-comm=" + comm + "]");
				for (var i = 0; i < elements.length; i++) {
					elements[i].setAttribute("base",arr[0]);
					elements[i].setAttribute("unit",arr[1]);
				}
			}
		}
	}
	populate_comm("Futures");
	populate_comm("Options");

    var selectedCommFut = document.getElementById("commodity_multiplier_fut");
	selectedCommFut.onchange = function() {
		var text = selectedCommFut.options[selectedCommFut.selectedIndex].text;
		var value = selectedCommFut.options[selectedCommFut.selectedIndex].value;
		var base = selectedCommFut.options[selectedCommFut.selectedIndex].getAttribute("base");
		var unit = selectedCommFut.options[selectedCommFut.selectedIndex].getAttribute("unit");
		document.getElementById("commodity-text").innerHTML = "Profit/Loss made for every &#8377; 1 change in</br>"+text;
		document.getElementById("commodity-value").innerHTML = "&#8377; "+value;
		document.getElementById("comm_base").innerHTML = base;
		document.getElementById("comm_unit").innerHTML = unit;
		document.getElementsByClassName("comm_fut_bp")[0].value = selectedCommFut[selectedCommFut.selectedIndex].getAttribute("bp");
		document.getElementsByClassName("comm_fut_sp")[0].value = selectedCommFut[selectedCommFut.selectedIndex].getAttribute("sp");
		cal_comm_fut();
	};
    var selectedCommOpt = document.getElementById("commodity_multiplier_opt");
	selectedCommOpt.onchange = function() {
		var text = selectedCommOpt.options[selectedCommOpt.selectedIndex].text;
		var value = selectedCommOpt.options[selectedCommOpt.selectedIndex].value;
		var base = selectedCommOpt.options[selectedCommOpt.selectedIndex].getAttribute("base");
		var unit = selectedCommOpt.options[selectedCommOpt.selectedIndex].getAttribute("unit");
		document.getElementById("commodity-text").innerHTML = "Profit/Loss made for every &#8377; 1 change in</br>"+text;
		document.getElementById("commodity-value").innerHTML = "&#8377; "+value;
		document.getElementById("comm_base").innerHTML = base;
		document.getElementById("comm_unit").innerHTML = unit;
		document.getElementsByClassName("comm_opt_bp")[0].value = selectedCommOpt[selectedCommOpt.selectedIndex].getAttribute("bp");
		document.getElementsByClassName("comm_opt_sp")[0].value = selectedCommOpt[selectedCommOpt.selectedIndex].getAttribute("sp");
		var commOptSrpInput = document.getElementById("comm_opt_srp_input");
		commOptSrpInput.setAttribute("value", selectedCommOpt[selectedCommOpt.selectedIndex].getAttribute("srp"));
		commOptSrpInput.value = selectedCommOpt[selectedCommOpt.selectedIndex].getAttribute("srp");
		commOptSrpInput.setAttribute("step", selectedCommOpt[selectedCommOpt.selectedIndex].getAttribute("step"));
		cal_comm_opt();
	};

	var bp, sp, qty = 0;
	var ecn_counter = 0;
	var comm_ecn_counter = 0;
	var sample_ecn_counter = 0;

	cal_intra();
	cal_delivery();
	cal_futures();
	cal_options();
	cal_curr_fut();
	cal_curr_opt();
	cal_comm_fut();
	cal_comm_opt();

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

	function cal_delivery(){
		bp = parseFloat(parseFloat(document.getElementsByClassName("del_bp")[0].value).toFixed(2));
		sp = parseFloat(parseFloat(document.getElementsByClassName("del_sp")[0].value).toFixed(2));
		qty = parseFloat(parseFloat(document.getElementsByClassName("del_qty")[0].value).toFixed(2));

		if (isNaN(qty) || (isNaN(bp) && isNaN(sp))) {
			var elements = document.querySelector("#delivery-equity-calc").querySelectorAll(".valuation-block");
			for (var i = 0; i < elements.length; i++) {
				elements[i].querySelector("span").innerHTML = 0
			}
			document.getElementById("del_pnl").innerHTML = 0;
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

		var turnover = parseFloat(parseFloat((bp+sp)*qty).toFixed(2));

		var brokerage = 0;

		var stt_total = Math.round(parseFloat(parseFloat(turnover * 0.001).toFixed(2)));

		var exc_trans_charge = (document.getElementsByClassName("del_nse")[0].checked) ? parseFloat(parseFloat(0.0000345*turnover).toFixed(2)):parseFloat(parseFloat(0.0000345*turnover).toFixed(2));
		var cc = 0;
		var dp = 15.93;
		if (sp == 0) dp = 0

		var stax = parseFloat(parseFloat(0.18 * (brokerage + exc_trans_charge)).toFixed(2));
 
		var sebi_charges = parseFloat(parseFloat(turnover*0.000001).toFixed(2));
		sebi_charges = parseFloat(parseFloat(sebi_charges + (sebi_charges * 0.18)).toFixed(2));

		var stamp_charges = Math.round(parseFloat(parseFloat(bp*qty*0.00015).toFixed(2)));

		var total_tax = parseFloat(parseFloat(brokerage + stt_total + exc_trans_charge + cc + dp + stax + sebi_charges + stamp_charges).toFixed(2));

		var breakeven = parseFloat(parseFloat(total_tax / qty).toFixed(2));
		breakeven = isNaN(breakeven) ? 0 : breakeven

		var net_profit = parseFloat(parseFloat(((sp - bp) * qty) - total_tax).toFixed(2));

		document.querySelector("#del_turn").innerHTML = turnover;
		document.querySelector("#del_brokerage").innerHTML = brokerage;
		document.querySelector("#del_stt").innerHTML = stt_total;
		document.querySelector("#del_etc").innerHTML = exc_trans_charge;
		document.querySelector("#del_dp").innerHTML = dp;
		document.querySelector("#del_st").innerHTML = stax;
		document.querySelector("#sebi_delivery").innerHTML = sebi_charges;
		document.querySelector("#stamp_duty_delivery").innerHTML = stamp_charges;
		document.querySelector("#del_total").innerHTML = total_tax;
		document.querySelector("#del_breakeven").innerHTML = breakeven;
		document.querySelector("#del_pnl").innerHTML = net_profit;
		if (parseFloat(net_profit) > 0) {
			document.querySelector("#del_pnl").classList.remove("neg")
			document.querySelector("#del_pnl").classList.add("pos")
		} else {
			document.querySelector("#del_pnl").classList.remove("pos")
			document.querySelector("#del_pnl").classList.add("neg")
		}
	}
	function cal_futures(){
		bp = parseFloat(parseFloat(document.getElementsByClassName("fut_bp")[0].value).toFixed(2));
		sp = parseFloat(parseFloat(document.getElementsByClassName("fut_sp")[0].value).toFixed(2));
		qty = parseFloat(parseFloat(document.getElementsByClassName("fut_qty")[0].value).toFixed(2));

		if (isNaN(qty) || (isNaN(bp) && isNaN(sp))) {
			var elements = document.querySelector("#futures-equity-calc").querySelectorAll(".valuation-block");
			for (var i = 0; i < elements.length; i++) {
				elements[i].querySelector("span").innerHTML = 0
			}
			document.getElementById("fut_pnl").innerHTML = 0;
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

		var turnover = parseFloat(parseFloat((bp+sp)*qty).toFixed(2));

		var brokerage_buy = ((bp * qty * 0.0003)>20) ? 20:parseFloat(parseFloat(bp * qty * 0.0003).toFixed(2));
		var brokerage_sell = ((sp * qty * 0.0003)>20) ? 20:parseFloat(parseFloat(sp * qty * 0.0003).toFixed(2));
		var brokerage = parseFloat(parseFloat(brokerage_buy + brokerage_sell).toFixed(2));

		var stt_total = Math.round(parseFloat(parseFloat(sp * qty * 0.0001).toFixed(2)));

		var etc = (document.getElementsByClassName("fut_nse")[0].checked) ? parseFloat(parseFloat(0.00002*turnover).toFixed(2)):0;

		var stax = parseFloat(parseFloat(0.18 * (brokerage + etc)).toFixed(2));

		var sebi_charges = parseFloat(parseFloat(turnover*0.000001).toFixed(2));
		sebi_charges = parseFloat(parseFloat(sebi_charges + (sebi_charges * 0.18)).toFixed(2));

		var stamp_charges = Math.round(parseFloat(parseFloat(bp*qty*0.00002).toFixed(2)));

		var total_tax = parseFloat(parseFloat(brokerage + stt_total + etc + stax + sebi_charges + stamp_charges).toFixed(2));

		var breakeven = parseFloat(parseFloat(total_tax / qty).toFixed(2));
		breakeven = isNaN(breakeven) ? 0 : breakeven

		var net_profit = parseFloat(parseFloat(((sp - bp) * qty) - total_tax).toFixed(2));

		document.querySelector("#fut_turn").innerHTML = turnover;
		document.querySelector("#fut_brokerage").innerHTML = brokerage;
		document.querySelector("#fut_stt").innerHTML = stt_total;
		document.querySelector("#fut_etc").innerHTML = etc;
		document.querySelector("#fut_st").innerHTML = stax;
		document.querySelector("#sebi_fut").innerHTML = sebi_charges;
		document.querySelector("#stamp_duty_fut").innerHTML = stamp_charges;
		document.querySelector("#fut_total").innerHTML = total_tax;
		document.querySelector("#fut_breakeven").innerHTML = breakeven;
		document.querySelector("#fut_pnl").innerHTML = net_profit;
		if (parseFloat(net_profit) > 0) {
			document.querySelector("#fut_pnl").classList.remove("neg")
			document.querySelector("#fut_pnl").classList.add("pos")
		} else {
			document.querySelector("#fut_pnl").classList.remove("pos")
			document.querySelector("#fut_pnl").classList.add("neg")
		}
	}
	function cal_options(){
		bp = parseFloat(parseFloat(document.getElementsByClassName("opt_bp")[0].value).toFixed(2));
		sp = parseFloat(parseFloat(document.getElementsByClassName("opt_sp")[0].value).toFixed(2));
		qty = parseFloat(parseFloat(document.getElementsByClassName("opt_qty")[0].value).toFixed(2));

		if (isNaN(qty) || (isNaN(bp) && isNaN(sp))) {
			var elements = document.querySelector("#options-equity-calc").querySelectorAll(".valuation-block");
			for (var i = 0; i < elements.length; i++) {
				elements[i].querySelector("span").innerHTML = 0
			}
			document.getElementById("opt_pnl").innerHTML = 0;
			return;
		}

		var brokerage = 40;

		if (isNaN(bp) || bp == 0) {
			bp = 0;
			bse_tran_charge_buy = 0;
			brokerage = 20;
		}
		if (isNaN(sp) || sp == 0) {
			sp = 0;
			bse_tran_charge_sell = 0;
			brokerage = 20;
		}

		var turnover = parseFloat(parseFloat((bp+sp)*qty).toFixed(2));

		var stt_total = Math.round(parseFloat(parseFloat(sp * qty * 0.0005).toFixed(2)));

		var etc = (document.getElementsByClassName("opt_nse")[0].checked) ? parseFloat(parseFloat(0.00053*turnover).toFixed(2)):0;

		var stax = parseFloat(parseFloat(0.18 * (brokerage + etc)).toFixed(2));

		var sebi_charges = parseFloat(parseFloat(turnover*0.000001).toFixed(2));
		sebi_charges = parseFloat(parseFloat(sebi_charges + (sebi_charges * 0.18)).toFixed(2));

		var stamp_charges = Math.round(parseFloat(parseFloat(bp*qty*0.00003).toFixed(2)));

		var total_tax = parseFloat(parseFloat(brokerage + stt_total + etc + stax + sebi_charges + stamp_charges).toFixed(2));

		var breakeven = parseFloat(parseFloat(total_tax / qty).toFixed(2));
		breakeven = isNaN(breakeven) ? 0 : breakeven

		var net_profit = parseFloat(parseFloat(((sp - bp) * qty) - total_tax).toFixed(2));

		document.querySelector("#opt_turn").innerHTML = turnover;
		document.querySelector("#opt_brokerage").innerHTML = brokerage;
		document.querySelector("#opt_stt").innerHTML = stt_total;
		document.querySelector("#opt_etc").innerHTML = etc;
		document.querySelector("#opt_st").innerHTML = stax;
		document.querySelector("#sebi_opt").innerHTML = sebi_charges;
		document.querySelector("#stamp_duty_opt").innerHTML = stamp_charges;
		document.querySelector("#opt_total").innerHTML = total_tax;
		document.querySelector("#opt_breakeven").innerHTML = breakeven;
		document.querySelector("#opt_pnl").innerHTML = net_profit;
		if (parseFloat(net_profit) > 0) {
			document.querySelector("#opt_pnl").classList.remove("neg")
			document.querySelector("#opt_pnl").classList.add("pos")
		} else {
			document.querySelector("#opt_pnl").classList.remove("pos")
			document.querySelector("#opt_pnl").classList.add("neg")
		}
	}

	function cal_curr_fut(){
		bp = parseFloat(parseFloat(document.getElementsByClassName("curr_fut_bp")[0].value).toFixed(4));
		sp = parseFloat(parseFloat(document.getElementsByClassName("curr_fut_sp")[0].value).toFixed(4));
		qty = parseFloat(parseFloat(document.getElementsByClassName("curr_fut_qty")[0].value).toFixed(2));

		if (isNaN(qty) || (isNaN(bp) && isNaN(sp))) {
			var elements = document.querySelector("#futures-currency-calc").querySelectorAll(".valuation-block");
			for (var i = 0; i < elements.length; i++) {
				elements[i].querySelector("span").innerHTML = 0
			}
			document.getElementById("curr_fut_pnl").innerHTML = 0;
			return;
		}
		if (isNaN(bp)) {
			bp = 0;
		}
		if (isNaN(sp)) {
			sp = 0;
		}

		var turnover = parseFloat(parseFloat((bp+sp)*qty*1000).toFixed(2));

		var brokerage_buy = ((bp * qty * 1000 * 0.0003)>20) ? 20:parseFloat(parseFloat(bp * qty * 1000 * 0.0003).toFixed(2));
		var brokerage_sell = ((sp * qty * 1000 * 0.0003)>20) ? 20:parseFloat(parseFloat(sp * qty * 1000 * 0.0003).toFixed(2));
		var brokerage = parseFloat(parseFloat(brokerage_buy + brokerage_sell).toFixed(2));

		var etc = (document.getElementsByClassName("curr_fut_nse")[0].checked) ? parseFloat(parseFloat(0.000009*turnover).toFixed(2)):parseFloat(parseFloat(0.0000022*turnover).toFixed(2));
		var cc = 0;
		var total_trans_charge = etc + cc;

		var stax = parseFloat(parseFloat(0.18 * (brokerage + total_trans_charge)).toFixed(2));

		var sebi_charges = parseFloat(parseFloat(turnover*0.000001).toFixed(2));
		sebi_charges = parseFloat(parseFloat(sebi_charges + (sebi_charges * 0.18)).toFixed(2));

		var stamp_charges = Math.round(parseFloat(parseFloat(bp*qty*1000*0.000001).toFixed(2)));

		var total_tax = parseFloat(parseFloat(brokerage + total_trans_charge + stax + sebi_charges + stamp_charges).toFixed(2));

		var breakeven = parseFloat(parseFloat(total_tax / (qty*1000)).toFixed(2));
		breakeven = isNaN(breakeven) ? 0 : breakeven

		var pips = Math.ceil(parseFloat(breakeven / 0.0025));

		var net_profit = parseFloat(parseFloat(((sp - bp) * qty*1000) - total_tax).toFixed(2));

		document.querySelector("#curr_fut_turn").innerHTML = turnover;
		document.querySelector("#curr_fut_brokerage").innerHTML = brokerage;
		document.querySelector("#curr_fut_etc").innerHTML = etc;
		document.querySelector("#curr_fut_cc").innerHTML = cc;
		document.querySelector("#curr_fut_st").innerHTML = stax;
		document.querySelector("#sebi_curr_fut").innerHTML = sebi_charges;
		document.querySelector("#stamp_duty_curr_fut").innerHTML = stamp_charges;
		document.querySelector("#curr_fut_total").innerHTML = total_tax;
		document.querySelector("#curr_fut_breakeven").innerHTML = breakeven;
		document.querySelector("#curr_fut_pips").innerHTML = pips;
		document.querySelector("#curr_fut_pnl").innerHTML = net_profit;
		if (parseFloat(net_profit) > 0) {
			document.querySelector("#curr_fut_pnl").classList.remove("neg")
			document.querySelector("#curr_fut_pnl").classList.add("pos")
		} else {
			document.querySelector("#curr_fut_pnl").classList.remove("pos")
			document.querySelector("#curr_fut_pnl").classList.add("neg")
		}
	}

	function cal_curr_opt(){
		srp = parseFloat(parseFloat(document.getElementsByClassName("curr_opt_srp")[0].value).toFixed(4));
		bp = parseFloat(parseFloat(document.getElementsByClassName("curr_opt_bp")[0].value).toFixed(4));
		sp = parseFloat(parseFloat(document.getElementsByClassName("curr_opt_sp")[0].value).toFixed(4));
		qty = parseFloat(parseFloat(document.getElementsByClassName("curr_opt_qty")[0].value).toFixed(4));

		if (isNaN(qty) || (isNaN(bp) && isNaN(sp)) || isNaN(srp)) {
			var elements = document.querySelector("#options-currency-calc").querySelectorAll(".valuation-block");
			for (var i = 0; i < elements.length; i++) {
				elements[i].querySelector("span").innerHTML = 0
			}
			document.getElementById("curr_opt_pnl").innerHTML = 0;
			return;
		}
		if (isNaN(bp)) {
			bp = 0;
		}
		if (isNaN(sp)) {
			sp = 0;
		}
		if (isNaN(srp)) {
			srp = 0;
		}

		var turnover = parseFloat(parseFloat((bp+sp)*qty*1000).toFixed(2));
		var total_turnover = parseFloat(parseFloat((bp+srp)*qty*1000)+parseFloat((sp+srp)*qty*1000)).toFixed(2);
		var brokerage_buy = 0,
			brokerage_sell = 0;

		if (bp > 0) {
			brokerage_buy = (((bp+srp) * qty * 1000 * 0.0003)>20) ? 20:parseFloat(parseFloat((bp+srp) * qty * 1000 * 0.0003).toFixed(2));
		}
		if (sp > 0) {
			brokerage_sell = (((sp+srp) * qty * 1000 * 0.0003)>20) ? 20:parseFloat(parseFloat((sp+srp) * qty * 1000 * 0.0003).toFixed(2));
		}
		var brokerage = parseFloat(parseFloat(brokerage_buy + brokerage_sell).toFixed(2));

		var etc = (document.getElementsByClassName("curr_opt_nse")[0].checked) ? parseFloat(parseFloat(0.00035*turnover).toFixed(2)):parseFloat(parseFloat(0.00001*turnover).toFixed(2));
		var cc = 0;
		var total_trans_charge = etc + cc;

		var stax = parseFloat(parseFloat(0.18 * (brokerage + total_trans_charge)).toFixed(2));

		var sebi_charges = parseFloat(parseFloat(turnover*0.000001).toFixed(2));
		sebi_charges = parseFloat(parseFloat(sebi_charges + (sebi_charges * 0.18)).toFixed(2));

		var stamp_charges = Math.round(parseFloat(parseFloat(bp*qty*1000*0.000001).toFixed(2)));

		var total_tax = parseFloat(parseFloat(brokerage + total_trans_charge + stax + sebi_charges + stamp_charges).toFixed(2));

		var breakeven = parseFloat(parseFloat(total_tax / (qty*1000)).toFixed(4));
		breakeven = isNaN(breakeven) ? 0 : breakeven

		var pips = Math.ceil(parseFloat(breakeven / 0.0025));

		var net_profit = parseFloat(parseFloat(((sp - bp) * qty *1000) - total_tax).toFixed(2));

		var curr_notional = document.getElementsByClassName("curr_opt_notional")[0];
		if (isNaN(srp)) {
			curr_notional.setAttribute("title", "Notional turnover: 0");
		} else {
			curr_notional.setAttribute("title", "Notional turnover: "+total_turnover);
		}
		curr_notional.addEventListener("click", function () {
			tlite.show(curr_notional);
		})
		tlite(el => el.classList.contains("curr_opt_notional"));
		document.querySelector("#curr_opt_turn").innerHTML = turnover;
		document.querySelector("#curr_opt_brokerage").innerHTML = brokerage;
		document.querySelector("#curr_opt_etc").innerHTML = etc;
		document.querySelector("#curr_opt_cc").innerHTML = cc;
		document.querySelector("#curr_opt_st").innerHTML = stax;
		document.querySelector("#sebi_curr_opt").innerHTML = sebi_charges;
		document.querySelector("#stamp_duty_curr_opt").innerHTML = stamp_charges;
		document.querySelector("#curr_opt_total").innerHTML = total_tax;
		document.querySelector("#curr_opt_breakeven").innerHTML = breakeven;
		document.querySelector("#curr_opt_pips").innerHTML = pips;
		document.querySelector("#curr_opt_pnl").innerHTML = net_profit;
		if (parseFloat(net_profit) > 0) {
			document.querySelector("#curr_opt_pnl").classList.remove("neg")
			document.querySelector("#curr_opt_pnl").classList.add("pos")
		} else {
			document.querySelector("#curr_opt_pnl").classList.remove("pos")
			document.querySelector("#curr_opt_pnl").classList.add("neg")
		}
	}

	function cal_comm_fut(){
		bp = parseFloat(parseFloat(document.getElementsByClassName("comm_fut_bp")[0].value).toFixed(2));
		sp = parseFloat(parseFloat(document.getElementsByClassName("comm_fut_sp")[0].value).toFixed(2));
		qty = parseFloat(parseFloat(document.getElementsByClassName("comm_fut_qty")[0].value).toFixed(2));

		if (isNaN(qty) || (isNaN(bp) && isNaN(sp))) {
			var elements = document.querySelector("#commodity-mcx-calc-fut").querySelectorAll(".valuation-block");
			for (var i = 0; i < elements.length; i++) {
				elements[i].querySelector("span").innerHTML = 0
			}
			document.getElementById("comm_fut_pnl").innerHTML = 0;
			return;
		}
		if (isNaN(bp)) {
			bp = 0;
		}
		if (isNaN(sp)) {
			sp = 0;
		}

		var commodity = document.getElementById("commodity_multiplier_fut");
		var commodity_value = parseFloat(commodity[commodity.selectedIndex].value).toFixed(2);
		var commodity_cat = commodity[commodity.selectedIndex].getAttribute("cat");
		var commodity_group = commodity[commodity.selectedIndex].getAttribute("grp");

		var turnover = parseFloat(parseFloat((bp+sp)*commodity_value*qty).toFixed(2));

		if ((bp*commodity_value*qty)>200000) {
			var brokerage_buy = 20;
		}
		else {
			var brokerage_buy = ((bp * commodity_value * qty * 0.0003)>20) ? 20:parseFloat(parseFloat(bp * commodity_value * qty * 0.0003).toFixed(2));		
		}
		if ((sp*commodity_value*qty)>200000) {
			var brokerage_sell = 20;
		}
		else {
			var brokerage_sell = ((sp * commodity_value * qty * 0.0003)>20) ? 20:parseFloat(parseFloat(sp * commodity_value * qty * 0.0003).toFixed(2));
		}

		var brokerage = brokerage_buy + brokerage_sell;

		var ctt = 0;
		if (commodity_cat == 'a') {
			ctt = parseFloat(parseFloat(0.0001*sp*qty*commodity_value).toFixed(2));
		}

		var etc = 0;
		var cc = 0;

		etc = (commodity_cat == 'a') ? parseFloat(parseFloat(0.000026*turnover).toFixed(2)):parseFloat(parseFloat(0.0000005*turnover).toFixed(2));

		if (commodity[commodity.selectedIndex].text == 'RBDPMOLEIN') {
			if (turnover >= 100000) {
				var rbd_multiplier = parseInt(turnover / 100000);
				etc = parseFloat(parseFloat(rbd_multiplier).toFixed(2));
			}
		}
		if (commodity[commodity.selectedIndex].text == 'CASTORSEED') {
			etc = parseFloat(parseFloat(0.000005*turnover).toFixed(2));
			// cc = parseFloat(parseFloat(0.00001*turnover).toFixed(2));
		} else if (commodity[commodity.selectedIndex].text == 'RBDPMOLEIN') {
			etc = parseFloat(parseFloat(0.00001*turnover).toFixed(2));
			// cc = parseFloat(parseFloat(0.00001*turnover).toFixed(2));
		} else if (commodity[commodity.selectedIndex].text == 'PEPPER') {
			etc = parseFloat(parseFloat(0.0000005*turnover).toFixed(2));
			// cc = parseFloat(parseFloat(0.00001*turnover).toFixed(2));
		} else if (commodity[commodity.selectedIndex].text == 'KAPAS') {
			etc = parseFloat(parseFloat(0.000026*turnover).toFixed(2));
			// cc = parseFloat(parseFloat(0.00001*turnover).toFixed(2));
		}
		var stax = parseFloat(parseFloat(0.18 * (brokerage + etc)).toFixed(2));

		var sebi_charges = parseFloat(parseFloat(turnover*0.000001).toFixed(2));
		if (commodity_group == "a") {
			sebi_charges = parseFloat(parseFloat(turnover*0.0000001).toFixed(2));
		}
		sebi_charges = parseFloat(parseFloat(sebi_charges + (sebi_charges * 0.18)).toFixed(2));

		var stamp_charges = Math.round(parseFloat(parseFloat(bp*qty*commodity_value*0.00002).toFixed(2)));

		var total_tax = parseFloat(parseFloat(brokerage + ctt + etc + stax + sebi_charges + stamp_charges)).toFixed(2);
		var breakeven = parseFloat(parseFloat(total_tax / (qty * commodity_value)).toFixed(2));
		breakeven = isNaN(breakeven) ? 0 : breakeven

		var net_profit = parseFloat(parseFloat(((sp - bp) * qty *commodity_value) - total_tax).toFixed(2));

		document.querySelector("#comm_fut_turn").innerHTML = turnover;
		document.querySelector("#comm_fut_ctt").innerHTML = ctt;
		document.querySelector("#comm_fut_brokerage").innerHTML = parseFloat(brokerage).toFixed(2);
		document.querySelector("#comm_fut_etc").innerHTML = etc;
		document.querySelector("#comm_fut_cc").innerHTML = cc;
		document.querySelector("#comm_fut_st").innerHTML = stax;
		document.querySelector("#sebi_comm_fut").innerHTML = sebi_charges;
		document.querySelector("#stamp_duty_comm_fut").innerHTML = stamp_charges;
		document.querySelector("#comm_fut_total").innerHTML = total_tax;
		document.querySelector("#comm_fut_breakeven").innerHTML = breakeven;
		document.querySelector("#comm_fut_pnl").innerHTML = net_profit;
		if (parseFloat(net_profit) > 0) {
			document.querySelector("#comm_fut_pnl").classList.remove("neg")
			document.querySelector("#comm_fut_pnl").classList.add("pos")
		} else {
			document.querySelector("#comm_fut_pnl").classList.remove("pos")
			document.querySelector("#comm_fut_pnl").classList.add("neg")
		}
	}

	function cal_comm_opt(){
		srp = parseFloat(parseFloat(document.getElementsByClassName("comm_opt_srp")[0].value).toFixed(4));
		bp = parseFloat(parseFloat(document.getElementsByClassName("comm_opt_bp")[0].value).toFixed(2));
		sp = parseFloat(parseFloat(document.getElementsByClassName("comm_opt_sp")[0].value).toFixed(2));
		qty = parseFloat(parseFloat(document.getElementsByClassName("comm_opt_qty")[0].value).toFixed(2));

		if (isNaN(qty) || (isNaN(bp) && isNaN(sp)) || isNaN(srp)) {
			var elements = document.querySelector("#commodity-mcx-calc-opt").querySelectorAll(".valuation-block");
			for (var i = 0; i < elements.length; i++) {
				elements[i].querySelector("span").innerHTML = 0
			}
			document.getElementById("comm_opt_pnl").innerHTML = 0;
			return;
		}
		if (isNaN(bp)) {
			bp = 0;
		}
		if (isNaN(sp)) {
			sp = 0;
		}
		if (isNaN(srp)) {
			srp = 0;
		}

		var commodity = document.getElementById("commodity_multiplier_opt");
		var commodity_value = parseFloat(commodity[commodity.selectedIndex].value).toFixed(2);

		var total_turnover = parseFloat(parseFloat((bp+srp)*qty*commodity_value)+parseFloat((sp+srp)*qty*commodity_value)).toFixed(2);
		var turnover = parseFloat(parseFloat((bp+sp)*commodity_value*qty).toFixed(2));
		var brokerage_buy = 0,
			brokerage_sell = 0;

		if (bp > 0) {
			brokerage_buy = (((bp+srp) * qty * commodity_value * 0.0003)>20) ? 20:parseFloat(parseFloat((bp+srp) * qty * commodity_value * 0.0003).toFixed(2));
		}
		if (sp > 0) {
			brokerage_sell = (((sp+srp) * qty * commodity_value * 0.0003)>20) ? 20:parseFloat(parseFloat((sp+srp) * qty * commodity_value * 0.0003).toFixed(2));
		}
		var brokerage = parseFloat(parseFloat(brokerage_buy + brokerage_sell).toFixed(2));

		var ctt = 0;
		ctt = parseFloat(parseFloat(0.0005*sp*qty*commodity_value).toFixed(2));

		var etc = parseFloat(parseFloat(0.0005 * turnover).toFixed(2));
		var cc = 0;
		var stax = parseFloat(parseFloat(0.18 * (brokerage + etc)).toFixed(2));

		var sebi_charges = parseFloat(parseFloat(turnover*0.000001).toFixed(2));
		sebi_charges = parseFloat(parseFloat(sebi_charges + (sebi_charges * 0.18)).toFixed(2));

		var stamp_charges = Math.round(parseFloat(parseFloat(bp*qty*commodity_value*0.00003).toFixed(2)));

		var total_tax = parseFloat(parseFloat(brokerage + ctt + etc + stax + sebi_charges + stamp_charges)).toFixed(2);
		var breakeven = parseFloat(parseFloat(total_tax / (qty * commodity_value)).toFixed(2));
		breakeven = isNaN(breakeven) ? 0 : breakeven

		var net_profit = parseFloat(parseFloat(((sp - bp) * qty *commodity_value) - total_tax).toFixed(2));

		document.getElementById("comm_opt_turn").innerHTML = turnover;

		var comm_notional = document.getElementsByClassName("comm_opt_notional")[0];
		if (isNaN(srp)) {
			comm_notional.setAttribute("title", "Notional turnover: 0");
		} else {
			comm_notional.setAttribute("title", "Notional turnover: "+total_turnover);
		}
		comm_notional.addEventListener("click", function () {
			tlite.show(comm_notional);
		})
		tlite(el => el.classList.contains("comm_opt_notional"));

		if (isNaN(srp)) {
			document.getElementsByClassName("comm_opt_notional")[0].setAttribute("title", "Notional turnover: 0");
		}
		else {
			document.getElementsByClassName("comm_opt_notional")[0].setAttribute("title", "Notional turnover: "+total_turnover);
		}

		document.querySelector("#comm_opt_ctt").innerHTML = ctt;
		document.querySelector("#comm_opt_brokerage").innerHTML = parseFloat(brokerage).toFixed(2);
		document.querySelector("#comm_opt_etc").innerHTML = etc;
		document.querySelector("#comm_opt_cc").innerHTML = cc;
		document.querySelector("#comm_opt_st").innerHTML = stax;
		document.querySelector("#sebi_comm_opt").innerHTML = sebi_charges;
		document.querySelector("#stamp_duty_comm_opt").innerHTML = stamp_charges;
		document.querySelector("#comm_opt_total").innerHTML = total_tax;
		document.querySelector("#comm_opt_breakeven").innerHTML = breakeven;
		document.querySelector("#comm_opt_pnl").innerHTML = net_profit;
		if (parseFloat(net_profit) > 0) {
			document.querySelector("#comm_opt_pnl").classList.remove("neg")
			document.querySelector("#comm_opt_pnl").classList.add("pos")
		} else {
			document.querySelector("#comm_opt_pnl").classList.remove("pos")
			document.querySelector("#comm_opt_pnl").classList.add("neg")
		}
	}

	// Electronic Contract Note

	// document.getElementsByClassName("ecn_state_select")[0].onchange = function () {
	// 	var state_selected_val = this.value;
	// 	if (state_selected_val>0) {
	// 		if (parseInt(document.getElementById("open_ecn").getAttribute("qty"))>0) {
	// 			document.getElementById("open_ecn").classList.remove("disabled");
	// 			document.getElementById("open_ecn").removeAttribute("title");
	// 		}
	// 		else {
	// 			document.getElementById("open_ecn").setAttribute("title", "Please add an order from the calculator");
	// 		}
	// 		if (parseInt(document.getElementById("open_comm_ecn").getAttribute("qty"))>0) {
	// 			document.getElementById("open_comm_ecn").classList.remove("disabled");
	// 			document.getElementById("open_comm_ecn").removeAttribute("title");
	// 		}
	// 		else {
	// 			document.getElementById("open_comm_ecn").setAttribute("title", "Please add an order from the calculator");
	// 		}
	// 	}
	// };

	document.getElementById("intra_ecn").onclick = function () {
		var elmnt = document.getElementById("contract_note_container");
		elmnt.scrollIntoView({ behavior: "smooth" });

		var ecn_qty = parseInt(document.getElementById("open_ecn").getAttribute("qty")) + 1;
		var sample_ecn_qty = parseInt(document.getElementsByClassName("sample-ecn-head")[0].getAttribute("qty")) + 1;
		document.getElementsByClassName("sample-ecn-head")[0].setAttribute("qty", sample_ecn_qty);
		document.getElementsByClassName("sample-ecn-head")[0].innerHTML = "Sample contract note (" + sample_ecn_qty + ")";
		document.getElementById("open_ecn").setAttribute("qty", ecn_qty);
		document.getElementById("open_ecn").innerHTML = "Equity & currency ("+ecn_qty+")";

		if (parseInt(document.getElementById("open_ecn").getAttribute("qty"))>0) {
			document.getElementById("open_ecn").classList.remove("disabled");
			document.getElementById("open_ecn").removeAttribute("title");
		}
		if (parseInt(document.getElementById("open_comm_ecn").getAttribute("qty"))>0) {
			document.getElementById("open_comm_ecn").classList.remove("disabled");
			document.getElementById("open_comm_ecn").removeAttribute("title");
		}

		calculate_ecn_equity();
		return false;
	};
	document.getElementById("delivery_ecn").onclick = function() {
		var elmnt = document.getElementById("contract_note_container");
		elmnt.scrollIntoView({ behavior: "smooth" });
		var ecn_qty = parseInt(document.getElementById("open_ecn").getAttribute("qty")) + 1;
		var sample_ecn_qty = parseInt(document.getElementsByClassName("sample-ecn-head")[0].getAttribute("qty")) + 1;
		document.getElementsByClassName("sample-ecn-head")[0].setAttribute("qty", sample_ecn_qty);
		document.getElementsByClassName("sample-ecn-head")[0].innerHTML = "Sample contract note ("+sample_ecn_qty+")";
		document.getElementById("open_ecn").setAttribute("qty", ecn_qty);
		document.getElementById("open_ecn").innerHTML = "Equity & currency ("+ecn_qty+")";

		if (parseInt(document.getElementById("open_ecn").getAttribute("qty"))>0) {
			document.getElementById("open_ecn").classList.remove("disabled");
			document.getElementById("open_ecn").removeAttribute("title");
		}
		if (parseInt(document.getElementById("open_comm_ecn").getAttribute("qty"))>0) {
			document.getElementById("open_comm_ecn").classList.remove("disabled");
			document.getElementById("open_comm_ecn").removeAttribute("title");
		}
		calculate_ecn_del();
		return false;
	};
	document.getElementById("fut_ecn").onclick = function() {
		var elmnt = document.getElementById("contract_note_container");
		elmnt.scrollIntoView({ behavior: "smooth" });
		var ecn_qty = parseInt(document.getElementById("open_ecn").getAttribute("qty")) + 1;
		document.getElementById("open_ecn").setAttribute("qty", ecn_qty);
		document.getElementById("open_ecn").innerHTML = "Equity & currency ("+ecn_qty+")";
		var sample_ecn_qty = parseInt(document.getElementsByClassName("sample-ecn-head")[0].getAttribute("qty")) + 1;
		document.getElementsByClassName("sample-ecn-head")[0].setAttribute("qty", sample_ecn_qty);
		document.getElementsByClassName("sample-ecn-head").innerHTML = "Sample contract note ("+sample_ecn_qty+")";

		if (parseInt(document.getElementById("open_ecn").getAttribute("qty"))>0) {
			document.getElementById("open_ecn").classList.remove("disabled");
			document.getElementById("open_ecn").removeAttribute("title");
		}
		if (parseInt(document.getElementById("open_comm_ecn").getAttribute("qty"))>0) {
			document.getElementById("open_comm_ecn").classList.remove("disabled");
			document.getElementById("open_comm_ecn").removeAttribute("title");
		}

		calculate_ecn_fut();
		return false;
	};
	document.getElementById("opt_ecn").onclick = function() {
		var elmnt = document.getElementById("contract_note_container");
		elmnt.scrollIntoView({ behavior: "smooth" });
		var ecn_qty = parseInt(document.getElementById("open_ecn").getAttribute("qty")) + 1;
		document.getElementById("open_ecn").setAttribute("qty", ecn_qty);
		document.getElementById("open_ecn").innerHTML = "Equity & currency ("+ecn_qty+")";
		var sample_ecn_qty = parseInt(document.getElementsByClassName("sample-ecn-head")[0].getAttribute("qty")) + 1;
		document.getElementsByClassName("sample-ecn-head")[0].setAttribute("qty",sample_ecn_qty);
		document.getElementsByClassName("sample-ecn-head")[0].innerHTML = "Sample contract note ("+sample_ecn_qty+")";

		if (parseInt(document.getElementById("open_ecn").getAttribute("qty"))>0) {
			document.getElementById("open_ecn").classList.remove("disabled");
			document.getElementById("open_ecn").removeAttribute("title");
		}
		if (parseInt(document.getElementById("open_comm_ecn").getAttribute("qty"))>0) {
			document.getElementById("open_comm_ecn").classList.remove("disabled");
			document.getElementById("open_comm_ecn").removeAttribute("title");
		}

		calculate_ecn_opt();
		return false;
	};
	document.getElementById("curr_fut_ecn").onclick = function () {
		var elmnt = document.getElementById("contract_note_container");
		elmnt.scrollIntoView({ behavior: "smooth" });
		var ecn_qty = parseInt(document.getElementById("open_ecn").getAttribute("qty")) + 1;
		document.getElementById("open_ecn").setAttribute("qty", ecn_qty);
		document.getElementById("open_ecn").innerHTML = "Equity & currency ("+ecn_qty+")";
		var sample_ecn_qty = parseInt(document.getElementsByClassName("sample-ecn-head")[0].getAttribute("qty")) + 1;
		document.getElementsByClassName("sample-ecn-head")[0].setAttribute("qty", sample_ecn_qty);
		document.getElementsByClassName("sample-ecn-head")[0].innerHTML = "Sample contract note ("+sample_ecn_qty+")";

		if (parseInt(document.getElementById("open_ecn").getAttribute("qty"))>0) {
			document.getElementById("open_ecn").classList.remove("disabled");
			document.getElementById("open_ecn").removeAttribute("title");
		}
		if (parseInt(document.getElementById("open_comm_ecn").getAttribute("qty"))>0) {
			document.getElementById("open_comm_ecn").classList.remove("disabled");
			document.getElementById("open_comm_ecn").removeAttribute("title");
		}

		calculate_ecn_curr_fut();
		return false;
	};
	document.getElementById("curr_opt_ecn").onclick = function () {
		var elmnt = document.getElementById("contract_note_container");
		elmnt.scrollIntoView({ behavior: "smooth" });
		var ecn_qty = parseInt(document.getElementById("open_ecn").getAttribute("qty")) + 1;
		document.getElementById("open_ecn").setAttribute("qty", ecn_qty);
		document.getElementById("open_ecn").innerHTML = "Equity & currency ("+ecn_qty+")";
		var sample_ecn_qty = parseInt(document.getElementsByClassName("sample-ecn-head")[0].getAttribute("qty")) + 1;
		document.getElementsByClassName("sample-ecn-head")[0].setAttribute("qty",sample_ecn_qty);
		document.getElementsByClassName("sample-ecn-head")[0].innerHTML = "Sample contract note ("+sample_ecn_qty+")";

		if (parseInt(document.getElementById("open_ecn").getAttribute("qty"))>0) {
			document.getElementById("open_ecn").classList.remove("disabled");
			document.getElementById("open_ecn").removeAttribute("title");
		}
		if (parseInt(document.getElementById("open_comm_ecn").getAttribute("qty"))>0) {
			document.getElementById("open_comm_ecn").classList.remove("disabled");
			document.getElementById("open_comm_ecn").removeAttribute("title");
		}

		calculate_ecn_curr_opt();
		return false;
	};

	document.getElementById("comm_fut_ecn").onclick = function () {
		var elmnt = document.getElementById("contract_note_container");
		elmnt.scrollIntoView({ behavior: "smooth" });
		var ecn_qty = parseInt(document.getElementById("open_comm_ecn").getAttribute("qty")) + 1;
		document.getElementById("open_comm_ecn").setAttribute("qty", ecn_qty);
		document.getElementById("open_comm_ecn").innerHTML = "Commodity ("+ecn_qty+")";
		var sample_ecn_qty = parseInt(document.getElementsByClassName("sample-ecn-head")[0].getAttribute("qty")) + 1;
		document.getElementsByClassName("sample-ecn-head")[0].setAttribute("qty", sample_ecn_qty);
		document.getElementsByClassName("sample-ecn-head")[0].innerHTML = "Sample contract note ("+sample_ecn_qty+")";

		if (parseInt(document.getElementById("open_ecn").getAttribute("qty"))>0) {
			document.getElementById("open_ecn").classList.remove("disabled");
			document.getElementById("open_ecn").removeAttribute("title");
		}
		if (parseInt(document.getElementById("open_comm_ecn").getAttribute("qty"))>0) {
			document.getElementById("open_comm_ecn").classList.remove("disabled");
			document.getElementById("open_comm_ecn").removeAttribute("title");
		}

		calculate_ecn_comm_fut();
		return false;
	};

	document.getElementById("comm_opt_ecn").onclick = function() {
		var elmnt = document.getElementById("contract_note_container");
		elmnt.scrollIntoView({ behavior: "smooth" });
		var ecn_qty = parseInt(document.getElementById("open_comm_ecn").getAttribute("qty")) + 1;
		document.getElementById("open_comm_ecn").setAttribute("qty",ecn_qty);
		document.getElementById("open_comm_ecn").innerHTML = "Commodity ("+ecn_qty+")";
		var sample_ecn_qty = parseInt(document.getElementsByClassName("sample-ecn-head")[0].getAttribute("qty")) + 1;
		document.getElementsByClassName("sample-ecn-head")[0].setAttribute("qty",sample_ecn_qty);
		document.getElementsByClassName("sample-ecn-head")[0].innerHTML = "Sample contract note ("+sample_ecn_qty+")";

		if (parseInt(document.getElementById("open_ecn").getAttribute("qty"))>0) {
			document.getElementById("open_ecn").classList.remove("disabled");
			document.getElementById("open_ecn").removeAttribute("title");
		}
		if (parseInt(document.getElementById("open_comm_ecn").getAttribute("qty"))>0) {
			document.getElementById("open_comm_ecn").classList.remove("disabled");
			document.getElementById("open_comm_ecn").removeAttribute("title");
		}

		calculate_ecn_comm_opt();
		return false;
	};

	function calculate_ecn_equity() {
		var bp_ecn,sp_ecn,qty_ecn,turn_ecn,buy_turn,brokerage,etc,cc,bse_tran_charge,stt,stax,sebi,gross_ecn,exc_ecn,total_ecn,profit_ecn = 0;
		bp_ecn = isNaN(parseFloat(parseFloat(document.getElementsByClassName("intra_bp")[0].value).toFixed(2))) ? 0 : parseFloat(parseFloat(document.getElementsByClassName("intra_bp")[0].value).toFixed(2));
		sp_ecn = isNaN(parseFloat(parseFloat(document.getElementsByClassName("intra_sp")[0].value).toFixed(2))) ? 0 : parseFloat(parseFloat(document.getElementsByClassName("intra_sp")[0].value).toFixed(2));
		qty_ecn = isNaN(parseFloat(parseFloat(document.getElementsByClassName("intra_qty")[0].value).toFixed(2))) ? 0 : parseFloat(parseFloat(document.getElementsByClassName("intra_qty")[0].value).toFixed(2));
		gross_ecn = parseFloat((sp_ecn - bp_ecn)*qty_ecn).toFixed(2);
		turn_ecn = parseFloat(parseFloat(document.getElementById("intra_turn").innerHTML).toFixed(2));
		buy_turn = parseFloat(bp_ecn*qty_ecn).toFixed(2)

		brokerage = parseFloat(parseFloat(document.getElementById("intra_brokerage").innerHTML).toFixed(2));
		etc = parseFloat(parseFloat(document.getElementById("intra_etc").innerHTML).toFixed(2));
		cc = parseFloat(parseFloat(document.getElementById("intra_cc").innerHTML).toFixed(2));
		stt = parseFloat(parseFloat(document.getElementById("intra_stt").innerHTML).toFixed(2));
		stax = parseFloat(parseFloat(document.getElementById("intra_st").innerHTML).toFixed(2));
		sebi = parseFloat(parseFloat(document.getElementById("sebi").innerHTML).toFixed(2));

		exc_ecn = (document.getElementsByClassName("intra_nse")[0].checked) ? "NSE":"BSE";
		total_ecn = parseFloat(parseFloat(document.getElementById("intra_total").innerHTML).toFixed(2));
		profit_ecn = document.getElementById("intra_pnl").innerHTML;
		ecn_counter++;
		document.getElementsByClassName("intra_ecn")[0].innerHTML += ("<tr><td class='hidden intra_turnover'>"+turn_ecn+"</td><td class='hidden ecn_brokerage'>"+brokerage+"</td><td class='hidden ecn_intra_bt'>"+buy_turn+"</td><td class='hidden ecn_etc'>"+etc+"</td><td class='hidden ecn_cc'>"+cc+"</td><td class='hidden ecn_stt'>"+stt+"</td><td class='hidden ecn_stax'>"+stax+"</td><td class='hidden ecn_sebi'>"+sebi+"</td><td>"+ecn_counter+"</td><td>Intraday equity</td><td>"+exc_ecn+"</td><td class='contract-number'>"+bp_ecn+"</td><td class='contract-number'>"+sp_ecn+"</td><td class='contract-number'>"+qty_ecn+"</td><td class='profit_intra_ecn contract-number'>"+gross_ecn+"</td></tr>");
	}

	function calculate_ecn_del() {
		var bp_ecn,sp_ecn,qty_ecn,turn_ecn,buy_turn,brokerage,etc,cc,dp,bse_tran_charge,stt,stax,sebi,gross_ecn,exc_ecn,total_ecn,profit_ecn = 0;
		var dp = 15.93
		bp_ecn = isNaN(parseFloat(parseFloat(document.getElementsByClassName("del_bp")[0].value).toFixed(2))) ? 0 : parseFloat(parseFloat(document.getElementsByClassName("del_bp")[0].value).toFixed(2));
		sp_ecn = isNaN(parseFloat(parseFloat(document.getElementsByClassName("del_sp")[0].value).toFixed(2))) ? 0 : parseFloat(parseFloat(document.getElementsByClassName("del_sp")[0].value).toFixed(2));
		qty_ecn = isNaN(parseFloat(parseFloat(document.getElementsByClassName("del_qty")[0].value).toFixed(2))) ? 0 : parseFloat(parseFloat(document.getElementsByClassName("del_qty")[0].value).toFixed(2));
		gross_ecn = parseFloat((sp_ecn - bp_ecn)*qty_ecn).toFixed(2);
		turn_ecn = parseFloat(parseFloat(document.getElementById("del_turn").innerHTML).toFixed(2));
		buy_turn = parseFloat(bp_ecn*qty_ecn).toFixed(2)

		brokerage = parseFloat(parseFloat(document.getElementById("del_brokerage").innerHTML).toFixed(2));
		etc = parseFloat(parseFloat(document.getElementById("del_etc").innerHTML).toFixed(2));
		dp = parseFloat(parseFloat(document.getElementById("del_dp").innerHTML).toFixed(2));
		// bse_tran_charge = (document.getElementsByClassName("del_nse")[0].checked) ? 0 : parseFloat(parseFloat(document.getElementById("del_bse").innerHTML).toFixed(2));
		stt = parseFloat(parseFloat(document.getElementById("del_stt").innerHTML).toFixed(2));
		stax = parseFloat(parseFloat(document.getElementById("del_st").innerHTML).toFixed(2));
		sebi = parseFloat(parseFloat(document.getElementById("sebi_delivery").innerHTML).toFixed(2));

		if (sp_ecn == 0) dp = 0;

		exc_ecn = (document.getElementsByClassName("del_nse")[0].checked) ? "NSE":"BSE";
		total_ecn = parseFloat(parseFloat(document.getElementById("del_total").innerHTML).toFixed(2));
		profit_ecn = document.getElementById("del_pnl").innerHTML;
		ecn_counter++;
		document.getElementsByClassName("intra_ecn")[0].innerHTML += ("<tr><td class='hidden del_turnover'>"+turn_ecn+"</td><td class='hidden ecn_brokerage'>"+brokerage+"</td><td class='hidden ecn_del_bt'>"+buy_turn+"</td><td class='hidden ecn_etc'>"+etc+"</td><td class='hidden ecn_dp'>"+dp+"</td><td class='hidden ecn_stt'>"+stt+"</td><td class='hidden ecn_stax'>"+stax+"</td><td class='hidden ecn_sebi'>"+sebi+"</td><td>"+ecn_counter+"</td><td>Delivery equity</td><td>"+exc_ecn+"</td><td class='contract-number'>"+bp_ecn+"</td><td class='contract-number'>"+sp_ecn+"</td><td class='contract-number'>"+qty_ecn+"</td><td class='profit_intra_ecn contract-number'>"+gross_ecn+"</td></tr>");
	}

	function calculate_ecn_fut() {
		var bp_ecn,sp_ecn,qty_ecn,turn_ecn,buy_turn,brokerage,etc,cc,bse_tran_charge,stt,stax,sebi,gross_ecn,exc_ecn,total_ecn,profit_ecn = 0;
		bp_ecn = isNaN(parseFloat(parseFloat(document.getElementsByClassName("fut_bp")[0].value).toFixed(2))) ? 0 : parseFloat(parseFloat(document.getElementsByClassName("fut_bp")[0].value).toFixed(2));
		sp_ecn = isNaN(parseFloat(parseFloat(document.getElementsByClassName("fut_sp")[0].value).toFixed(2))) ? 0 : parseFloat(parseFloat(document.getElementsByClassName("fut_sp")[0].value).toFixed(2));
		qty_ecn = isNaN(parseFloat(parseFloat(document.getElementsByClassName("fut_qty")[0].value).toFixed(2))) ? 0 : parseFloat(parseFloat(document.getElementsByClassName("fut_qty")[0].value).toFixed(2));
		gross_ecn = parseFloat((sp_ecn - bp_ecn)*qty_ecn).toFixed(2);
		turn_ecn = parseFloat(parseFloat(document.getElementById("fut_turn").innerHTML).toFixed(2));
		buy_turn = parseFloat(bp_ecn*qty_ecn).toFixed(2)

		brokerage = parseFloat(parseFloat(document.getElementById("fut_brokerage").innerHTML).toFixed(2));
		etc = parseFloat(parseFloat(document.getElementById("fut_etc").innerHTML).toFixed(2));
		cc = 0;
		// bse_tran_charge = (document.getElementsByClassName("fut_nse")[0].is(':checked')) ? 0 : parseFloat(parseFloat(document.getElementById("fut_bse").innerHTML).toFixed(2));
		stt = parseFloat(parseFloat(document.getElementById("fut_stt").innerHTML).toFixed(2));
		stax = parseFloat(parseFloat(document.getElementById("fut_st").innerHTML).toFixed(2));
		sebi = parseFloat(parseFloat(document.getElementById("sebi_fut").innerHTML).toFixed(2));

		exc_ecn = (document.getElementsByClassName("fut_nse")[0].checked) ? "NSE":"BSE";
		total_ecn = parseFloat(parseFloat(document.getElementById("fut_total").innerHTML).toFixed(2));
		profit_ecn = document.getElementById("fut_pnl").innerHTML;
		ecn_counter++;
		document.getElementsByClassName("intra_ecn")[0].innerHTML += ("<tr><td class='hidden fut_turnover'>"+turn_ecn+"</td><td class='hidden ecn_brokerage'>"+brokerage+"</td><td class='hidden ecn_fut_bt'>"+buy_turn+"</td><td class='hidden ecn_etc'>"+etc+"</td><td class='hidden ecn_cc'>"+cc+"</td><td class='hidden ecn_stt'>"+stt+"</td><td class='hidden ecn_stax'>"+stax+"</td><td class='hidden ecn_sebi'>"+sebi+"</td><td>"+ecn_counter+"</td><td>F&O - Futures</td><td>"+exc_ecn+"</td><td class='contract-number'>"+bp_ecn+"</td><td class='contract-number'>"+sp_ecn+"</td><td class='contract-number'>"+qty_ecn+"</td><td class='profit_intra_ecn contract-number'>"+gross_ecn+"</td></tr>");
	}

	function calculate_ecn_opt() {
		var bp_ecn,sp_ecn,qty_ecn,turn_ecn,buy_turn,brokerage,etc,cc,bse_tran_charge,stt,stax,sebi,gross_ecn,exc_ecn,total_ecn,profit_ecn = 0;
		bp_ecn = isNaN(parseFloat(parseFloat(document.getElementsByClassName("opt_bp")[0].value).toFixed(2))) ? 0 : parseFloat(parseFloat(document.getElementsByClassName("opt_bp")[0].value).toFixed(2));
		sp_ecn = isNaN(parseFloat(parseFloat(document.getElementsByClassName("opt_sp")[0].value).toFixed(2))) ? 0 : parseFloat(parseFloat(document.getElementsByClassName("opt_sp")[0].value).toFixed(2));
		qty_ecn = isNaN(parseFloat(parseFloat(document.getElementsByClassName("opt_qty")[0].value).toFixed(2))) ? 0 : parseFloat(parseFloat(document.getElementsByClassName("opt_qty")[0].value).toFixed(2));
		gross_ecn = parseFloat((sp_ecn - bp_ecn)*qty_ecn).toFixed(2);
		turn_ecn = parseFloat(parseFloat(document.getElementById("opt_turn").innerHTML).toFixed(2));
		buy_turn = parseFloat(bp_ecn*qty_ecn).toFixed(2)

		brokerage = parseFloat(parseFloat(document.getElementById("opt_brokerage").innerHTML).toFixed(2));
		etc = parseFloat(parseFloat(document.getElementById("opt_etc").innerHTML).toFixed(2));
		cc = 0;
		// bse_tran_charge = ($(".opt_nse").is(':checked')) ? 0 : parseFloat(parseFloat(document.getElementById("opt_bse").innerHTML).toFixed(2));
		stt = parseFloat(parseFloat(document.getElementById("opt_stt").innerHTML).toFixed(2));
		stax = parseFloat(parseFloat(document.getElementById("opt_st").innerHTML).toFixed(2));
		sebi = parseFloat(parseFloat(document.getElementById("sebi_opt").innerHTML).toFixed(2));

		exc_ecn = (document.getElementsByClassName("opt_nse")[0].checked) ? "NSE":"BSE";
		total_ecn = parseFloat(parseFloat(document.getElementById("opt_total").innerHTML).toFixed(2));
		profit_ecn = document.getElementById("opt_profit").innerHTML;
		ecn_counter++;
		document.getElementsByClassName("intra_ecn")[0].innerHTML += ("<tr><td class='hidden opt_turnover'>"+turn_ecn+"</td><td class='hidden ecn_brokerage'>"+brokerage+"</td><td class='hidden ecn_opt_bt'>"+buy_turn+"</td><td class='hidden ecn_etc'>"+etc+"</td><td class='hidden ecn_cc'>"+cc+"</td><td class='hidden ecn_stt'>"+stt+"</td><td class='hidden ecn_stax'>"+stax+"</td><td class='hidden ecn_sebi'>"+sebi+"</td><td>"+ecn_counter+"</td><td>F&O - Options</td><td>"+exc_ecn+"</td><td class='contract-number'>"+bp_ecn+"</td><td class='contract-number'>"+sp_ecn+"</td><td class='contract-number'>"+qty_ecn+"</td><td class='profit_intra_ecn contract-number'>"+gross_ecn+"</td></tr>");
	}

	function calculate_ecn_curr_fut() {
		var bp_ecn,sp_ecn,qty_ecn,turn_ecn,buy_turn,brokerage,etc,cc,stt,stax,sebi,gross_ecn,exc_ecn,total_ecn,profit_ecn = 0;
		bp_ecn = isNaN(parseFloat(parseFloat(document.getElementsByClassName("curr_fut_bp")[0].value).toFixed(4))) ? 0 : parseFloat(parseFloat(document.getElementsByClassName("curr_fut_bp")[0].value).toFixed(4));
		sp_ecn = isNaN(parseFloat(parseFloat(document.getElementsByClassName("curr_fut_sp")[0].value).toFixed(4))) ? 0 : parseFloat(parseFloat(document.getElementsByClassName("curr_fut_sp")[0].value).toFixed(4));
		qty_ecn = isNaN(parseFloat(parseFloat(document.getElementsByClassName("curr_fut_qty")[0].value).toFixed(2))) ? 0 : parseFloat(parseFloat(document.getElementsByClassName("curr_fut_qty")[0].value).toFixed(2));
		gross_ecn = parseFloat((sp_ecn - bp_ecn)*qty_ecn*1000).toFixed(2);
		turn_ecn = parseFloat(parseFloat(document.getElementById("curr_fut_turn").innerHTML).toFixed(2));
		buy_turn = parseFloat(bp_ecn*qty_ecn*1000).toFixed(2)

		brokerage = parseFloat(parseFloat(document.getElementById("curr_fut_brokerage").innerHTML).toFixed(2));
		etc = parseFloat(parseFloat(document.getElementById("curr_fut_etc").innerHTML).toFixed(2));
		cc = parseFloat(parseFloat(document.getElementById("curr_fut_cc").innerHTML).toFixed(2));
		stt = 0;
		stax = parseFloat(parseFloat(document.getElementById("curr_fut_st").innerHTML).toFixed(2));
		sebi = parseFloat(parseFloat(document.getElementById("sebi_curr_fut").innerHTML).toFixed(2));

		exc_ecn = (document.getElementsByClassName("curr_fut_nse")[0].checked) ? "NSE":"BSE";
		total_ecn = parseFloat(parseFloat(document.getElementById("curr_fut_total").innerHTML).toFixed(2));
		profit_ecn = document.getElementById("curr_fut_profit").innerHTML;
		ecn_counter++;
		document.getElementsByClassName("intra_ecn")[0].innerHTML += ("<tr><td class='hidden curr_fut_turnover'>"+turn_ecn+"</td><td class='hidden ecn_brokerage'>"+brokerage+"</td><td class='hidden ecn_curr_fut_bt'>"+buy_turn+"</td><td class='hidden ecn_etc'>"+etc+"</td><td class='hidden ecn_cc'>"+cc+"</td><td class='hidden ecn_stt'>"+stt+"</td><td class='hidden ecn_stax'>"+stax+"</td><td class='hidden ecn_sebi'>"+sebi+"</td><td>"+ecn_counter+"</td><td>Currency - Futures</td><td>"+exc_ecn+"</td><td class='contract-number'>"+bp_ecn+"</td><td class='contract-number'>"+sp_ecn+"</td><td class='contract-number'>"+qty_ecn+"</td><td class='profit_intra_ecn contract-number'>"+gross_ecn+"</td></tr>");
	}

	function calculate_ecn_curr_opt() {
		var bp_ecn,sp_ecn,qty_ecn,srp_ecn,turn_ecn,buy_turn,brokerage,etc,cc,stt,stax,sebi,gross_ecn,exc_ecn,total_ecn,profit_ecn = 0;
		bp_ecn = isNaN(parseFloat(parseFloat(document.getElementsByClassName("curr_opt_bp")[0].value).toFixed(4))) ? 0 : parseFloat(parseFloat(document.getElementsByClassName("curr_opt_bp")[0].value).toFixed(4));
		sp_ecn = isNaN(parseFloat(parseFloat(document.getElementsByClassName("curr_opt_sp")[0].value).toFixed(4))) ? 0 : parseFloat(parseFloat(document.getElementsByClassName("curr_opt_sp")[0].value).toFixed(4));
		qty_ecn = isNaN(parseFloat(parseFloat(document.getElementsByClassName("curr_opt_qty")[0].value).toFixed(2))) ? 0 : parseFloat(parseFloat(document.getElementsByClassName("curr_opt_qty")[0].value).toFixed(2));
		srp_ecn = parseFloat(parseFloat(document.getElementsByClassName("curr_opt_srp")[0].value).toFixed(2));
		gross_ecn = parseFloat((sp_ecn - bp_ecn)*1000*qty_ecn).toFixed(2);
		turn_ecn = parseFloat(parseFloat(document.getElementById("curr_opt_turn").innerHTML).toFixed(2));
		buy_turn = parseFloat(bp_ecn*qty_ecn*1000).toFixed(2)

		brokerage = parseFloat(parseFloat(document.getElementById("curr_opt_brokerage").innerHTML).toFixed(2));
		etc = parseFloat(parseFloat(document.getElementById("curr_opt_etc").innerHTML).toFixed(2));
		cc = parseFloat(parseFloat(document.getElementById("curr_opt_cc").innerHTML).toFixed(2));
		stt = 0;
		stax = parseFloat(parseFloat(document.getElementById("curr_opt_st").innerHTML).toFixed(2));
		sebi = parseFloat(parseFloat(document.getElementById("sebi_curr_opt").innerHTML).toFixed(2));

		exc_ecn = (document.getElementsByClassName("curr_opt_nse")[0].checked) ? "NSE":"BSE";
		total_ecn = parseFloat(document.getElementById("curr_opt_total").innerHTML).toFixed(2);
		profit_ecn = parseFloat(document.getElementById("curr_opt_profit").innerHTML).toFixed(2);
		ecn_counter++;
		document.getElementsByClassName("intra_ecn")[0].innerHTML += ("<tr><td class='hidden curr_opt_turnover'>"+turn_ecn+"</td><td class='hidden ecn_brokerage'>"+brokerage+"</td><td class='hidden ecn_curr_opt_bt'>"+buy_turn+"</td><td class='hidden ecn_etc'>"+etc+"</td><td class='hidden ecn_cc'>"+cc+"</td><td class='hidden ecn_stt'>"+stt+"</td><td class='hidden ecn_stax'>"+stax+"</td><td class='hidden ecn_sebi'>"+sebi+"</td><td>"+ecn_counter+"</td><td>Currency - Options</td><td>"+exc_ecn+"</td><td class='contract-number'>"+bp_ecn+"</td><td class='contract-number'>"+sp_ecn+"</td><td class='contract-number'>"+qty_ecn+"</td><td class='profit_intra_ecn contract-number'>"+gross_ecn+"</td></tr>");
	}

	function calculate_ecn_comm_fut() {
		var bp_ecn,sp_ecn,qty_ecn,srp_ecn,turn_ecn,buy_turn,brokerage,etc,cc,stt,stax,sebi,gross_ecn,exc_ecn,total_ecn,profit_ecn = 0;
		var comm = "ALUMINI";
		var comm_val = parseFloat(document.getElementsByClassName("comm-fut-select")[0].value);
		bp_ecn = isNaN(parseFloat(parseFloat(document.getElementsByClassName("comm_fut_bp")[0].value).toFixed(2))) ? 0 : parseFloat(parseFloat(document.getElementsByClassName("comm_fut_bp")[0].value).toFixed(2));
		sp_ecn = isNaN(parseFloat(parseFloat(document.getElementsByClassName("comm_fut_sp")[0].value).toFixed(2))) ? 0 : parseFloat(parseFloat(document.getElementsByClassName("comm_fut_sp")[0].value).toFixed(2));
		qty_ecn = isNaN(parseFloat(parseFloat(document.getElementsByClassName("comm_fut_qty")[0].value).toFixed(2))) ? 0 : parseFloat(parseFloat(document.getElementsByClassName("comm_fut_qty")[0].value).toFixed(2));
		gross_ecn = parseFloat((sp_ecn - bp_ecn)*comm_val*qty_ecn).toFixed(2);
		turn_ecn = parseFloat(parseFloat(document.getElementById("comm_fut_turn").innerHTML).toFixed(2));
		comm = document.getElementsByClassName("comm-fut-select")[0][document.getElementsByClassName("comm-fut-select")[0].selectedIndex].innerHTML.toUpperCase();
		buy_turn = parseFloat(bp_ecn*qty_ecn*comm_val).toFixed(2)

		ecn_comm_added.push({"name":comm,"qty":qty_ecn});

		brokerage = parseFloat(parseFloat(document.getElementById("comm_fut_brokerage").innerHTML).toFixed(2));
		etc = parseFloat(parseFloat(document.getElementById("comm_fut_etc").innerHTML).toFixed(2));
		cc = parseFloat(parseFloat(document.getElementById("comm_fut_cc").innerHTML).toFixed(2));
		stt = parseFloat(parseFloat(document.getElementById("comm_fut_ctt").innerHTML).toFixed(2));
		stax = parseFloat(parseFloat(document.getElementById("comm_fut_st").innerHTML).toFixed(2));
		sebi = parseFloat(parseFloat(document.getElementById("sebi_comm_fut").innerHTML).toFixed(2));

		total_ecn = parseFloat(document.getElementById("comm_fut_total").innerHTML).toFixed(2);
		profit_ecn = parseFloat(document.getElementById("comm_fut_pnl").innerHTML).toFixed(2);
		comm_ecn_counter++;
		document.getElementsByClassName("comm_ecn")[0].innerHTML += ("<tr><td class='hidden comm_fut_turnover'>"+turn_ecn+"</td><td class='hidden comm_ecn_brokerage'>"+brokerage+"</td><td class='hidden comm_ecn_fut_bt'>"+buy_turn+"</td><td class='hidden comm_ecn_etc'>"+etc+"</td><td class='hidden comm_ecn_cc'>"+cc+"</td><td class='hidden comm_ecn_stt'>"+stt+"</td><td class='hidden comm_ecn_stax'>"+stax+"</td><td class='hidden comm_ecn_sebi'>"+sebi+"</td><td>"+comm_ecn_counter+"</td><td class='comm-ecn-name'>"+comm+" - Futures"+"</td><td class='contract-number'>"+bp_ecn+"</td><td class='contract-number'>"+sp_ecn+"</td><td class='contract-number'>"+qty_ecn+"</td><td class='profit_comm_ecn contract-number'>"+gross_ecn+"</td></tr>");
	}

	function calculate_ecn_comm_opt() {
		var bp_ecn,sp_ecn,qty_ecn,srp_ecn,turn_ecn,buy_turn,brokerage,etc,cc,stt,stax,sebi,gross_ecn,exc_ecn,total_ecn,profit_ecn = 0;
		var comm = "ALUMINI";
		var comm_val = parseFloat(document.getElementsByClassName("comm-opt-select")[0].value);
		bp_ecn = isNaN(parseFloat(parseFloat(document.getElementsByClassName("comm_opt_bp")[0].value).toFixed(2))) ? 0 : parseFloat(parseFloat(document.getElementsByClassName("comm_opt_bp")[0].value).toFixed(2));
		sp_ecn = isNaN(parseFloat(parseFloat(document.getElementsByClassName("comm_opt_sp")[0].value).toFixed(2))) ? 0 : parseFloat(parseFloat(document.getElementsByClassName("comm_opt_sp")[0].value).toFixed(2));
		qty_ecn = isNaN(parseFloat(parseFloat(document.getElementsByClassName("comm_opt_qty")[0].value).toFixed(2))) ? 0 : parseFloat(parseFloat(document.getElementsByClassName("comm_opt_qty")[0].value).toFixed(2));
		gross_ecn = parseFloat((sp_ecn - bp_ecn)*comm_val*qty_ecn).toFixed(2);
		turn_ecn = parseFloat(parseFloat(document.getElementById("comm_opt_turn").innerHTML).toFixed(2));
		comm = document.getElementsByClassName("comm-opt-select")[0][document.getElementsByClassName("comm-opt-select")[0].selectedIndex].innerHTML.toUpperCase();
		buy_turn = parseFloat(bp_ecn*qty_ecn*comm_val).toFixed(2)

		ecn_comm_added.push({"name":comm,"qty":qty_ecn});

		brokerage = parseFloat(parseFloat(document.getElementById("comm_opt_brokerage").innerHTML).toFixed(2));
		etc = parseFloat(parseFloat(document.getElementById("comm_opt_etc").innerHTML).toFixed(2));
		cc = parseFloat(parseFloat(document.getElementById("comm_opt_cc").innerHTML).toFixed(2));
		stt = parseFloat(parseFloat(document.getElementById("comm_opt_ctt").innerHTML).toFixed(2));
		stax = parseFloat(parseFloat(document.getElementById("comm_opt_st").innerHTML).toFixed(2));
		sebi = parseFloat(parseFloat(document.getElementById("sebi_comm_opt").innerHTML).toFixed(2));

		total_ecn = parseFloat(document.getElementById("comm_opt_total").innerHTML).toFixed(2);
		profit_ecn = parseFloat(document.getElementById("comm_opt_pnl").innerHTML).toFixed(2);
		comm_ecn_counter++;
		document.getElementsByClassName("comm_ecn")[0].innerHTML += ("<tr><td class='hidden comm_opt_turnover'>"+turn_ecn+"</td><td class='hidden comm_ecn_brokerage'>"+brokerage+"</td><td class='hidden comm_ecn_opt_bt'>"+buy_turn+"</td><td class='hidden comm_ecn_etc'>"+etc+"</td><td class='hidden comm_ecn_cc'>"+cc+"</td><td class='hidden comm_ecn_stt'>"+stt+"</td><td class='hidden comm_ecn_stax'>"+stax+"</td><td class='hidden comm_ecn_sebi'>"+sebi+"</td><td>"+comm_ecn_counter+"</td><td class='comm-ecn-name'>"+comm+" - Option"+"</td><td class='contract-number'>"+bp_ecn+"</td><td class='contract-number'>"+sp_ecn+"</td><td class='contract-number'>"+qty_ecn+"</td><td class='profit_comm_ecn contract-number'>"+gross_ecn+"</td></tr>");
	}

// // Don't open dropdown if disabled
// $('.ecn_state_select').on('mousedown', function(e) {
// 	if ($(this).hasClass("disabled")) {		
// 		e.preventDefault();
// 		this.blur();
// 		window.focus();
// 	}
// });

// Get the modal
var ecn_modal = document.getElementById("contract_note");

// Get the button that opens the modal
var ecn_btn = document.getElementById("open_ecn");

// Get the modal
var comm_ecn_modal = document.getElementById("commodity_contract_note");

// Get the button that opens the modal
var comm_ecn_btn = document.getElementById("open_comm_ecn");

// Get the <span> element that closes the modal
var ecn_span = document.getElementsByClassName("close")[0];
var comm_span = document.getElementsByClassName("close")[1];

var body = document.getElementsByTagName("body")[0];

// When the user clicks the button, open the modal 
ecn_btn.onclick = function() {
	document.getElementsByClassName("equity_stamp")[0].querySelectorAll("input").value = 0;
	var total_intra_ecn = 0;
	var profit_intra_ecn = 0;
	var turn_intra_ecn = 0;
	var turn_del_ecn = 0;
	var turn_fut_ecn = 0;
	var turn_opt_ecn = 0;
	var turn_curr_fut_ecn = 0;
	var turn_curr_opt_ecn = 0;

	var stamp_intra_ecn = 0;
	var stamp_del_ecn = 0;
	var stamp_fut_ecn = 0;
	var stamp_opt_ecn = 0;
	var stamp_curr_fut_ecn = 0;
	var stamp_curr_opt_ecn = 0;
	var total_stamp_ecn = 0;

	var ecn_charge_brokerage = 0;
	var ecn_charge_etc = 0;
	var ecn_charge_cc = 0;
	var ecn_charge_dp = 0;
	// var ecn_charge_bse = 0;
	var ecn_charge_stt = 0;
	var ecn_charge_stax = 0;
	var ecn_charge_sebi = 0;

	var total_ecn_charges = 0;
	var ecn_net_profit = 0;

	var elements = document.querySelectorAll(".ecn_brokerage");
	Array.prototype.forEach.call(elements, function (el, i) {
	  ecn_charge_brokerage += parseFloat(el.innerHTML);
	});

	elements = document.querySelectorAll(".ecn_etc");
	Array.prototype.forEach.call(elements, function (el, i) {
	  ecn_charge_etc += parseFloat(el.innerHTML);
	});

	elements = document.querySelectorAll(".ecn_cc");
	Array.prototype.forEach.call(elements, function (el, i) {
	  ecn_charge_cc += parseFloat(el.innerHTML);
	});

	elements = document.querySelectorAll(".ecn_dp");
	Array.prototype.forEach.call(elements, function (el, i) {
	  ecn_charge_dp += parseFloat(el.innerHTML);
	});

	elements = document.querySelectorAll(".ecn_stt");
	Array.prototype.forEach.call(elements, function (el, i) {
	  ecn_charge_stt += parseFloat(el.innerHTML);
	});

	elements = document.querySelectorAll(".ecn_stax");
	Array.prototype.forEach.call(elements, function (el, i) {
	  ecn_charge_stax += parseFloat(el.innerHTML);
	});

	elements = document.querySelectorAll(".ecn_sebi");
	Array.prototype.forEach.call(elements, function (el, i) {
	  ecn_charge_sebi += parseFloat(el.innerHTML);
	});

	ecn_charge_brokerage = parseFloat(ecn_charge_brokerage).toFixed(2);
	ecn_charge_etc = parseFloat(ecn_charge_etc).toFixed(2);
	ecn_charge_cc = parseFloat(ecn_charge_cc).toFixed(2);
	ecn_charge_dp = parseFloat(ecn_charge_dp).toFixed(2);
	// ecn_charge_bse = parseFloat(ecn_charge_bse).toFixed(2);
	ecn_charge_stt = parseFloat(ecn_charge_stt).toFixed(2);
	ecn_charge_stax = parseFloat(ecn_charge_stax).toFixed(2);
	ecn_charge_sebi = parseFloat(ecn_charge_sebi).toFixed(2);

	elements = document.querySelectorAll(".profit_intra_ecn");
	Array.prototype.forEach.call(elements, function (el, i) {
	  profit_intra_ecn += parseFloat(parseFloat(el.innerHTML).toFixed(2));
	});

	elements = document.querySelectorAll(".total_intra_ecn");
	Array.prototype.forEach.call(elements, function (el, i) {
	  total_intra_ecn += parseFloat(el.innerHTML);
	});

	elements = document.querySelectorAll(".ecn_intra_bt");
	Array.prototype.forEach.call(elements, function (el, i) {
		turn_intra_ecn += parseFloat(parseFloat(el.innerHTML).toFixed(2));
	});

	elements = document.querySelectorAll(".ecn_del_bt");
	Array.prototype.forEach.call(elements, function (el, i) {
		turn_del_ecn += parseFloat(parseFloat(el.innerHTML).toFixed(2));
	});

	elements = document.querySelectorAll(".ecn_fut_bt");
	Array.prototype.forEach.call(elements, function (el, i) {
		turn_fut_ecn += parseFloat(parseFloat(el.innerHTML).toFixed(2));
	});

	elements = document.querySelectorAll(".ecn_opt_bt");
	Array.prototype.forEach.call(elements, function (el, i) {
		turn_opt_ecn += parseFloat(parseFloat(el.innerHTML).toFixed(2));
	});

	elements = document.querySelectorAll(".ecn_curr_fut_bt");
	Array.prototype.forEach.call(elements, function (el, i) {
		turn_curr_fut_ecn += parseFloat(parseFloat(el.innerHTML).toFixed(2));
	});

	elements = document.querySelectorAll(".ecn_curr_opt_bt");
	Array.prototype.forEach.call(elements, function (el, i) {
		turn_curr_opt_ecn += parseFloat(parseFloat(el.innerHTML).toFixed(2));
	});

	stamp_intra_ecn = parseFloat(parseFloat(turn_intra_ecn*0.00003).toFixed(2));
	stamp_del_ecn = parseFloat(parseFloat(turn_del_ecn*0.00015).toFixed(2));
	stamp_fut_ecn = parseFloat(parseFloat(turn_fut_ecn*0.00002).toFixed(2));
	stamp_opt_ecn = parseFloat(parseFloat(turn_opt_ecn*0.00003).toFixed(2));
	stamp_curr_fut_ecn = parseFloat(parseFloat(turn_curr_fut_ecn*0.000001).toFixed(2));
	stamp_curr_opt_ecn = parseFloat(parseFloat(turn_curr_opt_ecn*0.000001).toFixed(2));
	total_stamp_ecn = stamp_intra_ecn + stamp_del_ecn + stamp_fut_ecn + stamp_opt_ecn + stamp_curr_fut_ecn + stamp_curr_opt_ecn;

	total_ecn_charges = parseFloat(ecn_charge_brokerage)+parseFloat(ecn_charge_stt)+parseFloat(ecn_charge_etc)+parseFloat(ecn_charge_cc)+parseFloat(ecn_charge_dp)+parseFloat(ecn_charge_stax)+parseFloat(ecn_charge_sebi)+parseFloat(total_stamp_ecn);
	total_ecn_charges = parseFloat(total_ecn_charges).toFixed(2);

	ecn_net_profit = parseFloat(profit_intra_ecn) - parseFloat(total_ecn_charges);
	ecn_net_profit = parseFloat(ecn_net_profit).toFixed(2);

	total_stamp_ecn = parseFloat(total_stamp_ecn).toFixed(2);
	document.getElementById("ecn_total_gross").innerHTML = profit_intra_ecn;
	document.getElementsByClassName("equity_stamp")[0].innerHTML = total_stamp_ecn;
	document.getElementsByClassName("ecn_charge_brokerage")[0].innerHTML = ecn_charge_brokerage;
	document.getElementsByClassName("ecn_charge_etc")[0].innerHTML = ecn_charge_etc;
	document.getElementsByClassName("ecn_charge_dp")[0].innerHTML = ecn_charge_dp;
	document.getElementsByClassName("ecn_charge_cc")[0].innerHTML = ecn_charge_cc;
	document.getElementsByClassName("ecn_charge_stt")[0].innerHTML = ecn_charge_stt;
	document.getElementsByClassName("ecn_charge_stax")[0].innerHTML = ecn_charge_stax;
	document.getElementsByClassName("ecn_charge_sebi")[0].innerHTML = ecn_charge_sebi;
	// $(".ecn_charge_bse").text(ecn_charge_bse);

	// if (ecn_charge_bse) {
	// 	$(".bse-charge-helper").show();
	// 	$(".ecn_charge_bse").text(ecn_charge_bse);
	// }

	document.getElementById("ecn_bottom_charges").innerHTML = total_ecn_charges;
	document.getElementById("ecn_bottom_profit").innerHTML = ecn_net_profit;

	// alternate row class ECN
	var alternate_row_ecn = 1;
	elements = document.querySelector(".intra_ecn").querySelectorAll(".curr_opt_turnover");
	Array.prototype.forEach.call(elements, function (el, i) {
		if (alternate_row_ecn%2 == 0) {
			el.classList.add("grey-back");
		}
		alternate_row_ecn++;
	});

	ecn_modal.style.display = "block";
	body.style.overflow = "hidden";
};

comm_ecn_btn.onclick = function() {
	document.getElementsByClassName("comm_stamp")[0].querySelectorAll("input").value = 0;
	// document.getElementsByClassName("comm_table_total")[0].parentNode.removeChild(document.getElementsByClassName("comm_table_total")[0]);
	var total_intra_ecn = 0;
	var profit_intra_ecn = 0;
	var turn_fut_intra_ecn = 0;
	var turn_opt_intra_ecn = 0;
	var stamp_fut_intra_ecn = 0;
	var stamp_opt_intra_ecn = 0;
	var total_stamp_ecn = 0;
	var comm = "ALUMINI";

	var comm_ecn_charge_brokerage = 0;
	var comm_ecn_charge_etc = 0;
	var comm_ecn_charge_cc = 0;
	var comm_ecn_charge_stt = 0;
	var comm_ecn_charge_stax = 0;
	var comm_ecn_charge_sebi = 0;

	var total_comm_ecn_charges = 0;
	var comm_ecn_net_profit = 0;

	elements = document.querySelectorAll(".profit_comm_ecn");
	Array.prototype.forEach.call(elements, function (el, i) {
	  profit_intra_ecn += parseFloat(parseFloat(el.innerHTML).toFixed(2));
	});

	elements = document.querySelectorAll(".total_comm_ecn");
	Array.prototype.forEach.call(elements, function (el, i) {
	  total_intra_ecn += parseFloat(parseFloat(el.innerHTML).toFixed(2));
	});

	elements = document.querySelectorAll(".comm_ecn_brokerage");
	Array.prototype.forEach.call(elements, function (el, i) {
	  comm_ecn_charge_brokerage += parseFloat(parseFloat(el.innerHTML).toFixed(2));
	});

	elements = document.querySelectorAll(".comm_ecn_etc");
	Array.prototype.forEach.call(elements, function (el, i) {
	  comm_ecn_charge_etc += parseFloat(parseFloat(el.innerHTML).toFixed(2));
	});

	elements = document.querySelectorAll(".comm_ecn_cc");
	Array.prototype.forEach.call(elements, function (el, i) {
	  comm_ecn_charge_cc += parseFloat(parseFloat(el.innerHTML).toFixed(2));
	});

	elements = document.querySelectorAll(".comm_ecn_stt");
	Array.prototype.forEach.call(elements, function (el, i) {
	  comm_ecn_charge_stt += parseFloat(parseFloat(el.innerHTML).toFixed(2));
	});

	elements = document.querySelectorAll(".comm_ecn_stax");
	Array.prototype.forEach.call(elements, function (el, i) {
	  comm_ecn_charge_stax += parseFloat(parseFloat(el.innerHTML).toFixed(2));
	});

	elements = document.querySelectorAll(".comm_ecn_sebi");
	Array.prototype.forEach.call(elements, function (el, i) {
	  comm_ecn_charge_sebi += parseFloat(parseFloat(el.innerHTML).toFixed(2));
	});

	comm_ecn_charge_brokerage = parseFloat(comm_ecn_charge_brokerage).toFixed(2);
	comm_ecn_charge_etc = parseFloat(comm_ecn_charge_etc).toFixed(2);
	comm_ecn_charge_cc = parseFloat(comm_ecn_charge_cc).toFixed(2);
	comm_ecn_charge_stt = parseFloat(comm_ecn_charge_stt).toFixed(2);
	comm_ecn_charge_stax = parseFloat(comm_ecn_charge_stax).toFixed(2);
	comm_ecn_charge_sebi = parseFloat(comm_ecn_charge_sebi).toFixed(2);

	elements = document.querySelectorAll(".comm_ecn_fut_bt");
	Array.prototype.forEach.call(elements, function (el, i) {
	  turn_fut_intra_ecn += parseFloat(parseFloat(el.innerHTML).toFixed(2));
	});

	elements = document.querySelectorAll(".comm_ecn_opt_bt");
	Array.prototype.forEach.call(elements, function (el, i) {
	  turn_opt_intra_ecn += parseFloat(parseFloat(el.innerHTML).toFixed(2));
	});

	stamp_fut_intra_ecn = parseFloat(parseFloat(turn_fut_intra_ecn*0.00002).toFixed(2));
	stamp_opt_intra_ecn = parseFloat(parseFloat(turn_opt_intra_ecn*0.00003).toFixed(2));
	total_stamp_ecn = parseFloat(parseFloat(stamp_fut_intra_ecn) + parseFloat(stamp_opt_intra_ecn)).toFixed(2);

	total_comm_ecn_charges = parseFloat(comm_ecn_charge_brokerage)+parseFloat(comm_ecn_charge_stt)+parseFloat(comm_ecn_charge_etc)+parseFloat(comm_ecn_charge_cc)+parseFloat(comm_ecn_charge_stax)+parseFloat(comm_ecn_charge_sebi)+parseFloat(total_stamp_ecn);
	total_comm_ecn_charges = parseFloat(total_comm_ecn_charges).toFixed(2);

	comm_ecn_net_profit = parseFloat(profit_intra_ecn) - parseFloat(total_comm_ecn_charges);
	comm_ecn_net_profit = parseFloat(comm_ecn_net_profit).toFixed(2);



	document.getElementsByClassName("comm_stamp")[0].innerHTML = total_stamp_ecn;
	document.getElementsByClassName("comm_ecn_charge_brokerage")[0].innerHTML = comm_ecn_charge_brokerage;
	document.getElementsByClassName("comm_ecn_charge_etc")[0].innerHTML = comm_ecn_charge_etc;
	document.getElementsByClassName("comm_ecn_charge_cc")[0].innerHTML = comm_ecn_charge_cc;
	document.getElementsByClassName("comm_ecn_charge_stt")[0].innerHTML = comm_ecn_charge_stt;
	document.getElementsByClassName("comm_ecn_charge_stax")[0].innerHTML = comm_ecn_charge_stax;
	document.getElementsByClassName("comm_ecn_charge_sebi")[0].innerHTML = comm_ecn_charge_sebi;

	document.getElementById("comm_ecn_total_gross").innerHTML = profit_intra_ecn;
	document.getElementById("comm_ecn_bottom_charges").innerHTML = total_comm_ecn_charges;
	document.getElementById("comm_ecn_bottom_profit").innerHTML = comm_ecn_net_profit;

	comm_ecn_modal.style.display = "block";
	body.style.overflow = "hidden";
};


// When the user clicks on <span> (x), close the modal
ecn_span.onclick = function() {
	body.style.overflow = "auto";
	ecn_modal.style.display = "none";
};
comm_span.onclick = function() {
	body.style.overflow = "auto";
	comm_ecn_modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
(document).onclick = function(e) {
	if (e.target == document.getElementById("contract_note")) {
		ecn_modal.style.display = "none";
		body.style.overflow = "auto";
	}
	if (e.target == document.getElementById("commodity_contract_note")) {
		comm_ecn_modal.style.display = "none";
		body.style.overflow = "auto";
	}
};

// When ESC key is pressed
(document).onkeyup = function(e) {
     if (e.keyCode == 27) {
		ecn_modal.style.display = "none";
		comm_ecn_modal.style.display = "none";
		body.style.overflow = "auto";
    }
};
