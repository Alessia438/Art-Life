

function changeCSS(cssFile, cssLinkIndex) {
	/* create new link */

	var newlink = document.createElement("link");
	newlink.rel = "stylesheet"; 
  	newlink.type = "text/css";
	newlink.href = cssFile;
	
	/* case 1: external html */
	
	var linksArray = document.head.getElementsByTagName("link");
	var firstCount = 0;
    	for (var l = 0; l < linksArray.length; l++) {
    		if (linksArray[l].rel == "stylesheet") {
 			firstCount += 1;
    			linksArray[l].href = cssFile;
    		}
    	}
    	if (firstCount == 0) {
    		document.head.appendChild(newlink);
    	}
	
	/* case 2: internal html */
	
	var myFrames = document.getElementsByTagName("iframe");
    	for (var i = 0; i < myFrames.length; i++) {
    		var n = i+1;
    		var myFrame = document.getElementById("iframe"+ n);
    		var elmnt = myFrame.contentWindow.document.head;
    		var mylinks = elmnt.getElementsByTagName("link");
    		var count = 0;
    		for (var l = 0; l < mylinks.length; l++) {
    			if (mylinks[l].rel == "stylesheet") {
    				count += 1;
    				mylinks[l].href = cssFile;
    			}
    		}
    		if (count == 0) {
    			elmnt.appendChild(newlink);
    		}
    	}
    
    /* aggiunta per cambiare il css anche nei singoli iframe    */
    
    /* frames[i].document.head.repleaceChild(newLink);
    n = i+1
    frames['frame'+n].document.head.children[1].replace(newlink, oldlink);   */
	
    /*	var doc = document.getElementsByTagName("iframe");
	for (var i = 0; i < doc.length; i++) {
		var c = doc[i].contentWindow;
		var iframeOldlink = c.document.getElementsByTagName("link").item(cssLinkIndex);
		var d = c.document.getElementsByTagName("head");
		d[0].replaceChild(newlink, iframeOldlink);
    	}  */
}


function changeIssue(issueN){
	
	  /*  identificare l'issue da mostrare   */
	
	if ('issue1' === issueN) {
		var x = document.getElementById('issue1');
		var y = document.getElementById('issue2');
	} 
	else {
		var x = document.getElementById('issue2');
		var y = document.getElementById('issue1');
	}

	  /*  azioni sull'issue da mostrare e quelli da non mostrare   */
	
	var xChildren = x.children;     /*  i div che hanno class coverPage e articleN   */
	var totLength = xChildren.length;     /* lunghezza della struttura dati dei figli di x  */
	
	x.style.display = "block";   /* issue da mostrare  */
	xChildren[0].style.display = "block";   /* cover da mostrare  */
	
	y.style.display = "none";  /* issue da non mostrare  */
	for (var i=0; i<y.children.length; i++) {
		y.children[i].style.display = "none";
	}
	
	var oldArticles = document.getElementById("changeArguments").children;  /* per cambiare il contenuto delle funzioni onclick degli articoli  */
	
	for (var i=1; i<totLength; i++) {
		xChildren[i].style.display = "none";    /* articoli da non mostrare  */
		
		var newArticle = document.createElement("a");    /* creazione del nuovo tag  */
		newArticle.setAttribute("class", "buttonArticle");   /* creazione del nuovo tag, set classe  */
		newArticle.setAttribute("onclick", "changeArticle('article"  + i + "', '" + issueN + "')");   /* creazione del nuovo tag, set onclick attibute  */

		var myFrame = xChildren[i].children[0];
		var myMeta = myFrame.contentWindow.document.head.getElementsByTagName("meta");
			for (var l = 0; l < myMeta.length; l++) {
				if (myMeta[l].name == "DC.title") {
					newArticle.innerHTML = myMeta[l].content;
				}
			}
		
		document.getElementById("changeArguments").replaceChild(newArticle, oldArticles[i-1]);
	}
	


    /*	for (var n=1; n<totLength; n++) {
		var newArticle = document.createElement("a");
		newArticle.setAttribute("class", "buttonArticle");
	    	newArticle.setAttribute("onclick", "changeArticle('article"  + n + "', '" + issueN + "')");
		
	    newArticle.innerHTML = 'article'+n;

	    document.getElementById("changeArguments").replaceChild(newArticle, oldArticles[n-1]);
    	}   */
	
        var originButton = document.getElementById("Origin");
	if (originButton.hasAttribute("href")) {
		originButton.removeAttribute("href");
	}
	// mostrare solo la lista di metadati dell'issue in block
	for (var m=0; m<document.getElementById('metadata').children.length; m++){
		if (document.getElementById('metadata').children[m].id === "list"+issueN.charAt(0).toUpperCase()+issueN.slice(1)){
			document.getElementById('metadata').children[m].style.display = "block";
		}
		else{
			document.getElementById('metadata').children[m].style.display = "none";
		}
	}
}


