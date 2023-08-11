# mergeArrays

Merge two arrays into one.

## Usage

```tsx
import { mergeArrays } from "lulinjs";

const result = mergeArrays([1,3,5], [2,4,6]);
// Output: [1,2,3,4,5,6]
```

```jsx live
import {mergeArrays} from "./lulin";

function MergeArrays() {
    return (
        <div>
            <h4>Result:</h4>
            <h2 style={{color: 'rgb(102, 212, 189)'}}>
                {mergeArrays([1,3,5], [2,4,6])}
            </h2>
        </div>
    );
}
```
