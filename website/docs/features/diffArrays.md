# diffArrays

Difference between two arrays.

## Usage

```tsx
import {diffArrays} from "lulinjs";

const result = diffArrays([1, 2, 3], [2, 3]);
// Output: [1]
```

```jsx live
function DiffArrays(props) {
    return (
        <div>
            <h4>Result:</h4>
            <h2 style={{color:'rgb(102, 212, 189)'}}>
                {diffArrays([1, 2, 3], [2, 3])}
            </h2>
        </div>
    );
}
```
