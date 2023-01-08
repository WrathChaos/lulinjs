# capitalizeAllStartingWords

Capitalize the FIRST letter of the given text

## Usage

```tsx
import {capitalizeAllStartingWords} from "lulinjs";

const capitalized = capitalizeAllStartingWords("hello world! what's up");
// Output: "Hello World! What's Up"
```

```jsx live
function CapitalizeAllStartingWords(props) {
    return (
        <div>
            <h4>Result:</h4>
            <h2 style={{color:'rgb(102, 212, 189)'}}>{capitalizeAllStartingWords("hello world! what's up")}</h2>
        </div>
    );
}
```
