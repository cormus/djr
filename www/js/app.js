function App() {
        var obj = this;

        obj.initialize = function () {
            obj.initSnap();
            obj.initFastClick();
        }

        obj.initFitText = function () {
            FitText(document.getElementsByClassName('fittext-1'), 1.2, {
                minFontSize: 17,
                maxFontSize: 33
            });
            FitText(document.getElementsByClassName('fittext-2'), 1.2, {
                minFontSize: 17,
                maxFontSize: 25
            });
            FitText(document.getElementsByClassName('fittext-3'), 1.6, {
                minFontSize: 12,
                maxFontSize: 25
            });
        }

        obj.addEvent = function (element, eventName, func) {
            if (element.addEventListener) {
                return element.addEventListener(eventName, func, false);
            } else if (element.attachEvent) {
                return element.attachEvent("on" + eventName, func);
            }
        };

        obj.initSnap = function () {
            obj.snap = new Snap({
                element: document.getElementById('content'),
                disable: 'right'
            });

            obj.addEvent(document.getElementById('open-left'), 'click', function () {
                obj.snap.open('left');
            });
        }

        obj.initFastClick = function () {
            FastClick.attach(document.body);
        }
        
        obj.initIScroll = function()
        {
            obj.myScroll = new IScroll('.wrapper', { mouseWheel: true });
            document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
        }
    }
    /*Funcao para abrir bloco com a lista de tratamentos*/
var abrir = 0;

function abre_tratamento() {
        if (abrir == 0) {
            $('#conteudo_tratamentos').css('display', 'block');
            abrir = 1;
        } else {
            $('#conteudo_tratamentos').css('display', 'none');
            abrir = 0;
        }

    }
    /*Funçaõ para expandir os conteudos do tramento*/
var aberta = -1;

function abre(valor) {
    if (valor != aberta) {

        $('#' + valor).animate({
            height: 'toggle'
        });
        $('#' + aberta).animate({
            height: 'toggle'
        });
        aberta = valor;
    } else {
        $('#' + aberta).animate({
            height: 'toggle'
        });
        aberta = -1;
    }

}