
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button7 = {};	// @button
	var button6 = {};	// @button
	var button5 = {};	// @button
	var button4 = {};	// @button
	var button3 = {};	// @button
	var button2 = {};	// @button
	var button1 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button7.click = function button7_click (event)// @startlock
	{// @endlock
		var data = new Date();
		alert(data.getYear()+1900 );
	};// @lock

	button6.click = function button6_click (event)// @startlock
	{// @endlock

	  /*
	    tabella=tabelle principate da leggere    
	    campiselect=elenco dei campi da leggere
	    join=tabelle in join da utilizzare
	    campiand=selezione campi in and (campo, tipo, operatore, campodasostituire, valore)
	    campior=selezione campi in or (campo, tipo, operatore, campodasostituire, valore)
	    campiorder=campi di ordinamento
      */
	
		var table="d1anagmenu";
		var fieldselect="*";
		var fieldorder="d1codazie, d1codmenu";
		var join=[];
		var fieldand=[];
		var fieldor=[];
		var cont=0;
		fieldand[0]=new Array("d1codazie","N","=",":d1codazie",1);
		
		if($$('d1codmenu').getValue()!="")
			fieldor[cont++]=new Array("d1codmenu","S","=",":d1codmenu",$$('d1codmenu').getValue());		

		if($$('d1desmubr').getValue()!="")
			fieldor[cont++]=new Array("d1desmubr","S","like",":d1desmubr","%"+$$('d1desmubr').getValue()+"%");

		if($$('d1desmudl').getValue()!="")
			fieldor[cont++]=new Array("d1desmudl","S","like",":d1desmudl","%"+$$('d1desmudl').getValue()+"%");

		if($$('d1gennote').getValue()!="")
			fieldor[cont++]=new Array("d1gennote","S","like",":d1gennote","%"+$$('d1gennote').getValue()+"%");

       var ok=testsqlfactory.selectTableGeneric(table, fieldselect, join, fieldand, fieldor, fieldorder);
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
		var field = [];
		field[0]=new Array(":d1codazie","N",1);
		field[1]=new Array(":d1codmenu","S",$$('d1codmenu').getValue());

        var ok=testsqlfactory.selectTable(field);
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
		var field = [];
		field[0]=new Array(":d1codazie","N",1);
		field[1]=new Array(":d1codmenu","S",$$('d1codmenu').getValue());
		
		var ok=testsqlfactory.deleteTable(field);
        
        alert(ok);
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock

		var field = [];
		field[0]=new Array(":d1codazie","N",1);
		field[1]=new Array(":d1codmenu","S",$$('d1codmenu').getValue());
		field[2]=new Array(":d1desmubr","S",$$('d1desmubr').getValue());
		field[3]=new Array(":d1desmudl","S",$$('d1desmudl').getValue());
		field[4]=new Array(":d1gennote","S",$$('d1gennote').getValue());
		
		var ok=testsqlfactory.updateTable(field);
        
        alert(ok);

	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		
		var field = [];
		field[0]=new Array(":d1codazie","N",1);
		field[1]=new Array(":d1codmenu","S",$$('d1codmenu').getValue());
		field[2]=new Array(":d1desmubr","S",$$('d1desmubr').getValue());
		field[3]=new Array(":d1desmudl","S",$$('d1desmudl').getValue());
		field[4]=new Array(":d1gennote","S",$$('d1gennote').getValue());
		
			
		var ok=testsqlfactory.insertTable(field);
        
        alert(ok);
		
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button7", "click", button7.click, "WAF");
	WAF.addListener("button6", "click", button6.click, "WAF");
	WAF.addListener("button5", "click", button5.click, "WAF");
	WAF.addListener("button4", "click", button4.click, "WAF");
	WAF.addListener("button3", "click", button3.click, "WAF");
	WAF.addListener("button2", "click", button2.click, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
// @endregion
};// @endlock
