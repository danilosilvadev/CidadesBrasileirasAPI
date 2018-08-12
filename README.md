# CidadesBrasileirasAPI
API com todas as cidades brasileiras baseada no gist https://gist.github.com/letanure/3012978

### Instalation:

`npm i cidadesbrasileirasapi`

## Example:

```js
import React, { Component } from 'react';
import UFs from 'cidadesbrasileirasapi/API/estados'

class App extends Component {
  render() {
    return (
      <div>
        Cidades
        <ul>
        {UFs['AL'].cidades.map((cidade) => (
          <li>{cidade}</li>
        ))}
        </ul>
      </div>
    );
  }
}

export default App;
```