// 

var goods = [ // массив товаров магазина
    {
        title: 'Товар 1',
        price: 100,
        count: 5
    },
    {
        title: 'Товар 2',
        price: 200,
        count: 3
    },
    {
        title: 'Товар 3',
        price: 300,
        count: 2
    },
    {
        title: 'Товар 4',
        price: 100,
        count: 1
    }
];
// console.log(goods); // для проверки


var box = document.querySelector('.box_cards');

function showGood() { // потом добавить проверку наличия по кол-ву
    for (var i = 0; i < goods.length; i++) {
        var card = document.createElement('figure'); // добавили карточку товара
        card.id = "card_" + (i + 1) + "";
        card.setAttribute("class", "card");

        var name = document.createElement('h3'); // добавили в карточке наименование товара
        name.innerText = "" + goods[i].title + "";
        card.append(name);

        var price = document.createElement('p'); // добавили в карточке цену товара
        price.innerText = "Цена: " + goods[i].price + " ";
        price.innerHTML += "&#36;";
        card.append(price);

        var button = document.createElement('button'); // добавили в карточке кнопку купить
        button.innerText = "Купить";
        button.id = "btn_" + (i + 1) + "";
        card.append(button);

        box.append(card); // добавляем карточку в коробку для карточек товара
    }
}

window.onload = showGood(); // запускаем заполнение карточек товаров в каталоге
// console.log(box); // для проверки



//----------------------------------------


var cartPos = []; // пустая корзина

var sumPos = 0;
var totalSum = 0;


// по нажатию кнопки Купить - добавляем товар в корзину
var cart = document.querySelector('.cart');
var cards = document.getElementsByClassName("card"); // карточки
var press = document.querySelectorAll("button"); // кнопки
// console.log(cards);
// console.log(press); // для проверки 

for (var item of cards) { // добавить блокировку кнопки, если остатков товара больше нет


    item.querySelector("button").onclick = function () {
        // console.log(this); // для проверки
        this.style.color = "brown";

        n = this.id.split('_')[1];
        //console.log(n);

        if (goods[n - 1].count == 0) {
            alert("Остатков товара недостаточно, чтобы добавить его количество в корзине");
        } else {

            if (cartPos[n - 1] == null) { // маасив покупок
                var position = {};
                cartPos[n - 1] = position;
                cartPos[n - 1].title = goods[n - 1].title;
                cartPos[n - 1].price = goods[n - 1].price;
                cartPos[n - 1].count = 1;
            } else {
                sumPosOld = cartPos[n - 1].count * cartPos[n - 1].price;
                totalSum -= sumPosOld;

                cartPos[n - 1].count += 1;

                var posOld = document.getElementById("pos_" + n + "");
                console.log(posOld);
                cart.removeChild(posOld); // удаляем весь блок с позицией(если повторно нажать Купить)
            }
            goods[n - 1].count -= 1;


            // console.log(cartPos);


            // выводим инфо в корзину
            var BuyItem = document.createElement('figure'); // создаем новый объект - новую позицию в корзине
            BuyItem.id = "pos_" + n + "";

            var nameBuyItem = document.createElement('h3'); // 
            nameBuyItem.innerText = "" + cartPos[n - 1].title + " "; //
            BuyItem.append(nameBuyItem); // добавили имя товара - позиции в корзине


            var coustBuyItem = document.createElement('p'); // 
            coustBuyItem.innerText = " " + cartPos[n - 1].count + " шт * " + cartPos[n - 1].price + " "; // 
            coustBuyItem.innerHTML += "&#36;";

            sumPos = cartPos[n - 1].count * cartPos[n - 1].price;
            totalSum += sumPos;

            coustBuyItem.innerText += " = " + sumPos + " ";
            coustBuyItem.innerHTML += "&#36;";
            BuyItem.append(coustBuyItem); // добавили стоимость по позиции в корзине

            cart.append(BuyItem); // добавляем позицию в коробку корзины
            // еще  добавить кнопку удалить

            var totalBuy = document.querySelector('p');
            totalBuy.innerText = "Общая стоимость Ваших покупок составляет = " + totalSum + " "; // добавили стоимость всех покупок в корзине
            totalBuy.innerHTML += "&#36;";
            totalBuy.style.color = "blue";
            // console.log(totalBuy); // для проверки


            // console.log(countBuyItem); // для проверки
            // console.log(sumPos); // для проверки
            // console.log(totalSum); // для проверки



        }
    }

}
// console.log(goods); // для проверки









