# Script grabs json data from shopify site and places into a single file

import requests		# functions for HTTP requests
import json         # for JSON writing/parsing

# creates/saves to customers.js
file = open('data.js','w')

# base URL
url = 'https://backend-challenge-winter-2017.herokuapp.com/customers.json?page='
pageNum = 1
fullUrl = url+str(pageNum)

#grab pagination information
res = requests.get(fullUrl)
parseJson = json.loads(res.text)
totalCustomers = parseJson["pagination"]["total"]
perPage = parseJson["pagination"]["per_page"]

currentCount = 0;
jsonOutput = []

# get customer information until final customer
while currentCount < totalCustomers:
  fullUrl = url + str(pageNum)
  print(fullUrl + '\n')
  res = requests.get(fullUrl)  
  
  responseData = json.loads(res.text)
  for customer in responseData["customers"]:
    # add customer to array
    print(customer)
    jsonOutput.append(customer)
    currentCount = currentCount + 1
  
  #increment page
  if currentCount%perPage == 0:
    pageNum = pageNum + 1

print(jsonOutput)
# Hardcode json data into JS variable 
jsVariable = "var data = ";
file.write(jsVariable + json.dumps(jsonOutput, indent=2, sort_keys=True))
file.close()