/*
 ** Global Variables
 */
var invalidCustomers = [];
var minLength = 5;
var maxLength = -1;

/*
 ** DOM Objects
 */
var output = document.getElementById('output');
var invalidDiv = document.getElementById('invalidCustomers');

/*
 ** Functions
 */

// Reads data from 'customers.js'
function readCustomers() {
  // Table Header
  output.innerHTML += "<ul class='header'><li>id</li><li>name</li><li>email</li><li>age</li><li>Country</li><li>newsletter</li><li>Validation</li></ul>"
  output.innerHTML += '<h2>Page 1</h2>';

  // Iterates customers in each 'page'
  for (var person in page1.customers) {
    describePerson(page1.customers[person])
  }
  output.innerHTML += '<h2>Page 2</h2>';
  for (var person in page2.customers) {
    describePerson(page2.customers[person])
  }
  output.innerHTML += '<h2>Page 3</h2>';
  for (var person in page3.customers) {
    describePerson(page3.customers[person])
  }
  output.innerHTML += '<h2>Page 4</h2>';
  for (var person in page4.customers) {
    describePerson(page4.customers[person])
  }

  // Displays final json of invalid customers
  invalidDiv.innerHTML = JSON.stringify(invalidCustomers, null, 2);
}

// Prepares and displays person object attributes
function describePerson(obj) {
  var id, name, email, age, country, newsletter, val;

  // arrayay of invalid fields
  var invalid_fields;

  id = '<li>' + obj.id + '</li>';
  name = '<li>' + obj.name + '</li>';
  email = '<li>' + obj.email + '</li>';
  age = '<li>' + obj.age + '</li>';
  country = '<li>' + obj.country + '</li>';
  newsletter = '<li>' + obj.newsletter + '</li>';

  // Checks validation and lists invalid fields
  if (validateCustomer(obj) == "success") {
    val = '<li>OK</li>';
  } else {
    invalid_fields = validateCustomer(obj);
    // Create invalid customer object
    var invalidCust = {
      'id': obj.id,
      'invalid_fields': invalid_fields
    }
    // Push invalid customer to final JSON output
    invalidCustomers.push(invalidCust);
    val = '<li>FAIL</li>'
  }
  output.innerHTML += '<ul>' + id + name + email + age + country + newsletter + val + '</ul>';
}

// Not reading validations from JSON response but from understood requirements
// All 'pages' have same validation requirements
//TODO:: Dynamically apply validations if they occur in validations objects
function validateCustomer(cust) {
  var invalid_array = [];
  var foundError = false;

  // Validates name
  if (!validateType(cust.name, 'string') || !validateMinLength(cust.name)) {
    invalid_array.push('name');
    foundError = true;
  }
  // Validates email
  if (!validateType(cust.email, 'string')) {
    invalid_array.push('email');
    foundError = true;
  }
  // Validates newsletter
  if(!cust.newsletter || cust.newsletter == 'false' ) {
    invalid_array.push('newsletter');
    foundError = true;
  }
  // Valdates age, not required
  if (!validateType(cust.age, 'number')) {    // note: age may be of type 'string'
    invalid_array.push('age');
    foundError = true;
  }
  if (foundError) {
    // return array of invalid parameters
    return invalid_array;
  }
  return "success";
}

function validateType(item, type) {
  var itemType = typeof item;
  if (!item || itemType != type) { //!item == null
    return false;
  } else {
    return true;
  }
}

function validateMinLength(item) {
  if (!item || item.length < minLength) {
    return false;
  } else {
    return true;
  }
}

function validateMaxLength(item) {
  if (typeof item === null || item.length > maxLength) {
    return false;

    // infinite length == -1
  } else if (item.length === '-1') {
    return true;
  }
}

// initiate function
readCustomers();