export default function DocPreview({ title, embedUrl }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-stone-100 bg-white shadow-sm transition hover:shadow-md">
      <div className="aspect-[16/10] bg-stone-100">
        <iframe
          src={embedUrl}
          title={title}
          className="h-full w-full"
          frameBorder="0"
          allowFullScreen
          loading="lazy"
        />
      </div>
      <div className="px-5 py-4">
        <h3 className="text-sm font-semibold text-stone-800">{title}</h3>
      </div>
    </div>
  );
}
