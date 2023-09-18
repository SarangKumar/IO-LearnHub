The `<input>` tag is one of the most versatile and commonly used form elements in HTML. It allows users to enter data, which can be submitted to a server or processed by JavaScript on the client side. Here's how to use the `<input>` tag:

1. **Basic Input Field**:

   To create a simple text input field, you can use the `<input>` tag with the `type` attribute set to "text":

   ```html
   <input type="text" name="username" placeholder="Enter your username">
   ```

   - `type="text"` specifies that this is a text input field.
   - `name` is used to give the input a name that can be used to identify it when the form is submitted.

2. **Password Input**:

   To create a password input field that hides the characters as they are typed, use the `type` attribute set to "password":

   ```html
   <input type="password" name="password" placeholder="Enter your password">
   ```

3. **Checkbox Input**:

   To create a checkbox input, use the `type` attribute set to "checkbox":

   ```html
   <input type="checkbox" name="subscribe" id="subscribe">
   <label for="subscribe">Subscribe to our newsletter</label>
   ```

   - The `<label>` element is used to provide a label for the checkbox and is associated with it using the `for` attribute.

4. **Radio Buttons**:

   To create radio buttons where only one option can be selected from a group, use the `type` attribute set to "radio" and provide the same `name` for each option in the group:

   ```html
   <input type="radio" name="gender" value="male" id="male">
   <label for="male">Male</label>

   <input type="radio" name="gender" value="female" id="female">
   <label for="female">Female</label>
   ```

5. **Submit Button**:

   To create a submit button that submits the form when clicked, use the `type` attribute set to "submit":

   ```html
   <input type="submit" value="Submit">
   ```

6. **Hidden Input**:

   Hidden inputs are not visible to users but can be used to store data that needs to be sent with the form submission. Use the `type` attribute set to "hidden":

   ```html
   <input type="hidden" name="hiddenField" value="hiddenValue">
   ```

7. **File Input**:

   To allow users to upload files, use the `type` attribute set to "file":

   ```html
   <input type="file" name="fileUpload">
   ```

These are some of the common uses of the `<input>` tag in HTML forms. The `type` attribute determines the type of input element and how it behaves, and the `name` attribute is used to identify the input when the form is submitted. You can also use various attributes like `placeholder`, `value`, and `required` to further customize and validate input fields.