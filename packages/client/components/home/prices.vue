<template>
  <div class="w-full pt-4 overflow-hidden">
    <h2 class="max-w-6xl m-auto mb-16 h2 sectionTitle">Pricing</h2>
    <div class="flex justify-between max-w-6xl m-auto mb-16">
      <div
v-for="{ id, title, price, subTitle, conditions } in options" :key="id"
        class="priceBox w-12/3" :class="{ 'selectedPrice': id == index }" @click="index = id
        ">
        <p class="title">{{ title }}</p>
        <p class="subtitle">{{ subTitle }}</p>
        <p class="price">{{ price }}</p>
        <p class="month" style="margin-bottom: 43px;">/month</p>
        <dl class="text-left conditions">
          <dd v-for="item in conditions" :key="item" class="flex items-center">
            <svg class="mr-1" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7.77082 12.7917L13.6667 6.89591L12.7083 5.95841L7.77082 10.8959L5.27082 8.39591L4.33332 9.33341L7.77082 12.7917ZM8.99999 17.3334C7.8611 17.3334 6.78471 17.1147 5.77082 16.6772C4.75693 16.2397 3.87152 15.6424 3.11457 14.8855C2.35763 14.1286 1.76041 13.2431 1.32291 12.2292C0.885406 11.2154 0.666656 10.139 0.666656 9.00008C0.666656 7.8473 0.885406 6.76397 1.32291 5.75008C1.76041 4.73619 2.35763 3.85425 3.11457 3.10425C3.87152 2.35425 4.75693 1.7605 5.77082 1.323C6.78471 0.885498 7.8611 0.666748 8.99999 0.666748C10.1528 0.666748 11.2361 0.885498 12.25 1.323C13.2639 1.7605 14.1458 2.35425 14.8958 3.10425C15.6458 3.85425 16.2396 4.73619 16.6771 5.75008C17.1146 6.76397 17.3333 7.8473 17.3333 9.00008C17.3333 10.139 17.1146 11.2154 16.6771 12.2292C16.2396 13.2431 15.6458 14.1286 14.8958 14.8855C14.1458 15.6424 13.2639 16.2397 12.25 16.6772C11.2361 17.1147 10.1528 17.3334 8.99999 17.3334ZM8.99999 16.0834C10.9722 16.0834 12.6458 15.3924 14.0208 14.0105C15.3958 12.6286 16.0833 10.9584 16.0833 9.00008C16.0833 7.02786 15.3958 5.35425 14.0208 3.97925C12.6458 2.60425 10.9722 1.91675 8.99999 1.91675C7.04166 1.91675 5.37152 2.60425 3.98957 3.97925C2.60763 5.35425 1.91666 7.02786 1.91666 9.00008C1.91666 10.9584 2.60763 12.6286 3.98957 14.0105C5.37152 15.3924 7.04166 16.0834 8.99999 16.0834Z"
                fill="#61CC81" />
            </svg>

            {{ item }}
          </dd>
        </dl>
        <a href="https://ap.shopflex.io" target="_blank">
          <button class="btn">
            select plan
          </button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Prices",
  data() {
    const options = [
      {
        id: 1,
        title: "Free",
        subTitle: "Dip your toes in automation, we won't charge a dime.",
        price: "$0",
        conditions: [
          "2 active workflows",
          "50 runs / month",
          "10 Contacts",
          "1 Connected shop",
          "Chat & Email support"
        ]
      },
      {
        id: 2,
        title: "Basic",
        subTitle: "All essential features for growing buds.",
        price: "$9.99",
        conditions: [
          "5 active workflows",
          "5,000 runs / month",
          "1,000 Contacts",
          "200 Email quota",
          "1 Connected shop",
          "Workflow set up service",
          "Chat & Email support",
        ]
      },
      {
        id: 3,
        title: "Professional",
        subTitle: "Level up with extra quota, perfect for scaling up.",
        price: "$39.99",
        conditions: [
          "20 active workflows",
          "20,000 runs / month",
          "25,000 Contacts",
          "500 Email quota",
          "2 Connected shop",
          "Workflow set up service",
          "Chat & Email support",
        ]
      },
      {
        id: 4,
        title: "Enterprise",
        subTitle: "Unlimited quota & dedicated support tailored for the big leagues.",
        price: "$139.99",
        conditions: [
          "Unlimited active workflows",
          "Unlimited runs / month",
          "50,000 Contacts",
          "1,000 Email quota",
          "5 Connected shops",
          "Workflow set up service",
          "Dedicated customer support",
        ]
      },
    ]
    return {
      options,
      index: 1
    }
  },
  computed: {
    offset() {
      return this.index > 2
        ? "margin-left: calc((100vw - 1580px) + ( 1152px - 100vw)/2);"
        : "margin-left: calc((100vw - 1152px)/2);"
    }
  }
}
</script>

<style lang="scss" scoped>
.priceBox {
  flex-basis: 280px;
  height: 700px;
  background: #EFF4FF;
  border: 3px solid #61CC81;
  box-shadow: -4px -4px 4px rgba(255, 255, 255, 0.6), 4px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  box-sizing: border-box;
  color: #5C6C8B;
  text-align: center;
  font-family: 'Apple SD Gothic Neo';
  padding-top: 40px;
  border: 0px solid #61CC81;
  box-sizing: border-box;

  .title {
    font-weight: 700;
    font-size: 26px;
    line-height: 58px;
    margin-bottom: 10px;
  }

  .subtitle {
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    height: 90px;
    width: 216px;
    display: inline-block;
  }

  .month {
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
  }

  .price {
    font-weight: 700;
    font-size: 42px;
    line-height: 96px;
    margin-bottom: 19px;
  }

  .btn {
    background: #3C6EEF;
    border-radius: 50px;
    width: 150px;
    height: 45px;
    color: white;
    font-size: 16px;
  }

  .conditions {
    font-weight: 700;
    font-size: 12px;
    line-height: 180%;
    padding-left: 50px;
    height: 200px;
  }
}

.selectedPrice {
  border-width: 3px;

  .price {
    color: #61CC81;
  }

  .btn {
    background: #61CC81;
  }
}
</style>
