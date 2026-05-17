interface Props {
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionTitle({
  title,
  description,
  align = "left",
}: Props) {
  return (
    <div
      className={`
        mb-20
        ${align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}
      `}
    >
      <h2 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-2xl text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
}