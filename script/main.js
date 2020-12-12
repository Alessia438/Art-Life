var articleInfo = [
	{
		'issueName': 'Art and society',
		'issueFile': 'Issue1.html#coverPage1',
		 'articles': [
	 		{
				'articleName': 'How art and culture can help us rethink time',
				'articleFile': 'Issue1.html#article1',	
				'htmlName': 'art1-bbc1.html'
			},
			 {
				'articleName': 'How to create an iconic image',
				'articleFile': 'Issue1.html#article2',
				 'htmlName': 'art2-bbc2.html'
			},
			 {
				'articleName': 'The death of the artist and the birth of the creative entrepreneur',
				'articleFile': 'Issue1.html#article3',	
				 'htmlName': 'art3-Atl.html'
			},
			 {
				'articleName': 'HWelcome to Airspace',
				'articleFile': 'Issue1.html#article4',	
				'htmlName': 'art4-verge.html'
			},
			 {
				'articleName': 'Style is an algorithm',
				'articleFile': 'Issue1.html#article5',	
				'htmlName': 'art5-vox.html'
			}
		 ]
	},
	{
		'issueName': 'Art and Covid-19',
		'issueFile': 'Issue2.html#coverPage2',
		 'articles': [
	 		{
				'articleName': 'In the Midst of COVID-19, Chinese Galleries Adapt and Persevere',
				'articleFile': 'Issue2.html#article1',
				'htmlName': 'art1-artsy.html'
			},
			 {
				'articleName': 'How 9 artists are living and creating during self-isolation',
				'articleFile': 'Issue2.html#article2',
				 'htmlName': 'art2-cnn.html'
			},
			 {
				'articleName': 'With Museums Empty, Security Experts Hope Thieves Stay Home, Too',
				'articleFile': 'Issue2.html#article3',
				 'htmlName': 'art3-nyt1.html'
			},
			 {
				'articleName': 'Bye bye, blockbusters: can the art world adapt to Covid-19?',
				'articleFile': 'Issue2.html#article4',
				 'htmlName': 'art4-guardian.html'
			},
			 {
				'articleName': 'Now Virtual and in Video, Museum Websites Shake Off the Dust',
				'articleFile': 'Issue2.html#article5',
				 'htmlName': 'art5-nyt2.html'
			}
		 ]
	},
	{
		'issueName': 'Art and Ecology',
		'issueFile': 'Issue3.html#coverPage3',
		 'articles': [
	 		{
				'articleName': 'An artist set out to paint climate change. She ended up on a journey through grief',
				'articleFile': 'Issue3.html#article1',	
				'htmlName': 'art1-latimes1.html'
			},
			 {
				'articleName': 'Can Art Help Save the Planet?',
				'articleFile': 'Issue3.html#article2',	
				 'htmlName': 'art2-nytimes1.html'
			},
			 {
				'articleName': 'ENVIRONMENTAL ART: PROPOSALS FOR A FUTURE WORLD',
				'articleFile': 'Issue3.html#article3',
				 'htmlName': 'art3-aia.html'
			},
			 {
				'articleName': 'Fabrics With Powerful Stories to Tell',
				'articleFile': 'Issue3.html#article4',	
				 'htmlName': 'art4-nytimes2.html'
			},
			 {
				'articleName': 'PHOTOS: New "Washed Ashore" exhibit in Little Rock showcases wildly colorful art made from plastic trash collected at beaches',
				'articleFile': 'Issue3.html#article5',
				 'htmlName': 'art5-arkansas.html'
			}
		 ]
	},
	{
		'issueName': 'Issue 4',
		'issueFile': 'Issue4.html#coverPage4',
		 'articles': []
	}
]

