import ExpCard from "@/components/ExpCard";
export default function Experience() {
    return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        Experience
      </h1>
      <div className="grid gap-3 mt-4">
          <ExpCard
              title="Junior Programmer"
              company="Bicol University"
              date="Oct 2025 - Present"
              type="Contract"
              current={true}
          />
          {/* <ExpCard
              title="Tutor"
              company="CMB Review and Tutorial Center"
              date="Aug 2025 - Present"
              type="Part-Time"
              current={false}
          /> */}
          <ExpCard
              title="UI/UX Designer"
              company="Bicol University - University Student Council"
              date="Aug 2024 - Mar 2026"
              type="Contract"
              current={false}
          />
          <ExpCard
              title="UI/UX Designer"
              company="Quarta BU"
              date="July 2024 - Jun 2025"
              type="Contract"
              current={false}
          />
          <ExpCard
              title="UI/UX Designer"
              company="Bicol University ICT Office"
              date="Feb 2025 - May 2025"
              type="Internship"
              current={false}
          />
      </div>
    </div>
    );
}