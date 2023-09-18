# Installing Node.js 

## Installing on `macOS`

1. **Check if Node.js is already installed:**
   Open the Terminal application and run the following command to check if Node.js is already installed:
   ```shell
   node -v
   ```

2. **Install Homebrew (if not already installed):**
   If Homebrew is not installed, you can install it using this command:
   ```shell
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

3. **Install Node.js using Homebrew:**
   Once Homebrew is installed, use the following command to install Node.js:
   ```shell
   brew install node
   ```

4. **Verify Node.js installation:**
   Verify that Node.js and npm (Node Package Manager) are installed by running:
   ```shell
   node -v
   npm -v
   ```

## Installing on `Windows`

1. **Download Node.js Installer:**
   Visit the official [Node.js website](https://nodejs.org/) and download the Windows Installer (`.msi`) for the LTS (Long Term Support) version.

2. **Run the Installer:**
   Double-click the downloaded `.msi` file to run the installer.

3. **Accept License Agreement:**
   Follow the installer prompts and accept the license agreement.

4. **Choose Installation Options:**
   You can choose the installation location and whether to install the npm package manager alongside Node.js. The default options should work for most users.

5. **Complete Installation:**
   Click "Next" and follow the remaining installer instructions to complete the installation.

6. **Verify Node.js installation:**
   Open the Command Prompt and run the following commands to verify Node.js and npm installation:
   ```shell
   node -v
   npm -v
   ```

That's it! You've successfully installed Node.js on your macOS or Windows PC. You can now start using Node.js to develop and run JavaScript applications.