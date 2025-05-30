// 问题 1：用 .reduce 实现 .map 的功能
function myMap<T, U>(arr: T[], fn: (item: T) => U): U[] {
  return arr.reduce<U[]>((acc, item) => {
    acc.push(fn(item));
    return acc;
  }, []);
}

// 问题 2：写一个 sleep 函数，用 async/await 调用它
function sleep(ms: number): Promise<void> {
  return new Promise((res) => setTimeout(res, ms));
}

async function testSleep() {
  console.log("Wait...");
  await sleep(1500);
  console.log("Done!");
}

testSleep();
