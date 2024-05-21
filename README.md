# Password Generator Application

This is a simple password generator application built with Angular. The application allows users to generate a random password based on specified criteria, including the inclusion of alphabets, numbers, and special characters. The password will always contain at least one character from each selected category if the length allows.

## Features

- Generate a random password of a specified length
- Option to include alphabets (both lowercase and uppercase)
- Option to include numbers
- Option to include special characters
- Ensures at least one character from each selected category is included in the password if the length allows

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/password-generator.git
    ```
2. Navigate to the project directory:
    ```bash
    cd password-generator
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

## Usage

1. Start the development server:
    ```bash
    ng serve
    ```
2. Open your browser and navigate to `http://localhost:4200`.

3. Use the application:
    - Set the desired password length.
    - Select the character types you want to include (alphabets, numbers, special characters).
    - Click the "Generate Password" button.
    - The generated password will be displayed.

## Code Explanation

The main component of the application is `AppComponent`. Here is a brief explanation of its functionality:

- **Properties**:
  - `length`: The desired length of the generated password.
  - `includeAlphabets`: Boolean indicating whether to include alphabets in the password.
  - `includeNumbers`: Boolean indicating whether to include numbers in the password.
  - `includeSpecialCharacters`: Boolean indicating whether to include special characters in the password.
  - `password`: The generated password.

- **Methods**:
  - `onUpdateLength(event: Event)`: Updates the `length` property based on user input.
  - `onChangeUseAlphabets()`: Toggles the `includeAlphabets` property.
  - `onChangeUseNumbers()`: Toggles the `includeNumbers` property.
  - `onChangeUseSpecialCharacters()`: Toggles the `includeSpecialCharacters` property.
  - `onButtonClick()`: Generates the password based on selected criteria.
  - `shuffle(string: string)`: Shuffles the characters in a string to avoid predictable patterns.

The password generation logic ensures that if the length is sufficient, the password includes at least one character from each selected category. If the length is less than the number of selected categories, the password will be truncated to the specified length.


# Thankyou
