export default function ErrorScreen({ message }: { message?: string }) {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#F6F6F4]">
      <div className="text-center px-8">
        <h1 className="font-athelas text-2xl text-[#402824] mb-4">
          Oops, Ada Kesalahan
        </h1>
        <p className="font-athelas text-sm text-[#5E5036]/70">
          {message || "Terjadi kesalahan saat memuat undangan"}
        </p>
      </div>
    </div>
  );
}