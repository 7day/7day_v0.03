﻿/*	     Questo modulo conterrà le funzioni di utilità dell'applicativo*/exports.formatStringDb = function formatStringDb (valore) {			if(valore.length>0)	{	  valore = valore.replace(/[']/g,"''");	  return "'"+valore+"'";	}	else	{	  return "null";		}};exports.formatNumberDb = function formatNumberDb (valore) {   /* Verificare se devo restituire 0 quando è NULL?*/	     	return valore;	};/* Verificare il metodo di replace */exports.FindAndReplace = function FindAndReplace (str, findStr, replaceStr) {	var strArr=str.split(findStr);	var resultStr=strArr.join(replaceStr);		return (resultStr);		}