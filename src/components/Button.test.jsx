import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Button from "./Button";

describe("Button component", () => {
  it("should render properly", async () => {
    render(<Button name="Sample" />);

    const btn = await screen.findByTestId("button");

    expect(btn).toBeInTheDocument();
    expect(btn.textContent).toBe("Sample");
    expect(btn.className).toBe("py-2 px-4 border rounded-md");
  });

  it("should be clickable", async () => {
    const onClick = vi.fn();
    render(<Button name="sample" onClick={onClick} />);

    const btn = await screen.findByTestId("button");
    fireEvent.click(btn);

    expect(onClick).toHaveBeenCalledOnce();
  });

  it("should append classNames", async () => {
    render(<Button name="sample" className="bg-green-500" />);

    const btn = await screen.findByTestId("button");

    expect(btn.className).toBe("bg-green-500 py-2 px-4 border rounded-md");
  });
});
