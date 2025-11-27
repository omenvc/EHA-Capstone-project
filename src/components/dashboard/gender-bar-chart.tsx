import { Users, Users2 } from "lucide-react";

export function GenderBarChart() {
  const malePercentage = 70;
  const femalePercentage = 30;
  const maleCount = 21;
  const femaleCount = 9;

  return (
    <div className="w-full h-1/2 flex items-center justify-center bg-white shadow rounded-lg p-4">
      <div className=" w-full h-full">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold text-sm">Sponsors by Gender</h3>
          <p className="text-xs text-muted-foreground">Total Sponsors</p>
        </div>

        <div className="flex flex-col gap-4 text-sm">
          {/* Male */}
          <div className="space-y-1">
            <div className="h-5 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-600 rounded-full transition-all"
                style={{ width: `${malePercentage}%` }}
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium bg-blue-100 text-blue-700 px-2 py-0.5 rounded">
                {malePercentage}
                %
              </span>
              <div className="flex items-center gap-1">
                <Users className="w-3 h-3 text-muted-foreground" />
                <span>Male</span>
              </div>
              <div className="ml-auto flex items-center gap-1 text-muted-foreground">
                <Users className="w-3 h-3" />
                <span>{maleCount}</span>
              </div>
            </div>
          </div>

          {/* Female */}
          <div className="space-y-1">
            <div className="h-5 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-pink-500 rounded-full transition-all"
                style={{ width: `${femalePercentage}%` }}
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium bg-pink-100 text-pink-700 px-2 py-0.5 rounded">
                {femalePercentage}
                %
              </span>
              <div className="flex items-center gap-1">
                <Users2 className="w-3 h-3 text-muted-foreground" />
                <span>Female</span>
              </div>
              <div className="ml-auto flex items-center gap-1 text-muted-foreground">
                <Users2 className="w-3 h-3" />
                <span>{femaleCount}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
