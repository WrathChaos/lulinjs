# capitalize

Capitalize the all letters of the given text

## Usage

```tsx
import {capitalize} from "lulinjs";

const capitalized = capitalize("hello world!");
// Output: "HELLO WORLD!"
```

```jsx live
function Capitalize(props) {
    return (
        <div>
            <h4>Result:</h4>
            <h2 style={{color:'rgb(102, 212, 189)'}}>
                {capitalize("hello world!")}
            </h2>
        </div>
    );
}
```
