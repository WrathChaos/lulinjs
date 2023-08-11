# generateRandomNumber

Generate random number

## Usage

```tsx
import { generateRandomNumber } from "lulinjs";

const result = generateRandomNumber(0,100)
// Output: 35 (should number between given two parameters)
```

```jsx live
function GenerateRandomNumber() {
    return (
        <div>
            <h4>Result:</h4>
            <h2 style={{color: 'rgb(102, 212, 189)'}}>
                {generateRandomNumber(0, 100)}
            </h2>
        </div>
    );
}
```
