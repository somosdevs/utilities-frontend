# Utilities X
It's oir own project made for manage our things.

# Start project

### Install dependencies
```bash
yarn
```

### Start
```bash
yarn dev
```

# Component structure

### For Next.js pages
```js
import type { NextPage } from 'next';

const View: NextPage = () => (
  <div>
    ¡Hola!
  </div>
);

export default View;
```

### For components
```js
export default function Component() {
  return (
    <div>
      ¡Hola!
    </div>
  );
};
```

# Tailwind Styled Components

### Adding styles to Link - anchors
When styling anchors inside Links, you have to adding inline classes, because next doesn't take it entirely as an anchor
```js
return (
  <Link>
    <a className="text-white"></a>
  </Link>
)
```