function fillTheGaps(){
	//forloop tra tutti gli oggetti dell'array articleInfo (contiene tutte le info rilevanti sui nostri issue e articoli)
	for (var n=0; n<articleInfo.length; n++){
		//check se la sezione issue è vuota, quindi se non abbiamo articoli e l'issue non deve essere mostrato
		if (articleInfo[n].articles.length>0){
			//creato bottone dell' issue corrente
			var issueBut = document.createElement('a');
			issueBut.setAttribute('class', 'buttonIssue');
			issueBut.setAttribute('href', 'https://alessia438.github.io/cookbook-cakes/'+articleInfo[n].issueFile);
			issueBut.innerHTML = articleInfo[n].issueName;
			//check se siamo nell'issue corrente
			if (window.location.href.includes(articleInfo[n].issueFile.split('#')[0])){
				var curIssue = "issue"+(n+1);
				//operazioni da fare per ogni oggetto dell'array articles contenuto nell'oggetto issue corrente dell'array articleInfo
				for (var i=1; i<=articleInfo[n].articles.length;i++){
					//riempimento bottoni degli articoli
					var articleBut = document.createElement('a');
					articleBut.setAttribute('class', 'buttonArticle');
					var curArticle = "article"+i;
					articleBut.setAttribute('onclick', 'changeArticle("'+curArticle+'", "'+curIssue+'")');
					articleBut.innerHTML = articleInfo[n].articles[i-1].articleName;
					document.getElementById('changeArguments').appendChild(articleBut);
					//riempimento iFrame
					var divIFrame = document.createElement('div');
					divIFrame.className = curArticle + ' article';
					//divIFrame.className = 'article';
					divIFrame.id = 'article'+(n*5+i);
					var iFrame = document.createElement('iframe');
					iFrame.src = 'articles/'+curIssue+'_art'+i+'/'+articleInfo[n].articles[i-1].htmlName;
					iFrame.name = 'iframe'+(n*5+i);
					iFrame.id = 'iframe'+(n*5+i);
					iFrame.setAttribute('frameborder', '0');
					iFrame.setAttribute('border', '0');
					iFrame.setAttribute('cellspacing', '0');
					divIFrame.appendChild(iFrame);
					document.getElementById(curIssue).appendChild(divIFrame);
				}
				//aggiunto attributo onclick al bottone dell'issue corrente solo a questo punto perchè va aggiunto solo sul bottone dell'issue mostrato all'utente
				issueBut.setAttribute('onclick', 'changeIssue("'+curIssue+'")');
			}
			//appeso bottone dell'issue corrente
			document.getElementById('DynamicGeneratorPowerButton2000').appendChild(issueBut);
		}
	}
}

function myFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {x.className += " responsive";} 
	else {x.className = "topnav";}
    }

function changeCSS(cssFile) {
    	for (var i = 0; i < document.getElementsByTagName("iframe").length; i++) {
		if (i=== 1){cssFile='../'+cssFile;}
		var frameHead = document.getElementsByTagName("iframe")[i].contentWindow.document.head,
    		allLinks = frameHead.getElementsByTagName("link"),
    		found=false;
    		for (var l=0; l<allLinks.length; l++) {if (allLinks[l].rel == "stylesheet") {found=true; allLinks[l].href = cssFile; break;}}
    		if (found === false) {
			var newlink = document.createElement("link");
			newlink.rel = "stylesheet"; 
			newlink.type = "text/css";
			newlink.href = cssFile;
			frameHead.appendChild(newlink);
		}
		if (cssFile.includes('Bodoni.css') && i>0){manageBodoni(i);}
		//else if (cssFile.includes('Liberty.css') && i>0){liberty(i);}
	}
}

function manageBodoni(iframeN){
	var elArray = ['h1','subtitle', 'byline', 'img', 'publicationDate'];
	var contentDiv = document.createElement('div');
	contentDiv.setAttribute('id', 'heading');
	for (var el of elArray){
		if (el == 'h1' || el=='img'){
			var elToMove = document.getElementsByTagName("iframe")[iframeN].contentWindow.document.body.getElementsByTagName(el)[0];
			contentDiv.appendChild(elToMove);
		}
		else{
			//var found = False;
			//if (el=='publicationDate'){found = true;}
			var elToMove = document.getElementsByTagName("iframe")[iframeN].contentWindow.document.body.getElementsByClassName(el);
			while (elToMove.length>0) {contentDiv.appendChild(elToMove[0]);}
			//if (found === true){var impresso = document.createElement('p'); impresso.innerHTML = 'Impresso co' tipi bodoniani'; contentDiv.insertBefore(impresso, document.getElementsByTagName(el)[0]);}
		}
	}
	document.getElementsByTagName("iframe")[iframeN].contentWindow.document.body.insertBefore(contentDiv, document.getElementsByTagName("iframe")[iframeN].contentWindow.document.body.children[0])
}

/*
function liberty(iframeN){
	var totImgs = document.getElementsByTagName("img");
	if totImgs.length== 1{}
	else if totImgs.length== 1{}
	else{}
}
*/

function changeIssue(issueN){
	document.getElementById(issueN).children[0].style.display = "block";
	for (var i=1; i<document.getElementById(issueN).children.length; i++) {document.getElementById(issueN).children[i].style.display = "none";}
        var originButton = document.getElementById("Origin");
	if (originButton.hasAttribute("href")) {originButton.removeAttribute("href");}
}

