import React from 'react';

export default function DashboardPage() {
  return (
    <section>
      <h1 className="text-2xl font-bold">Fresh Basket Admin Analytics</h1>
      <p className="mt-2 text-slate-600">Track sales, user growth, city performance, and top categories.</p>
      <div className="grid md:grid-cols-3 gap-4 mt-6">
        {['Revenue', 'Orders', 'Active Users'].map(metric => (
          <div key={metric} className="bg-white p-4 rounded-xl shadow">
            <h2 className="text-sm text-slate-500">{metric}</h2>
            <p className="text-xl font-semibold mt-1">Live KPI widget</p>
          </div>
        ))}
      </div>
    </section>
  );
}
