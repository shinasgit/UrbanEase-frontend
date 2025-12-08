import React from "react";
import { Button, Card, Label, TextInput } from "flowbite-react";

function Auth() {
  return (
    <div className="min-h-screen bg-teal-50 flex items-center justify-center px-4">
      <Card className="w-full max-w-md shadow-xl border border-gray-200  !bg-white ">
        <h1 className="text-3xl font-bold text-center text-blue-500">
          LOGIN
        </h1>
        <h3 className="text-center text-xl text-gray-500 mb-4">
          Login to your Account
        </h3>

        <form className="flex flex-col gap-4">
          {/* Email */}
          <div>
            <Label htmlFor="email" className="mb-1 block" value="Email" />
            <TextInput
              id="email"
              type="email"
              placeholder="Enter Your E-mail"
              required
              style={{ color: "black" }}
            />
          </div>

          {/* Password */}
          <div>
            <Label htmlFor="password" className="mb-1 block" value="Password" />
            <TextInput id="password" type="password" required placeholder="Enter Your Password" style={{ color: "black" }}/>
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <a
              href="#"
              className="text-sm text-teal-700 hover:underline hover:text-teal-800"
            >
              Forgot password?
            </a>
          </div>

          {/* Login Button (Blue) */}
          <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
            Login
          </Button>

          {/* Divider */}
          <div className="flex items-center gap-2">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-xs text-gray-400">OR</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          {/* Register Link */}
          <p className="text-center text-sm text-gray-600">
            Don’t have an account?
            <a
              href="/register"
              className="ml-1 text-blue-600 font-medium hover:underline"
            >
              Register
            </a>
          </p>
        </form>
      </Card>
    </div>
  );
}

export default Auth;
