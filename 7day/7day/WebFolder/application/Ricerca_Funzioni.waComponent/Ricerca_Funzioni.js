﻿
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Ricerca_Funzioni.';
	// @endregion// @endlock

	this.load = function (data) {// @lock
	
	console.log(data.userData);
	console.log(data.userData.modalita);
	
	modalita=data.userData.modalita;
	console.log(modalita);
	CheckDB();	
	
	
	
	// @region namespaceDeclaration// @startlock
	var search_d1codfunz = {};	// @textField
	var search_d1desfubr = {};	// @textField
	var dataGrid1 = {};	// @dataGrid
	var conferma = {};	// @buttonImage
	var Back = {};	// @buttonImage
	var Del_Mans = {};	// @buttonImage
	var Search_Anag = {};	// @buttonImage
	var Ins_upMans = {};	// @buttonImage
	// @endregion// @endlock

	// eventHandlers// @lock

	search_d1codfunz.keydown = function search_d1codfunz_keydown (event)// @startlock
	{// @endlock
		if (event.keyCode==13){
			if(modalita!="lettura"){
				$$(getHtmlId('Ins_upMans')).show();
			}
			Ricerca_Mans("anagrafica");
		}
	};// @lock
	

	search_d1codfunz.blur = function search_d1codfunz_blur (event)// @startlock
	{// @endlock
		if (this.getValue()!="" && isAllAlfaNum(this.getValue(),true)!=true){
			alert("questo campo non accetta caratteri speciali");
			this.setValue("");
			this.focus();
		}
	};// @lock
	

	search_d1desfubr.keydown = function search_d1desfubr_keydown (event)// @startlock
	{// @endlock
		if (event.keyCode==13){
			if(modalita!="lettura"){
				$$(getHtmlId('Ins_upMans')).show();
			}
		
			Ricerca_Mans("anagrafica");
		}
	};// @lock
	

	search_d1desfubr.blur = function search_d1desfubr_blur (event)// @startlock
	{// @endlock
		chkIndDescBlur(this);
	};// @lock
	

	dataGrid1.onRowClick = function dataGrid1_onRowClick (event)// @startlock
	{// @endlock
		if(modalita!="lettura"){
		 	$$(getHtmlId('Del_Mans')).show();
		 	
		}else{
		$$(getHtmlId('conferma')).show();
		}
	};// @lock

	dataGrid1.onRowDblClick = function dataGrid1_onRowDblClick (event)// @startlock
	{// @endlock
		if(modalita!="lettura"){
			data.userData=sources.mansioni3.getCurrentElement();
			$$("tabView3").selectTab(2);
			$$('component1').loadComponent({path: '/application/Dettaglio_Funzione.waComponent', userData:  { 'dati':data.userData,'modalita': 'update','cur':sources.mansioni3.getCurrentElement() }});
		}else{
			var connectionParams= myDb.connetti();
			mansioni = myDb.LetturaDb(connectionParams,'d1anagfunz');
			source.mansioni.sync();
			$$("tabView3").selectTab(2);
			var sel_elem=sources.mansioni3.getCurrentElement();		
			$$('d1desfubr').setValue(sel_elem.d1desfubr); 
			$$('component3').removeComponent();
		}
	
	};// @lock

	conferma.click = function conferma_click (event)// @startlock
	{// @endlock
		console.log(modalita);
		if(modalita=="lettura"){
			
			var connectionParams= myDb.connetti();
			mansioni = myDb.LetturaDb(connectionParams,'d1anagfunz');
			source.mansioni.sync();
			$$("tabView3").selectTab(2);
			var sel_elem=sources.mansioni3.getCurrentElement();		
			$$('d1desfubr').setValue(sel_elem.d1desfubr); 
			$$('component3').removeComponent();
			
		}else{
			document.location.href = "/Default.waPage/index.html";
		}
		
						  	
	};// @lock

	Back.click = function Back_click (event)// @startlock
	{// @endlock
		if(modalita=="lettura"){
			var connectionParams= myDb.connetti();
			mansioni = myDb.LetturaDb(connectionParams,'d1anagfunz');
			source.mansioni.sync();
			
			$$("tabView3").selectTab(2);
			$$('component3').removeComponent();
		}else{
			
				document.location.href = "/Default.waPage/index.html";
		}
		
		
	};// @lock

	Del_Mans.click = function Del_Mans_click (event)// @startlock
	{// @endlock
		var scelta=window.confirm("Eliminare l'elemento corrente?");
		
		if (scelta){
			var id=sources.mansioni3.getCurrentElement().d1codfunz;
			
			var connectionParams= myDb.connetti();
			
			mansioni3= myDb.delAsync({
	                'onSuccess': function (result) {
	                   console.log("ok");
	                   Ricerca_Mans("anagrafica");
	                },  
	                'onError': function (error) {
	                	CheckDB();
	                   alert('errore');
	                    console.log("errore");
	                },  
	                'params': [connectionParams,'d1anagfunz',id,0]
	             }); 
		            		
			Ricerca_Mans("anagrafica"); 
		} 
	};// @lock

	Search_Anag.click = function Search_Anag_click (event)// @startlock
	{// @endlock
		CheckDB();
		
		if(modalita!="lettura"){
			$$(getHtmlId('Ins_upMans')).show();
		}		
		
		Ricerca_Mans("anagrafica");    
	};// @lock

	Ins_upMans.click = function Ins_upMans_click (event)// @startlock
	{// @endlock
		data.userData='prova';
		$$("tabView3").selectTab(2);
		$$('component1').loadComponent({path: '/Webcomponent/Dettaglio_Funzione.waComponent', userData:  { 'dati':data.userData,'modalita': 'insert','search_id':$$(getHtmlId('search_d1codfunz')).getValue(),'search_desc':$$(getHtmlId('search_d1desfubr')).getValue() }});
		
	};// @lock
			
	// @region eventManager// @startlock
	WAF.addListener(this.id + "_search_d1codfunz", "keydown", search_d1codfunz.keydown, "WAF");
	WAF.addListener(this.id + "_search_d1desfubr", "keydown", search_d1desfubr.keydown, "WAF");
	WAF.addListener(this.id + "_search_d1codfunz", "blur", search_d1codfunz.blur, "WAF");
	WAF.addListener(this.id + "_search_d1desfubr", "blur", search_d1desfubr.blur, "WAF");
	WAF.addListener(this.id + "_dataGrid1", "onRowClick", dataGrid1.onRowClick, "WAF");
	WAF.addListener(this.id + "_dataGrid1", "onRowDblClick", dataGrid1.onRowDblClick, "WAF");
	WAF.addListener(this.id + "_conferma", "click", conferma.click, "WAF");
	WAF.addListener(this.id + "_Back", "click", Back.click, "WAF");
	WAF.addListener(this.id + "_Del_Mans", "click", Del_Mans.click, "WAF");
	WAF.addListener(this.id + "_Search_Anag", "click", Search_Anag.click, "WAF");
	WAF.addListener(this.id + "_Ins_upMans", "click", Ins_upMans.click, "WAF");
	// @endregion// @endlock

	};// @lock
	function Ricerca_Mans(tipo){
		if (tipo=="anagrafica"){
				var connectionParams= myDb.connetti();
				console.log($$(getHtmlId('search_d1codfunz')).getValue());
				console.log($$(getHtmlId('search_d1desfubr')).getValue());
				mansioni3 = myDb.search(connectionParams,'d1anagfunz','d1codfunz','d1desfubr',$$(getHtmlId('search_d1codfunz')).getValue(),$$(getHtmlId('search_d1desfubr')).getValue(),0,0,0,0,0,0,0,0);
				sources.mansioni3.sync();
			}
			sources.mansioni3.select(-1);	
	}
	
	function CheckDB(){
		try {
			myDb.testconnessione();
 		}
		catch(e) { // in case of error
    		alert("impostare i dati della connessione al database nel menu settings");
    		document.location.href = "/Default.waPage/index.html";
 		}
 	}
}// @startlock
return constructor;
})();// @endlock
