
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button4 = {};	// @button
	var button3 = {};	// @button
	var button2 = {};	// @button
	var button1 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button4.click = function button4_click (event)// @startlock
	{// @endlock
		var campi = [];
		campi[0]="<D1CODAZIE>";
		campi[1]="<D1CODMENU>";
		
		var tipo = [];	
		tipo[0]="N";
		tipo[1]="S";		
		
		var valori = [];
		valori[0]=1;
		valori[1]="ANAG1";

		d1anagmenu=testsqlfactory.selectTable(campi, tipo, valori);
		sources.d1anagmenu.sync();
	};// @lock

	button3.click = function button3_click (event)// @startlock
	{// @endlock
		var campi = [];
		campi[0]="<D1CODAZIE>";
		campi[1]="<D1CODMENU>";
		
		var tipo = [];	
		tipo[0]="N";
		tipo[1]="S";		
		
		var valori = [];
		valori[0]=1;
		valori[1]="ANAG1";
		
		var ok=testsqlfactory.deleteTable(campi, tipo, valori);
        
        alert(ok);
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock

		var campi = [];
		campi[0]="<D1CODAZIE>";
		campi[1]="<D1CODMENU>";
		campi[2]="<D1DESMUBR>";

		
		
		var tipo = [];	
		tipo[0]="N";
		tipo[1]="S";
		tipo[2]="S";

		
		
		var valori = [];
		valori[0]=1;
		valori[1]="ANAG1";
		valori[2]="AGGIONAMENTO FATTO";

		
		var ok=testsqlfactory.updateTable(campi, tipo, valori);
        
        alert(ok);

	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		
		var campi = [];
		campi[0]="<D1CODAZIE>";
		campi[1]="<D1CODMENU>";
		campi[2]="<D1DESMUBR>";
		campi[3]="<D1DESMUDL>";
		campi[4]="<D1GENNOTE>";
		
		
		var tipo = [];	
		tipo[0]="N";
		tipo[1]="S";
		tipo[2]="S";
		tipo[3]="S";
		tipo[4]="S";
		
		
		var valori = [];
		valori[0]=1;
		valori[1]="ANAG1";
		valori[2]="PROVA DELL'APICE";
		valori[3]="CIAO 1";
		valori[4]="CIAO 2";
		
		var ok=testsqlfactory.insertTable(campi, tipo, valori);
        
        alert(ok);
		
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button4", "click", button4.click, "WAF");
	WAF.addListener("button3", "click", button3.click, "WAF");
	WAF.addListener("button2", "click", button2.click, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
// @endregion
};// @endlock
