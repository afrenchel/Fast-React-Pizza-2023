<ul>
  <li>Very simple application, where users can order one or more pizzas from a menu</li>
  <li>Requires no user accounts and no login: users just input their names before using the app</li>
  <li>The pizza menu can change, so it should be loaded from an API</li>
  <li>Users can add multiple pizzas to a cart before ordering</li>
  <li>Ordering requires just the user's name, phone number, and address</li>
  <li>If possible, GPS location should also be provided, to make delivery easier</li>
  <li>Users can mark their order as "priority" for an additional 20% of the cart price</li>
  <li>Orders are made by sending a POST request with the order data (user data + selected pizzas) to the API</li>
  <li>Payments are made on delivery, so no payment processing is necessary in the app</li>
  <li>Each order will get a unique ID that should be displayed, so the user can later look up their order based on the ID</li>
  <li>Users should be able to mark their order as "priority" even after it has been placed</li>
</ul>
