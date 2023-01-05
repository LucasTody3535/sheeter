export const tokenizeArguments = (args: string): Array<string> => {
 return args.split("(")[1].split(")")[0].split(",").map((el) => el.trim().replaceAll(" ", ""));
}

