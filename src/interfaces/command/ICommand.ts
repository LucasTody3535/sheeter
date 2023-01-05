export interface ICommand {
 executeCommand: (args: string, inputs: Array<HTMLInputElement>, tableHeadings: Array<string>) => void
 getCommandName: () => string
}

