var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Coz213mo",
  database: "bamazon_DB"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  customerStart();
});

// function which prompts the user for id of that item they would like to buy
function customerStart() {
  console.log("Displaying information for all items...\n");
  connection.query("SELECT * FROM auctions", function (err, res) {
    //   if (err) throw err;
    //   var info;
    //   for (var i = 0; i < res.length; i++) {
    //     info = '';
    //     info += 'Item ID: ' + res[i].item_id + '\n';
    //     info += 'Product Name: ' + res[i].product_name + '\n';
    //     info += 'Department: ' + res[i].department_name + '\n';
    //     info += 'Price: $' + res[i].price + '\n \n';

    //     console.log(info);
    //   }
    console.log("result", JSON.parse(JSON.stringify(res)));
    inquirer.prompt([
      {
        type: "input",
        name: "itemIdQuery",
        message: "Please enter the id of the item you would like to purchase."
      },
      {
        name: "quantity",
        type: "input",
        message: "What quantity of the item would you like to buy?"
      },
    ])
      .then(function (answer) {

        var i = (parseInt(answer.itemIdQuery) - 1);

        if (answer.quantity <= res[i].stock_quantity
        ) {
          var query = connection.query(
            "UPDATE auctions SET ? WHERE ?",
            [
              {
                //ParseInt, ParseFloat? Add set after colon
                stock_quantity: (res[i].stock_quantity - parseInt(answer.quantity))
              },
              {
                item_id: answer.itemIdQuery
              }
            ],
            function (err, res) {
              if (err) throw err;

            }
          );
          var itemCost = parseInt(res[i].price);

          var itemQuant = parseInt(answer.quantity);

          var totalPrice = (itemCost * itemQuant);
          console.log(res[i].product_name + " inventory updated!\n");
          console.log("The total cost of your purchase will be $" + totalPrice);

        }
        else {
          console.log("Insufficient Quantity")

        }
        restartQuery();
      });

  });
}

function restartQuery() {
  inquirer
    .prompt({
      name: "restartOrEnd",
      type: "list",
      message: "Would you Like to Re-start Bamazon?",
      choices: ["Restart", "EXIT"]
    })
    .then(function (answer) {
      // based on their answer, either call the restart or exit functions
      if (answer.restartOrEnd === "Restart") {
        customerStart();
      }
      else {
        connection.end();
      }
    });

}