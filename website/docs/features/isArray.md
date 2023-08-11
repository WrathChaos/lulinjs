# isArray

Check if the given value is an array.

## Usage

```tsx
import { isArray } from "lulinjs";

const result = isArray([1,5,9])
// Output: true
```

```jsx live
import {isArray} from "./lulin";

function IsArray() {
    return (
        <div>
            <h4>Result:</h4>
            <h2 style={{color: 'rgb(102, 212, 189)'}}>
                {isArray([1,5,9])}
            </h2>
        </div>
    );
}
```
