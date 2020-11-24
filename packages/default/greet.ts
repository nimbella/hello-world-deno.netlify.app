export default function main(args: { [key: string]: string }) {
  return {
    body: { message: `Hello, ${args.name || "World"}` },
  };
}
