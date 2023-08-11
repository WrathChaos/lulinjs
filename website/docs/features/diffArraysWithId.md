# diffArraysWithId

Diff two arrays of objects with an id property.

## Usage

```tsx
import { diffArraysWithId } from "lulinjs";

const result = diffArraysWithId(
    [{ id: 1 }, { id: 2 }, { id: 3 }],
    [{ id: 2 }, { id: 3 }],
);
// Output: [{ id: 1 }]
```

