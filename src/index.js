import React from "react";
import ReactDOM from "react-dom";

/* import Badge from "./components/Badge"; */
import BadgeNew from "./pages/BadgeNew";

const container = document.getElementById('app')

/* ReactDOM.render(<Badge
  name='Carlos Alberto'
  lastName='Ortiz Losada'
  jobTitle='Frontend Developer'
  twitter='CarlosOrtizL' />,
  container);
 */

ReactDOM.render(<BadgeNew />, container);