# isBlankString

Capitalize the FIRST letter of the given text

## Usage

```tsx
import { isBlankString } from "lulinjs";

const result = isBlankString(" ")
// Output: true
```

```jsx live
function IsBlankString(props) {
    return (
        <div>
            <h4>Result:</h4>
            <h2 style={{color:'rgb(102, 212, 189)'}}>
                {isBlankString(" ").toString()}
            </h2>
        </div>
    );
}
```
