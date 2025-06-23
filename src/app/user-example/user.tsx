import React, { createContext, useContext } from "react";

// 1. 创建上下文
export const UserContext = createContext<string>("Guest");
// 2. 创建子组件，使用 useContext
export function UserGreeting() {
  const username = useContext(UserContext);
  return <h2>Hello, {username}!</h2>;
}
