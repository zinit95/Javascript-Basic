// 상품 데이터
const p1 = {
  title: '에어팟',
  price: 200000,
  desc: '에어팟으로 노래를 들어요.',
  image:
    'https://www.apple.com/v/airpods/v/images/overview/airpods_3rd_gen__dhy5bknhvtqq_large.jpg',
};

const p2 = {
  title: '족발',
  price: 40000,
  desc: '냠냠쩝쩝 족발은 앞다리야~',
  image:
    'https://i.namu.wiki/i/I63sEiy-8vUXVhV-I0IZiS9ntT0INuKXgBYAE3QqUvOlToSoEqSgpvEbUmxsFTXtoBRN4WJolyAFEAlDdeZFhQ.webp',
};

// 서버에서 전송된 JSON
const productList = {
  products: [
    p1, 
    p2, 
    {
      title : '요구르트',
      price : 500,
      desc : '요고트',
      image : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20231115_109%2F17000220361768pH92_PNG%2F6Q8uc_113167_1.png&type=a340'
    }
  ],

  //render : () => { //화살표 함수를 쓰면 안돼~
  //render(){
  render() {
    const $prodList = document.createElement('ul');
    $prodList.classList.add('product-list');
    // 반복해서 li태그를 생성
    // console.log('products: ', this.products);
    this.products.forEach((prod) => {
      const $prodLi = document.createElement('li');
      $prodLi.classList.add('product-item');
      $prodLi.innerHTML = `
      <div>
        <img src="${prod.image}" alt="${prod.title}">
        <div class="product-item__content">
          <h2>${prod.title}</h2>
          <h3>${prod.price}원</h3>
          <p>${prod.desc}</p>
          <button>담기</button>
        </div>
      </div>
    `;

      $prodList.appendChild($prodLi);
    });

    // div#app에 ul추가
    document.getElementById('app').appendChild($prodList);
  },
};

productList.render();
