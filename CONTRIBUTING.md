# Quizzer

## Requisitos

Certifique-se de ter os seguintes itens instalados:

- **[Node.js](https://nodejs.org/)** (versão LTS recomendada)
- **[Yarn](https://yarnpkg.com/)** ou outro gerenciador de pacotes de sua escolha
- **[React Native CLI](https://reactnative.dev/docs/environment-setup)**
- **[Android Studio](https://developer.android.com/studio)** (para rodar no emulador Android)
- **Xcode** (para rodar no iOS)

---

## Instalação

Instale as dependências:

```sh
yarn install
```

---

## Executando o Aplicativo

O app deve ser iniciado em **dois terminais separados**:

### **Android**

1. Inicie o Metro Bundler:

```sh
yarn start -c
```

2. Execute o app em um dispositivo ou emulador Android:

```sh
yarn android
```

### **iOS**

1. Inicie o Metro Bundler:

```sh
yarn start -c
```

2. Execute o app no simulador iOS:

```sh
yarn ios
```

📌 **Nota:** Para rodar no iOS, é necessário um ambiente macOS com **Xcode** instalado.

---

Ø
Caso tenha dúvidas ou encontre problemas ao rodar o projeto, consulte a **[documentação do React Native](https://reactnative.dev/docs/environment-setup)**.
