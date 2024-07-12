
/*********************
TP2 - Le jeu de la vie
*********************/
console.log(" JEU DE LA VIE ");

// Question 41


// Question 42


// Question 43
let ligne0 =  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let ligne1 =  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let ligne2 =  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let ligne3 =  [0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0];
let ligne4 =  [0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0];
let ligne5 =  [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let ligne6 =  [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0];
let ligne7 =  [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0];
let ligne8 =  [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0];
let ligne9 =  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0];
let ligne10 = [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0];
let ligne11 = [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0];
let ligne12 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let ligne13 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let ligne14 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


// Question 44
let grille = [ligne0, ligne1, ligne2, ligne3, ligne4, ligne5, ligne6, ligne7, ligne8, ligne9, ligne10, ligne11, ligne12, ligne13, ligne14];


// Question 45


// Question 46
/* console.log(grille[2][3]); */


// Question 47
function lineToString(ligne) {
	let s = "";
	for (let i = 0; i < ligne.length; i++) {
		if (ligne[i] == 0) {
			s += 0;
		}
		else if (ligne[i] == 1) {
			s += 1;
		}
	}
	return s;
}


// Question 48
function displayGrid(grille_interne) {
	let s = "";
	for (let i = 0; i < grille_interne.length; i++) {
		s += lineToString(grille_interne[i]);
		if (i + 1 <= grille_interne.length) {
			s += "\n";
		}
	}
	console.log(s);
}
displayGrid(grille);


// Question 49
function createEmptyArray(largeur) {
	let ligne = [];
	for (let i = 0; i < largeur; i++) {
		ligne[i] = 0;
	}
	return ligne;
}


// Question 50
function createEmptyGrid(largeur, hauteur) {
	let grille_interne = [];
	for (let i = 0; i < hauteur; i++) {
		grille_interne[i] = createEmptyArray(largeur);
	}
	return grille_interne;
}
//console.log(createEmptyGrid(3,4));
//displayGrid(createEmptyGrid(6,4));


// Question 51
function evolution(grille_interne) {
	let nouvelle_grille = createEmptyGrid(grille_interne.length, grille_interne[0].length);
	for (let i = 0; i < grille_interne.length; i++) {
		for (let j = 0; j < grille_interne[i].length; j++) {

			// verif cases voisines
			let cases_voisines_actives = 0;
			for (let i2 = i - 1; i2 <= i + 1; i2++) {
				// observation d'une nouvelle ligne
				if (i2 >= 0 && i2 < grille_interne.length) {
					for (let j2 = j - 1; j2 <= j + 1; j2++) {
						// observation d'une nouvelle case
						if (j2 >= 0 && j2 < grille_interne[i].length) {
							if (i2 != i || j2 != j) {
								/* console.log("case", i, j, "\n", "comparation avec", i2, j2, "\n", "contenu:", grille_interne[i2][j2]); */
								if (grille_interne[i2][j2] == 1) {
									cases_voisines_actives++;
								}
							}
						}
					}
				}
			}
			// activation/desactivation cases
			if (grille_interne[i][j] == 1) {
				if (cases_voisines_actives == 2 || cases_voisines_actives == 3) {
					nouvelle_grille[i][j] = 1;
				}
				else {
					nouvelle_grille[i][j] = 0;
				}
			}
			else if (grille_interne[i][j] == 0) {
				if (cases_voisines_actives == 3) {
					nouvelle_grille[i][j] = 1;
				}
				else {
					nouvelle_grille[i][j] = 0;
				}
			}

		}
	}
	return nouvelle_grille;
}
console.log("evolution");
displayGrid(evolution(grille));


// Question 52
function timeJump(grille_interne, iterations) {
	for (let i = 0; i < iterations; i++) {
		grille_interne = evolution(grille_interne);
	}
	return grille_interne;
}
console.log("timeJump 2 fois");
displayGrid(timeJump(grille, 2));


// Question 53
let widthCell = 20;

function drawGrid(grille_interne) {

	let s = "";
	for (let i = 0; i < grille_interne.length; i++) {
		s += lineToString(grille_interne[i]);
		if (i + 1 <= grille_interne.length) {
			s += "-";
		}
	}
	// s = 1100-1000-1011-0001

	let row = 0;
	let col = 0;

	for (let i = 0; i < s.length; i++) {

		if (s[i] == 0) {
			/* cases inactives */
			fill(20);
			square(row,col,widthCell);
			row += widthCell;
		} else if (s[i] == 1) {
			/* cases actives */
			fill(50,255,50);
			square(row,col,widthCell);
			row += widthCell;
		} else if (s[i] == "-") {
			/* retour à la ligne */
			col += widthCell;
			row = 0;
		}
	}

}


// Question 54
console.log("affichage P5");


let widthGrid = 40;
let gridDrawn = createEmptyGrid(widthGrid,widthGrid);
let varFrameRate = 10;

function setup() {
	// put setup code here
	createCanvas(widthGrid*widthCell, widthGrid*widthCell);
	frameRate(varFrameRate);
}


function draw() {
	// put drawing code here
	frameRate(varFrameRate);
	background(0);
	/* drawGrid(timeJump(grille, frameCount-1)); */
	/* drawGrid(timeJump(grille, 2)); */
	
	/* drawGrid(timeJump(gridDrawn, frameCount-1)); */
	drawGrid(gridDrawn);
	gridDrawn = evolution(gridDrawn);
}

function mouseClicked() {
	if(mouseX <= widthGrid*widthCell && mouseY <= widthGrid*widthCell) {
		console.log("mouseX :",mouseX,"\nmouseY :",mouseY);
		let activatedCol = parseInt(mouseX/widthCell);
		let activatedRow = parseInt(mouseY/widthCell);
		console.log("ligne à activer :",activatedRow);
		console.log("colonne à activer :",activatedCol);
		console.log(gridDrawn);
		if(gridDrawn[activatedRow][activatedCol] == 0) {
			gridDrawn[activatedRow][activatedCol] = 1;
		}
		else {
			gridDrawn[activatedRow][activatedCol] = 0;
		}
		/* rectMode(CENTER); */
		fill(255,0,0);
		/* rect(parseInt(mouseX),parseInt(mouseY),widthCell,widthCell); */
		rect(Math.floor(mouseX/20)*20,Math.floor(mouseY/20)*20,widthCell,widthCell);
		/* rectMode(CORNER); */
	}
}


let toggle=0;
function pause() {
	/* if(varFrameRate != 0.2) {
		varFrameRate = 0.2;
	}
	else {
		varFrameRate = 10;
	} */
	if(toggle==0) {
		noLoop();
		toggle=1;
	}
	else {
		loop();
		toggle=0;
	}
}

