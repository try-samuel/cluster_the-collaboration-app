import { Skeleton } from "@/components/ui/skeleton";

export const Info = () => {
  return (
    <section className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md">
      TODO: Info about the board
    </section>
  );
};

Info.Skeleton = function InfoSkeleton() {
  return (
    <section className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md w-[300px]" />
  );
};