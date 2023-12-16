export const dynamic = "force-dynamic";
export const revalidate = 0;

export const runtime = "edge";

export default async function Page() {
  return (
    <main className="relative ml-20 h-screen w-full overflow-x-hidden overflow-y-scroll px-3 py-4 sm:px-6 sm:py-6">
        <div>page</div>
    </main>
  );
}