/*
function changeArticle(articleNum, issueNum){
	var c = document.getElementById(issueNum).children;
	c[0].style.display = "none";
	for (var i=1; i<c.length; i++) {
		if ("article" + i === articleNum) {
			c[i].style.display = "block";
			
			// TORNARE AL FILE SORGENTE   
			var myFrame = c[i].children[0];
			var elmnt = myFrame.contentWindow.document.head;
			var myMeta = elmnt.getElementsByTagName("meta");
				for (var l = 0; l < myMeta.length; l++) {
					if (myMeta[l].name == "DC.identifier" && myMeta[l].scheme == "DCTERMS.URI") {
						var myOrigin = document.getElementById("Origin");
						myOrigin.href = myMeta[l].content;
						myOrigin.target = "_blank";
    					}
    				}
		}
		else {
			c[i].style.display = "none";
		}
	}	
}
*/
function getLinkOrigin(currentArticle, myOrigin) {
	/* TORNARE AL FILE SORGENTE   */

	var myFrame = currentArticle.children[0];
	var elmnt = myFrame.contentWindow.document.head;
	var myMeta = elmnt.getElementsByTagName("meta");
		for (var l = 0; l < myMeta.length; l++) {
			if (myMeta[l].name == "DC.identifier" && myMeta[l].scheme == "DCTERMS.URI") {
				myOrigin.href = myMeta[l].content;
				myOrigin.target = "_blank";
			}
		}
	
}

function changeArticleCommon(c, articleNum, myOrigin){
	c[0].style.display = "none";
	for (var i=1; i<c.length; i++){
		if ("article" + i === articleNum){
			c[i].style.display = "block";
			getLinkOrigin(c[i], myOrigin);
		}
		else {
			c[i].style.display = "none";
		}
	}
}

function changeArticle(articleNum, issueNum){
	var c = document.getElementById(issueNum).children;
	var myOrigin = document.getElementById("Origin");
	changeArticleCommon(c, articleNum, myOrigin);
}

function changeArticleCover(articleNum, issueNum){
	var c = window.parent.document.getElementById(issueNum).children;
	var myOrigin = window.parent.document.getElementById("Origin");
	changeArticleCommon(c, articleNum, myOrigin);
}


/*	
function changeArticleCover(articleNum, issueNum) {
	var c = window.parent.document.getElementById(issueNum).children;
	c[0].style.display = "none";
	for (var i=1; i<=3; i++) {
		if ("article" + i === articleNum) {
			c[i].style.display = "block";
		}
		else {
			c[i].style.display = "none";
		}
	}
}
*/	



function prevArticle() {
 	var articles = document.getElementsByClassName("article");
 	
 	for (var i = 1; i < articles.length; i++) { /* i= 1 perché non voglio considerare il primo articolo */
 		var frame = articles[i],
 			style = window.getComputedStyle(frame),
			displayValue = style.getPropertyValue('display'); /* queste ultime due righe sono equivalenti a var displayValue = window.getComputedStyle(frame, null).display; */
		if (displayValue === "block") {
			if (!(frame.classList.contains('article1'))) {
				frame.style.display = "none";
				var articleNow = articles[i-1];
				articleNow.style.display = "block";
				/* var myFrame = articleNow.children[0];
				var curIssue = articleNow.parentElement;
				var x = curIssue.children[i-1]; */
				var myOrigin = document.getElementById("Origin");
				getLinkOrigin(articleNow, myOrigin); /* se scegliamo di definire la variabile myframe in questa funzione va sostituito articleNow con myFrame come parametro input della funzione getLinkOrigin */
			}
		}
	}	
}



