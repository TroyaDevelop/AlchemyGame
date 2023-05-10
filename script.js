'use strict'

const combinations = {
    'Огонь-Вода': 'Пар',
    'Вода-Огонь': 'Пар',
    'Вода-Земля': 'Растение',
    'Земля-Вода': 'Растение',
    'Огонь-Земля': 'Лава',
    'Земля-Огонь': 'Лава'
  };

const game = {
    combinations,

    elementOneSelector: document.querySelector('.elementOne'),
    elementTwoSelector: document.querySelector(".elementTwo"),
    equalsSelector: document.querySelector(".equals"),
    elementOne: null,
    elementTwo: null,
    equalsText: null,

    methodsInit(){
        document.querySelector(".elements").addEventListener("click", event => this.chooseElement(event));
        document.querySelector(".alchemy").addEventListener("click", event => this.deleteElement(event));
        document.querySelector(".submit").addEventListener("click", event => this.equals());
    },

    chooseElement(event){
        if(event.target.className !== 'element'){
            return;
        } else if (this.elementOne == null){
            this.elementOne = event.target.dataset.elementName;
        } else if (this.elementOne !== null){
            this.elementTwo = event.target.dataset.elementName;
        };
        this.render();
    },

    deleteElement(event){
        if(event.target.className === 'elementOne'){
            this.elementOne = null;
        } else if (event.target.className === 'elementTwo'){
            this.elementTwo = null;
        };
        this.render();
    },

    equals(){
        const combinationKey = `${this.elementOne}-${this.elementTwo}`;
        this.equalsText = this.combinations[combinationKey] || '';
        this.render();
    },

    render(){
        this.elementOneSelector.innerHTML = this.elementOne;
        this.elementTwoSelector.innerHTML = this.elementTwo;
        this.equalsSelector.innerHTML = this.equalsText;
    },

    run(){
        this.methodsInit();
    }
};

game.run();