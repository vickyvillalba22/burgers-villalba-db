import DashboardOrderDetailContainer from "@/containers/DashboardOrderDetailContainer";

export default async function DashboardOrderDetailPage({ params }) {
  const { id } = await params;

  return (
    <main className="min-h-screen bg-slate-100 px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <DashboardOrderDetailContainer orderId={id} />
      </div>
    </main>
  );
}