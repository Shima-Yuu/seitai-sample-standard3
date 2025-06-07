import React from "react";

const navItems = [
  { id: "top", label: "トップページ", href: "/" },
  { id: "menu", label: "症状別のお悩み", href: "/menu" },
  { id: "price", label: "料金表", href: "/menu#price" },
  { id: "access", label: "店舗情報・アクセス", href: "/#access" },
  { id: "news", label: "お知らせ", href: "/news" },
];

export default function AsideNav() {
  return (
    <aside className="hidden lg:block pt-0 lg:pt-0 py-12 sticky top-24 self-start">
    <nav className="border border-gray-200 rounded-lg overflow-hidden">
      <h2 className="text-lg font-bold p-4 color-accent-bg text-white">目次</h2>
      <ul className="divide-y divide-gray-100">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={item.href}
              className="block p-3 hover:bg-accent/5 transition-colors"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
    </aside>
  );
} 