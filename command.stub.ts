import { Command } from "https://deno.land/x/cliffy@v0.25.7/command/mod.ts";

export class {{name}}Command extends Command {
  constructor() {
    super();
    this.description("{{description}}")
      .action(this.execute.bind(this));
  }

  async execute(): Promise<void> {
    // Command logic here
    console.log("{{name}} command executed");
  }
}
