"use client";

import { useState } from "react";
import { Copy, UsersRound, LineChart, ShieldCheckIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ReferralProgram() {
  const referralLink = "https://sms-man.com/?ref=tCJB6VFgsbjk";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-full bg-[#121212] px-6 pt-[120px] pb-16">
      <Card className="bg-gradient-to-br from-[#121212] to-[#1f1f1f] border border-purple-800/20 text-white shadow-2xl rounded-2xl">
        <CardHeader className="pb-4">
          <CardTitle className="text-2xl md:text-3xl font-bold text-white">
            Join Our Referral Program
          </CardTitle>
          <p className="text-sm text-muted-foreground max-w-lg">
            Share your unique referral link and start earning as your friends
            join and transact. Get rewarded for growing our community.
          </p>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Referral Link Section */}
          <div className="bg-black/30 backdrop-blur-sm border border-purple-700/30 p-4 rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="w-full">
              <p className="text-xs text-muted-foreground mb-1">
                Your Referral Link
              </p>
              <a
                href={referralLink}
                target="_blank"
                rel="noopener noreferrer"
                className="break-all text-purple-400 hover:underline"
              >
                {referralLink}
              </a>
            </div>
            <Button
              variant="secondary"
              onClick={handleCopy}
              className="flex items-center gap-2 whitespace-nowrap"
            >
              <Copy size={16} /> {copied ? "Copied!" : "Copy Link"}
            </Button>
          </div>

          {/* Benefits Section */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-[#181818] p-4 rounded-xl border border-white/10 flex items-start gap-4">
              <UsersRound size={28} className="text-purple-500 mt-1" />
              <p className="text-sm leading-tight">
                Invite unlimited users and earn{" "}
                <strong>3% of their total spending</strong>.
              </p>
            </div>
            <div className="bg-[#181818] p-4 rounded-xl border border-white/10 flex items-start gap-4">
              <LineChart size={28} className="text-green-400 mt-1" />
              <p className="text-sm leading-tight">
                Monitor your earnings and referral performance in real time.
              </p>
            </div>
            <div className="bg-[#181818] p-4 rounded-xl border border-white/10 flex items-start gap-4">
              <ShieldCheckIcon size={28} className="text-red-400 mt-1" />
              <p className="text-sm leading-tight">
                Advanced fraud protection ensures your earnings are safe and
                fair.
              </p>
            </div>
          </div>

          {/* Rules Section */}
          <div className="bg-[#1b1b1b] border border-white/10 rounded-xl p-5 mt-4">
            <h3 className="text-base font-semibold mb-2">
              Withdrawal Guidelines
            </h3>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>
                Withdraw earnings to your account or{" "}
                <strong>USDT (TRC-20) wallet</strong>.
              </li>
              <li>
                Payouts processed within <strong>24 hours</strong> after
                request.
              </li>
              <li>
                Minimum withdrawal: <strong>$10</strong>.
              </li>
              <li>Fraud will lead to permanent earnings cancellation.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="text-center pt-6">
            <p className="text-xs text-muted-foreground">
              Want to learn more? Visit our{" "}
              <a
                href="/partnership"
                className="text-purple-400 hover:underline"
              >
                Partnership Page
              </a>
              .
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