function nextArticle() {
	var articles = document.getElementsByClassName("article");

	for (var i = articles.length-2; i >= 0; i--) { /* articles length = 6, ma noi non vogliamo considerare l'ultimo quindi mettiamo articles.lenght - 2 (con -1 considera anche l'ultimo perché lenght - 1 = 5 e articles[5] è l'ultimo articolo) */
		var frame = articles[i],
    		style = window.getComputedStyle(frame),
			displayValue = style.getPropertyValue('display');
		if (displayValue === 'block') {
			if (!(frame.classList.contains('article3'))) { /* IMPORTANTE: qua ho messo che la classe dell'ultimo articolo è "article3" ma nel sito finale sarà ARTICLE5*/
				frame.style.display='none';
				articles[i+1].style.display = 'block';
				var myOrigin = document.getElementById("Origin");
				getLinkOrigin(articles[i+1], myOrigin);
			}
		}
	}
}





function metadataViewer () {  // ricordarsi di lowercase e altre cose di scrittura + separare 1. più classi in una 2. più tag innestati + funzioni block/hide sulle singole liste

	// enter each issue 

	var elements = document.getElementById('content').children;
	
	var counter = 0;
	for (var i = 0; i < elements.length; i++) {
		if (elements[i].id.includes('issue')){
			counter++;
		}
	}
	
	for (var i = 1; i <= counter; i++) {
		// find the reference list 

		var myList = document.getElementById("listIssue"+ i);  
		
		// enter each iFrame of the issue 

		//var myIssue = document.getElementById("issue"+ i);
		//var myFrames = myIssue.getElementsByTagName("iframe");
		var myFrames = document.getElementById("issue"+ i).getElementsByTagName("iframe"); //accorpamento delle due variabili precedenti

    	for (var n = 1; n < myFrames.length; n++) {       
	   		//var curFrame = myFrames[n];
	    	//var elmnt = curFrame.contentWindow.document.body;
	    	var elmnt = myFrames[n].contentWindow.document.body;  
	    	

	    	/*aggiungere un id ad ogni elemento del body tipo = "h1-1-n" */
	    	var allIframeElements = elmnt.getElementsByTagName("*");
	    	//for (let element of allIframeElements) {
	    	for (var e = 0; e < allIframeElements.length; e++) {
	    		var x = allIframeElements[e].tagName; //ritorna una stringa che rappresenta il nome del tag in maiuscolo, in realtà x è inutile ai fini di creare un id unico, però può servirci quando dobbiamo dare un punto di riferimento nel documento all'utente
	    		
	    		var elementsWithSameTag = elmnt.querySelectorAll('[id^=' + CSS.escape(x) + ']'); //^ matches the start; the querySelectorAll method returns a static NodeList representing a list of elements that match the specified group of selectors; css.escape per assicurarsi che il valore sia codificato correttamente per l'uso in un'espressione CSS.
	    		var len = elementsWithSameTag.length;

	    		allIframeElements[e].setAttribute("id", x+"-"+(len+1)+"-"+n);		    				    		
				//allIframeElements[e].setAttribute("id", x+"-"+e+"-"+n); // alternativa: element.id = "";
	    	}
	    	// esempio: art.2 dell'issue 2, i primi 5 elementi del body sono: <section id="SECTION-1-2">, <h1 id="H1-1-2">, <img id="IMG-1-2">, <p id="P-1-2">, <p id="p-2-2">...		    	 
			
			/*
			// get time tag 
			var times = Array.prototype.slice.call(elmnt.getElementsByTagName("time"));
		
			for (var t=0; t<times.length; t++){
				var myInstanceFound = false;
				if (t===0){
					var new_Li = document.createElement('li');
					new_Li.setAttribute('id', "Time"); //decidere come chiamarlo
					var li_Node = document.createTextNode("Time");
					new_Li.appendChild(li_Node);
					myList.appendChild(new_Li);
				}
				else{
					for (c=0; c<myList.getElementById('Time').children.length; c++){
						if ((times[t].dateTime === myList.getElementById('Time').children[c].id)) { //invece di (span.innerHTML === matchedLi.children[c].id) --> il metodo .includes serve per il partial matching
							myInstanceFound = true;
							var matchedUl = myList.getElementById('Time').children[c];
						}
					}
				}
			
				if (myInstanceFound === false) {
					var newUl = document.createElement('ul');
					newUl.setAttribute('id', times[t].dateTime);
					var ulNode = document.createTextNode(times[t].dateTime);
					newUl.appendChild(ulNode);
					myList.getElementById('Time').appendChild(newUl); //matched e newLi
				}
				else{
					var newUl = matchedUl;
				}
				// document.getElementById("writeHere").innerHTML = newUl.id+', ';

				var instanceLi = document.createElement('li');

				//recuperare il parent per scriverlo in instanceNode come punto di riferimento per l'user
				var parentTag = span.parentNode.id.match(/([^-]+)/)[1];
				var parentNum = span.parentNode.id.match(/-([^-]+)-/)[1];  
				var parentTagAndNum = (parentTag+" "+parentNum).toLowerCase();

				var instanceNode = document.createTextNode("article "+n+", "+parentTagAndNum+": "); //aggiungere stringa del titolo dell'articolo?
				
				instanceLi.appendChild(instanceNode);
				instanceLi.setAttribute('onclick', "highlight('"+spanId+"', 'iFrame"+n+"')"); // per richiamare la funzione che evidenza il metadato nel testo dell'articolo quando si clicca sul <li> corrispondente nel metadata viewer

				newUl.appendChild(instanceLi);
			}
			*/
		
			// get span tag 
			var spans = Array.prototype.slice.call(elmnt.getElementsByTagName("span"));
			for (var span of spans) {
				var curCategory = span.className;  	//person
				var categoryFound = false;				
				var instanceFound = false;
				for (var a=0; a<myList.children.length; a++){ 	//a questo punto specificare se ci sono più classi
					if (curCategory === myList.children[a].id) {
						categoryFound = true;
						var matchedLi = myList.children[a];
					}
				}
				if (categoryFound === false) {
					var newLi = document.createElement('li');
					newLi.setAttribute('id', curCategory);
					//1. add showLiChildren
					newLi.setAttribute('onClick', "showLiChildren('"+curCategory+"')");
					var liNode = document.createTextNode(curCategory);
					newLi.appendChild(liNode);
					myList.appendChild(newLi);
					var matchedLi = newLi;
				}
				else{
					for (c=0; c<matchedLi.children.length; c++){
						if (span.innerHTML.includes(matchedLi.children[c].id) || matchedLi.children[c].id.includes(span.innerHTML)) { //invece di (span.innerHTML === matchedLi.children[c].id) --> il metodo .includes serve per il partial matching
							instanceFound = true;
							var matchedUl = matchedLi.children[c];
						}
					}
				}
			
				if (instanceFound === false) {
					var newUl = document.createElement('ul');
					newUl.setAttribute('id', span.innerHTML);
					//2. add showUlChildren and display none
					newUl.setAttribute('onClick', "showUlChildren('"+span.innerHTML+"', event)");
					newUl.style.display = 'none';
					var ulNode = document.createTextNode(span.innerHTML);
					newUl.appendChild(ulNode);
					matchedLi.appendChild(newUl); //matched e newLi
				}
				else{
					var newUl = matchedUl;
				}
				// document.getElementById("writeHere").innerHTML = newUl.id+', ';

				var instanceLi = document.createElement('li');

				//recuperare il parent per scriverlo in instanceNode come punto di riferimento per l'user
				var parentTag = span.parentNode.id.match(/([^-]+)/)[1];
				if (parentTag === "P") {parentTag = "paragraph";}
				else if (parentTag.startsWith("H")) {parentTag = "title";}
				else if (parentTag === "FIGCAPTION") {parentTag = "figure caption";}
				var parentNum = span.parentNode.id.match(/-([^-]+)-/)[1];  
				var parentTagAndNum = (parentTag+" "+parentNum).toLowerCase();

				var instanceNode = document.createTextNode("article "+n+", "+parentTagAndNum+": "); //aggiungere stringa del titolo dell'articolo?
				
				//3. display none
				instanceLi.style.display = 'none';
				instanceLi.appendChild(instanceNode);
				
				/*
				//numero di li il cui span corrispondente ha lo stesso parent di quello corrente
				var pos = 0;
				for (var ulchild of newUl.children){
					if span.parent.id === ulchild.data-parent{ // controllare risultato di === False
						pos++;
					}
				}
				instanceLi.setAttribute('data-parent', span.parent.id);
				*/

				//var citNode = document.createTextNode('" '+ parsing(span.innerHTML, span.parentNode)+'"'); //vedi se fare textNode o innerHTML
				//instanceLi.appendChild(citNode);


				var spanId = span.innerHTML+(newUl.children.length+1);
				span.setAttribute('id', spanId);

				instanceLi.setAttribute('onclick', "highlight('"+spanId+"', '"+myFrames[n].id+"')"); // per richiamare la funzione che evidenza il metadato nel testo dell'articolo quando si clicca sul <li> corrispondente nel metadata viewer

				newUl.appendChild(instanceLi);
				
				//from text keywords to metadata viewer
				span.setAttribute('onclick', "goToMetadata('"+span.innerHTML+"')");
			}
		}
	}

}


