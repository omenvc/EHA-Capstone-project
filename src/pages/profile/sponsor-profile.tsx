import { Bed, Calendar, CreditCard, DollarSign, FileText, Link2, Pen, Trash2, Users2 } from "lucide-react";
import React from "react";

import LinkedPatientCard from "@/components/nurse/linked-patients-card";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import AddUser from "../users/add-user-modal";
import ProfileCard from "../users/profile-card";

type SponsorProps = {
  role: "Sponsor";
  name: string;
  ehrId: number;
  gender: string;
  age: number;
  email: string;
  phone: number;
  address: string;
  status: "Active";
  userId: "EHR ID";
};

type PaymentInfoProps = {
  paymentMethod?: "Credit Card" | "Bank Transfer";
  lastPaymentDate?: string;
  nextPaymentDate?: string;
  autoRenewal?: "Enabled" | "Disabled";
};
type BillingHistoryProps = {
  transactionType: string;
  date: string;
  amount: number;
  status: "Paid" | "Unpaid";
};

type LinkedPatientProps = {
  ehrId: string;
  name: string;
  subscriptionFee?: number;
  monthlyFee?: number;
};

type SubscriptionInfoProps = {
  totalSubscriptionFees?: number;
  renewalDate?: string;
  status?: "All Paid" | "Pending";
};

