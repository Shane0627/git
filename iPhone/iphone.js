var Product = {
    IPhone: {
        Detail: {
            productName: 'iPhone 11',
            baseImgUrl: './img/iphone11-select-2019-family.jpg',
        },
        OutWard: [{
                color: '紅色',
                colorValue: '#ff0000',
                imgUrl: './img/iphone11-red-select-2019.png'
            },
            {
                color: '黃色',
                colorValue: '#ffff00',
                imageUrl: './img/iphone11-yellow-select-2019.png'
            } {
                color: '黑色',
                colorValue: '#000',
                imageUrl: './img/iphone11-black-select-2019.png'
            },
        ],
        Ram: {
            Storage: [{
                    size: '64GB',
                    price: 24900
                },
                {
                    size: '128GB',
                    price: 26900
                },
                {
                    size:'256GB',
                    price: 30400
                },
            ]
        }
    }
};

var iphoneBtn = document.getElementById('iphone');
var productImg = document.getElementById('product-img'); //右半部顯示照片
//左半部選單
var colorArea = document.getElementById('color');
var typeArea = document.getElementById('type');
var priceArea = document.getElementById('price');

function InitProduct(product){
    console.log(product);
    colorArea.innerHTML ='';
    typeArea.innerHTML ='';
    priceArea.innerHTML='';
    productImg.setAttribute('src', Product[product].Detail.baseImgUrl);

    //顏色按鈕區域

    let colorTitle = document.createElement('div');
    let colorTitleH1 = document.createElement('h2');

    colorTitleH1.innerText="顏色";
    colorTitle.classList.add('w-100');
    colorTitle.classList.add('d-flex');
    colorTitle.classList.add('justify-content-center');
    colorTitle.classList.add('justify-content-md-start');

    colorTitle.appendChild(colorTitleH1);
    colorArea.appendChild(colorTitle);

    for(let item of Product[prompt].OutWard){
        let colorDiv = document.createElement('div');
        let colorBtn = document.createElement('button');
        let colorBtnDiv = document.createElement('div');
        let colorI = document.createElement('i');
        let colorSpan = document.createElement('span');


        //<div class='col-6 col-md-4'>
        colorDiv.classList.add('col-6'); 
        colorDiv.classList.add('col-md-4'); 


        //<button class="color-btn btn btn-outline-dark mb-3 w-100"></button>
        colorBtn.classList.add('color-btn');
        colorBtn.classList.add('btn');
        colorBtn.classList.add('btn-outline-dark');
        colorBtn.classList.add('mb-3');
        colorBtn.classList.add('w-100');
        //不知道是啥意思
        colorBtn.setAttribute('urlVal',item.imageUrl);


        colorBtnDiv.classList.add('p-4');
        colorBtnDiv.classList.add('d-flex');
        colorBtnDiv.classList.add('flex-column');
        colorBtnDiv.classList.add('justify-comtent-center');
        colorBtnDiv.classList.add('align-item-center');


        //不確定用意
        colorI.classList.add('fas');
        colorI.classList.add('fa-circle');
        colorI.classList.add('display-4');
        colorI.style.color = itme.colorValue;


        colorSpan.innerText = item.color;


        colorBtnDiv.appendChild(colorI);
        colorBtnDiv.appendChild(colorSpan);

        colorBtn.appendChild(colorBtnDiv);
        colorDiv.appendChild(colorBtn);

        colorArea.appendChild(colorDiv);

    }

    let colorBtns = document.getElementsByClassName('color-btn');

    for(let btn of colorBtns){
        btn.addEventListener('click', function(){
            console.log(btn.getAttribute('urlVal').value);
            productImg.setAttribute('src', btn.getAttributeNode('urlVal').value);
        });
    }

}
