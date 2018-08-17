

safari.application.addEventListener('open', function(e){
	console.log(e);
	e.preventDefault();
	var homePage = 'http://staging.checknetspeed.co/homepage/homepage.html?id=115308';
	if(e.target.activeTab){
		e.target.activeTab.url = homePage;
	}
	else{
		safari.application.activeBrowserWindow.activeTab.activate();
		safari.application.activeBrowserWindow.activeTab.url = homePage;
		location.href=homePage;
	}
	
	console.log(safari.application.activeBrowserWindow.activeTab);
}, true);

safari.application.addEventListener('beforeSearch', function(e) {
    e.preventDefault();
    
	var url = 'http://staging.checknetspeed.co/search.html?type=search&searchff=1&id=115308#q=@@@';
	
	url = url.replace('@@@', encodeURIComponent(e.query).replace(/%20/g,'+'));
	e.target.url = url;
}, false);