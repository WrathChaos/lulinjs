# removeAllDuplicates

Removes all duplicates from an array.

## Usage

```tsx
import { removeAllDuplicates } from "lulinjs";

const result = removeAllDuplicates([1,3,5,3,3,8,9])
// Output: [1, 3, 5, 8, 9]
```

```jsx live
import { removeAllDuplicates } from "./lulin";

function RemoveAllDuplicates() {
    return (
        <div>
            <h4>Result:</h4>
            <h2 style={{color: 'rgb(102, 212, 189)'}}>
                {removeAllDuplicates([1,3,5,3,3,8,9])}
            </h2>
        </div>
    );
}
```