function getLinkOrigin(currentArticle, myOrigin) {
	var myFrame = currentArticle.children[0],
	elmnt = myFrame.contentWindow.document.head,
	myMeta = elmnt.getElementsByTagName("meta");
		for (var l = 0; l < myMeta.length; l++) {
			if (myMeta[l].name == "DC.identifier" && myMeta[l].scheme == "DCTERMS.URI") {
				myOrigin.href = myMeta[l].content;
				myOrigin.target = "_blank";
			}
		}
}

function changeArticleCommon(c, articleNum, myOrigin, isCover, strToSplit, issueNum){
	c[0].style.display = "none";
	for (var i=1; i<c.length; i++){
		if ("article" + i === articleNum){
			c[i].style.display = "block";
			getLinkOrigin(c[i], myOrigin);
		}
		else {c[i].style.display = "none";}
	}
	if (isCover) {top.window.location.href =  window.location.href.split(strToSplit)[0]+issueNum[0].toUpperCase()+issueNum.slice(1)+'.html#'+articleNum;}
	else{window.location.href =  window.location.href.split(strToSplit)[0]+'#'+articleNum;}	
}

function changeArticle(articleNum, issueNum){
	var c = document.getElementById(issueNum).children,
	myOrigin = document.getElementById("Origin");
	changeArticleCommon(c, articleNum, myOrigin, false, '#', issueNum);
}

function changeArticleCover(articleNum, issueNum){
	var c = window.parent.document.getElementById(issueNum).children,
	myOrigin = window.parent.document.getElementById("Origin");
	changeArticleCommon(c, articleNum, myOrigin, true, 'cover_pages/cover_page'+issueNum.charAt(issueNum.length-1)+'.html', issueNum);
}

function prevArticle() {
 	var articles = document.getElementsByClassName("article");
 	
 	for (var i = 1; i < articles.length; i++) { //i= 1 perché non voglio considerare il primo articolo
 		var frame = articles[i],
 			style = window.getComputedStyle(frame),
			displayValue = style.getPropertyValue('display'); //queste ultime due righe sono equivalenti a var displayValue = window.getComputedStyle(frame, null).display;
		if (displayValue === "block") {
			if (!(frame.classList.contains('article1'))) {
				frame.style.display = "none";
				var articleNow = articles[i-1];
				articleNow.style.display = "block";
				window.location.href =  window.location.href.split('#')[0]+'#'+articleNow.id;
				/* var myFrame = articleNow.children[0];
				var curIssue = articleNow.parentElement;
				var x = curIssue.children[i-1]; */
				var myOrigin = document.getElementById("Origin");
				getLinkOrigin(articleNow, myOrigin); // se scegliamo di definire la variabile myframe in questa funzione va sostituito articleNow con myFrame come parametro input della funzione getLinkOrigin
			}
		}
	}	
}

function nextArticle() {
	var articles = document.getElementsByClassName("article");

	for (var i = articles.length-2; i >= 0; i--) { //articles length = 6, ma noi non vogliamo considerare l'ultimo quindi mettiamo articles.lenght - 2 (con -1 considera anche l'ultimo perché length - 1 = 5 e articles[5] è l'ultimo articolo)
		var frame = articles[i],
    		style = window.getComputedStyle(frame),
			displayValue = style.getPropertyValue('display');
		if (displayValue === 'block') {
			if (!(frame.classList.contains('article5'))) { //IMPORTANTE: qua ho messo che la classe dell'ultimo articolo è "article5"
				frame.style.display='none';
				articles[i+1].style.display = 'block';
				window.location.href =  window.location.href.split('#')[0]+'#'+articles[i+1].id;
				var myOrigin = document.getElementById("Origin");
				getLinkOrigin(articles[i+1], myOrigin);
			}
		}
	}
}


