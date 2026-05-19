import { Shield, BadgeCheck, UserCheck, Award } from "lucide-react";

const trustItems = [
  {
    icon: Shield,
    label: "HIPAA Compliant",
  },
  {
    icon: Award,
    label: "Licensed & Insured",
  },
  {
    icon: UserCheck,
    label: "Background Checked",
  },
  {
    icon: BadgeCheck,
    label: "Medicaid & Medicare",
  },
];

export default function HomepageTrustRibbon() {
  return (
    <section className="relative z-20 py-10 bg-white border-y border-slate-100" aria-label="Trust highlights">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-8 md:gap-12">
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-blue-600" aria-hidden="true" />
              </div>
              <span className="text-sm font-semibold text-slate-700 tracking-tight whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
