type Props = {
  title: string;
  desc: string;
  icon?: React.ReactNode;
};

export default function FeatureCard({ title, desc, icon }: Props) {
  return (
    <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-2xl">
          {icon}
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{title}</h4>
          <p className="text-sm text-gray-600 mt-1">{desc}</p>
        </div>
      </div>
    </div>
  );
}
