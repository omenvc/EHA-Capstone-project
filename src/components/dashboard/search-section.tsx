import { faker } from "@faker-js/faker";
import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type SearchItem = {
  name: string;
  role: string;
  detail: string;
  image: string;
  actionLabel: string;
};

// Generate 20 fake people
const people: SearchItem[] = Array.from({ length: 20 }, () => {
  const roleType = faker.helpers.arrayElement(["Nurse", "Patient", "Sponsor"]);
  let role = "";
  let detail = "";
  let actionLabel = "";

  if (roleType === "Nurse") {
    const patients = faker.number.int({ min: 1, max: 10 });
    role = `Nurse (${patients} Patients)`;
    detail = `${faker.number.int({ min: 5, max: 30 })} Encounters`;
    actionLabel = "View Nurse";
  }
  else if (roleType === "Patient") {
    role = "Patient";
    detail = `${faker.number.int({ min: 1, max: 12 })} Visits`;
    actionLabel = "View Patient";
  }
  else {
    const patients = faker.number.int({ min: 1, max: 5 });
    role = `Sponsor (${patients} Patients)`;
    detail = "";
    actionLabel = "View Sponsor";
  }

  return {
    name: faker.person.fullName(),
    role,
    detail,
    image: faker.image.avatar(),
    actionLabel,
  };
});

export function SearchSection() {
  return (
    <div className="bg-white p-4 rounded-lg shadow w-full min-h-[400px] max-h-[650px] lg:h-[650px] flex flex-col">
      <h3 className="font-medium text-[20px] p-2">
        Search for Nurses, Patients or Sponsors
      </h3>
      <div className="relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <Search className="h-4 w-4 text-muted-foreground" />
        </span>
        <Input placeholder="E.g. Fatou Jagne" className="pl-10" />
      </div>

      <div className="mt-4 space-y-5 overflow-y-auto flex-1 max-h-[520px] pr-2 pb-10">
        {people.map((person, index) => (
          <div
            key={`${person.name}-${index}`}
            className="flex items-center justify-between mt-2"
          >
            <div className="flex items-center space-x-3">
              <img
                src={person.image}
                alt={person.name}
                width={36}
                height={36}
                className="rounded-full"
              />
              <div>
                <p className="font-semibold text-sm text-[#09090B]">
                  {person.name}
                </p>
                <p className="text-xs text-muted-foreground text-[#71717A]">
                  {person.role}
                  {" "}
                  {person.detail && `· ${person.detail}`}
                </p>
              </div>
            </div>
            <Button
              variant="secondary"
              className="text-xs text-blue-600 bg-gray-50 w-[100px]"
            >
              {person.actionLabel}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
