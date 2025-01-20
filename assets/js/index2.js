function Calculator() {
    this.display = document.querySelector('.display');

    this.start = function() {
        this.onClick();

        this.calculateWithEnter();
    };

    this.onClick = function() {
        document.addEventListener('click', e => {
            const element = e.target;
            if(element.classList.contains('number')) {
                this.sendNumberToInput(element.innerText);
            }

            if(element.classList.contains('clear')) {
                this.clearInput();
            }

            if(element.classList.contains('delete')) {
                this.deleteLastInput();
            }

            if(element.classList.contains('equal')) {
                this.makeAccount();
            }
        });
    };

    this.sendNumberToInput = function(number) {
        this.display.value += number;
        this.display.focus();
    };

    this.clearInput = function() {
        this.display.value = '';
    };

    this.deleteLastInput = function() {
        this.display.value = this.display.value.slice(0, -1);
    };

    this.makeAccount = function() {
        try {
            let account = eval(this.display.value);

            if(!account) {
                alert("Conta inválida!");
                return;
            }

            this.display.value = account;
        } catch {
            alert('Conta inválida');
            return;
        }
    };

    this.calculateWithEnter = function() {
        this.display.addEventListener('keypress', e => {
            if(e.keyCode === 13) {
                this.makeAccount();
            }
        })
    }
}

const calculator = new Calculator();

calculator.start();