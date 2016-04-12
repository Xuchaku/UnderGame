

//История о том, как я это реализовывал.Комментарии будут под пунктами.
var source = 0;
var fl = 0;
	window.onload = function() {
	var kyesObj = {
		"A" : 37,
		"W" : 38, 
		"D" : 39,
		"S" : 40
	}


var Gl = 80, Gt = 350;
go.onclick = playGAME;



// 5. Это функия срабатывает при нажатиее кнопок,а именно двигает машину влево,вправо,вниз,вверх, не позволяя залезать за пределы карты.Также игнорирует все кнопки кроме кнопок движения - стрелочки.
document.onkeydown = function(e){
	if(!(+e.keyCode >= 37 && +e.keyCode <= 40))  return;
		var pack = +e.keyCode;
			if(pack ==  37) {
				if(!(Gl <= -1)) 
					Gl-= 3;

					mensh.style.left = Gl+"px";
			}
			else if(pack == 39) {
					if(!(Gl >= 174)) 
				Gl+= 3;
				mensh.style.left = Gl+"px";
			}
			else if(pack == 38) {
					if(!(Gt <= 0)) 
				Gt-=3;
				mensh.style.top = Gt+"px";
			}
			else {
				 		if(!(Gt >= 350)) 
					Gt+=3;
				mensh.style.top = Gt+"px";
				
			}
}


function BonusTrack(x, y){
	this.bonus; 
	this.coordX = x;
	this.coordY = y;
	this.el = document.createElement("div");
}
var bonusArray = ["speed", "immortal", "invisibility"]
BonusTrack.prototype.show = function(){
		var rand = Math.round(Math.random()*2);
	//var el = document.createElement("div");
		this.el.style.left = this.coordX + "px";
		this.el.style.top = this.coordY + "px";
		this.el.classList.add(bonusArray[rand], "bonus")
		this.bonus = bonusArray[rand];
	track.appendChild(this.el);
	this.move();
	

}

BonusTrack.prototype.move = function() {
	var f, s;
	do {
		f =  Math.round(Math.random() * (2 - (-2)) + (-2));
		s = Math.round(Math.random() * (5 - (-5)) + (-5));
	}while(f == 0 || s <= 0)
	
		
var inter;
		 var self = this.el;
		 var activeBonus = this.bonus;
		var  left = this.coordX;
		var top = this.coordY;
		var bonel = this.el;
var xC = false, yC = false;
	inter =	setInterval(function(){
	xC = false, yC =false;
		if ((Gl + 25 >= parseInt(self.style.left)) && (Gl <= parseInt(self.style.left) + 30))   {xC= true;}
  if ((Gt + 48 >= parseInt(self.style.top)) && (Gt <= parseInt(self.style.top) + 30)) {yC = true;}
if(xC && yC) {
	activatedBonus(activeBonus);
}
	if(top >= 400 || left >= 210 || left <= -40) {
		clearInterval(inter);
		track.removeChild(bonel)
	}
		top+=s;
			self.style.top =  top + "px";
			
			left -=f;
			self.style.left =  left + "px";

		

		}, 60)

}
var timersBonus = false;
var arrayForBonus = [];
var bon;

function activatedBonus(bonus) {
	alert(bonus);

}
function bonusChange() {
	var open = Math.round(Math.random()*100);
	//timersBonus = setTimeout(function(){
			if(open < 7) {
		bon = new BonusTrack(rands(180), rands(150));
		bon.show();
		

	}
	//}, 1000)
	

}
function rands(num) {
	var s = Math.round(Math.random()*num)
	return  s;
}

var str = ["first", "two", "fri", "four", "five"]
var autos = [];
		//4.Это функция которая запускается в таймере под цифрой 1,рандомное положение машины задется здесь же.
		function Machine(cl) {
			var elem = document.createElement("div");

			this.class= cl;
				
					if(autos.length)
				autos.pop();

				var rand = Math.round(Math.random()*4);
				elem.classList.add(str[rand], "auto");
				elem.setAttribute("alt", rand+"f");

				autos.push(elem)

			


		}

		var lvl = 30;
		//3. Это таймер увеличения скорости
		var clears = setInterval(function(){
			lvl -= 7;
		}, 100000)
		
		//2.Данная функция для каждой машины меняет координату,если машина пересекла предел карты,то уничтожает ее.
		//Также в этой функии создает контейнер,в котором каждый раз обновляются координаты left и top, данный контейнер записывается в массив  massObj;
		

		function chang(amg) {
				var e = getComputedStyle(amg); 
				var zn = -40;
				var oop = {};
				var end = false;
				oop.alt = amg.getAttribute("alt");
				massObj.push(oop);
				
			amg.style.top = "-40px";
			var tracks = document.getElementById("track");
				var inter = setInterval(function (){
						if(zn<410){

							zn += 3;
					amg.style.top = zn + "px";
					oop.top = amg.style.top;
					oop.left = e.left;
					
					
					
				}
				else {
					
					massObj.pop();
					for(var i = 0;i<track.children.length;i++) {
						
						if(track.children[i] == amg)
							end = true;
					}

						if(tracks.children.length > 2 && end)
					
					track.removeChild(amg);
					clearInterval(inter);
				}
				}, lvl)
		}
		var styleArr = []
		var timers;
		// 1.Фунция,которая запускает таймер,и каждые 1400мс создает машины,добавляя их на страницу,и для каждой машины запускает фунцию  chang();
			function playGAME(){
				for(var j=0; j< track.children.length;j++) {
			if(track.children[j].classList.contains("crus1")) {
				track.children[j].style.top = "-220px";
			}

				else if(track.children[j].classList.contains("crus2")){
				track.children[j].style.top = "370px";
				}
	}
				gameClose = 0;
				spans[0].style.top = "-50px";
				spans[1].style.top = "400px";
				spans[2].style.top = "-50px";
				spans[3].style.top = "400px";
				spans[4].style.top = "-50px";
				spans[5].style.top = "400px";
				
				krug.style.transform = "scale(1)";

					if(!timers)
		timers = setTimeout(function out(){
	bonusChange();
				new Machine();
				track.appendChild(autos[0]);
				chang(autos[0]);
				
				timers = setTimeout(out, 1400)
				
		}, 300)
	
}
		
		var massObj = [];
		
	//6. Эта фунция срабатывает при столкновении, очищает полностью трассу от машин,останавливает все таймеры, чистит массивы, обновляет переменные.
		function endGame(arg){
			
			clearTimeout(arg);
				if(track.children.length > 1) {
					for(var i =0;i<track.children.length;i++) {
						if(!track.children[i].classList.contains("gamer") && !track.children[i].classList.contains("sd") && !track.children[i].classList.contains("ht") && !track.children[i].classList.contains("crusade"))
							track.removeChild(track.children[i]);
					}
				}

				animations();
				
				for(var j = 0;array.length;j++) {
					clearInterval(array[i]);
					array.pop();
				}
				source = 0;
				lvl = 30;
				timers = false;
				clearInterval(clears);
				
					

				

		}
	

 	var XColl;
  	var YColl;
  	var wid = 30;
  	var heig = 50;

  	




var inters;
// 7.Запускает таймер и фунцию MacroCollision принимая аргументы саму машину - игрока и массив координат всех врагов.
	setTimeout(function(){
	inters =  setInterval(function(){
		MacroCollision(mensh,massObj)
		
	},100)
},1500)


var spans = track.children;
function animations() {
	//krug.style.backgroundColor = "#FF8000";
	
	
		//krug.style.transform = "scale(240)";
		for(var j=0; j< track.children.length;j++) {
			if(track.children[j].classList.contains("crus1")) {
				track.children[j].style.top = "0px";
			}

				else if(track.children[j].classList.contains("crus2")){
				track.children[j].style.top = "150px";
				}
	}
		setTimeout(function(){
			for(var i = 0;i<6;i++) {
		spans[i].style.top = "150px";
	}
	
},1400)

			

		
	
}


var array = [];

XColl=false;
  	 YColl=false;
var newGamer;
var krug = document.getElementById("krug");
//9. Ну а эта фунция каждые 10 мс отслеживает координаты игрока и элемента массива - конкретной машины и при совпадение запускает фунцию endGame();
	function revisionen(any) { 
		var x = false, y = false;
		
		var s = setInterval(function() {
			if(parseInt(any.top) > 380) {

				source++;
					chetchik.innerHTML = source;
				for(var b = 0; b<array.length;b++) {
					if(array[b] == s) array.pop();
				}
				clearInterval(s);
				return;
			}
			
  			
  		if(x && y) {
  			
  			endGame(timers);


  		

  		}

  			x = false;
			y = false;
				//if(!(mensh.getAttribute("alt") == any.alt)) clearInterval(s);
				setTimeout(function(){
				if ((Gl + 25 >= parseInt(any.left)) && (Gl <= parseInt(any.left) + 25))   {x= true;}
				}, 10)
			
 			
  		    if ((Gt + 48 >= parseInt(any.top)) && (Gt <= parseInt(any.top) + 48)) {y = true;}

  		
  			
  			
  			

  			
		}, 10)
		array.push(s);
	}





var globLength;
var iteration = 1;
//8. Алгоритм,написанный в этой фунции,наверное,наиважнейший,так как очень хорошо оптимизирует  игру. Эта фунция запускае для каждого элемента массива massObj функию revisionen(); Так как эта функиция MacroCollision() срабатывает очень часто каждые 100мс,то я сделал так,чтобы функия revisionen() запускалась только для появившихся машин,не брав полностью массив massObj;Сложно написано,но здесь то и творится вся магия!

		function MacroCollision(gamer,arr){
  	 	
  	newGamer = getComputedStyle(gamer);
  			if(iteration) {
  				globLength = massObj.length;
  		for(var i =0;i<arr.length;i++) {
  			revisionen(massObj[i]);
  		}
  		iteration--;
  	}
else{

  		if(globLength != massObj.length && massObj.length != 0)
  		{
  			for(var j = 0;j<massObj.length - globLength;j++) {
  				revisionen(massObj[globLength+j]);
  			}
  		}
  	globLength = massObj.length;
  }

  	
	
}
}






















	