function metadataViewer (issueN) { 
	var myList = document.getElementById("listIssue");  
	var myFrames = document.getElementById(issueN).getElementsByTagName("iframe");

    	for (var n = 1; n < myFrames.length; n++) { 
		var sc = document.createElement("script");
		sc.setAttribute('src', '../../script/main.js');
		myFrames[n].contentWindow.document.head.appendChild(sc);
		
	    	var elmnt = myFrames[n].contentWindow.document.body;
	    	var allIframeElements = elmnt.getElementsByTagName("*");
	    	for (var e = 0; e < allIframeElements.length; e++) {
	    		var x = allIframeElements[e].tagName; //ritorna una stringa che rappresenta il nome del tag in maiuscolo	    		
	    		var elementsWithSameTag = elmnt.querySelectorAll('[id^=' + CSS.escape(x) + ']'); //^ matches the start; the querySelectorAll method returns a static NodeList with elements matching the specified group of selectors; css.escape per assicurarsi che il valore sia codificato correttamente per l'uso in un'espressione CSS
	    		var len = elementsWithSameTag.length;
	    		allIframeElements[e].setAttribute("id", x+"-"+(len+1)+"-"+n);
	    	}		    	 
			// get span tag 
			var spans = Array.prototype.slice.call(elmnt.getElementsByTagName("span"));

			//first check: if the category already exist
			for (var span of spans) {
				// creating the variable for the parent
				var options = ["I", "A", "Q", "SPAN", "EM", "STRONG", "B", "CITE"];
				if (options.indexOf(span.parentNode.tagName) > -1) {
					var inlineParent = span.parentNode;
					var spanParent = inlineParent.parentNode;
				}
				else {var spanParent = span.parentNode;}
				var curCategory = span.className;  	//person
				var categoryFound = false;				
				var instanceFound = false;
				for (var a=0; a<myList.children.length; a++){ 	//a questo punto specificare se ci sono più classi
					if (curCategory === myList.children[a].className) { // invece di myList.children[a].id
						categoryFound = true;
						var matchedLi = myList.children[a];
					}
				}
				if (categoryFound === false) {
					createCategoryLi(curCategory, myList);
					var matchedLi = myList.getElementsByClassName(curCategory)[0];
				}
				else{
					for (c=0; c<matchedLi.children.length; c++){
						if (span.innerText.toLowerCase().includes(matchedLi.children[c].className.toLowerCase()) || matchedLi.children[c].className.toLowerCase().includes(span.innerText.toLowerCase())) { // partial matching
							instanceFound = true;
							var matchedUl = matchedLi.children[c];
						}
					}
				}
				if (instanceFound === false) {
					createInstanceUl(span.innerText, matchedLi, myList);
					var newUl = myList.getElementsByClassName(span.innerText)[0];
				}
				else {
					var newUl = matchedUl;
				}
				createOccurrenceLi(span, spanParent, span.innerText, newUl, n, myFrames, myList);	
			}

			// get time tag 
			var times = Array.prototype.slice.call(elmnt.getElementsByTagName("time"));
			//first check: if the category already exist
			for (var t=0; t<times.length; t++){
				// creating variable for parent
				if (options.indexOf(times[t].parentNode.tagName) > -1) { //options is used out of scope
					var inlineParent = times[t].parentNode;
					var timeParent = inlineParent.parentNode;
				}
				else {var timeParent = times[t].parentNode;}
				var myInstanceFound = false;
				if (t===0 && n===1) {createCategoryLi("TIME", myList);}
				else{
					for (r=0; r<myList.getElementsByClassName('TIME')[0].children.length; r++){  //document.getElementById('Time').children.length
						if ((times[t].dateTime === myList.getElementsByClassName('TIME')[0].children[r].className)) {  // qualcosa qui non funziona, forse, invece di id, class.. (createInstanceUl risulta avere parent null)   //document.getElementById('Time').children[r].className
							myInstanceFound = true;
							var matchedTimeUl = myList.getElementsByClassName('TIME')[0].children[r];  //document.getElementById('Time').children[r];
						}
					}
				}
				if (myInstanceFound === false) {
					createInstanceUl(times[t].dateTime, myList.getElementsByClassName('TIME')[0], myList);  //secondo parametro: document.getElementById('Time')
					var newUl = myList.getElementsByClassName(times[t].dateTime)[0];
				}
				else{var newUl = matchedTimeUl;}
				createOccurrenceLi(times[t], timeParent, times[t].dateTime, newUl, n, myFrames, myList);
			}
	}
}

function createCategoryLi(category, myList) {
	var newLi = document.createElement('li');
	newLi.setAttribute('class', category); // invece di ('id', category+i)
	//1. add showLiChildren
	newLi.setAttribute('onClick', "showLiChildren('"+myList.id+"', '"+category+"')");
	newLi.setAttribute('data-position', myList.children.length); //attributo per ordinare in base all'ordine di apparizione
	newLi.style.listStyleType = 'none';
	var liNode = document.createTextNode(category);
	newLi.appendChild(liNode);
	myList.appendChild(newLi);
}

