# VUE

> Learning vue by following online materials.

### Setup

> ```npx create-vue@latest``` - Then select requirements at setup stage. On creation run an rpm install. 

> If opting out of router requirements can use ```npm install vue-router@4``` to add routing. 

### How does Vue differ to react? 

> Conventions: Vue will conventionally break each component down into 3 different sections: 

* The output (or template): The html being rendered by said component - Will usually be placed within a template tag.

* The logic (or functionality/JS): The functionality for this compoent - Usuall within a script tag.

* The styling: The styling doesn't have to be within a style tag can be imported globally but when used within a style tag ```scoped``` can be applied to the tag to ensure the styles within component will only apply here.

> VUE unlike REACT is only going to execute the logic once on its initial render. Unlike REACT, VUE allows you to OPT-IN to using reactivity whereas REACT will always trigger a re-render when a mutation takes place unless specified otherwise (By using a useMemo)

> Vue handles component lifecycles differently to react.

> Vue uses 'Mutated based reaction/reactivity' - To trigger a re-render in Vue we don't call a function like we would in react such as ```setCount```. Instead Vue relies on the reassigning of state for a certain value. Any templates that use the mutated value will be re-rendered. 

> The only way to make a change/re-render is by 'opting' elements in to reactivity. 

> explicitly calling watchEffect or adding ref(similar to useState but exists as part of Vues reactivity API)

> Uses directives for common logic such as looping through data: ```v-for```

> Uses double curly braces {{}} when accessing an attr from prop or dataset.

> When passing props to a component the syntax looks as so: ```:transactions="transactions"```. The transaction prop will then need to be defined within a script tag inside of the component it is being passed to. 
```
const props = defineProps({
    transactions: {
      type: Array,
      required: true
    }
  })
```

> If a prop is of type number, when passing it to the chosen component you can add + to the start of the string to set it as a Number: ```<IncomeExpenses :income="+income" :outgoings="+outgoings" />```

> In order for a prop to be REACTIVE it needs to be wrapped in a ref. ```import { ref } from 'vue'```.
IMPORTANT NOTE: when using ```ref``` variable returns will come wraped in a value object.

> The computed property can create REACTIVE values that rely on logic to determine their state.

> Forms: Inline with the form element adding ```@submit.prevent="onSubmit"``` is the same as referencing an onSubmit function in react. the ```.prevent``` is the same as e => e.preventDefault(). 

> Form directives: can use ```v-model``` on input elements in forms to reference those input values.

> Other directives: ```v-if``` => ```<p v-if="likes > 0">``` (Render me if) ```v-else``` => (Render me else)

> Buttons: buttons use a ```@click``` which behaves like onClick in React. ```@click="deleteTransaction(transaction.id)"```

> EMITS - An Emit can be used to pass data UP to the parent component. You define all your emits by passing their name as a string inside of an array => ```const emit = defineEmits(['transactionSubmitted']);```.  You can then pass both the emit name and the data required for that emit as the two params in the emit method call: ```emit('transactionSubmitted', transactionData)```. You will then need to validate your emit inside of the parent component that is receiving the data as so: ```<AddTransaction @transactionSubmitted="handleTransactionSubmitted"/>```

> onMounted - Acts like useEffect from react. 