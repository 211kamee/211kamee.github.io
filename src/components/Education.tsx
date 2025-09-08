import { education } from "@/data/content";

// Utility functions
const getTypeIcon = (type: string) => {
	switch (type?.toLowerCase()) {
		case "graduation":
			return "🎓";
		case "high school":
			return "🎓";
		case "masters":
			return "🎓";
		default:
			return "🎓";
	}
};

const getTypeBadgeClass = (type: string) => {
	switch (type?.toLowerCase()) {
		case "graduation":
			return "bg-blue-500 text-white";
		case "high school":
			return "bg-green-500 text-white";
		case "masters":
			return "bg-purple-500 text-white";
		default:
			return "bg-gray-500 text-white";
	}
};

const getTypeLabel = (type: string) => {
	switch (type?.toLowerCase()) {
		case "graduation":
			return "Graduation";
		case "high school":
			return "Higher Education";
		case "masters":
			return "Masters";
		default:
			return "Education";
	}
};

// Sub-components
const SubjectPreview = ({ subjects, maxVisible = 4 }: { subjects: string[], maxVisible?: number }) => {
	const visibleSubjects = subjects.slice(0, maxVisible);
	const remainingCount = subjects.length - maxVisible;
	
	return (
		<div className="flex flex-wrap gap-2">
			{visibleSubjects.map((subject, idx) => (
				<span key={idx} className="text-xs px-3 py-1 rounded-full bg-background/20 text-foreground border border-foreground/10">
					{subject}
				</span>
			))}
			{remainingCount > 0 && (
				<span className="text-xs px-3 py-1 rounded-full bg-background/20 text-foreground border border-foreground/10">
					+{remainingCount} more
				</span>
			)}
		</div>
	);
};

const InstitutionLogo = ({ type }: { type: string }) => {
	const logoClass = type?.toLowerCase() === "graduation" 
		? "bg-white border-2 border-yellow-400" 
		: "bg-white border-2 border-blue-400";
	
	return (
		<div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full ${logoClass} flex items-center justify-center flex-shrink-0`}>
			<span className="text-lg sm:text-xl lg:text-2xl">🏛️</span>
		</div>
	);
};

const EducationCard = ({ education }: { education: any }) => {
	return (
		<div className="reveal-card">
			<div className="flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-6">
				{/* Left side - Logo and content */}
				<div className="flex gap-3 lg:gap-4 flex-1">
					<InstitutionLogo type={education.type} />
					<div className="flex-1">
						{/* Degree and Badge */}
						<div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
							<h3 className="text-lg sm:text-xl font-bold text-foreground">{education.degree}</h3>
							<span className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 w-fit ${getTypeBadgeClass(education.type || "graduation")}`}>
								<span>{getTypeIcon(education.type || "graduation")}</span>
								{getTypeLabel(education.type || "graduation")}
							</span>
						</div>
						
						{/* Institution */}
						<p className="text-sm text-muted-foreground mb-3">{education.institution}</p>
						
						{/* Subjects */}
						{education.subjects && (
							<SubjectPreview subjects={education.subjects} />
						)}
					</div>
				</div>
				
				{/* Right side - Dates, Location, GPA */}
				<div className="text-left lg:text-right">
					<div className="text-base lg:text-lg font-semibold text-foreground mb-1">{education.period}</div>
					{education.location && (
						<div className="text-sm text-muted-foreground mb-3">{education.location}</div>
					)}
					{education.gpa && (
						<div className={`px-3 py-1 rounded-full text-xs font-medium bg-orange-500 text-white flex items-center gap-1 justify-center lg:justify-center w-fit lg:w-auto`}>
							<span>🏆</span>
							{education.gpa.includes('%') ? `Percentage: ${education.gpa}` : `CGPA: ${education.gpa}`}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

const EducationHeader = () => (
	<div className="w-full max-w-6xl mb-8 lg:mb-12">
		<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 lg:mb-4">Education</h2>
		<p className="text-base lg:text-lg text-muted-foreground">
			My academic background showcasing continuous learning and specialization in computer science and operational research.
		</p>
	</div>
);

const EducationList = () => (
	<div className="w-full max-w-6xl space-y-6 lg:space-y-8">
		{education.map((education, index) => (
			<div key={education.institution + education.degree}>
				<EducationCard education={education} />
				{index < education.length - 1 && (
					<div className="w-full h-px bg-foreground/10 mt-6 lg:mt-8" />
				)}
			</div>
		))}
	</div>
);

export default function Education() {
	return (
		<section className="w-full min-h-lvh flex flex-col items-center gap-4 lg:gap-6 p-4 sm:p-6 bg-accent" id="education">
			<EducationHeader />
			<EducationList />
		</section>
	);
}