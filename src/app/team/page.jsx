import TeamGallery from "@/components/TeamGallery";
import { constructMetadata } from "@/config/site";
import { team } from "@/data/team";

export const metadata = constructMetadata({
  title: "战队照片",
  description: "FEVER 战队照片展示",
});

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-ink">
      <TeamGallery images={team.photoGallery} fullscreen />
    </div>
  );
}
