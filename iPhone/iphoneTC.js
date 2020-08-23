var Product = {
    IPhone: {
        Detail: {
            productName: 'iPhone 11',
            baseImgUrl: './img/iphone11-select-2019-family.jpg'
        },
        //陣列包物件
        OutWard: [{
                color: '紅色',
                colorValue: '#ff0000',
                imageUrl: './img/iphone11-red-select-2019.png'
            },
            {
                color: '黃色',
                colorValue: '#ffff00',
                imageUrl: './img/iphone11-yellow-select-2019.png'
            },
            {
                color: '黑色',
                colorValue: '#000000',
                imageUrl: './img/iphone11-black-select-2019.png'
            },
        ],
        Spec: {
            Storge: [{
                    size: '64GB',
                    fit: 24900
                },
                {
                    size: '128GB',
                    fit: 26900
                },
                {
                    size: '256GB',
                    fit: 30400
                },
            ]
        }
    },
    IPad: {
        Detail: {
            productName: 'iPad',
            baseImgUrl: './img/ipad-hero-unselected-201909_GEO_TW.png'
        },
        OutWard: [{
                color: '太空灰色',
                colorValue: '#6e6969',
                imageUrl: './img/ipad-space.png'
            },
            {
                color: '銀色',
                colorValue: '#b9aeae',
                imageUrl: './img/ipad-silver.png'
            },
            {
                color: '金色',
                colorValue: '#ceb7a8',
                imageUrl: './img/ipad-gold.png'
            },
        ],
        Spec: {
            Storge: [{
                    size: '32GB',
                    fit: 10900
                },
                {
                    size: '128GB',
                    fit: 13900
                },
            ]
        }
    },
    MacPro: {
        Detail: {
            productName: 'MacPro 13',
            baseImgUrl: './img/mbp13touch-space-202005_GEO_TW.jpg'
        },
        OutWard: [{
                color: '太空灰色',
                colorValue: '#6e6969',
                imageUrl: './img/mbp13touch-space-202005_GEO_TW.jpg'
            },
            {
                color: '銀色',
                colorValue: '#b9aeae',
                imageUrl: './img/mbp13touch-silver_GEO_TW.jpg'
            },
        ],
        Spec: {
            Storge: [{
                    size: '256GB',
                    fit: 51300
                },
                {
                    size: '512GB',
                    fit: 57300
                },
                {
                    size: '1TB',
                    fit: 63300
                },
                {
                    size: '2TB',
                    fit: 75300
                },
            ]
        }
    }
};

var iphoneBtn = document.getElementById('iphone');
var productImg = document.getElementById('product-img');

var colorArea = document.getElementById('color');
var typeArea = document.getElementById('type');
var priceArea = document.getElementById('price');

