﻿/* Questo modulo servirà per eseguire le istruzioni SQL sul DB *//* Questa funzione ha il compito di reperire l'istruzione SQL da eseguire */exports.readSqlText = function readSqlText (sqlcod) {		var stmt = ds.SqlFactory.find("sqlcod == :1", sqlcod);	if(stmt!=null)	{	   return stmt.sqlstmt;	}	else	{		console.error("ERR: Istruzione SQL non trovata: ", sqlcod);		return "ERR: Istruzione SQL non trovata: "+ sqlcod	}	};/*     Questa funzione ha il compito di eseguire delle istruzioni di modifica    sul db (insert, update, delete) che sono memorizzate nella tabella    SqlFactory. E' da ottimizzare. Si potrebbero utilizzare degli array     associativi.*/exports.updateDB = function updateDB (stmt, connectionParams, campi, tipo, valori) {		try	{		debugger;						var dbconn = require('waf-mysql');		var utils = require('core/Utils');	    var connection= dbconn.connect(connectionParams);		    /* Preparo la query */	    	    for(i=0;i<campi.length;i++)	    {	    		    	if(tipo[i]=="S") //Stringa	    	{	    		stmt = utils.FindAndReplace(stmt,	    		                            campi[i],	    		                            utils.formatStringDb(valori[i]));	    	}	    	else if (tipo[i]=="N") //Numero	    	{	    	    stmt = utils.FindAndReplace(stmt,	    		                            campi[i],	    		                            utils.formatNumberDb(valori[i]));	    	}	    	else if(tipo[i]=="D") //Data	    	{	    		//Da implementare	    	}	    			    }	    	    	    connection.execute(stmt);	    connection.close();	    return "Aggiornamento eseguito";	}	catch(err)	{		        console.error("Aggiornamento fallito", err.message);		return err.message;	}}/*     Questa funzione ha il compito di eseguire delle istruzioni SQL per leggere    i dati dalle tabelle. Le istruzioni si troveranno sempre memorizzate nella    tabella SqlFactory */exports.selectDB = function selectDB (stmt, connectionParams, campi, tipo, valori) {		try	{		debugger;						var dbconn = require('waf-mysql');		var utils = require('core/Utils');	    var connection= dbconn.connect(connectionParams);	    var res, result;		    /* Preparo la query */	    	    for(i=0;i<campi.length;i++)	    {	    		    	if(tipo[i]=="S") //Stringa	    	{	    		stmt = utils.FindAndReplace(stmt,	    		                            campi[i],	    		                            utils.formatStringDb(valori[i]));	    	}	    	else if (tipo[i]=="N") //Numero	    	{	    	    stmt = utils.FindAndReplace(stmt,	    		                            campi[i],	    		                            utils.formatNumberDb(valori[i]));	    	}	    	else if(tipo[i]=="D") //Data	    	{	    		//Da implementare	    	}	    			    }	    	    	    	    res = connection.execute(stmt);		result = res.getAllRows();	    connection.close();	    	    return result;	}	catch(err)	{		        console.error("Errore in lettura tabella", err.message);		return null;	}		}