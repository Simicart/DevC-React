import React from "react";

export default function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

export function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

export function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
export function tryConvert(temperature, converter) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = converter(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
