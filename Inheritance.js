class Selenium{

methodsToPassInput(){
    console.log("SendKeys & Type")
}

level(){
    console.log("Beginner level")
}

}


class Cypress extends Selenium{

    version(){
        console.log("Latest Featured")
    }

}

let obj = new Cypress();
obj.level();