//iphoneBtn.onclick = function () 
function InitProduct(product) {
    console.log(product);
    //初始化
    colorArea.innerHTML = '';
    typeArea.innerHTML = '';
    priceArea.innerHTML = '';
    productImg.setAttribute('src', Product[product].Detail.baseImgUrl);

    //顏色按鈕區域
    let colorTitle = document.createElement('div');
    let colorTitleH1 = document.createElement('h2');

    colorTitleH1.innerText = '顏色';
    colorTitle.classList.add('w-100');
    colorTitle.classList.add('d-flex');
    colorTitle.classList.add('justify-content-center');
    colorTitle.classList.add('justify-content-md-start');

    colorTitle.appendChild(colorTitleH1);
    colorArea.appendChild(colorTitle);

    for (let item of Product[product].OutWard) {
        let colorDiv = document.createElement('div');
        let colorBtn = document.createElement('button');
        let colorBtnDiv = document.createElement('div');
        let colorI = document.createElement('i');
        let colorSpan = document.createElement('span');

        colorDiv.classList.add('col-6');
        colorDiv.classList.add('col-md-4');

        colorBtn.classList.add('color-btn'); //跟樣式無關
        colorBtn.classList.add('btn');
        colorBtn.classList.add('btn-outline-dark');
        colorBtn.classList.add('mb-3');
        colorBtn.classList.add('w-100');
        colorBtn.setAttribute('urlVal', item.imageUrl);

        colorBtnDiv.classList.add('p-4');
        colorBtnDiv.classList.add('d-flex');
        //colorBtnDiv.style.boxSizing = 'border-box';
        colorBtnDiv.classList.add('flex-column');
        colorBtnDiv.classList.add('justify-content-center');
        colorBtnDiv.classList.add('align-item-center');

        colorI.classList.add('fas');
        colorI.classList.add('fa-circle');
        colorI.classList.add('display-4');
        colorI.style.color = item.colorValue;

        colorSpan.innerText = item.color;

        colorBtnDiv.appendChild(colorI);
        colorBtnDiv.appendChild(colorSpan);

        colorBtn.appendChild(colorBtnDiv);
        colorDiv.appendChild(colorBtn);

        colorArea.appendChild(colorDiv);
    }

    let colorBtns = document.getElementsByClassName('color-btn');

    for (let btn of colorBtns) {
        btn.addEventListener('click', function () {
            //console.log(btn);
            console.log(btn.getAttributeNode('urlVal').value);
            productImg.setAttribute('src', btn.getAttributeNode('urlVal').value);
        });
    }

    //規格按鈕區域
    let typeTitle = document.createElement('div');
    let typeTitleH1 = document.createElement('h2');

    typeTitleH1.innerText = '規格';
    typeTitle.classList.add('w-100');
    typeTitle.classList.add('d-flex');
    typeTitle.classList.add('justify-content-center');
    typeTitle.classList.add('justify-content-md-start');

    typeTitle.appendChild(typeTitleH1);
    typeArea.appendChild(typeTitle);

    for (let item of Product[product].Spec.Storge) {
        let typeDiv = document.createElement('div');
        let typeBtn = document.createElement('button');
        let typeBtnDiv = document.createElement('div');
        let typeP = document.createElement('p');
        let typeSpan = document.createElement('span');

        typeDiv.classList.add('col-6');
        typeDiv.classList.add('col-md-4')

        typeBtn.classList.add('type-btn');
        typeBtn.classList.add('btn');
        typeBtn.classList.add('btn-outline-dark');
        typeBtn.classList.add('mb-3');
        typeBtn.classList.add('w-100');
        typeBtn.setAttribute('fit', item.fit);

        typeBtnDiv.classList.add('p-4');
        typeBtnDiv.classList.add('d-flex');
        typeBtnDiv.classList.add('flex-column');
        typeBtnDiv.classList.add('justify-content-center');
        typeBtnDiv.classList.add('align-item-center');

        typeP.classList.add('font-weight-bolder');
        typeP.innerText = item.size;

        typeSpan.innerText = `NT$${item.fit}`;

        typeBtnDiv.appendChild(typeP);
        typeBtnDiv.appendChild(typeSpan);

        typeBtn.appendChild(typeBtnDiv);
        typeDiv.appendChild(typeBtn);

        typeArea.appendChild(typeDiv);
    }

    let typeBtns = document.getElementsByClassName('type-btn');

    //計價區域
    let priceTitle = document.createElement('div');
    let priceTitleH1 = document.createElement('h2');

    priceTitleH1.innerText = '價格試算';
    priceTitle.classList.add('w-100');
    priceTitle.classList.add('d-flex');
    priceTitle.classList.add('justify-content-center');
    priceTitle.classList.add('justify-content-md-start');

    priceTitle.appendChild(priceTitleH1);
    priceArea.appendChild(priceTitle);

    for (let item of typeBtns) {
        item.addEventListener('click', function () {
            //初始化
            priceArea.innerHTML = '';
            let priceTitle = document.createElement('div');
            let priceTitleH1 = document.createElement('h2');

            priceTitleH1.innerText = '價格試算';
            priceTitle.classList.add('w-100');
            priceTitle.classList.add('d-flex');
            priceTitle.classList.add('justify-content-center');
            priceTitle.classList.add('justify-content-md-start');

            priceTitle.appendChild(priceTitleH1);
            priceArea.appendChild(priceTitle);

            //顯示試算結果
            let fit = item.getAttributeNode('fit').value;

            let priceDiv = document.createElement('div');
            let priceP = document.createElement('p');

            priceDiv.classList.add('col-12');
            priceDiv.classList.add('d-flex');
            priceDiv.classList.add('justify-content-center');
            priceDiv.classList.add('justify-content-md-start');

            priceP.classList.add('display-4');
            priceP.classList.add('font-weight-bolder');
            priceP.innerText = `NT$${fit}`;

            priceDiv.appendChild(priceP);

            priceArea.appendChild(priceDiv);
        });
    }
}