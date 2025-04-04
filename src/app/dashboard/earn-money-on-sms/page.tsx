"use client";
import { useState } from "react";
import { Copy, BarChart2, ShieldCheck, Users } from "lucide-react"; // Icons
// import QRCode from "react-qr-code"; // QR Code Generator
import { Button } from "@/components/ui/button"; // ShadCN Button

export default function ReferralProgram() {
  const referralLink = "https://sms-man.com/?ref=tCJB6VFgsbjk";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-2xl mt-[120px] mb-10">
      <h2 className="text-2xl font-semibold">Referral Program</h2>
      <p className="text-gray-600 mt-2">
        Earn rewards by referring new users to our platform. Track your invites
        and grow your earnings!
      </p>

      {/* Referral Link Section */}
      <div className="mt-5 p-4 bg-gray-100 rounded-lg flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">Your Referral Link</p>
          <a
            href={referralLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-medium"
          >
            {referralLink}
          </a>
        </div>
        <Button onClick={handleCopy} className="flex items-center gap-2">
          <Copy size={18} /> {copied ? "Copied!" : "Copy"}
        </Button>
      </div>

      {/* QR Code for Easy Sharing */}
      <div className="mt-5 flex justify-center">
        {/* <QRCode value={referralLink} size={128} /> */}
      </div>

      {/* Referral Benefits */}
      <div className="mt-6 space-y-4">
        <div className="p-4 bg-gray-50 rounded-lg flex items-center gap-3">
          <Users size={24} className="text-blue-500" />
          <p>
            Invite unlimited users and earn{" "}
            <strong>3% of their expenses</strong>.
          </p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg flex items-center gap-3">
          <BarChart2 size={24} className="text-green-500" />
          <p>Real-time tracking of referral statistics and earnings.</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg flex items-center gap-3">
          <ShieldCheck size={24} className="text-red-500" />
          <p>Strict fraud detection to prevent misuse of the program.</p>
        </div>
      </div>

      {/* Withdrawal Rules */}
      <div className="mt-6 p-5 bg-gray-200 rounded-lg">
        <h3 className="font-semibold">Withdrawal Rules</h3>
        <ul className="list-disc pl-5 text-sm text-gray-600 mt-2">
          <li>
            Withdraw funds to account balance or{" "}
            <strong>USDT TRC-20 wallet</strong>.
          </li>
          <li>
            Payouts processed within <strong>24 hours</strong> of request.
          </li>
          <li>
            Minimum withdrawal amount: <strong>$10</strong>.
          </li>
          <li>
            Fraudulent activity results in referral earnings cancellation.
          </li>
        </ul>
      </div>

      {/* CTA */}
      <div className="mt-6 text-center">
        <p className="text-gray-600 text-sm">
          For more details, visit our{" "}
          <a href="/partnership" className="text-blue-500">
            Partnership Page
          </a>
          .
        </p>
      </div>
    </div>
  );
}
