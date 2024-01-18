# VUE

> Learning vue by following online materials.

### Setup

> ```npx create-vue@latest``` - Then select requirements at setup stage. On creation run an rpm install. 

### How does Vue differ to react? 

> Conventions: Vue will conventionally break each component down into 3 different sections: 

* The output (or template): The html being rendered by said component - Will usually be placed within a template tag.

* The logic (or functionality/JS): The functionality for this compoent - Usuall within a script tag.

* The styling: The styling doesn't have to be within a style tag can be imported globally but when used within a style tag ```scoped``` can be applied to the tag to ensure the styles within component will only apply here.

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

> In order for a prop to be REACTIVE it needs to be wrapped in a ref. ```import { ref } from 'vue'```.
Note than when using ref variable returns will come wraped in a value object.

> The computed property can create REACTIVE values that rely on logic to determine their state.
