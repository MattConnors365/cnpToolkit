# cnpToolkit: CNP generator and analyzer

A library for generating and analyzing Romanian CNPs (Numerical Personal Codes). 
This project aims to provide a reliable way to validate and create CNPs programmatically.

The project is written in pure JavaScript with an optional UI built with HTML, CSS and JavaScript.
The library may not work in Node.js, as it uses import/export statements from ES6 and not the `require` keyword present in Node applications.

---

## Features

- **Generate CNPs** for Romanian citizens and foreigners.
- **Analyze CNPs** to extract details such as:
  - Date of Birth
  - Sex at Birth
  - Issuing County
  - Validity

---

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/MattConnors365/cnpToolkit.git```
2. Navigate to the project folder:
   ```bash
   cd cnp-generator```

---

## Usage

The library and associated UI can be used to generate and analyze CNPs, the two processes effectively working in reverse of each other.
Each of these tasks have an overarching function - generateCNP and, respectively, analyzeCNP, both found inside the cnpUtils.js file.
For the purpose of modularity, I chose to put most functions in separate files. Everything uses ES6 import/export statements, so you can use any of the individual helper functions and discard the rest.

I tried adding JSDocs to almost all functions in the project, and if using an IDE like Visual Studio Code, you should see them appear as tooltips when using them.

### Generation

The generateCNP() function takes 7 arguments:
- sex,
- yearOfBirth,
- monthOfBirth,
- dayOfBirth,
- countyName,
- isForeigner,
- sequenceDigits

After processing, it will return a 13-character long string.

### Analyzation

The analyzeCNP() function takes 1 argument:
- cnp

After processing, it will return an object with 8 different properties.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
  bash
  git checkout -b feature/your-feature
3. Commit your changes:
  bash
  git commit -am 'Add new feature'
4. Push to your branch:
  bash
  git push origin feature/your-feature
5. Create a Pull Request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- I used [Wikipedia's article on CNPs](https://ro.wikipedia.org/wiki/Cod_numeric_personal_(Rom%C3%A2nia)) and how they're assigned. Unfortunately it is only available in Romanian, but I have outlined most of the steps inside the JSDocs.

- I used OpenAI's ChatGPT quite extensively throughout this project, and while I ultimately wrote the majority of the code, I cannot go forward without acknowledging this.
