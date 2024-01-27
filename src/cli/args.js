const parseArgs = () => {
  const args = process.argv
    .reduce((acc, arg, i) => {
      if (arg.startsWith("--")) {
        acc.push(`${arg.substring(2)} is ${process.argv[i + 1]}`);
      }
      return acc;
    }, [])
    .join(", ");
  console.log(args);
};

parseArgs();
