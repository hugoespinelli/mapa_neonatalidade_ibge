# 📦 Mapa de Neonatalidade

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

This project consists of a demonstration of the use of the OpenLayers library using
IBGE WMS data.

![Map presentation](https://github.com/hugoespinelli/mapa_neonatalidade_ibge/blob/main/gif-presentation.gif)

## Installation

Clone this repo and npm install.

```bash
npm i
```

## Usage

### Development server

```bash
npm start
```

You can view the development server at `localhost:9000`.

### Production build

```bash
npm run build
```

> Note: Install [http-server](https://www.npmjs.com/package/http-server) globally to deploy a simple server.

```bash
npm i -g http-server
```

You can view the deploy by creating a server in `dist`.

```bash
cd dist && http-server
```

## Authors

- [Hugo Espinelli](https://github.com/hugoespinelli)
- Ursula Pfaltzgraff

## License

This project is open source and available under the [MIT License](LICENSE).
