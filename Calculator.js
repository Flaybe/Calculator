import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import React from "react";
import { styles } from "./Styles.js";

export default function Calculator() {
  const [display, setDisplay] = React.useState("0");
  const [firstNumber, setFirstNumber] = React.useState(0);
  const [secondNumber, setSecondNumber] = React.useState(null);
  const [operator, setOperator] = React.useState("");

  const handleNumber = (number) => {
    console.log("operators " + firstNumber, operator, secondNumber);
    if (operator === "") {
      setFirstNumber(firstNumber * 10 + number);
      setDisplay(number);
    } else {
      setSecondNumber(secondNumber * 10 + number);
      setDisplay(number);
    }
  };

  const handleEquals = () => {
    if (operator === "+") {
      setFirstNumber(firstNumber + secondNumber);
    } else if (operator === "-") {
      setFirstNumber(firstNumber - secondNumber);
    } else if (operator === "*") {
      setFirstNumber(firstNumber * secondNumber);
    } else if (operator === "/") {
      setFirstNumber(firstNumber / secondNumber);
    }
    setSecondNumber(null);
    setOperator("");
  };

  const handleOperator = (operator) => {
    setOperator(operator);
  };

  const reset = () => {
    setFirstNumber(0);
    setSecondNumber(null);
    setOperator("");
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.display}>
        <Text style={styles.displayText}>
          {firstNumber} {operator} {secondNumber}{" "}
        </Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={() => handleNumber(1)}>
          <Text>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleNumber(2)}>
          <Text>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleNumber(3)}>
          <Text>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleNumber(4)}>
          <Text>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleNumber(5)}>
          <Text>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleNumber(6)}>
          <Text>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleNumber(7)}>
          <Text>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleNumber(8)}>
          <Text>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleNumber(9)}>
          <Text>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleNumber(0)}>
          <Text>0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleOperator("+")}
        >
          <Text>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleOperator("-")}
        >
          <Text>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleOperator("*")}
        >
          <Text>*</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleOperator("/")}
        >
          <Text>/</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleEquals}>
          <Text>=</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={reset}>
          <Text>C</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
