import BackButton from "@/components/ui/BackButton";
import DashboardOrdersContainer from "@/containers/DashboardOrdersContainer";

export default function DashboardOrdersPage() {
  return (
    <main className="min-h-screen bg-slate-100 px-6 py-10">
      <div className="mx-auto max-w-6xl">

        <BackButton />

        <h1 className="text-4xl font-semibold">
          Órdenes
        </h1>

        <DashboardOrdersContainer />

      </div>
    </main>
  );
}