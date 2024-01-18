<template>
  <h3>History</h3>
  <ul id="list" class="list">
    <li v-for="transaction in transactions" v-bind:key="transaction.id" :class="transaction.amount < 0 ? 'minus' : 'plus'">
      {{ transaction.text }} <span>{{ transaction.amount }}</span><button class="delete-btn">x</button>
    </li>
  </ul>
</template>

<!-- <script>
  export default {
    data() {
      return {
        transactions: [
          { id: 1, text: 'Candy', amount: -112.10 },
          { id: 2, text: 'Refund', amount: 299.97 },
          { id: 3, text: 'Mbappe fund', amount: -25.25 },
          { id: 4, text: 'Cabbages', amount: -3.22 },
          { id: 5, text: 'Paycheck', amount: 500 }
        ]
      }
    }
  }
</script> -->

<!-- <script>
  export default {
    setup() {
      const transactions =  [
        { id: 1, text: 'Candy', amount: -112.10 },
        { id: 2, text: 'Refund', amount: 299.97 },
        { id: 3, text: 'Mbappe fund', amount: -25.25 },
        { id: 4, text: 'Cabbages', amount: -3.22 },
        { id: 5, text: 'Paycheck', amount: 500 }
      ];

      could also define a function here as opposed to hard coding data.

      myFunction() {
        return transactions
      }

      return {
        transactions,

        return myFunction()
      }
    }
  }
</script> -->

<!-- ^^^ Both above approaches for handling data within a component work however  -->
<!-- The below approach is the most recent and by utilising the setup keyword in the script tag we remove the need  -->

<script setup>
   const transactions = [
    { id: 1, text: 'Candy', amount: -112.10 },
    { id: 2, text: 'Refund', amount: 299.97 },
    { id: 3, text: 'Mbappe fund', amount: -25.25 },
    { id: 4, text: 'Cabbages', amount: -3.22 },
    { id: 5, text: 'Paycheck', amount: 500 }
  ]
</script>