![logo.svg](public/logo.svg)

# SylhetiLang Documentation

Welcome to **SylhetiLang** — a playful Sylheti-language based programming language that transpiles directly into
JavaScript. With SylhetiLang, you can write code in your native Sylheti style and run it in Node.js or your favorite
editor.

**Download npm package** https://www.npmjs.com/package/sylheti-lang

---

## 🔹 Variable Declaration

**Keyword:** `vaisab ow new`
**JS Equivalent:** `const`

Use this to declare constants (values that don’t change).

**Example:**

```syl
vaisab ow new nam = 'Asfak'
vaisab ow new boyosh = 20
```

**Transpiled JS:**

```js
const nam = 'Asfak'
const boyosh = 25
```

---

## 🔹 Console

**Keyword:** `dekaw cain`
**JS Equivalent:** `console.log`

Use this to print text, numbers, or any value to the console.

**Example:**

```syl
dekaw cain 'Asfak temon valo developer na!'
dekaw cain nam
dekaw cain boyosh
```

**Transpiled JS:**

```js
console.log('Asfak temon valo developer na!')
console.log(nam)
console.log(boyosh)
```

---

## 🔹 Functions

### Declare a Function

**Keyword:** `ikta amar bawandari`
**JS Equivalent:** `function`

**Example:**

```syl
ikta amar bawandari greet(ke) {
  dekaw cain 'Areh, ' + ke + '!'
}
```

**Transpiled JS:**

```js
function greet(ke) {
    console.log('Areh, ' + ke + '!')
}
```

---

### Return a Value

**Keyword:** `okta pataw`
**JS Equivalent:** `return`

**Example:**

```syl
ikta amar bawandari add(x, y) {
  okta pataw x + y
}
dekaw cain add(3, 5)
```

**Output:**

```
8
```

---

## 🔹 Conditionals

### If Statement

**Keyword:** `jodi okta oy`
**JS Equivalent:** `if`

**Example:**

```syl
jodi okta oy (boyosh > 18) {
  dekaw cain 'Adult'
}
```

---

### Else Statement

**Keyword:** `ar na oile`
**JS Equivalent:** `else`

**Example:**

```syl
jodi okta oy (boyosh > 18) {
  dekaw cain 'Adult'
} ar na oile {
  dekaw cain 'Child'
}
```

---

## 🔹 Loops

**Keyword:** `lesri calaw`
**JS Equivalent:** `for`

**Example:**

```syl
lesri calaw (let i = 0; i < 5; i++) {
  dekaw cain i
}
```

**Output:**

```
0
1
2
3
4
```

---

## 🔹 Boolean and Null Values

| Sylheti Keyword | JS Equivalent | Meaning            |
|-----------------|---------------|--------------------|
| `kissu nai`     | `null`        | Represents nothing |
| `hasa`          | `true`        | Boolean true       |
| `misa`          | `false`       | Boolean false      |

**Example:**

```syl
vaisab ow new status = hasa
jodi okta oy (status) {
  dekaw cain 'All good!'
} ar na oile {
  dekaw cain 'Something wrong!'
}
```

**Output:**

```
All good!
```

---

## 🔹 Complete Example

Here’s a small program combining everything:

```syl
vaisab ow new nam = 'Asfak'
vaisab ow new boyosh = 20
vaisab ow new adult = hasa

ikta amar bawandari greet() {
  dekaw cain 'Areh, ' + nam + '!'
}

greet()

jodi okta oy (boyosh >= 18 ar adult) {
  dekaw cain 'Adult Sylheti!'
} ar na oile {
  dekaw cain 'Young Sylheti!'
}

lesri calaw (let i = 0; i < 3; i++) {
  dekaw cain 'Count: ' + i
}
```

**Output:**

```
Areh, Asfak!
Adult Sylheti!
Count: 0
Count: 1
Count: 2
```

---

## Using SylhetiLang via NPM

You can install **SylhetiLang** globally on your machine and run your Sylheti code directly from the terminal.

### 1️⃣ Install SylhetiLang globally

```bash
npm install -g sylheti-lang
```

> This makes the `sylheti` command available globally.

---

### 2️⃣ Create a SylhetiLang file

1. Create a new file **with our `.syl` extension**. For example: you created a file called `hello.syl`.

2. Open the file in your favorite editor and write your SylhetiLang code:

```syl
vaisab ow new nam = 'Asfak'

ikta amar bawandari greet(ke) {
  dekaw cain('Areh, ' + ke + '!')
}

greet(nam)
```

---

### 3️⃣ Run your SylhetiLang file

In the terminal, run:

```bash
sylheti hello.syl
```

You should see the output:

```
Areh, Asfak!
```

---

## 🔹 Quick Tips

1. End statements naturally — no semicolons needed.
2. Use spaces in keywords exactly: `vaisab ow new`, `dekaw cain`.
3. Loops, functions, and conditionals follow the `{ }` style like JavaScript.
4. You can combine keywords: `jodi okta oy (condition ar status)` → `if (condition && status)`.
5. Test small code in your web playground before running in terminal.
