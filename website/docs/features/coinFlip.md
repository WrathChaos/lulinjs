# coinFlip

Coin flip

## Usage

```tsx
import { coinFlip } from "lulinjs";

const result = coinFlip()
// Output: true / false
```

```jsx live
import { coinFlip } from "./lulin";

function CoinFlip() {
    return (
        <div>
            <h4>Result:</h4>
            <h2 style={{color: 'rgb(102, 212, 189)'}}>
                {coinFlip()}
            </h2>
        </div>
    );
}
```
