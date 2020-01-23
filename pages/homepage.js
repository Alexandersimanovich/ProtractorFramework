let homepage = function(){
    
    let firstNumber_input = element(by.model('first'));
    let secindNumber_input = element(by.model('second'));
    let goButton = element(by.css('[ng-click="doAddition()"]'));

    this.get = function(url){
        browser.get(url);
    };

    this.enterFirstNumber = function(firstNumber){
        firstNumber_input.sendKeys(firstNumber);
    };

    this.enterSecondNumber = function(secondNumber){
        secindNumber_input.sendKeys(secondNumber);
    };

    this.clickGo = function(){
        goButton.click();
    };

    this.verifyResult = function(result){
        let output = element(by.cssContainingText('.ng-binding', result));
        expect(output.getText()).toEqual(result);
    };
};

module.exports = new homepage();