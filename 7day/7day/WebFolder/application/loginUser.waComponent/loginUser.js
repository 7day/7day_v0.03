
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'loginUser';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var login_btn = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	login_btn.click = function login_btn_click (event)// @startlock
	{// @endlock
        alert(testloginsystem.logind7($$(getHtmlId('user')).getValue(), $$(getHtmlId('password')).getValue()));
        $$('main').loadComponent({path: '/application/menuIndex.waComponent', userData: {myData: true}});
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_login_btn", "click", login_btn.click, "WAF");
	// @endregion// @endlock

		if(typeof data.userData === "undefined")
		{
			//alert("Accesso negato!");
			window.location='/index.waPage';
		}

	};// @lock


}// @startlock
return constructor;
})();// @endlock
