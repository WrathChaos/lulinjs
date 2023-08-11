# diffDatesByDay

Difference between two dates in days.

## Usage

```tsx
import { diffDatesByDay } from "lulinjs";

const result = diffDatesByDay(1673493926000, 1673017526000);
// Output: 5
```

```jsx live
function DiffDatesByDay(props) {
    return (
        <div>
            <h4>Result:</h4>
            <h2 style={{color:'rgb(102, 212, 189)'}}>
                {diffDatesByDay(1673493926000, 1673017526000)}
            </h2>
        </div>
    );
}
```
