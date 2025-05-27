const delay = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

async function run(): Promise<void> {
  try {
    await delay(1000);
    console.log("1 second passed");
  } catch (err) {
    console.error("Async Error:", err);
  }
}

run();
