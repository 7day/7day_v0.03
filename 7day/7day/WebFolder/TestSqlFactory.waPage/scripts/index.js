
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button5 = {};	// @button
	var button4 = {};	// @button
	var button3 = {};	// @button
	var button2 = {};	// @button
	var button1 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button5.click = function button5_click (event)// @startlock
	{// @endlock
		
      $$('d1codmenu').setValue("");
	  $$('d1desmubr').setValue("");
	  $$('d1desmudl').setValue("");
	  $$('d1gennote').setValue("");		
		
	};// @lock

	button4.click = function button4_click (event)// @startlock
	{// @endlock
		var campi = [];
		campi[0]=new Array("<D1CODAZIE>","N",1);
		campi[1]=new Array("<D1CODMENU>","S",$$('d1codmenu').getValue());

        var ok=testsqlfactory.selectTable(campi);
        if(typeof(ok)=="string")
         alert(ok);
        else
        {
       		d1anagmenu=ok;
		    sources.d1anagmenu.sync(); 	
        } 

	};// @lock

	button3.click = function button3_click (event)// @startlock
	{// @endlock
		var campi = [];
		campi[0]=new Array("<D1CODAZIE>","N",1);
		campi[1]=new Array("<D1CODMENU>","S",$$('d1codmenu').getValue());
		
		var ok=testsqlfactory.deleteTable(campi);
        
        alert(ok);
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock

		var campi = [];
		campi[0]=new Array("<D1CODAZIE>","N",1);
		campi[1]=new Array("<D1CODMENU>","S",$$('d1codmenu').getValue());
		campi[2]=new Array("<D1DESMUBR>","S",$$('d1desmubr').getValue());
		campi[3]=new Array("<D1DESMUDL>","S",$$('d1desmudl').getValue());
		campi[4]=new Array("<D1GENNOTE>","S",$$('d1gennote').getValue());

		
		var ok=testsqlfactory.updateTable(campi);
        
        alert(ok);

	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		
		var campi = [];
		campi[0]=new Array("<D1CODAZIE>","N",1);
		campi[1]=new Array("<D1CODMENU>","S",$$('d1codmenu').getValue());
		campi[2]=new Array("<D1DESMUBR>","S",$$('d1desmubr').getValue());
		campi[3]=new Array("<D1DESMUDL>","S",$$('d1desmudl').getValue());
		campi[4]=new Array("<D1GENNOTE>","S",$$('d1gennote').getValue());
		
			
		var ok=testsqlfactory.insertTable(campi);
        
        alert(ok);
		
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button5", "click", button5.click, "WAF");
	WAF.addListener("button4", "click", button4.click, "WAF");
	WAF.addListener("button3", "click", button3.click, "WAF");
	WAF.addListener("button2", "click", button2.click, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
// @endregion
};// @endlock
