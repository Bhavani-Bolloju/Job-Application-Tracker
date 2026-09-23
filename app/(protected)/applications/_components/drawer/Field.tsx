function Field({
  label,
  value
}: {
  label: string;
  value: string | null | undefined;
}) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-gray-500 text-xs uppercase tracking-wide">
        {label}
      </span>
      <span>{value ?? "—"}</span>
    </div>
  );
}

export default Field;