const SponsorProfile: React.FC = () => {
  const subscriptionInfo: SubscriptionInfoProps = {
    totalSubscriptionFees: 149.99,
    renewalDate: "July 20, 2025",
    status: "All Paid",
  };
  const billingHistory: BillingHistoryProps[] = [
    {
      transactionType: "Premium Wow RX Pass",
      date: "June 15, 2025",
      amount: 89.99,
      status: "Paid",
    },
    {
      transactionType: "Premium Wow RX Pass",
      date: "July 20, 2025",
      amount: 50.00,
      status: "Unpaid",
    },
    {
      transactionType: "Premium Wow RX Pass",
      date: "August 15, 2025",
      amount: 89.99,
      status: "Paid",
    },
    {
      transactionType: "Premium Wow RX Pass",
      date: "September 20, 2025",
      amount: 50.00,
      status: "Unpaid",
    },
    {
      transactionType: "Premium Wow RX Pass",
      date: "October 15, 2025",
      amount: 89.99,
      status: "Paid",
    },
    {
      transactionType: "Premium Wow RX Pass",
      date: "November 20, 2025",
      amount: 50.00,
      status: "Unpaid",
    },
    {
      transactionType: "Premium Wow RX Pass",
      date: "December 15, 2025",
      amount: 89.99,
      status: "Paid",
    },
    {
      transactionType: "Premium Wow RX Pass",
      date: "January 20, 2026",
      amount: 50.00,
      status: "Unpaid",
    },
  ];

  const paymentInfo: PaymentInfoProps = {
    paymentMethod: "Credit Card",
    lastPaymentDate: "June 15, 2025",
    nextPaymentDate: "July 20, 2025",
    autoRenewal: "Enabled",
  };

  const linkedPatients: LinkedPatientProps[] = [
    {
      ehrId: "123456789",
      name: "Tapha Bojang",
      subscriptionFee: 89.99,
    },
    {
      ehrId: "987654321",
      name: "Tapha Bojang",
      subscriptionFee: 165,
    },
    {
      ehrId: "112233445",
      name: "Fatou Jallow",
      subscriptionFee: 50,
    },
    {
      ehrId: "556677889",
      name: "Binta Touray",
      subscriptionFee: 75,
    },
    {
      ehrId: "998877665",
      name: "Ousman Jatta",
      subscriptionFee: 100,
    },
    {
      ehrId: "443322110",
      name: "Aissatou Bah",
      subscriptionFee: 60,
    },
    {
      ehrId: "667788990",
      name: "Musa Bojang",
      subscriptionFee: 45,
    },
    {
      ehrId: "223344556",
      name: "Kaddy Fofana",
      subscriptionFee: 55,
    },
  ];
  const sponsorDetail: SponsorProps = {
    role: "Sponsor",
    name: "Dr. Fabakary Jammeh",
    ehrId: 771225456,
    gender: "Male",
    age: 42,
    email: "badkhadajie@gmail.com",
    phone: 5656922,
    address: "10 Dobson Street, Banjul, The Gambia",
    status: "Active",
    userId: "EHR ID",
  };
  const [editMode, setEditMode] = React.useState(false);
  const handleEditClick = () => {
    setEditMode(!editMode);
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
        <ProfileCard {...sponsorDetail} />
        <div className="flex flex-col sm:flex-row gap-2">
          <Button className="text-[#355CE1] font-bold border-1 border-[#355CE1] w-full sm:w-auto" onClick={handleEditClick}>
            <Trash2 className="mr-2 h-4 w-4" />
            Delete User
          </Button>
          <Button className="bg-primary text-[#fff] font-bold w-full sm:w-auto" onClick={handleEditClick}>
            <Pen className="mr-2 h-4 w-4" />
            Edit User
          </Button>
          {editMode && (
            <AddUser closeModal={() => setEditMode(false)} editMode={editMode} setEditMode={setEditMode} />
          )}
        </div>

      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        <Card className="bg-[#fff] px-4 py-3">
          <span className="flex justify-between gap-2">
            <p className="text-sm sm:text-base text-[#355CE1]">Active Patient</p>
            <p className="bg-[#355de11e] text-[#355CE1] rounded-lg p-2">
              <Bed className="w-5 h-5 sm:w-6 sm:h-6" />
            </p>
          </span>
          <p className="text-2xl sm:text-3xl lg:text-4xl text-[#355CE1] font-semibold mt-2">2</p>
        </Card>
        <Card className="bg-[#fff] px-4 py-3">
          <span className="flex justify-between gap-2">
            <p className="text-sm sm:text-base text-zinc-400">Total Spent</p>
            <p className="rounded-lg p-2 bg-zinc-200">
              <DollarSign className="w-5 h-5 sm:w-6 sm:h-6" />
            </p>
          </span>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold mt-2">$3,000</p>
        </Card>
        <Card className="bg-[#fff] px-4 py-3">
          <span className="flex justify-between gap-2">
            <p className="text-sm sm:text-base text-zinc-400">Total Months Subscribed</p>
            <p className="rounded-lg p-2 bg-zinc-200">
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
            </p>
          </span>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold mt-2">
            30
            {" "}
            <span className="text-zinc-400 text-base sm:text-lg lg:text-[20px] font-normal">
              Months
            </span>
          </p>
        </Card>
        <Card className="bg-[#fff] px-4 py-3">
          <span className="flex justify-between gap-2">
            <p className="text-sm sm:text-base text-zinc-400">Account Created On</p>
            <p className="flex items-center gap-1 bg-zinc-200 rounded-lg p-2">
              <Users2 className="w-5 h-5 sm:w-6 sm:h-6" />
            </p>
          </span>
          {" "}
          <p className="text-lg sm:text-2xl lg:text-4xl font-semibold mt-2">Jul 20, 2025</p>
        </Card>
      </div>

      {/* Additional Informational Information */}
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-4 gap-3">
        <div className="grid grid-rows-[auto_auto] lg:grid-rows-[2fr_1fr] gap-3">
          <div className="bg-[#fff] p-4 rounded-lg shadow-sm">
            <span className="flex items-center gap-2">
              <Link2 className="w-5 h-5 sm:w-6 sm:h-6" />
              <p className="text-lg sm:text-xl">Linked Patients</p>
            </span>
            <div className="mt-4 flex flex-col gap-4 overflow-y-auto max-h-[300px]">
              {linkedPatients.map(patients => (
                <LinkedPatientCard key={patients.ehrId} patient={patients} />
              ))}

            </div>
          </div>
          <div className="bg-[#fff] p-4 rounded-lg shadow-sm">
            <span className="flex items-center gap-2">
              <CreditCard className="w-5 h-5 sm:w-6 sm:h-6" />
              <p className="text-lg sm:text-xl">Payment Information</p>
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="flex flex-col gap-4 sm:gap-8">
                <span className="flex flex-col gap-2 items-start">
                  <p className="text-sm sm:text-base text-zinc-500">Payment Method</p>
                  <p className="text-sm sm:text-base font-semibold">{paymentInfo.paymentMethod}</p>
                </span>
                <span>
                  <p className="text-sm sm:text-base text-zinc-500">Last Payment Date</p>
                  <p className="text-sm sm:text-base font-semibold">
                    {paymentInfo.lastPaymentDate}
                  </p>
                </span>

              </div>
              <div className="flex flex-col gap-4 sm:gap-6">
                <span className="flex flex-col gap-2 items-start">
                  <p className="text-sm sm:text-base text-zinc-500">Auto Renewal</p>
                  <p className="text-sm sm:text-base rounded-lg px-1 py-1 bg-zinc-300">{paymentInfo.autoRenewal}</p>
                </span>
                <span>
                  <p className="text-sm sm:text-base text-zinc-500">Next Billing Date</p>
                  <p className="text-sm sm:text-base font-semibold">
                    {paymentInfo.nextPaymentDate}
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-rows-[auto_auto] lg:grid-rows-[1fr_2fr] gap-3">
          <div className="bg-[#fff] p-4 rounded-lg shadow-sm">
            <span className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 sm:w-6 sm:h-6" />
              <p className="text-lg sm:text-xl">Subscription Information</p>
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="flex flex-col gap-4 sm:gap-8">
                <span className="flex flex-col gap-2 items-start">
                  <p className="text-sm sm:text-base text-zinc-500">Total Subscription Fee</p>
                  <p className="text-sm sm:text-base font-semibold">{`$${subscriptionInfo.totalSubscriptionFees}`}</p>
                </span>
                <span>
                  <p className="text-sm sm:text-base text-zinc-500">Renewal Date</p>
                  <p className="text-sm sm:text-base font-semibold">
                    {subscriptionInfo.renewalDate}
                  </p>
                </span>

              </div>
              <div className="flex flex-col gap-4 sm:gap-6">
                <span className="flex flex-col gap-2 items-start">
                  <p className="text-sm sm:text-base text-zinc-500">Payment Status</p>
                  <p className="text-xs sm:text-sm rounded-lg px-3 sm:px-4 py-1 bg-[#34c7591e] text-[#34C759]">{subscriptionInfo.status}</p>
                </span>
              </div>
            </div>
          </div>
          <div className="bg-[#fff] p-4 rounded-lg shadow-sm">
            <span className="flex items-center gap-2">
              <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
              <p className="text-lg sm:text-xl">Billing History</p>
            </span>
            <div className="mt-4 flex flex-col gap-4 overflow-y-auto max-h-[300px]">
              {billingHistory.map(history => (
                <div
                  key={history.date}
                  className="flex flex-col sm:flex-row sm:justify-between gap-2 border-1 border-zinc-200 p-2 sm:p-3 rounded-lg"
                >
                  <span className="flex flex-col gap-2 sm:gap-3">
                    <p className="text-sm sm:text-base">{history.transactionType}</p>
                    <p className="text-xs sm:text-sm text-zinc-500">{history.date}</p>
                  </span>
                  <span className="flex items-center gap-2 sm:gap-4">
                    <p className="text-sm sm:text-base font-semibold">
                      $
                      {history.amount}
                    </p>
                    {history.status === "Paid"
                      ? (
                          <p className="text-xs sm:text-sm rounded-lg px-3 sm:px-4 py-1 bg-[#34c7591e] text-[#34C759]">{history.status}</p>
                        )
                      : (
                          <p className="text-xs sm:text-sm rounded-lg px-3 sm:px-4 py-1 bg-zinc-300 text-zinc-500">{history.status}</p>
                        )}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorProfile;
