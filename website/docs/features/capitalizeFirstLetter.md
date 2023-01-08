# capitalizeFirstLetter

Capitalize the FIRST letter of the given text

## Usage

```tsx
import {capitalizeFirstLetter} from "lulinjs";

const capitalized = capitalizeFirstLetter("hello world!");
// Output: "Hello world!"
```

```jsx live
function CapitalizeFirstLetter(props) {
    return (
        <div>
            <h4>Result:</h4>
            <h2 style={{color:'rgb(102, 212, 189)'}}>{capitalizeFirstLetter("hello world!")}</h2>
        </div>
    );
}
```
