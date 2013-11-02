
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button6 = {};	// @button
	var button5 = {};	// @button
	var button4 = {};	// @button
	var button3 = {};	// @button
	var button2 = {};	// @button
	var button1 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button6.click = function button6_click (event)// @startlock
	{// @endlock

	  /*
        tabella=tabelle principate da leggere
        campislect=elenco dei campi da leggere
        join=tabelle in join da utilizzare
        campiand=selezione campi in and (campo, tipo, operatore, valore1)
        campior=selezione campi in or (campo, tipo, operatore, valore1)
        campiorder=campi di ordinamento
      */
	
		var tabella="d1anagmenu";
		var campiselect="*";
		var campiorder="d1codazie, d1codmenu";
		var join=[];
		var campiand=[];
		var campior=[];
		var cont=0;
		campiand[0]=new Array("d1codazie","N","=",1);
		
		if($$('d1codmenu').getValue()!="")
			campior[cont++]=new Array("d1codmenu","S","=",$$('d1codmenu').getValue());		

		if($$('d1desmubr').getValue()!="")
			campior[cont++]=new Array("d1desmubr","S","like","%"+$$('d1desmubr').getValue()+"%");

		if($$('d1desmudl').getValue()!="")
			campior[cont++]=new Array("d1desmudl","S","like","%"+$$('d1desmudl').getValue()+"%");

		if($$('d1gennote').getValue()!="")
			campior[cont++]=new Array("d1gennote","S","like","%"+$$('d1gennote').getValue()+"%");

       var ok=testsqlfactory.selectTableGeneric(tabella, campiselect, join, campiand, campior, campiorder);
        if(typeof(ok)=="string")
         alert(ok);
        else
        {
       		d1anagmenu=ok;
		    sources.d1anagmenu.sync(); 	
        } 

	};// @lock

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
	WAF.addListener("button6", "click", button6.click, "WAF");
	WAF.addListener("button5", "click", button5.click, "WAF");
	WAF.addListener("button4", "click", button4.click, "WAF");
	WAF.addListener("button3", "click", button3.click, "WAF");
	WAF.addListener("button2", "click", button2.click, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
// @endregion
};// @endlock
