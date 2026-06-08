import PageMeta from "../../components/common/PageMeta";
import SchoolMetrics from "../../components/school/SchoolMetrics";
import AttendanceChart from "../../components/school/AttendanceChart";
import CompletenessProgress from "../../components/school/CompletenessProgress";

export default function Home() {
  return (
    <>
      <PageMeta
        title="Dashboard | SIMAK Admin Panel"
        description="This is the main dashboard for SIMAK Admin Panel"
      />
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 space-y-6">
          <SchoolMetrics />

          <CompletenessProgress />

          <AttendanceChart />
        </div>
      </div>
    </>
  );
}
