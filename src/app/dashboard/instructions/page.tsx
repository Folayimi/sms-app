"use client";

import {
  ShieldCheck,
  Phone,
  CreditCard,
  MessageSquareText,
  RefreshCw,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function InstructionGuide() {
  return (
    <div className="w-full bg-[#121212] mt-[50px] lg:mt-[75px] py-16 px-4 space-y-12 text-white">
      <h1 className="text-4xl font-bold text-center text-white">How the SMS App Works</h1>
      <p className="text-center text-gray-400 max-w-2xl mx-auto text-base">
        Follow this simple step-by-step guide to understand how to get started with your SMS number, receive messages, and make payments.
      </p>

      <Separator className="my-6 bg-purple-800/50" />

      <div className="grid md:grid-cols-2 gap-10">
        {/* Step 1 */}
        <Card className="bg-[#111111] border border-purple-900/30 backdrop-blur-md shadow-md rounded-2xl">
          <CardHeader className="flex items-center gap-3">
            <Phone className="text-purple-500" size={24} />
            <CardTitle className="text-lg text-white">Step 1: Choose a Virtual Number</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-gray-400 space-y-4">
            <p>
              Browse available countries and service providers. Select a number that fits your needs (e.g., for Telegram, WhatsApp, Facebook, etc.).
            </p>
            <div className="w-full h-40 bg-black/30 rounded-xl border border-purple-800/30 flex items-center justify-center text-sm text-purple-300">
              Screenshot Placeholder (Number Selection)
            </div>
          </CardContent>
        </Card>

        {/* Step 2 */}
        <Card className="bg-[#111111] border border-purple-900/30 backdrop-blur-md shadow-md rounded-2xl">
          <CardHeader className="flex items-center gap-3">
            <MessageSquareText className="text-purple-400" size={24} />
            <CardTitle className="text-lg text-white">Step 2: Use the Number for Verification</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-gray-400 space-y-4">
            <p>
              Copy and paste the number on the platform you’re verifying. Complete the registration or verification process.
            </p>
            <div className="w-full h-40 bg-black/30 rounded-xl border border-purple-800/30 flex items-center justify-center text-sm text-purple-300">
              Screenshot Placeholder (Platform Signup)
            </div>
          </CardContent>
        </Card>

        {/* Step 3 */}
        <Card className="bg-[#111111] border border-purple-900/30 backdrop-blur-md shadow-md rounded-2xl">
          <CardHeader className="flex items-center gap-3">
            <RefreshCw className="text-green-400" size={24} />
            <CardTitle className="text-lg text-white">Step 3: Wait for Incoming SMS</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-gray-400 space-y-4">
            <p>
              Your SMS will show up in your inbox shortly. Copy the verification code and finish your signup.
            </p>
            <div className="w-full h-40 bg-black/30 rounded-xl border border-purple-800/30 flex items-center justify-center text-sm text-purple-300">
              Screenshot Placeholder (Inbox View)
            </div>
          </CardContent>
        </Card>

        {/* Step 4 */}
        <Card className="bg-[#111111] border border-purple-900/30 backdrop-blur-md shadow-md rounded-2xl">
          <CardHeader className="flex items-center gap-3">
            <CreditCard className="text-pink-400" size={24} />
            <CardTitle className="text-lg text-white">Step 4: Make a Payment</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-gray-400 space-y-4">
            <p>
              Once satisfied, proceed to pay via USDT (TRC-20), Paystack, or Stripe—whichever suits you best.
            </p>
            <div className="w-full h-40 bg-black/30 rounded-xl border border-purple-800/30 flex items-center justify-center text-sm text-purple-300">
              Screenshot Placeholder (Payment Options)
            </div>
          </CardContent>
        </Card>

        {/* Step 5 */}
        <Card className="bg-[#111111] border border-purple-900/30 backdrop-blur-md shadow-md rounded-2xl">
          <CardHeader className="flex items-center gap-3">
            <ShieldCheck className="text-yellow-400" size={24} />
            <CardTitle className="text-lg text-white">Step 5: Enjoy Secure & Seamless Usage</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-gray-400 space-y-4">
            <p>
              Your dashboard lets you monitor incoming SMS and manage numbers securely, with fraud protection built-in.
            </p>
            <div className="w-full h-40 bg-black/30 rounded-xl border border-purple-800/30 flex items-center justify-center text-sm text-purple-300">
              Screenshot Placeholder (Dashboard Overview)
            </div>
          </CardContent>
        </Card>
      </div>

      <Separator className="my-10 bg-purple-800/50" />

      <div className="text-center space-y-4">
        <h2 className="text-2xl font-semibold text-white">How the SMS App Operates</h2>
        <p className="text-gray-400 max-w-3xl mx-auto text-sm">
          Our app lets you rent virtual SMS numbers from multiple countries, receive SMS in real time, and pay securely.
          It’s ideal for one-time verifications or services where privacy and simplicity matter. All actions can be managed directly from your sleek, dark-mode-friendly dashboard.
        </p>
      </div>
    </div>
  );
}
