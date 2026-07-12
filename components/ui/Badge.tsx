export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-bg-subtle px-3 py-1.5 text-xs font-medium text-text-muted">
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        className="h-3.5 w-3.5 text-brand-600"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M16.704 5.29a1 1 0 0 1 0 1.415l-7.005 7.004a1 1 0 0 1-1.414 0l-3.005-3.004a1 1 0 1 1 1.415-1.415l2.297 2.297 6.297-6.297a1 1 0 0 1 1.415 0Z"
          clipRule="evenodd"
        />
      </svg>
      {children}
    </span>
  );
}
