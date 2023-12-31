import { ChangeEvent } from "react";
import { ActionMeta } from "react-select";
import { BarDatum } from "@nivo/bar";
import { QuestionOption } from "@/app/qna/qnaData";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  className?: string;
  onClick: () => void;
  newButtonColorClassName?: string;
  newHoverColorClassName?: string;
}

export interface LongButtonProps extends ButtonProps {
  example?: string;
}

export interface PaginationButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  mode: string;
  isGlow: boolean;
  onClick: () => void;
}

export interface SubjectiveProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onStateChange: (newState: string[], index: number) => void;
  className?: string;
  questionIndex: number;
  currentState: string[];
}

export interface SkillProps {
  questionIndex: number;
  onChange: (newState: string[], index: number) => void;
  currentState: string[];
}

export interface SkillSearchDropdownProps {
  placeholder?: string;
  options: { label: string; value: string }[];
  className?: string;
  onChange: (newValue: unknown, actionMeta: ActionMeta<unknown>) => void;
  value: SkillStack | null;
}

export interface BubbleProps {
  children: string;
  onCancelClick: () => void;
}

export interface SkillStack {
  label: string;
  value: string;
}

export enum ObjectiveTypes {
  singleChoice,
  multipleChoice,
}
export interface ObjectiveProps {
  type: ObjectiveTypes;
  options: QuestionOption[];
  questionIndex: number;
  onChange: (newState: string[], index: number) => void;
  currentState: string[];
}

export interface RecommendMetricsDatum {
  key: string;
  value: number;
}

export interface JDRecommendSummaryProps {
  recommendMetrics: RecommendMetricsDatum[];
  bestKeyword: string;
}

export interface JDRecommendCellProps {
  jdId: number;
  companyName: string;
  jdName: string;
  job: string;
  yearOfExperience: number;
  introduction: string;
  qualificationRequirements: string;
  welfare: string;
  preferentialTreatment: string;
  url: string;
  onClick: () => void;
}

export interface CurriCellProps {
  largeCategory: string;
  smallCategory: string;
  title: string;
  difficulty: string;
  requiredTime: string;
  introduction: string;
  language: string;
  url: string;
}

export interface OnboardingProps {
  imagePath: string;
  imageAlt: string;
  title: string;
  description: string;
}
