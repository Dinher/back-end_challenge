Hello!

This repo contains the back-end challenge for Shopify's 2018 Winternship.

The challenge, outlined in the challenges page, looks to compile a list of
invalid customers and their incorrect input fields. I am the most comfortable
in web languages, thus this solution was found (fairly exhaustively) with
javascript and displayed in a browser.

- Notes
A python script, 'shopifyWebScript.py' was used to skim the API for the
JSON data. I didn't use the script to read the data to decide itself to 
keep going. In this, the script places the JSON inside of variables so it
may be readily utilized in javascript calls. Preferably, the script would
skim the JSON and only extract the customers from each page, adding it to a
centralized list.

The validation object within the JSON also implies that it should be used
to validate the customers within that page exclusively. Looking through each
page, however, shows that the validation requirements for each customer was
consistent, thus I didn't include this functionality.


Best,
Nguyen