function createInstanceUl(instance, parentLi, myList) {
	var newUl = document.createElement('ul');
	newUl.setAttribute('class', instance);
	newUl.setAttribute('onClick', "showUlChildren('"+myList.id+"', '"+instance+"', event)");
	newUl.setAttribute('data-position', parentLi.children.length);
	newUl.style.display = 'none';
	var ulNode = document.createTextNode(instance);
	newUl.appendChild(ulNode);
	var wikiLi = document.createElement('li'); //creiamo un elemento li che è il bottone cliccabile per arriavre alla pagina Wikipedia di instance
	wikiLi.setAttribute('id', 'wikiButton');
	var link = document.createElement('a'); //creiamo un elemento 'a'
	var normalizedInstance = instance.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); //NFD Unicode Normal Form: scompone i grafemi in una combinazione di grafemi semplici per esempio e piu accento. la Regex invece è un range per eliminare gli accenti, quindi da u ad f.
	var hrefValue = 'http://en.wikipedia.org/wiki/'+normalizedInstance;  //costruiamo il link    
	//link.setAttribute('href', hrefValue); //aggiungiamo a "link", figlio di "wikiLi", l'url costruito //da reintegrare se le altre due opzioni non vanno
	//link.setAttribute('target', '_blank'); //da reintegrare se le altre due opzioni non vanno
	link.setAttribute('onClick', 'wikiLink("'+hrefValue+'", event)'); //alternativa alla funzione inline, eventListener
	var wikiText = document.createTextNode("wikipedia");
	link.appendChild(wikiText);
	wikiLi.appendChild(link);
	newUl.appendChild(wikiLi);
	parentLi.appendChild(newUl);	
}

function wikiLink(newUrl, event) { 
	window.open(newUrl, "_blank"); 
	event.stopPropagation();
} 

function createOccurrenceLi(occurrence, occurrenceParent, occurrenceValue, newUl, n, myFrames, myList) {	//occurrenceValue è instance nella funzione precedente
	//se newUl.childNodes[0].nodeValue è in uppercase, ma occurrenceValue non lo è, allora metti in minuscolo newUl.childNodes[0].nodeValue, tranne la prima lettera:
	var ulTextNode = newUl.childNodes[0].nodeValue;
	if (ulTextNode === ulTextNode.toUpperCase() && occurrenceValue !== occurrenceValue.toUpperCase()) {
		if (/\s/g.test(ulTextNode)) {
			var words = ulTextNode.split(' ');  
	    	var CapitalizedWords = [];  
	    	words.forEach(element => {  
	        	CapitalizedWords.push(element[0].toUpperCase() + element.slice(1, element.length).toLowerCase());  
	    	});  
	    	newUlTextNode = CapitalizedWords.join(' ');  
    	}
    	else {newUlTextNode = ulTextNode[0].toUpperCase()+ulTextNode.slice(1).toLowerCase()} //codice ale per maiuscola uppercase in una parola singola e resto lowercase
    	newUl.childNodes[0].nodeValue = newUlTextNode;
	}


	var occurrenceLi = document.createElement('li');

	//recuperare il parent per scriverlo in instanceNode come punto di riferimento per l'user
	var parentTag = occurrenceParent.id.match(/([^-]+)/)[1];
	if (parentTag === "P") {parentTag = "paragraph"}
	else if (parentTag.startsWith("H")) {parentTag = "title"}
	else if (parentTag === "FIGCAPTION") {parentTag = "figure caption"}
	var parentNum = occurrenceParent.id.match(/-([^-]+)-/)[1];  
	var parentTagAndNum = (parentTag+" "+parentNum).toLowerCase();
	var instanceNode = document.createTextNode("article "+n+", "+parentTagAndNum+": "); //aggiungere stringa del titolo dell'articolo?
	
	occurrenceLi.style.display = 'none';
	occurrenceLi.appendChild(instanceNode);
	
	//numero di li il cui span o elemento time corrispondente ha lo stesso parent di quello corrente
	var pos = 0;
	// recuperare innerText dello span sibling (però NON VA BENE PER TIME!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!)
	for (var ulchild of newUl.children){
		if (occurrenceParent.id === ulchild.getAttribute('data-parent') && occurrenceValue === ulchild.getAttribute('data-inner') ){pos++;}
	}
	occurrenceLi.setAttribute('data-parent', occurrenceParent.id);	
	occurrenceLi.setAttribute('data-inner', occurrenceValue);

	var citNode = document.createTextNode('"'+ parsing(occurrence.innerText, occurrenceParent, pos)+'"'); //vedi se fare textNode o innerHTML
	occurrenceLi.appendChild(citNode); //appena tolto dal commento

	var occurrenceId = newUl.childNodes[0].nodeValue+"-"+(newUl.children.length+1);
	occurrence.setAttribute('id', occurrenceId);
	occurrenceLi.setAttribute('onclick', "highlight('"+occurrenceId+"', '"+myFrames[n].id+"', event)"); // per richiamare la funzione che evidenza il metadato nel testo dell'articolo quando si clicca sul <li> corrispondente nel metadata viewer

	newUl.appendChild(occurrenceLi);
	occurrence.setAttribute('onclick', "goToMetadata('"+myList.id+"', '"+newUl.childNodes[0].nodeValue+"')");
}
					
