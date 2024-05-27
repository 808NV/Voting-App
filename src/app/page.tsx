import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 grid">
      <MaxWidthWrapper className="relative pb-20 pt-10 sm:pb-32 lg:pt-24 xl:pt-32 lg:pb-52">
        <div>Hello</div>
      </MaxWidthWrapper>
    </div>
  );
}
