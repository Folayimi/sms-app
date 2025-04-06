"use client";

import {
  ShieldCheck,
  Phone,
  CreditCard,
  MessageSquareText,
  RefreshCw,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator";

export default function InstructionGuide() {
  return (
    <div className="max-w-5xl mx-auto py-16 px-4 space-y-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center">How the SMS App Works</h1>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto text-base">
        Follow this simple step-by-step guide to understand how to get started with your SMS number, receive messages, and make payments.
      </p>

      {/* <Separator className="my-6" /> */}

      <div className="grid md:grid-cols-2 gap-8">
        {/* Step 1 */}
        <Card>
          <CardHeader className="flex items-center gap-3">
            <Phone className="text-blue-500" size={24} />
            <CardTitle className="text-lg">Step 1: Choose a Virtual Number</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-4">
            <p>
              Browse available countries and service providers. Select a number that fits your needs (e.g., for Telegram, WhatsApp, Facebook, etc.).
            </p>
            <div className="w-full h-40 bg-gray-200 rounded-lg flex items-center justify-center text-sm text-gray-500 border border-dashed">
              Screenshot Placeholder (e.g. Number Selection Page)
            </div>
          </CardContent>
        </Card>

        {/* Step 2 */}
        <Card>
          <CardHeader className="flex items-center gap-3">
            <MessageSquareText className="text-purple-500" size={24} />
            <CardTitle className="text-lg">Step 2: Use the Number for Verification</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-4">
            <p>
              Copy and paste the number on the desired platform where SMS verification is needed. Complete the registration or verification process.
            </p>
            <div className="w-full h-40 bg-gray-200 rounded-lg flex items-center justify-center text-sm text-gray-500 border border-dashed">
              Screenshot Placeholder (e.g. WhatsApp/Telegram Signup)
            </div>
          </CardContent>
        </Card>

        {/* Step 3 */}
        <Card>
          <CardHeader className="flex items-center gap-3">
            <RefreshCw className="text-green-500" size={24} />
            <CardTitle className="text-lg">Step 3: Wait for Incoming SMS</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-4">
            <p>
              The SMS will appear in your inbox within a few seconds to minutes. You can copy the verification code and continue with your signup or login.
            </p>
            <div className="w-full h-40 bg-gray-200 rounded-lg flex items-center justify-center text-sm text-gray-500 border border-dashed">
              Screenshot Placeholder (e.g. Inbox Showing Message)
            </div>
          </CardContent>
        </Card>

        {/* Step 4 */}
        <Card>
          <CardHeader className="flex items-center gap-3">
            <CreditCard className="text-pink-500" size={24} />
            <CardTitle className="text-lg">Step 4: Make a Payment</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-4">
            <p>
              Once you're satisfied, proceed to make payment using your preferred payment method. Available options include USDT (TRC-20), Paystack, or Stripe.
            </p>
            <div className="w-full h-40 bg-gray-200 rounded-lg flex items-center justify-center text-sm text-gray-500 border border-dashed">
              Screenshot Placeholder (e.g. Payment Modal or Method Page)
            </div>
          </CardContent>
        </Card>

        {/* Step 5 */}
        <Card>
          <CardHeader className="flex items-center gap-3">
            <ShieldCheck className="text-yellow-600" size={24} />
            <CardTitle className="text-lg">Step 5: Enjoy Secure & Seamless Usage</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-4">
            <p>
              Our platform uses anti-fraud algorithms and secure transmission channels to ensure your data and messages are safe. Monitor usage and history via your dashboard.
            </p>
            <div className="w-full h-40 bg-gray-200 rounded-lg flex items-center justify-center text-sm text-gray-500 border border-dashed">
              Screenshot Placeholder (e.g. Dashboard Overview)
            </div>
          </CardContent>
        </Card>
      </div>

      {/* <Separator className="my-10" /> */}

      <div className="text-center space-y-4">
        <h2 className="text-xl font-semibold">How the SMS App Operates</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
          Our app allows users to temporarily rent virtual numbers from various countries to receive SMS online. This is ideal for one-time verifications. You can view incoming messages in real time, make payments securely, and manage your account from a sleek, user-friendly dashboard.
        </p>
      </div>
    </div>
  );
}
