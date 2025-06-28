export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow px-6 pt-20 pb-12 grid place-items-start">
        <section className="w-full max-w-3xl mx-auto space-y-10 motion-safe:animate-fadeSlide">
          <div className="text-center space-y-6">
            <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight">
              👋 Welcome!
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              I'm a senior CS student at <strong>NYU Shanghai</strong> (Class of
              2025), passionate about decentralized systems and cryptocurrency
              ⚙️.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-center">
              Recent Projects
            </h2>
            <ul className="space-y-4 text-lg leading-relaxed">
              <li>
                <a
                  href="https://github.com/ChenYujunjks/poker_tracker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline font-medium"
                >
                  Poker Tracker
                </a>{" "}
                – A full-stack application for recording online poker sessions
                and performing data analytics. <br />
                线上扑克局记录与数据分析的全栈应用。
              </li>
              <li>
                <a
                  href="https://github.com/ChenYujunjks/NYUSH_Capstone_Project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline font-medium"
                >
                  NYUSH Capstone Project
                </a>{" "}
                – A decentralized messaging DApp and related smart contracts
                developed as a senior capstone at NYU Shanghai. <br />
                去中心化消息应用（DApp）与相关智能合约的毕业设计。
              </li>
            </ul>
          </div>
        </section>
      </main>

      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto text-center text-muted-foreground text-base sm:text-lg">
          <p>
            Skills: Go · TypeScript · React/Next.js · MySQL · Python · Solidity
          </p>
        </div>
      </section>

      <footer className="border-t border-[--color-card-border] py-4 text-center text-sm text-muted-foreground">
        © 2024 Yujun Chen. All rights reserved.
      </footer>
    </div>
  );
}
