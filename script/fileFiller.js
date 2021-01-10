function fillTheGaps(){
	for (var n=0; n<articleInfo.length; n++){
		if (articleInfo[n].articles.length>0){
			var issueBut = document.createElement('a');
			issueBut.setAttribute('class', 'buttonIssue');
			issueBut.setAttribute('href', 'https://alessia438.github.io/cookbook-cakes/'+articleInfo[n].issueFile);
			issueBut.innerHTML = articleInfo[n].issueName;
			if (window.location.href.includes(articleInfo[n].issueFile.split('#')[0])){
				var curIssue = "issue"+(n+1);
				for (var i=1; i<=articleInfo[n].articles.length;i++){
					var articleBut = document.createElement('a');
					articleBut.setAttribute('class', 'buttonArticle');
					var curArticle = "article"+i;
					articleBut.setAttribute('onclick', 'changeArticle("'+curArticle+'", "'+curIssue+'")');
					articleBut.innerHTML = articleInfo[n].articles[i-1].articleName;
					document.getElementById('changeArguments').appendChild(articleBut);
					var divIFrame = document.createElement('div');
					divIFrame.className = curArticle + ' article';
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
				issueBut.setAttribute('onclick', 'changeIssue("'+curIssue+'")');
			}
			document.getElementById('DynamicGeneratorPowerButton2000').appendChild(issueBut);
		}
	}
}

function fillCover(){
	if (articleInfo[3].articles.length>0){
		for (var i=0; i<articleInfo[3].articles.length;i++){
			var para= document.createElement('p');
			para.setAttribute('onclick', 'changeArticleCover("article1", "issue4")');
			para.innerHTML = articleInfo[3].articles[i].articleName;
			document.getElementById('coverText').appendChild(para);
		}
	}
}

function fillIndex(){
	if (articleInfo[3].articles.length>0){
		
		//RIEMPIMENTO ISSUE
		var issue = document.createElement('div');
		issue.className='issue-block';
			var portrait = document.createElement('div');
			portrait.className='cutPortrait issueTable';
				var pic = document.createElement('img');
				pic.src='articles/issue4_art1/'+articleInfo[3].articles[0].imgName;
			portrait.appendChild(pic);
			var a = document.createElement('a');
			a.href = 'Issue4.html#coverPage4';
				var tBlock = document.createElement('div');
				tBlock.className='t-block';
					var head= document.createElement('h3');
					head.innerHTML='ISSUE N°4';
				tBlock.appendChild(head);
			a.appendChild(tBlock);
		issue.appendChild(portrait);
		issue.appendChild(a);
		document.getElementsByClassName('row')[0].appendChild(issue);
		
		//RIEMPIMENTO ARTICOLI
		var hr= document.createElement('hr'),
		    br = document.createElement('br');
		hr.id="new";
		document.body.insertBefore(hr, document.getElementsByClassName('footer')[0]);
		var head= document.createElement('h2');
		head.innerHTML='ISSUE N°4';
		document.body.insertBefore(head, document.getElementsByClassName('footer')[0]);
		document.body.insertBefore(br, document.getElementsByClassName('footer')[0]);
		var row = document.createElement('div');
		row.className='row';
		for (var i=0; i<articleInfo[3].articles.length;i++){
			var block = document.createElement('div');
			block.className='block';
			var a = document.createElement('a');
			a.href = articleInfo[3].articles[i].articleFile;
			var land = document.createElement('div');
			land.className='land artTable';
			var pic = document.createElement('img');
			pic.id='firstImage';
			pic.src='articles/issue4_art'+(i+1)+'/'+articleInfo[3].articles[i].imgName;
			land.appendChild(pic);
			a.appendChild(land);
			var head= document.createElement('h3');
			head.innerHTML=articleInfo[3].articles[i].articleName;
			a.appendChild(head);
			var Hr= document.createElement('hr');
			a.appendChild(Hr);
			var p= document.createElement('p');
			p.innerHTML=articleInfo[3].articles[i].authorName;
			a.appendChild(p);
			block.appendChild(a);
			row.appendChild(block);
		}
		document.body.insertBefore(row, document.getElementsByClassName('footer')[0]);
		document.body.insertBefore(br, document.getElementsByClassName('footer')[0]);
	}
}

