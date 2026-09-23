import AdminQuestions from "@/components/AdminQuestions";

export const metadata = {
  title: "问题管理",
  robots: { index: false, follow: false },
};

export default function AdminQuestionsPage() {
  return <AdminQuestions />;
}
