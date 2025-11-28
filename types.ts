export type Language = 'en' | 'uz' | 'ru';

export interface ContentData {
  nav: {
    problem: string;
    process: string;
    team: string;
    whyUs: string;
    roadmap: string;
    how: string;
    cta: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  problemSolution: {
    title: string;
    problemTitle: string;
    problemDesc: string;
    problemPoints: string[];
    solutionTitle: string;
    solutionItems: string[];
  };
  processFlow: {
    title: string;
    steps: {
      title: string;
      desc: string;
      icon: string;
    }[];
  };
  team: {
    title: string;
    roleLabel: string;
    members: TeamMember[];
  };
  whyUs: {
    title: string;
    points: string[];
  };
  roadmap: {
    title: string;
    stages: RoadmapStage[];
  };
  methodology: {
    title: string;
    techStackTitle: string;
    techItems: { label: string; value: string }[];
  };
}

export interface TeamMember {
  name: string;
  role: string;
  skills: string[];
  links?: { label: string; url: string }[];
}

export interface RoadmapStage {
  phase: string;
  title: string;
  description: string;
}