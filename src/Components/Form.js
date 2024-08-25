import React from "react";

function Form() {
  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Check if the terms and conditions checkbox is checked
    const termsChecked = document.getElementById('checkbox').querySelector('input').checked;
    if (!termsChecked) {
      alert("You must agree to the terms & conditions.");
      return;
    }

    alert("Form successfully submitted");
  };

  return (
    <div className="content">
      <form id="orderForm" onSubmit={handleSubmit}> {/* This line connects handleSubmit */}
        <div className="form-group">
          <label htmlFor="customerName">Customer Name</label>
          <input
            type="text"
            id="customerName"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="customerNumber">Customer Number</label>
          <input type="text" name="customerNumber" maxlength="10" pattern="\d{10}" required />

        </div>
        <div className="form-group">
          <label htmlFor="menuItem">Menu Item</label>
          <select id="menuItem" required>
            <option value="" defaultValue>
              Select a dish
            </option>
            <option value="dish1">Pizza</option>
            <option value="dish2">Burger</option>
            <option value="dish3">Sandwich</option>
            <option value="dish4">Samosa</option>
          </select>
        </div>
        <div className="form-group">
          <label>Item Quantity</label>
          <input type="number" name="quantity" min="1" max="3" required />
        </div>
        <div className="form-group">
          <label htmlFor="specialInstructions">Special Instructions</label>
          <textarea
            id="specialInstructions"
            placeholder="Enter any special instructions"
          ></textarea>
        </div>
        <button type="submit">Order Now</button>
        <button type="reset">Reset</button>
      </form>
    </div>
  );
}

export default Form;
