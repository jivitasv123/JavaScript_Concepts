class Parent{

constructor(asset){
this.asset = asset;
}

land(){
    console.log(this.asset)
}
}

let myObj = new Parent("Villa");
myObj.land();

