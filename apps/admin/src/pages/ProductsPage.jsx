import React from 'react';

export default function ProductsPage() {
  return (
    <section>
      <h1 className="text-2xl font-bold">Product Management</h1>
      <ul className="list-disc pl-5 mt-3 text-slate-700">
        <li>Add/edit/delete products</li>
        <li>Bulk CSV import pipeline</li>
        <li>Pricing and seasonal tagging rules</li>
      </ul>
    </section>
  );
}