//from text keywords to metadata viewer
function goToMetadata(curListId, ulClass){
	var e = window.parent.document.getElementById(curListId).getElementsByClassName(ulClass)[0];
	e.style.display = 'block';
	var f = e.children;
	f[0].style.display = 'inline-block;'
	for (var g=1; g<f.length; g++){f[g].style.display = 'block';}
	e.style.backgroundColor = "#FFDAB9";
	e.scrollIntoView(true);

	// animazione scomparsa colore background dopo 10 secondi:
	var backgroundAnimation = window.parent.document.createElement('style'); // può andare in contrsto con la funzione che cambia lo stile dell'articolo?
    backgroundAnimation.type = 'text/css';

	var keyFramePrefixes = ["-webkit-", "-o-", "-moz-", ""];
	var keyFrames = [];
	var textNode = null;

	for (var i in keyFramePrefixes) {
		keyFrames = '@'+keyFramePrefixes[i]+'keyframes background-fade {'+
		'80% { background-color: #FFDAB9; }'+
		'100% { background-color: transparent; }'+
		'}';
		var rules = window.parent.document.createTextNode(keyFrames);
	}

	backgroundAnimation.appendChild(rules);

	window.parent.document.getElementsByTagName("head")[0].appendChild(backgroundAnimation);

	e.style.animation = 'background-fade 10s forwards';
	e.style.WebkitAnimation = 'background-fade 10s forwards';
    e.style.OAnimation = 'background-fade 10s forwards';
    e.style.MozAnimation = 'background-fade 10s forwards';

    setTimeout(function() {
    	e.style.backgroundColor = 'transparent';
    	e.style.WebkitAnimationName = '';
    	e.style.animation = '';
        e.style.OAnimation = '';
        e.style.MozAnimation = '';
        window.parent.document.getElementsByTagName("head")[0].removeChild(backgroundAnimation);
    	}, 10000); // we have to reset the name of animation otherwise another call to background-fade wont have any effect
	
     event.stopPropagation();
}
//attribuisci effetto di hover da specificare nel css tipo con un background color 

function showLiChildren(myListId, instanceId){
	var e = document.getElementById(myListId).getElementsByClassName(instanceId)[0].children;
	if(e[0].style.display == 'block') {
		for (var child of e) {
			child.style.display = 'none';
			var f = child.children;
			for (var g of f) { g.style.display = 'none'; }
		}
	}
	else{
		for (var child of e) {
			child.style.display = 'block';
			var f = child.children;
			/*
			for (var g of f){
				g.style.display = 'none'; 
			}
			*/

			// non mostrare i figli <li> degli <ul> tranne il primo figlio di ogni <ul>, cioè il link a wikipedia
			for (var g = 0; g < f.length; g++) {
				if (g === 0) {f[g].style.display = "inline-block";}
				else {f[g].style.display = 'none';}
			}

		}
	}
}

function showUlChildren(myListId, instanceId, event){
	var e = document.getElementById(myListId).getElementsByClassName(instanceId)[0].children;
	if(e[1].style.display == 'block'){
		//for (var child of e){
		for (var i=1; i<e.length; i++){
			e[i].style.display = 'none';
		}
	}
	else{
		//for (var child of e){
		for (var i=1; i<e.length; i++){
			e[i].style.display = 'block';
		}		
		/*for (var b = 0; b < e.length; b++) {
			if (b === 0) {e[b].style.display = "inline-block";}
			else {e[b].style.display = 'none';}
		}
		*/
	}
	event.stopPropagation();
}

