# generateRandomHexColor

Generate random hex color

## Usage

```tsx
import { generateRandomHexColor } from "lulinjs";

const result = generateRandomHexColor()
// Output: #513401 (Random hex color each time)
```

```jsx live
function GenerateRandomHexColor() {
    return (
        <div>
            <h4>Result:</h4>
            <h2 style={{color: 'rgb(102, 212, 189)'}}>
                {generateRandomHexColor()}
            </h2>
        </div>
    );
}
```
