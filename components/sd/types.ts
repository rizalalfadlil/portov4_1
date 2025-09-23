export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  url?: string;
  category: "commissioned" | "personal" | "academic";
  sourceCode?: string;
}
export interface tagsType {
  [key: string]: React.ReactNode;
}