function parsing(instance, parent, numIstanza){
	var container = parent.innerText;
	if (instance.includes("(") && instance.includes(")")){ //modificate le parentesi con le corrispettive espressioni in regexp
		var cleanInstance = instance.replace(/\(/g, "\\S*\(").replace(/\)/g, "\\S*\)");
	} 
	else{
		var cleanInstance = instance;
	}
	var e = new RegExp('(\\S+\\s){0,5}\\S*' + cleanInstance + '(\\,?\\s+\\S+){0,5}', 'ig');
  	var res = container.match(e);
  	return res[numIstanza];
}

// evidenziare i metadati nel testo dell'articolo
// serve anche cambiare articolo se i metadati puntano all'articolo non in block al momento? sì
// manca la scomparsa dello stile onscroll e onclick su qualunque altro tasto
function highlight(spanId, iFrameN, event) {
	//cambiare articolo da mattere in display:block se il metadato cliccato è in un articolo diverso rispetto a quello corrente
	var curIFrameDiv = document.getElementById(iFrameN).parentNode;
	var curIssueDivs = curIFrameDiv.parentNode.children;
	var originButton = document.getElementById("Origin");	
	changeArticleCommon(curIssueDivs, curIFrameDiv.classList[0], originButton, false, '#'); //in questo modo supponiamo che né il div target né quello di provenienza sia quello di una cover

	//removeHighligth(iFrameN);
	var elmnt = document.getElementById(iFrameN).contentWindow.document;
	var curInstance = elmnt.getElementById(spanId);
	curInstance.setAttribute("name", "onView");
	curInstance.style.backgroundColor = "#ffff00";
	curInstance.scrollIntoView(true);
	// sostituire curInstance.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"}); ?? In alcuni browser non va
	//metodi 1. creare nuva variabile in cui salvare spanId e iFrame in cui cercarlo per cancellare lo style 2. modificare i parametri della funzione removeHighlight in ciascun punto (tutti i metadati e gli altri onclick di interesse)
	//manca anche il cambio articolo se triggerato rispettivo metadato (appare sul titolo e poi si sposta al punto preciso)


	// animazione scomparsa colore background dopo 10 secondi:
	var cssAnimation = elmnt.createElement('style'); // può andare in contrsto con la funzione che cambia lo stile dell'articolo?
    cssAnimation.type = 'text/css';

	var keyFramePrefixes = ["-webkit-", "-o-", "-moz-", ""];
	var keyFrames = [];
	var textNode = null;

	for (var i in keyFramePrefixes) {
		keyFrames = '@'+keyFramePrefixes[i]+'keyframes background-fade {'+
		'80% { background-color: #ffff00; }'+
		'100% { background-color: transparent; }'+
		'}';
		var rules = elmnt.createTextNode(keyFrames);
	}

	cssAnimation.appendChild(rules);

	elmnt.getElementsByTagName("head")[0].appendChild(cssAnimation);

	curInstance.style.animation = 'background-fade 10s forwards';
	curInstance.style.WebkitAnimation = 'background-fade 10s forwards';
    curInstance.style.OAnimation = 'background-fade 10s forwards';
    curInstance.style.MozAnimation = 'background-fade 10s forwards';

    setTimeout(function() {
    	curInstance.style.backgroundColor = 'transparent';
    	curInstance.style.WebkitAnimationName = '';
    	curInstance.style.animation = '';
        curInstance.style.OAnimation = '';
        curInstance.style.MozAnimation = '';
        elmnt.getElementsByTagName("head")[0].removeChild(cssAnimation);
    	}, 10000); // we have to reset the name of animation otherwise another call to background-fade wont have any effect
	
     event.stopPropagation();
}

function sortOccurrences(keyToSearch){
	var elements = document.getElementById("metadata").children;
	//for (var i = 1; i < elements.length; i++){   //sostituito 2 con elements.length 
		sortCategory(document.getElementById("listIssue"), keyToSearch);
		for (var n = 0; n < document.getElementById("listIssue").children.length; n++){
			sortCategory(document.getElementById("listIssue").getElementsByClassName(document.getElementById("listIssue").children[n].className)[0], keyToSearch);
		}
	//}
}

