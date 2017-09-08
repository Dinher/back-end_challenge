# Script grabs json data from shopify site and places into a single file

import requests		#functions for HTTP requests

# creates/saves to customers.js
file = open('customers.js','w')

# base URL
url = 'https://backend-challenge-winter-2017.herokuapp.com/customers.json?page='

# increments pages, 5 pages have data
#TODO:: dynamically parse through pages by 'pagination' object
for page in range(1,5):
	fullURL = url+str(page)
	print(fullURL+'\n')          #verify in console
	res = requests.get(fullURL)
	
	# res.text contains json data
	print(res.text+'\n')         #verify in console
	file.write('var page'+str(page)+'='+res.text+'\n')

file.close()