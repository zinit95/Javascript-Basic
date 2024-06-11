
import ShoppingCart from "./ShoppingCart.js";
import ProductList from "./ProductList.js";
import Product from "./Product.js";

class Shop {

  render() {

    new ShoppingCart('app').render();
    new ProductList('app', [
      new Product('광어', 28000, '대광어존맛', 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA1MDlfODIg%2FMDAxNzE1MjYwMDg0MDEy.dESRqpO7hACASEZO547Stvj9cMp76NWPV-uSd9bxMIQg.ZnwQoUvcqrUnM75EB81lprHIHAuSCP4beqhUtzbi6Z0g.PNG%2Fimage.png&type=a340'),
      new Product('우럭', 30000, '마시따우럭', 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA0MjhfMTM3%2FMDAxNzE0MzE1NjExODk4.Rhr0tkOd3kNIGZQJOandF4YYpMNVedvrX2zr5Q_7oj8g.__MqaprQLu8M5LtO4rxuWWKhXJShf9g1lXM1DEw6K10g.JPEG%2F1714315610665.jpg&type=a340'),
      new Product('돌문어', 77000, '아주단단한돌문어냠냠', 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA5MTFfMTc1%2FMDAxNjk0NDQzMjU2Njcy.GKUjXDUrfyFqEfCQq6HDc2Min-eyIoKnhVwH5uS3tBUg.AB0I7uRHyaKlxb01jS8MAERgtKJqdaHGr2lScXQB2dsg.JPEG.syh0494%2F20230911%25A3%25DF233246.jpg&type=a340'),
      new Product('참치', 55000, '냉동참치냠냠쩝쩝', 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA1MTlfNDIg%2FMDAxNzE2MDc4ODc3NDYz.hwKoRgvg9lRBHTZeCDRvC6CTjl4CTO2x-soAYfWjUuIg.YlE_BenL8B-uqVFThFb-wJZ_bkmIUzNLsxgEQDzV4cwg.JPEG%2FIMG%25A3%25DF20240421%25A3%25DF193114%25A3%25DF497.jpg&type=a340'),
      new Product('에어팟', 200000, '에어팟으로 노래를 들어요.', 'https://www.apple.com/v/airpods/v/images/overview/airpods_3rd_gen__dhy5bknhvtqq_large.jpg'), 
      new Product('족발', 40000, '냠냠쩝쩝 족발은 앞다리야~', 'https://i.namu.wiki/i/I63sEiy-8vUXVhV-I0IZiS9ntT0INuKXgBYAE3QqUvOlToSoEqSgpvEbUmxsFTXtoBRN4WJolyAFEAlDdeZFhQ.webp'), 
      new Product('요구르트', 500, '요거어어어어어어르트', 'https://img-cf.kurly.com/shop/data/goods/1630556476801z0.jpg'),
      new Product('쿼터파운더 치즈버거', 10000, '쿼팥치 먹고싶다', 'https://s7d1.scene7.com/is/image/mcdonalds/202201_3426-005_DoubleQuarterPounderwithCheese_832x472:1-3-product-tile-desktop?wid=765&hei=472&dpr=off'),
      new Product('오렌지', 2000, '오렌지렌지망고애플망고', 'https://health.chosun.com/site/data/img_dir/2024/02/29/2024022901209_0.jpg'),
    ]).render();
  }
}

export default Shop;