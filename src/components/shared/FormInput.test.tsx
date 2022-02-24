import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import FormInput from "./FormInput";

const helperText = "Test";

describe("Basic FormInput test", () => {
  const handleChange = jest.fn();
  const setup = async () => {
    const utils = render(
      <FormInput
        name="Form Input"
        placeholder={helperText}
        onChange={handleChange}
      />
    );
    const input = await screen.findByPlaceholderText(helperText);
    return {
      input,
      utils,
    };
  };

  test("should render component", async () => {
    // Arrange
    const { input } = await setup();

    // Assert
    expect(input).toBeInTheDocument();
  });

  test("should call on change", async () => {
    // Arrange
    const text = helperText;
    const { input } = await setup();

    fireEvent.change(input, { target: { value: text } });

    // Assert
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
