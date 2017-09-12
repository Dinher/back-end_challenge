Hello!

This repo contains the back-end challenge for Shopify's 2018 Winternship.

The challenge, outlined in the challenges page, looks to compile a list of
invalid customers and their incorrect input fields. I am the most comfortable
in web languages, thus this solution was found (fairly exhaustively) with
javascript and displayed in a browser.

- Notes
A python script, 'shopifyWebScript.py' was used to skim the API for the
JSON data. The script makes a first pass through the API to recieve the 
pagination data. From there it will place the customers into an array of 
objects which is then saved as a javascript file. This file contains the 
JSON data as a variable so it is more readily accessible.

The validation object within the JSON also implies that it should be used
to validate the customers within that page exclusively. Looking through each
page, however, shows that the validation requirements for each customer was
consistent, thus I didn't include this functionality.


Best,
Nguyen
