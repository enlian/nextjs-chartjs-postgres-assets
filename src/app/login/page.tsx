"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });

    if (result?.error) {
      alert("登录失败：" + result.error);
    } else {
      window.location.href = "/"; // 登录成功跳转
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleLogin}
        className="flex flex-col gap-4 max-w-sm mx-auto mt-10 p-6 bg-gray-800 rounded-lg"
      >
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="User"
          className="p-2 border border-gray-600 rounded bg-gray-700 text-white"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="p-2 border border-gray-600 rounded bg-gray-700 text-white"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          登录
        </button>
      </form>
    </div>
  );
}
