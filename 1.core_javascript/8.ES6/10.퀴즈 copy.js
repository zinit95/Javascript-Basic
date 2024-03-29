const traders = [
  {
    trader: {
      name: "김철수", //traders[0].traders.name
      city: "대전",
    },
    year: 2023,
    value: 500000,
  },
  {
    trader: {
      name: "박영희",
      city: "서울",
    },
    year: 2022, //traders[1].year
    value: 600000,
  },
  {
    trader: {
      name: "김철수",
      city: "대전",
    },
    year: 2022,
    value: 1200000,
  },
  {
    trader: {
      name: "박영희",
      city: "서울",
    },
    year: 2023,
    value: 650000,
  },
  {
    trader: {
      name: "뽀로로",
      city: "부산",
    },
    year: 2023,
    value: 800000,
  },
  {
    trader: {
      name: "루피",
      city: "대전",
    },
    year: 2022,
    value: 780000,
  },
];

//console.log(traders.length);

// 연습 1: 2022년에 발생한 모든 거래를 찾아
//   거래자 정보(이름, 도시)를 배열에 매핑해주세요

const name_city_2022 = traders
  .filter((n_c2022) => n_c2022.year === 2022)
  .map((n_c2022) => {
    return `이름 : ${n_c2022.trader.name} / 도시 : ${n_c2022.trader.city}`;
  });
console.log("연습 1:" + name_city_2022);

// const name_city_2022 = traders.map(n_c2022 => {
//   if(n_c2022.year === 2022){
//     return `이름 : ${n_c2022.trader.name} / 도시 : ${n_c2022.trader.city}`
//   }
// })
// console.log(name_city_2022);

// 연습 2: 거래자가 근무하는 모든 도시이름을 배열에 담아주세요.

const allcities = traders
  .filter((user_city) => user_city)
  .map((user_city) => {
    return `${user_city.trader.city} `;
  });
console.log("연습 2:" + allcities);

// const allcities = traders.map(user_city => {
//   return `${user_city.trader.city} `
// })
// console.log(allcities);

// 연습 3: 대전에 근무하는
// 모든 거래자를 찾아 거래자정보(이름, 도시)를 배열에 매핑해주세요.
const Daejeon_all_city = traders
  .filter((Daejeon_city) => Daejeon_city.trader.city === "대전")
  .map((Daejeon_city) => {
    return `이름: ${Daejeon_city.trader.name} 도시: ${Daejeon_city.trader.city} `;
    //return Daejeon_city.trader.name ,Daejeon_city.trader.city;
  });
console.log("연습 3:" + Daejeon_all_city);

// 연습 4: 모든 거래자의 이름을 배열에 모아주세요.
const all_name = traders
  .filter((name_arr) => name_arr.trader.name)
  .map((name_arr) => {
    return name_arr.trader.name;
  });
console.log("연습 4:" + all_name);

// 연습 5: 서울에 사는 거래자의 모든 거래액의 총합 출력.
const seoul_all_city = traders.filter(
  (trs) => trs.trader.city === "서울"
);
//map으로 한거임
const values = seoul_all_city.map(sc => sc.value);
console.log(values);

let total = 0;
for (const v of values) {
  total += v;
}

// for (let i = 0; i < seoul_all_city.length; i++) {
//   total += seoul_all_city[i].value;
// }

// .map(seoul_city => {
//   let total = 0;
//   for(let i = 0; i < seoul_city.length; i++ ){
//     total += seoul_city[i].value;
//   }
//   return total;
// })
console.log("연습 5!:" + total);

// function allcities() {
//   const cities = [];
//   for (let trader of traders) {
//     if (cities.includes(trader.trader.city)) {
//       continue;
//     }
//     cities.push(trader.trader.city);
//   }
//   return cities;
// }
// const cities = allcities();
// console.log(cities);