//from text keywords to metadata viewer
function goToMetadata(instanceId){
	var e = document.getElementById(instanceId); //mettendo in block l'ul vanno in block anche tutti i figli
	e.style.display = 'block';
	var f = e.children;
	for (var g of f){
		g.style.display = 'block';
	}
}
//attribuisci effetto di hover da specificare nel css tipo con un background color


//4. da rimettere in commento
function showLiChildren(instanceId){
	var e = document.getElementById(instanceId).children;
	if(e[0].style.display == 'block'){
		for (var child of e){
			child.style.display = 'none';
			var f = child.children;
			for (var g of f){
				g.style.display = 'none';
			}
		}
	}
	else{
		for (var child of e){
			child.style.display = 'block';
			var f = child.children;
			for (var g of f){
				g.style.display = 'none';
			}
		}
	}
}


//5. da rimettere in commento
function showUlChildren(instanceId, event){
	var e = document.getElementById(instanceId).children;
	if(e[0].style.display == 'block'){
		for (var child of e){
			child.style.display = 'none';
		}
	}
	else{
		for (var child of e){
			child.style.display = 'block';
		}
	}
	event.stopPropagation();
}


/*
function parsing(span, parent, numIstanza){
	var container = parent.replace(/<[^>]*>/gi, ' ') 
	.replace(/\s{2,}/gi, ' ')
	.trim();
	
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

	//versione che funziona
	var e = new RegExp('(\\S+\\s){0,5}\\S*' + span + '(\\s+\\S+){0,5}', 'ig');
  	var res = container.match(e);
  	return res[numIstanza];
 



}


PRIMA PROVA

let removeTags = originalString.replace(/<[^>]*>/g, ' ');

const originalString = (string);

const removeTags = 
originalString.replace(/<[^>]*>/g, ' ');   !!or gi:To perform a global, case-insensitive search
originalString.replace(/\s{2,}/g, ' ');
originalString.trim();

console.log(removeTags);

let removeTags = originalString.replace(/<[^>]*>/g, ' '); 



<script> 

const originalString = ('This is a paragraph.<span>'); 
const removeTags = originalString.replace(/<[^>]*>/gi, ' ') 
.replace(/\s{2,}/gi, ' ')
.trim(); 

console.log(removeTags); 
</script>
*/


// evidenziare i metadati nel testo dell'articolo
// serve anche cambiare articolo se i metadati puntano all'articolo non in block al momento?
// manca la scomparsa dello stile onscroll e onclick su qualunque altro tasto
function highlight(spanId, iFrameN) {
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
    	curInstance.style.backgroundColor = transparent;
    	curInstance.style.WebkitAnimationName = '';
    	curInstance.style.animation = '';
        curInstance.style.OAnimation = '';
        curInstance.style.MozAnimation = '';
    	}, 10000); // we have to reset the name of animation otherwise another call to background-fade wont have any effect
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
