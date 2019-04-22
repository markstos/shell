import { shell } from "../lib/index"

describe("shell()", () => {
  it("should not show stderr if not defined", () => {
    expect(() => {
      shell("boom")
    }).toThrow("Command failed: boom")
  })
  it("should show stderr if defined", () => {
    expect(() => {
      shell("boom", { stdio: "pipe" })
    }).toThrow("Command failed: boom")
    expect(() => {
      shell("boom", { stdio: "pipe" })
    }).toThrow(/boom: not found/)
  })
})
