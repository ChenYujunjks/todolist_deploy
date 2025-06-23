"use client";

import React from "react";
import { UserContext, UserGreeting } from "./user";

// 3. 页面组件，用 Provider 包裹子组件
export default function UserExamplePage() {
  return (
    <UserContext.Provider value="Yitan">
      <div className="p-4">
        <h1>Welcome to the User Page</h1>
        <UserGreeting />
      </div>
    </UserContext.Provider>
  );
}
