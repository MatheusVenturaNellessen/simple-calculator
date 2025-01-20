function createCalculator() {
    return {
        display: document.querySelector('.display'),

        start() {
            this.onClick();

            this.pressEnter();
        },

        onClick() {
            document.addEventListener('click', e => {
                const element = e.target;
                if(element.classList.contains('number')) {
                    this.sendToInput(element.innerText);
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
        },

        sendToInput(value) {
            this.display.value += value;
        },

        clearInput() {
            this.display.value = '';
        },

        deleteLastInput() {
            this.display.value = this.display.value.slice(0, -1);
        },

        makeAccount() {
            let account = this.display.value;

            try {
                account = eval(account);
                
                if(!account) {
                    alert('Conta inválida!');
                    return;
                }

                this.display.value = account;
            } catch {
                alert('Conta inválida!');
                return;
            }
        },

        pressEnter() {
            this.display.addEventListener('keypress', e => {
                if(e.keyCode === 13) {
                    this.makeAccount();
                }
            });
        }
    };
}

const calculator = createCalculator();

calculator.start();
