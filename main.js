var obj={name:"toli",color:"red"};
var obj2={name:"maks",color:"blue"};
var mas=[obj,obj2];
var obj3={};
var s=[];
var d=[];
for (var i = 0; i < mas.length; i++) {
	obj3.name=mas[i];
	obj3.color=mas[i];
	for (var i = i+1; i < mas.length; i++) {
		obj3.color=mas[i];
	}

}
var d=[];
for(var key in obj3){
		d.push(obj3[key]);
	
}
console.log(obj3);
console.log(d);