function sortByFreq() {
	//var elements = document.getElementById("metadata").children;
	//parte 1: assegnare l'attributo data-frequency a ogni li e ogni ul
	//for (var i = 1; i < elements.length; i++) { //entriamo in ognuna delle liste
		var curListCategories = document.getElementById('listIssue').children; //<li> di ogni lista
		for (var g = 0; g < curListCategories.length; g++) {
			var curListCategoriesUl = curListCategories[g].children; //ul di ogni li
			curListCategories[g].setAttribute('data-frequency', curListCategoriesUl.length); //creiamo attributo data-frequency per ogni li, che ha come valore la lunghezza della lista dei suoi figli
			for (k = 0; k < curListCategoriesUl.length; k++) { //entriamo in ogni ul
				curListCategoriesUl[k].setAttribute('data-frequency', curListCategoriesUl[k].children.length); //assegnamo l'attributo data-frequency anche a ogni ul, il cui valore è il totale del figli di quell'ul
			}
		}

		//parte 2: ordinare secondo il valore dell'attributo
		sortCategory(document.getElementById("listIssue"), 'data-frequency');
		var numCategories = document.getElementById("listIssue").childNodes.length;
		while (numCategories--) { document.getElementById("listIssue").appendChild(document.getElementById("listIssue").childNodes[numCategories]);}
		
		for (var n = 0; n < document.getElementById("listIssue").children.length; n++){
			sortCategory(document.getElementById("listIssue").getElementsByClassName(document.getElementById("listIssue").children[n].className)[0], 'data-frequency');
			var numIstances = document.getElementById("listIssue").children[n].children.length;
			while (numIstances--) { document.getElementById("listIssue").children[n].appendChild(document.getElementById("listIssue").children[n].children[numIstances]); }
		}
	//}

}

function sortCategory(list, searchKey) {
  var i, switching, b, shouldSwitch;
  switching = true;
  while (switching) {
  	switching = false;
  	b = list.children;
  	for (i = 0; i < (b.length - 1); i++) {
      		shouldSwitch = false;
		if (!isNaN(b[i].getAttribute(searchKey))){var myStr = parseInt(b[i].getAttribute(searchKey))>parseInt(b[i+1].getAttribute(searchKey));}
		else{var myStr = b[i].getAttribute(searchKey).toLowerCase() >b[i+1].getAttribute(searchKey).toLowerCase();}
      		if (myStr) {shouldSwitch = true; break;}
    	}
    	if (shouldSwitch) {b[i].parentNode.insertBefore(b[i + 1], b[i]); switching = true;}
  }
}

function showMetaContent(){
	if (document.getElementById('contentToShow').style.display === 'none'){document.getElementById('contentToShow').style.display = 'block';}
	else{document.getElementById('contentToShow').style.display = 'none';}
}


function findOrigin(){
	if(window.location.href.includes('#article')){
		if(document.getElementById("Origin").href.length <1){
			getLinkOrigin(document.getElementById(window.location.href.slice(window.location.href.indexOf('#')+1, window.location.href.length)), document.getElementById("Origin"));
		}
	}
}


/*
function removeHighligth(iFrameN){
	var isOnView = document.getElementById(iFrameN).contentWindow.document.getElementsByName("onView");
    	if(isOnView){
        	isOnView.removeAttribute("name");
    	}
}
*/

/*
//ULTIMA DELLE QUESTIONI DA RISOLVERE: da scrivere dopo la riga 307, per il problema delle doppie classi tipo class = "person artist"
if (curCategory.includes(" ")) { //se c'è uno spazio in teoria vuol dire che c'è più di una classe
   	var multipleCats = curCategory.split(" "); // si crea un array con le categorie, tipo [person, artist]
    for (var c = 0; c < multipleCats.length; c++) {
        if (multipleCats[c] != "") {var curCategory+c = multipleCats[c]} // creiamo diverse variabili?
    }
}


*/

// body della funzione parsing!!
//var container = parent.innerHTML.replace(/<[^>]*>/gi, ' ') //or gi:To perform a global, case-insensitive search
	//.replace(/\s{2,}/gi, ' ')
	//.trim();
/*	
	// se riusciamo a trovare un modo di far funzionare la riga 401, allora dalla 385 alla 400 sono inutili
	if (numIstanza != 0) {
		// vedere come gestire le posizioni 0
		var occorrenzeArray = [];
		var pos = container.indexOf(span);
		occorrenzeArray.push(pos);
		// calcolo del numero di occorrenze
		c = 1;
		while (c < numero di occorrenze) {
			pos = container.indexOf(span, pos+1);
			occorrenzeArray.push(pos);
			c++;
		}
		//da rivedere
		var posIstanzaCorrente = occorrenzeArray[numIstanza];
	}

	//versione con stringa di regexp che non va
	var regExp = eval("/(\\S+\\s){0,5}\\S*" + span + "\\*(\\S+\\s+) {0,5}/g");
	var snippetArray = container.match(regExp);
	return snippetArray[numIstanza];
*/
