# Floragreensproouts Shopify_APP

# Application Setup

# Running Application

1. **Install shopify-cli:**
   - Install shopify-cli on your machine to be able to use Shopify commands. If you are using a macOS, you can use Homebrew to install your shopify-cli
   -For macOS, run 
   a. brew tap shopify/shopify 
   b. brew install shopify-cli.
   -To know if you have successfully installed your shopify-cli. Run 'shopify version' on your terminal. If you see the version number, then it was successful.

2. **Install Dependencies:**
   - Open your terminal.
   - Run the following command to install project dependencies using npm:
     ```
     cd into your root folder
     npm install
     ```
     cd into web folder
     npm install

   This command will download and install all the necessary packages specified in your `package.json` file.

  - Change your directory back to your root folder

3. **Installing your app in your store:**

    - On your terminal.
    -Run 

    npm run shopify app dev -- --reset
    ```
    -You will then be asked the following questions(If its your first time using shopify-cli, you would have to login to your shopify partners account. Ensure its the account associated with the store you want to build on)

    a. Which organization is this work for?
    - Select your shopify partner organization associated with your store

    b. Create this project as a new app on Shopify?
    - Choose "yes"
    - Type in any app name of your choice. Then press ENTER

    - Note: You might be asked to name your .toml file. Simply use your app name.

    c.  Which store would you like to use to view your project?
    - Select the store you want to build your app on.

    d. Have Shopify automatically update your app's URL in order to create a preview experience?
    - Choose "yes"

    -Then you will see your Preview URL. You can either copy the url and paste on your browser. OR just press 'p'. 

    e. Install your app in your store. (It might take few minutes to display your user interface).

    - You have successfully INSTALLED your app in your store. 

4. **Deploy your application:**

- Use Fly.io(Recommended)
-Please watch this video on how to use fly.io in deploying your application

  Watch from time 3:17 - 11:40
    ```
    https://www.youtube.com/watch?v=HOysnl2Yo4s
     

